// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./UserOperation.sol";
import "./SessionKeyManager.sol";

interface ISafe {
    /// @dev Allows a Module to execute a Safe transaction without any further confirmations.
    /// @param to Destination address of module transaction.
    /// @param value Ether value of module transaction.
    /// @param data Data payload of module transaction.
    /// @param operation Operation type of module transaction.
    function execTransactionFromModule(address to, uint256 value, bytes calldata data, uint8 operation)
        external
        returns (bool success);
}

contract Safe4337SessionKeyPlugin {
    address public immutable entryPoint;
    SessionKeyManager public immutable sessionKeyManager;

    constructor(address _entryPoint) {
        entryPoint = _entryPoint;
        sessionKeyManager = new SessionKeyManager(address(this));
    }

    function validateUserOp(UserOperation calldata userOp, bytes32 userOpHash, uint256 missingAccountFunds)
        external
        returns (uint256 validationData)
    {
        require(msg.sender == entryPoint, "only entry point");
        validationData = sessionKeyManager.validateUserOp(userOp, userOpHash);

        if (validationData != 0) {
            return validationData;
        }

        address payable safeAddress = payable(userOp.sender);
        ISafe senderSafe = ISafe(safeAddress);

        if (missingAccountFunds != 0) {
            senderSafe.execTransactionFromModule(entryPoint, missingAccountFunds, "", 0);
        }
    }

    function execTransaction(address safeAddress, address to, uint256 value, bytes calldata data) external payable {
        require(msg.sender == entryPoint, "only entry point");
        ISafe safe = ISafe(safeAddress);
        require(safe.execTransactionFromModule(to, value, data, 0), "tx failed");
    }

    function setMerkleRoot(bytes32 merkleRoot) external {
        sessionKeyManager.setMerkleRootSafe(msg.sender, merkleRoot);
    }
}
