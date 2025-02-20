export const TokenManagerHelper3ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "PANCAKE_FACTORY",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PANCAKE_V3_FACTORY",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "TM",
        "outputs": [
            {
                "internalType": "contract ITokenManager",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "TM2",
        "outputs": [
            {
                "internalType": "contract ITokenManager2",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "TOKEN_MANAGER",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "TOKEN_MANAGER_2",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "WETH",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "maxRaising",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalSupply",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "offers",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "reserves",
                "type": "uint256"
            }
        ],
        "name": "calcInitialPrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "getTokenInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "version",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "tokenManager",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "quote",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "lastPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tradingFeeRate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "minTradingFee",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "launchTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "offers",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxOffers",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "funds",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxFunds",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "liquidityAdded",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "funds",
                "type": "uint256"
            }
        ],
        "name": "tryBuy",
        "outputs": [
            {
                "internalType": "address",
                "name": "tokenManager",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "quote",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "estimatedAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "estimatedCost",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "estimatedFee",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountMsgValue",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountApproval",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountFunds",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "trySell",
        "outputs": [
            {
                "internalType": "address",
                "name": "tokenManager",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "quote",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "funds",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]