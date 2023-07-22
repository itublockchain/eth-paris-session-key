// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@account-abstraction/contracts/core/Helpers.sol";
import "./UserOperation.sol";

interface ISessionValidationModule {
    /**
     * @dev validates if the _op (UserOperation) matches the SessionKey permissions
     * and that _op has been signed by this SessionKey
     * @param _op User Operation to be validated.
     * @param _userOpHash Hash of the User Operation to be validated.
     * @param _sessionKeyData SessionKey data, that describes sessionKey permissions
     * @param _sessionKeySignature Signature over the the _userOpHash.
     * @return true if the _op is valid, false otherwise.
     */
    function validateSessionUserOp(
        UserOperation calldata _op,
        bytes32 _userOpHash,
        bytes calldata _sessionKeyData,
        bytes calldata _sessionKeySignature
    ) external view returns (bool);
}

struct SessionStorage {
    bytes32 merkleRoot;
}

contract SessionKeyManager {
    uint256 internal constant VALIDATION_SUCCESS = 0;
    uint256 internal constant SIG_VALIDATION_FAILED = 1;

    /**
     * @dev mapping of Smart Account to a SessionStorage
     * Info about session keys is stored as root of the merkle tree built over the session keys
     */
    mapping(address => SessionStorage) internal userSessions;
    address public immutable safeSessionModule;

    constructor(address _safeSessionModule) {
        safeSessionModule = _safeSessionModule;
    }

    /**
     * @dev returns the SessionStorage object for a given smartAccount
     * @param smartAccount Smart Account address
     */
    function getSessionKeys(address smartAccount) external view returns (SessionStorage memory) {
        return userSessions[smartAccount];
    }

    /**
     * @dev sets the merkle root of a tree containing session keys for msg.sender
     * should be called by Smart Account
     * @param _merkleRoot Merkle Root of a tree that contains session keys with their permissions and parameters
     */
    function setMerkleRoot(bytes32 _merkleRoot) external {
        userSessions[msg.sender].merkleRoot = _merkleRoot;
    }

    function setMerkleRootSafe(address _safe, bytes32 _merkleRoot) external {
        require(msg.sender == safeSessionModule, "only safe session module");
        userSessions[_safe].merkleRoot = _merkleRoot;
    }

    /**
     * @dev validates userOperation
     * @param userOp User Operation to be validated.
     * @param userOpHash Hash of the User Operation to be validated.
     * @return sigValidationResult 0 if signature is valid, SIG_VALIDATION_FAILED otherwise.
     */
    function validateUserOp(UserOperation calldata userOp, bytes32 userOpHash)
        external
        view
        virtual
        returns (uint256)
    {
        SessionStorage storage sessionKeyStorage = _getSessionData(msg.sender);
        (bytes memory moduleSignature,) = abi.decode(userOp.signature, (bytes, address));
        (
            uint48 validUntil,
            uint48 validAfter,
            address sessionValidationModule,
            bytes memory sessionKeyData,
            bytes32[] memory merkleProof,
            bytes memory sessionKeySignature
        ) = abi.decode(moduleSignature, (uint48, uint48, address, bytes, bytes32[], bytes));

        bytes32 leaf = keccak256(abi.encodePacked(validUntil, validAfter, sessionValidationModule, sessionKeyData));
        if (!MerkleProof.verify(merkleProof, sessionKeyStorage.merkleRoot, leaf)) {
            revert("SessionNotApproved");
        }
        return _packValidationData(
            //_packValidationData expects true if sig validation has failed, false otherwise
            !ISessionValidationModule(sessionValidationModule).validateSessionUserOp(
                userOp, userOpHash, sessionKeyData, sessionKeySignature
            ),
            validUntil,
            validAfter
        );
    }

    /**
     * @dev isValidSignature according to BaseAuthorizationModule
     * @param _dataHash Hash of the data to be validated.
     * @param _signature Signature over the the _dataHash.
     * @return always returns 0xffffffff as signing messages is not supported by SessionKeys
     */
    function isValidSignature(bytes32 _dataHash, bytes memory _signature) public pure returns (bytes4) {
        (_dataHash);
        (_signature);
        return 0xffffffff; // do not support it here
    }

    /**
     * @dev returns the SessionStorage object for a given smartAccount
     * @param _account Smart Account address
     * @return sessionKeyStorage SessionStorage object at storage
     */
    function _getSessionData(address _account) internal view returns (SessionStorage storage sessionKeyStorage) {
        sessionKeyStorage = userSessions[_account];
    }
}
