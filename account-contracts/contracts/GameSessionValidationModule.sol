// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

struct UserOperation {
    address sender;
    uint256 nonce;
    bytes initCode;
    bytes callData;
    uint256 callGasLimit;
    uint256 verificationGasLimit;
    uint256 preVerificationGas;
    uint256 maxFeePerGas;
    uint256 maxPriorityFeePerGas;
    bytes paymasterAndData;
    bytes signature;
}

contract GameSessionValidationModule {
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
    ) external view returns (bool) {
        address sessionKey = address(bytes20(_sessionKeyData[0:20]));
        address expectedGameContract = address(bytes20(_sessionKeyData[20:40]));
        (address actualGameContract, uint256 callValue,) = abi.decode(
            _op.callData[4:], // skip selector
            (address, uint256, bytes)
        );
        require(actualGameContract == expectedGameContract, "Wrong game address");
        require(callValue == 0, "Call value must be 0");
        return ECDSA.recover(ECDSA.toEthSignedMessageHash(_userOpHash), _sessionKeySignature) == sessionKey;
    }
}
