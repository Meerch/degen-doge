import {createWrapper} from 'next-redux-wrapper'
import {AppProps} from 'next/app'
import Head from 'next/head'
import {Provider} from 'react-redux'
import store from '../redux/store'
import 'normalize.css'
import '../styles/globals.scss'
import {WagmiConfig} from 'wagmi'
import {client} from '../config/configWagmi'

const makeStore = () => store
const wrapper = createWrapper(makeStore)

const App = ({Component, ...rest}: AppProps) => {
    const {store, props} = wrapper.useWrappedStore(rest)

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
                <Component {...props.pageProps} />
            </Provider>
        </WagmiConfig>
    </>
}

export default App