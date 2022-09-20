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