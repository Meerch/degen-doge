import {createWrapper} from 'next-redux-wrapper'
import {AppProps} from 'next/app'
import Head from 'next/head'
import 'normalize.css'
import {Provider} from 'react-redux'
import store from '../redux/store'
import '../styles/globals.scss'

function App({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <link rel="icon" type="image/ico" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/ico" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="shortcut icon" href="/favicon/favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
            <link rel="manifest" href="/favicon/site.webmanifest.json"/>

            <title>Degen Doge</title>
        </Head>
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    </>
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(App)