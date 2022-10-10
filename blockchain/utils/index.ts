import {Contract, ContractInterface, ethers, Signer} from "ethers"
import abiDoges from "../contracts/contractDoges"
import abiDC from "../contracts/contractDC"
import {
    isTestNet,
    bscUrl,
    chainId,
    testAddressContractDoges,
    productionAddressContractDoges,
    testAddressContractDC,
    productionAddressContractDC,
} from "../../config/configBlockchain"

export const addressDoges = isTestNet ? testAddressContractDoges : productionAddressContractDoges
export const addressDC = isTestNet ? testAddressContractDC : productionAddressContractDC

type TypeExternalProvider = any
type TypePropExternalProvider = TypeExternalProvider | null
type TypeContractInterface = ContractInterface
type TypeContract = Contract
type TypeProvider = any


// type MethodSelectOfReadConfig = { select: (value: any) => any }
// : UseContractReadConfig | MethodSelectOfReadConfig
export const generateContractDogesSetting = (methodName: string, additionalSettings?) => ({
    addressOrName: addressDoges,
    contractInterface: abiDoges,
    functionName: methodName,
    ...additionalSettings
})

export const generateContractDCSetting = (methodName: string, additionalSettings?) => ({
    addressOrName: addressDC,
    contractInterface: abiDC,
    functionName: methodName,
    ...additionalSettings
})

export type TypeWallet = {
    account: any;
    balance: string;
    chainId: number | undefined;
    connect: (connectorId: string) => Promise<void>;
    connector: string | null;
    connectors: object;
    error: Error | null;
    ethereum?: any;
    getBlockNumber?: () => number | null;
    isConnected: () => boolean;
    networkName: string | null;
    reset: () => void;
    status: any;
    type: any;
}

const createProvider = (provider: TypePropExternalProvider): TypeProvider => {
    return provider
        ? new ethers.providers.Web3Provider(provider)
        : new ethers.providers.JsonRpcProvider(bscUrl, chainId)
}

const createContract = (
    address: string,
    interfaceContract: TypeContractInterface,
    activeProvider: TypePropExternalProvider
): { contract: TypeContract, provider: TypeProvider } => {
    const provider = createProvider(activeProvider)
    const contract = new ethers.Contract(address, interfaceContract, provider)
    return {
        contract,
        provider
    }
}

const createSignerContract = (
    address: string,
    interfaceContract: TypeContractInterface,
    activeProvider: TypePropExternalProvider
): { signer: Signer, contract: TypeContract, signTransactions: TypeContract, provider: TypeProvider } => {
    const provider = createProvider(activeProvider)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(address, interfaceContract, signer)
    const signTransactions = contract.connect(signer)
    return {signer, contract, signTransactions, provider}
}


// export const checkWallet = async (wallet: TypeWallet) => {
//     const getConnectorId: boolean | string = storage("connectorId")
//     if (getConnectorId === "injected" || getConnectorId === "bsc" || getConnectorId === "walletconnect") {
//         await wallet.connect(getConnectorId)
//
//         await window.ethereum.request({
//             method: 'wallet_switchEthereumChain',
//             params: [{ chainId: `0x${chainId}` }], // chainId must be in hexadecimal numbers, 0x1 - ETH mainnet, 0x4 - Rinkeby testent
//         })
//         await wallet.connect(getConnectorId)
//     } else {
//         localStorage.removeItem("connectorId")
//     }
// }

export const isMintOpen = async () => {

}