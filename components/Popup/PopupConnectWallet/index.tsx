import React, {useEffect} from 'react'
import styles from './PopupConnectWallet.module.scss'
import PopupLayout from "../PopupLayout";
import Button from '../../UI/Button';
import {useDispatch} from "react-redux";
import {changeCurrentPopup} from "../../../redux/actions/popup";
import {useWallet} from "use-wallet";
import { bscChainId } from '../../../config/config';
import {useAccount, useConnect, useDisconnect, useEnsName} from "wagmi";
// import {InjectedConnector} from "@wagmi/core";
import { InjectedConnector } from 'wagmi/connectors/injected'

const PopupConnectWallet = () => {
    const dispatch = useDispatch()
    // const wallet = useWallet()

    // const connectWallet = async (method: 'injected' | 'walletconnect') => {
    //     try {
    //         await wallet.connect(method)
    //
    //         if (method === 'injected' && wallet.chainId !== bscChainId) {
    //             await window.ethereum.request({
    //                 method: 'wallet_switchEthereumChain',
    //                 params: [{chainId: `0x${bscChainId}`}], // chainId must be in hexadecimal numbers, 0x1 - ETH mainnet, 0x4 - Rinkeby testent
    //             })
    //             await wallet.connect(method)
    //         }
    //         // dispatch(changeCurrentPopup(null))
    //     } catch (e) {
    //         console.log('e', e.message)
    //     }
    // }
    //
    // useEffect(() => {
    //     console.log(wallet)
    // }, [wallet])

    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })

    const { address, isConnected } = useAccount()
    // const { data: ensName } = useEnsName({ address })

    const connectWallet = (method: 'injected' | 'walletconnect') => {
        connect()
    }

    // useEffect(() => {
    //     console.log('account', address)
    // }, [address])
    //
    // const { disconnect } = useDisconnect()

    return (
        <PopupLayout className={styles.popup}>
            <span className={styles.title}>connect wallet</span>
            <span className={styles.title}>{address}</span>

            <Button onClick={() => connectWallet('injected')} className={styles.button}>
                <span className={styles.text}>connect with dogewallet</span>
            </Button>

            {/*<button onClick={() => disconnect()}>Disconnect</button>*/}
        </PopupLayout>
    )
}

export default PopupConnectWallet
