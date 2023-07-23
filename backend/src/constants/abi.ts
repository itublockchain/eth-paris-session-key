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
export const ABI = {
    factory: [
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'gameAddress',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'uint256',
                    name: 'gameId',
                    type: 'uint256',
                },
            ],
            name: 'GameCreated',
            type: 'event',
        },
        {
            inputs: [],
            name: 'createNewGame',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            name: 'games',
            outputs: [
                {
                    internalType: 'contract CardGame',
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
                    internalType: 'uint256',
                    name: 'index',
                    type: 'uint256',
                },
            ],
            name: 'getGameAddress',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getLastGameAddress',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getNumberOfGames',
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
    ],
    cardGame: [
        {
            inputs: [],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'attacker',
                    type: 'address',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'defender',
                    type: 'address',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'attackerCardId',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'defenderCardId',
                    type: 'uint256',
                },
                {
                    indexed: false,
                    internalType: 'uint256',
                    name: 'damage',
                    type: 'uint256',
                },
            ],
            name: 'Attack',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'uint256',
                    name: 'cardId',
                    type: 'uint256',
                },
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'player',
                    type: 'address',
                },
            ],
            name: 'CardChosen',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: 'address',
                    name: 'winner',
                    type: 'address',
                },
            ],
            name: 'GameOvered',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [],
            name: 'GameStarted',
            type: 'event',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: 'attackerId',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'defenderId',
                    type: 'uint256',
                },
                {
                    internalType: 'address',
                    name: 'attacker',
                    type: 'address',
                },
            ],
            name: 'attack',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            name: 'cards',
            outputs: [
                {
                    internalType: 'uint256',
                    name: 'id',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'power',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'health',
                    type: 'uint256',
                },
                {
                    internalType: 'bool',
                    name: 'isAlive',
                    type: 'bool',
                },
                {
                    internalType: 'bool',
                    name: 'isTaken',
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
                    name: 'player',
                    type: 'address',
                },
            ],
            name: 'enter',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'gameOver',
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
            inputs: [],
            name: 'gameStatus',
            outputs: [
                {
                    internalType: 'enum CardGame.GameStatus',
                    name: '',
                    type: 'uint8',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'isGameOver',
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
            inputs: [],
            name: 'user1Address',
            outputs: [
                {
                    internalType: 'address',
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
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            name: 'user1Cards',
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
            inputs: [],
            name: 'user1IsEntered',
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
            inputs: [],
            name: 'user2Address',
            outputs: [
                {
                    internalType: 'address',
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
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            name: 'user2Cards',
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
            inputs: [],
            name: 'user2IsEntered',
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
            inputs: [],
            name: 'whoseTurn',
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
    ],
};
