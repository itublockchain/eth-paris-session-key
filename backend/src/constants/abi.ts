export const SealAbi = {
    abi: [
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '_entryPointAddress',
                    type: 'address',
                },
                {
                    internalType: 'bytes',
                    name: 'initialValidQ',
                    type: 'bytes',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            inputs: [
                {
                    internalType: 'bytes',
                    name: 'Q',
                    type: 'bytes',
                },
                {
                    internalType: 'bool',
                    name: 'valid',
                    type: 'bool',
                },
            ],
            name: 'authenticateQ',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'entryPoint',
            outputs: [
                {
                    internalType: 'contract IEntryPoint',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'dest',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: 'value',
                    type: 'uint256',
                },
                {
                    internalType: 'bytes',
                    name: 'func',
                    type: 'bytes',
                },
            ],
            name: 'execute',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address[]',
                    name: 'dest',
                    type: 'address[]',
                },
                {
                    internalType: 'bytes[]',
                    name: 'func',
                    type: 'bytes[]',
                },
            ],
            name: 'executeBatch',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getNonce',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
                {
                    internalType: 'uint256[]',
                    name: '',
                    type: 'uint256[]',
                },
                {
                    internalType: 'uint256[]',
                    name: '',
                    type: 'uint256[]',
                },
                {
                    internalType: 'bytes',
                    name: '',
                    type: 'bytes',
                },
            ],
            name: 'onERC1155BatchReceived',
            outputs: [
                {
                    internalType: 'bytes4',
                    name: '',
                    type: 'bytes4',
                },
            ],
            stateMutability: 'pure',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
                {
                    internalType: 'bytes',
                    name: '',
                    type: 'bytes',
                },
            ],
            name: 'onERC1155Received',
            outputs: [
                {
                    internalType: 'bytes4',
                    name: '',
                    type: 'bytes4',
                },
            ],
            stateMutability: 'pure',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
                {
                    internalType: 'bytes',
                    name: '',
                    type: 'bytes',
                },
            ],
            name: 'onERC721Received',
            outputs: [
                {
                    internalType: 'bytes4',
                    name: '',
                    type: 'bytes4',
                },
            ],
            stateMutability: 'pure',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes4',
                    name: 'interfaceId',
                    type: 'bytes4',
                },
            ],
            name: 'supportsInterface',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
                {
                    internalType: 'bytes',
                    name: '',
                    type: 'bytes',
                },
                {
                    internalType: 'bytes',
                    name: '',
                    type: 'bytes',
                },
            ],
            name: 'tokensReceived',
            outputs: [],
            stateMutability: 'pure',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes',
                    name: '',
                    type: 'bytes',
                },
            ],
            name: 'validQs',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    components: [
                        {
                            internalType: 'address',
                            name: 'sender',
                            type: 'address',
                        },
                        {
                            internalType: 'uint256',
                            name: 'nonce',
                            type: 'uint256',
                        },
                        {
                            internalType: 'bytes',
                            name: 'initCode',
                            type: 'bytes',
                        },
                        {
                            internalType: 'bytes',
                            name: 'callData',
                            type: 'bytes',
                        },
                        {
                            internalType: 'uint256',
                            name: 'callGasLimit',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'verificationGasLimit',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'preVerificationGas',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'maxFeePerGas',
                            type: 'uint256',
                        },
                        {
                            internalType: 'uint256',
                            name: 'maxPriorityFeePerGas',
                            type: 'uint256',
                        },
                        {
                            internalType: 'bytes',
                            name: 'paymasterAndData',
                            type: 'bytes',
                        },
                        {
                            internalType: 'bytes',
                            name: 'signature',
                            type: 'bytes',
                        },
                    ],
                    internalType: 'struct UserOperation',
                    name: 'userOp',
                    type: 'tuple',
                },
                {
                    internalType: 'bytes32',
                    name: 'userOpHash',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint256',
                    name: 'missingAccountFunds',
                    type: 'uint256',
                },
            ],
            name: 'validateUserOp',
            outputs: [
                {
                    internalType: 'uint256',
                    name: 'validationData',
                    type: 'uint256',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            stateMutability: 'payable',
            type: 'receive',
        },
    ],
};
