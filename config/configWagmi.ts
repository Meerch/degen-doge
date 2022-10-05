import {configureChains, createClient} from "wagmi";
import {avalancheChain, rpcEndpoints} from "./configBlockchain";
import {jsonRpcProvider} from "wagmi/providers/jsonRpc";
import {InjectedConnector} from "wagmi/connectors/injected";
import {WalletConnectConnector} from "wagmi/connectors/walletConnect";

export const {chains, provider, webSocketProvider} = configureChains(
    [avalancheChain],
    [jsonRpcProvider({
        rpc: (chain) => (
            {http: chain.network}
        )
    })],
)

export const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
    connectors: [
        new InjectedConnector({chains}),
        new WalletConnectConnector({
            chains,
            options: {
                qrcode: true,
                rpc: {
                    1: rpcEndpoints
                }
            },
        }),
    ],
})