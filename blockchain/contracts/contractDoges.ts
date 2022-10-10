const abi = [{
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [{"type": "address", "name": "_dcTokenAddress", "internalType": "address"}]
}, {"type": "error", "name": "ApprovalCallerNotOwnerNorApproved", "inputs": []}, {
    "type": "error",
    "name": "ApprovalQueryForNonexistentToken",
    "inputs": []
}, {"type": "error", "name": "BalanceQueryForZeroAddress", "inputs": []}, {
    "type": "error",
    "name": "InvalidQueryRange",
    "inputs": []
}, {"type": "error", "name": "MintERC2309QuantityExceedsLimit", "inputs": []}, {
    "type": "error",
    "name": "MintToZeroAddress",
    "inputs": []
}, {"type": "error", "name": "MintZeroQuantity", "inputs": []}, {
    "type": "error",
    "name": "OwnerQueryForNonexistentToken",
    "inputs": []
}, {"type": "error", "name": "OwnershipNotInitializedForExtraData", "inputs": []}, {
    "type": "error",
    "name": "TransferCallerNotOwnerNorApproved",
    "inputs": []
}, {"type": "error", "name": "TransferFromIncorrectOwner", "inputs": []}, {
    "type": "error",
    "name": "TransferToNonERC721ReceiverImplementer",
    "inputs": []
}, {"type": "error", "name": "TransferToZeroAddress", "inputs": []}, {
    "type": "error",
    "name": "URIQueryForNonexistentToken",
    "inputs": []
}, {
    "type": "event",
    "name": "Approval",
    "inputs": [{"type": "address", "name": "owner", "internalType": "address", "indexed": true}, {
        "type": "address",
        "name": "approved",
        "internalType": "address",
        "indexed": true
    }, {"type": "uint256", "name": "tokenId", "internalType": "uint256", "indexed": true}],
    "anonymous": false
}, {
    "type": "event",
    "name": "ApprovalForAll",
    "inputs": [{"type": "address", "name": "owner", "internalType": "address", "indexed": true}, {
        "type": "address",
        "name": "operator",
        "internalType": "address",
        "indexed": true
    }, {"type": "bool", "name": "approved", "internalType": "bool", "indexed": false}],
    "anonymous": false
}, {
    "type": "event",
    "name": "ConsecutiveTransfer",
    "inputs": [{
        "type": "uint256",
        "name": "fromTokenId",
        "internalType": "uint256",
        "indexed": true
    }, {"type": "uint256", "name": "toTokenId", "internalType": "uint256", "indexed": false}, {
        "type": "address",
        "name": "from",
        "internalType": "address",
        "indexed": true
    }, {"type": "address", "name": "to", "internalType": "address", "indexed": true}],
    "anonymous": false
}, {
    "type": "event",
    "name": "NewDoge",
    "inputs": [{
        "type": "address",
        "name": "DogeOwner",
        "internalType": "address",
        "indexed": false
    }, {"type": "uint256", "name": "amount", "internalType": "uint256", "indexed": false}],
    "anonymous": false
}, {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [{
        "type": "address",
        "name": "previousOwner",
        "internalType": "address",
        "indexed": true
    }, {"type": "address", "name": "newOwner", "internalType": "address", "indexed": true}],
    "anonymous": false
}, {
    "type": "event",
    "name": "RevealMetadata",
    "inputs": [{"type": "bool", "name": "status", "internalType": "bool", "indexed": false}, {
        "type": "uint256",
        "name": "time",
        "internalType": "uint256",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "Transfer",
    "inputs": [{"type": "address", "name": "from", "internalType": "address", "indexed": true}, {
        "type": "address",
        "name": "to",
        "internalType": "address",
        "indexed": true
    }, {"type": "uint256", "name": "tokenId", "internalType": "uint256", "indexed": true}],
    "anonymous": false
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "uint256", "name": "", "internalType": "uint256"}],
    "name": "COLLECTION_SIZE",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "address", "name": "", "internalType": "address"}],
    "name": "DC_Token",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "Reveal",
    "inputs": [{"type": "string", "name": "_collectionURI", "internalType": "string"}]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "addLuckyBastards",
    "inputs": [{"type": "address[]", "name": "users", "internalType": "address[]"}]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "approve",
    "inputs": [{"type": "address", "name": "to", "internalType": "address"}, {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "uint256", "name": "", "internalType": "uint256"}],
    "name": "balanceOf",
    "inputs": [{"type": "address", "name": "owner", "internalType": "address"}]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "bool", "name": "", "internalType": "bool"}],
    "name": "canClaim",
    "inputs": [{"type": "address", "name": "user", "internalType": "address"}]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "changeDogePrice",
    "inputs": [{"type": "uint256", "name": "newDogePriceInWei", "internalType": "uint256"}]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "changeRevialURI",
    "inputs": [{"type": "string", "name": "_newURI", "internalType": "string"}]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "changeTime",
    "inputs": [{"type": "uint256", "name": "newSaleTime", "internalType": "uint256"}]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "changeTokenAddress",
    "inputs": [{"type": "address", "name": "newTokenAddress", "internalType": "address"}]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "changeTokenPrice",
    "inputs": [{"type": "uint256", "name": "newTokenPriceInWei", "internalType": "uint256"}]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "claimMyNft",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "uint256", "name": "", "internalType": "uint256"}],
    "name": "dogePrice",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "tuple",
        "name": "",
        "internalType": "struct IERC721A.TokenOwnership",
        "components": [{"type": "address", "name": "addr", "internalType": "address"}, {
            "type": "uint64",
            "name": "startTimestamp",
            "internalType": "uint64"
        }, {"type": "bool", "name": "burned", "internalType": "bool"}, {
            "type": "uint24",
            "name": "extraData",
            "internalType": "uint24"
        }]
    }],
    "name": "explicitOwnershipOf",
    "inputs": [{"type": "uint256", "name": "tokenId", "internalType": "uint256"}]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "tuple[]",
        "name": "",
        "internalType": "struct IERC721A.TokenOwnership[]",
        "components": [{"type": "address", "name": "addr", "internalType": "address"}, {
            "type": "uint64",
            "name": "startTimestamp",
            "internalType": "uint64"
        }, {"type": "bool", "name": "burned", "internalType": "bool"}, {
            "type": "uint24",
            "name": "extraData",
            "internalType": "uint24"
        }]
    }],
    "name": "explicitOwnershipsOf",
    "inputs": [{"type": "uint256[]", "name": "tokenIds", "internalType": "uint256[]"}]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "flipSaleStatus",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "uint256", "name": "", "internalType": "uint256"}],
    "name": "freeSupply",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "address", "name": "", "internalType": "address"}],
    "name": "getApproved",
    "inputs": [{"type": "uint256", "name": "tokenId", "internalType": "uint256"}]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "uint256", "name": "", "internalType": "uint256"}],
    "name": "getPriceInDC",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "uint256", "name": "", "internalType": "uint256"}],
    "name": "getPriceInDoge",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "uint256", "name": "", "internalType": "uint256"}],
    "name": "getSaleTime",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "bool", "name": "", "internalType": "bool"}],
    "name": "isApprovedForAll",
    "inputs": [{"type": "address", "name": "owner", "internalType": "address"}, {
        "type": "address",
        "name": "operator",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "bool", "name": "", "internalType": "bool"}],
    "name": "isMintOpen",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "uint256", "name": "", "internalType": "uint256"}],
    "name": "limit",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "bool", "name": "canClaim", "internalType": "bool"}, {
        "type": "bool",
        "name": "claimed",
        "internalType": "bool"
    }],
    "name": "luckyBastards",
    "inputs": [{"type": "address", "name": "", "internalType": "address"}]
}, {
    "type": "function",
    "stateMutability": "payable",
    "outputs": [],
    "name": "mintNft",
    "inputs": [{"type": "uint256", "name": "amount", "internalType": "uint256"}, {
        "type": "bool",
        "name": "payInDC",
        "internalType": "bool"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "bool", "name": "", "internalType": "bool"}],
    "name": "mintStatus",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "string", "name": "", "internalType": "string"}],
    "name": "name",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "address", "name": "", "internalType": "address"}],
    "name": "owner",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "ownerMint",
    "inputs": [{"type": "uint256", "name": "amount", "internalType": "uint256"}, {
        "type": "address",
        "name": "promoWallet",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "address", "name": "", "internalType": "address"}],
    "name": "ownerOf",
    "inputs": [{"type": "uint256", "name": "tokenId", "internalType": "uint256"}]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "releaseUnclaimedNft",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "uint256", "name": "", "internalType": "uint256"}],
    "name": "remainToMint",
    "inputs": [{"type": "address", "name": "user", "internalType": "address"}]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "renounceOwnership",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "safeTransferFrom",
    "inputs": [{"type": "address", "name": "from", "internalType": "address"}, {
        "type": "address",
        "name": "to",
        "internalType": "address"
    }, {"type": "uint256", "name": "tokenId", "internalType": "uint256"}]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "safeTransferFrom",
    "inputs": [{"type": "address", "name": "from", "internalType": "address"}, {
        "type": "address",
        "name": "to",
        "internalType": "address"
    }, {"type": "uint256", "name": "tokenId", "internalType": "uint256"}, {
        "type": "bytes",
        "name": "_data",
        "internalType": "bytes"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "uint256", "name": "", "internalType": "uint256"}],
    "name": "saleTime",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setApprovalForAll",
    "inputs": [{"type": "address", "name": "operator", "internalType": "address"}, {
        "type": "bool",
        "name": "approved",
        "internalType": "bool"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setCollectionURI",
    "inputs": [{"type": "string", "name": "_newURI", "internalType": "string"}]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "bool", "name": "", "internalType": "bool"}],
    "name": "supportsInterface",
    "inputs": [{"type": "bytes4", "name": "interfaceId", "internalType": "bytes4"}]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "string", "name": "", "internalType": "string"}],
    "name": "symbol",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "uint256", "name": "", "internalType": "uint256"}],
    "name": "tax",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "uint256", "name": "", "internalType": "uint256"}],
    "name": "tokenPrice",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "string", "name": "", "internalType": "string"}],
    "name": "tokenURI",
    "inputs": [{"type": "uint256", "name": "tokenId", "internalType": "uint256"}]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "uint256[]", "name": "", "internalType": "uint256[]"}],
    "name": "tokensOfOwner",
    "inputs": [{"type": "address", "name": "owner", "internalType": "address"}]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "uint256[]", "name": "", "internalType": "uint256[]"}],
    "name": "tokensOfOwnerIn",
    "inputs": [{"type": "address", "name": "owner", "internalType": "address"}, {
        "type": "uint256",
        "name": "start",
        "internalType": "uint256"
    }, {"type": "uint256", "name": "stop", "internalType": "uint256"}]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "uint256", "name": "", "internalType": "uint256"}],
    "name": "totalLuckyBastards",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{"type": "uint256", "name": "", "internalType": "uint256"}],
    "name": "totalSupply",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "transferFrom",
    "inputs": [{"type": "address", "name": "from", "internalType": "address"}, {
        "type": "address",
        "name": "to",
        "internalType": "address"
    }, {"type": "uint256", "name": "tokenId", "internalType": "uint256"}]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "transferOwnership",
    "inputs": [{"type": "address", "name": "newOwner", "internalType": "address"}]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "withdrawERC20",
    "inputs": [{"type": "address", "name": "tokenAddress", "internalType": "address"}]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "withdrawETH",
    "inputs": []
}, {"type": "receive", "stateMutability": "payable"}]

export default abi