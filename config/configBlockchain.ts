import {Chain} from "wagmi";

export const isTestNet = true

export const bscUrl = isTestNet
    ? "https://eth-rinkeby.alchemyapi.io/v2/Yf7WKZf5BwwqpnWuqWa7HzjNM95A0y2q"
    : "https://api.mycryptoapi.com/eth"

export const chainId = isTestNet ? 568 : 2000

export const rpcEndpoints = isTestNet
    ? "https://rpc-testnet.dogechain.dog/"
    : "https://rpc01-sg.dogechain.dog"

export const urlExplorer = isTestNet
    ? 'https://explorer-testnet.dogechain.dog/'
    : 'https://explorer.dogechain.dog'

export const address = "0x82854a49884528f454C9D2cbC29Fa84B4FD28d8d"
export const productionAddress = "0x7a676fAA309A94b5Ea24d90518146B30253b3753"

export const avalancheChain: Chain = {
    id: chainId,
    name: 'DogeChain',
    network: rpcEndpoints,
    nativeCurrency: {
        decimals: chainId,
        name: 'DogeChain',
        symbol: 'wDOGE',
    },
    rpcUrls: {
        default: rpcEndpoints,
    },
    blockExplorers: {
        default: {name: 'DogeChain', url: urlExplorer},
    },
    testnet: isTestNet,
}