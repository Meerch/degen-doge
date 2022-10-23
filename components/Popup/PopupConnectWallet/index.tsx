import React, {useEffect, useState} from 'react'
import styles from './PopupConnectWallet.module.scss'
import PopupLayout from "../PopupLayout";
import Button from '../../UI/Button';
import {useDispatch} from "react-redux";
import {changeCurrentPopup} from "../../../redux/actions/popup";
import {useAccount, useConnect, useDisconnect, useNetwork, useSwitchNetwork} from "wagmi";
import {chainId} from "../../../config/configBlockchain";
import {useWallet} from "@manahippo/aptos-wallet-adapter";

const PopupConnectWallet = () => {
    const dispatch = useDispatch()
    // const {connect, connectors} = useConnect()
    // const {address, connector, isConnected} = useAccount()
    // const {chain} = useNetwork()
    // const {chains, error, isLoading, pendingChainId, switchNetwork} =
    //     useSwitchNetwork({chainId})
    // const {disconnect} = useDisconnect()
    const [prevSelector, setPrevSelector] = useState(null)
    const {
        autoConnect,
        connect,
        disconnect,
        account,
        wallets,
        signAndSubmitTransaction,
        connecting,
        connected,
        disconnecting,
        wallet: currentWallet,
        signMessage,
        signTransaction
    } = useWallet();

    useEffect(() => {
        if (connected) {
            dispatch(changeCurrentPopup(null))
        }
    }, [connected])

    // useEffect(() => {
    //     console.log('connector', connector)
    //     console.log('chain', chain)
    //     console.log('chains', chains)
    // }, [connector, chain])


    // const onConnectWallet = (connector) => {
    //     connect({connector, chainId})
    // }

    return (
        <PopupLayout className={styles.popup}>
            <span className={styles.title}>Connect wallet</span>
            {/*<span className={styles.title}>{address}</span>*/}

            <div className={styles.buttons}>
                {
                    wallets.map((wallet) => {
                        const option = wallet.adapter;
                        return (
                            <Button
                                className={styles.button}
                                onClick={() => {
                                    void connect(option.name);
                                }}
                                id={option.name.split(' ').join('_')}
                                key={option.name}
                            >
                                <span className={styles.text}>connect with {option.name}</span>
                            </Button>
                        )
                    })
                }
                {/*{*/}
                {/*    connectors && connectors.map(connector => (*/}
                {/*        <Button*/}
                {/*            key={connector.id}*/}
                {/*            onClick={() => onConnectWallet(connector)}*/}
                {/*            className={styles.button}>*/}
                {/*            /!*<span className={styles.text}>connect with dogewallet</span>*!/*/}
                {/*            <span className={styles.text}>connect with {connector.name}</span>*/}
                {/*        </Button>*/}
                {/*    ))*/}
                {/*}*/}
            </div>
            {/*<button onClick={() => disconnect()}>Disconnect</button>*/}
        </PopupLayout>
    )
}

export default PopupConnectWallet
