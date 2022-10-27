import {createWrapper} from 'next-redux-wrapper'
import {AppProps} from 'next/app'
import Head from 'next/head'
import {Provider} from 'react-redux'
import store from '../redux/store'
import 'normalize.css'
import '../styles/globals.scss'
import 'swiper/css';

const makeStore = () => store
const wrapper = createWrapper(makeStore)

import {
    HippoExtensionWalletAdapter,
    MartianWalletAdapter,
    AptosWalletAdapter,
    FewchaWalletAdapter,
    WalletProvider,
    PontemWalletAdapter,
    SpikaWalletAdapter,
    FletchWalletAdapter,
    AptosSnapAdapter,
    NightlyWalletAdapter,
    BitkeepWalletAdapter,
    TokenPocketWalletAdapter,
    BloctoWalletAdapter,
    WalletAdapterNetwork,
    Coin98WalletAdapter,
    RiseWalletAdapter
} from '@manahippo/aptos-wallet-adapter';
import {useMemo} from "react";

const App = ({Component, ...rest}: AppProps) => {
    const {store, props} = wrapper.useWrappedStore(rest)
    const wallets = useMemo(
        () => [
            // new HippoWalletAdapter(),
            // new HippoExtensionWalletAdapter(),
            new MartianWalletAdapter(),
            new PontemWalletAdapter(),
            new FewchaWalletAdapter(),
            new RiseWalletAdapter(),
            new AptosWalletAdapter()
            // new SpikaWalletAdapter(),
            // new FletchWalletAdapter(),
            // new AptosSnapAdapter(),
            // new NightlyWalletAdapter(),
            // new BitkeepWalletAdapter(),
            // new TokenPocketWalletAdapter(),
            // new BloctoWalletAdapter({ network:WalletAdapterNetwork.Testnet }),
            // new Coin98WalletAdapter()
        ],
        []
    );

    return <>
        <Head>
            <link rel="icon" type="image/ico" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/ico" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="shortcut icon" href="/favicon/favicon.ico"/>
            {/*<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>*/}
            {/*<link rel="manifest" href="/favicon/site.webmanifest.json"/>*/}

            <title>Degen Doge</title>
        </Head>
        <Provider store={store}>
            <WalletProvider
                autoConnect={true}
                wallets={wallets}
                onError={(error: Error) => {
                    console.log('wallet errors: ', error);
                }}>
            <Component {...props.pageProps} />
            </WalletProvider>
        </Provider>
    </>
}

export default App