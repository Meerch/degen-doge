import React, {useEffect} from 'react'
import styles from './PopupConnectWallet.module.scss'
import PopupLayout from "../PopupLayout";
import Button from '../../UI/Button';
import {useDispatch} from "react-redux";
import {changeCurrentPopup} from "../../../redux/actions/popup";
import {useAccount, useConnect} from "wagmi";

const PopupConnectWallet = () => {
    const dispatch = useDispatch()
    const { connect, connectors } = useConnect()

    const { address, isConnected } = useAccount()

    useEffect(() => {
        if (isConnected) {
            dispatch(changeCurrentPopup(null))
        }
    }, [isConnected])

    // const onConnectWallet = (connector) => {
    //     if (method === 'injected' && wallet.chainId !== bscChainId) {
    //                     await window.ethereum.request({
    //                         method: 'wallet_switchEthereumChain',
    //                         params: [{chainId: `0x${bscChainId}`}], // chainId must be in hexadecimal numbers, 0x1 - ETH mainnet, 0x4 - Rinkeby testent
    //                     })
    //                     await wallet.connect(method)
    //                 }
    // }

    return (
        <PopupLayout className={styles.popup}>
            <span className={styles.title}>Connect wallet</span>
            {/*<span className={styles.title}>{address}</span>*/}

            <div className={styles.buttons}>
                {
                    connectors && connectors.map(connector => (
                        <Button
                            key={connector.id}
                            onClick={() => connect({connector})}
                            className={styles.button}>
                            {/*<span className={styles.text}>connect with dogewallet</span>*/}
                            <span className={styles.text}>connect with {connector.name}</span>
                        </Button>
                    ))
                }
            </div>
            {/*<button onClick={() => disconnect()}>Disconnect</button>*/}
        </PopupLayout>
    )
}

export default PopupConnectWallet
