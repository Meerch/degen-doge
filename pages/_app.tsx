// import {createWrapper} from 'next-redux-wrapper'
// import {AppProps} from 'next/app'
// import Head from 'next/head'
// import {Provider} from 'react-redux'
// import store from '../redux/store'
// import 'normalize.css'
// import '../styles/globals.scss'
// import {UseWalletProvider} from "use-wallet";
// import {bscChainId, useWalletUrl} from '../config/config'
//
// function App({Component, pageProps}: AppProps) {
//     return <>
//         <Head>
//             <link rel="icon" type="image/ico" sizes="32x32" href="/favicon/favicon-32x32.png"/>
//             <link rel="icon" type="image/ico" sizes="16x16" href="/favicon/favicon-16x16.png"/>
//             <link rel="shortcut icon" href="/favicon/favicon.ico"/>
//             {/*<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>*/}
//             {/*<link rel="manifest" href="/favicon/site.webmanifest.json"/>*/}
//
//             <title>Degen Doge</title>
//         </Head>
//         <UseWalletProvider
//             // connectors={{
//             //     injected: {
//             //         rpc: {
//             //             2000: "https://rpc01-sg.dogechain.dog"
//             //         }
//             //     }
//             // }}
//             connectors={{
//                 walletconnect: {
//                     rpc: {
//                         [bscChainId]: useWalletUrl,
//                     },
//                 },
//                 injected: {
//                     chainId: [bscChainId],
//                 }
//             }}
//             autoConnect={false}
//             pollBalanceInterval={2000}
//             pollBlockNumberInterval={5000}
//         >
//             <Provider store={store}>
//                 <Component {...pageProps} />
//             </Provider>
//         </UseWalletProvider>
//     </>
// }
//
// const makeStore = () => store
// const wrapper = createWrapper(makeStore)
//
// export default wrapper.withRedux(App)

import {createWrapper} from 'next-redux-wrapper'
import {AppProps} from 'next/app'
import Head from 'next/head'
import {Provider} from 'react-redux'
import store from '../redux/store'
import 'normalize.css'
import '../styles/globals.scss'
import {UseWalletProvider} from "use-wallet";
import {bscChainId, useWalletUrl} from '../config/config'
import {configureChains, chain, Chain, createClient, WagmiConfig} from 'wagmi'
import {publicProvider} from 'wagmi/providers/public'

const avalancheChain: Chain = {
    id: 2000,
    name: 'DogeChain',
    network: 'https://rpc01-sg.dogechain.dog',
    nativeCurrency: {
        decimals: 2000,
        name: 'DogeChain',
        symbol: 'wDOGE',
    },
    rpcUrls: {
        default: 'https://rpc01-sg.dogechain.dog',
    },
    blockExplorers: {
        default: {name: 'DogeChain', url: 'https://explorer.dogechain.dog'},
    },
    testnet: true,
}

const {chains, provider, webSocketProvider} = configureChains(
    [avalancheChain],
    [publicProvider()],
)

const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
})

function App({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <link rel="icon" type="image/ico" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/ico" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="shortcut icon" href="/favicon/favicon.ico"/>
            {/*<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>*/}
            {/*<link rel="manifest" href="/favicon/site.webmanifest.json"/>*/}

            <title>Degen Doge</title>
        </Head>
        <WagmiConfig client={client}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </WagmiConfig>
    </>
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(App)