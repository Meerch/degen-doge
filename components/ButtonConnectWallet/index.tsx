import React, {useEffect, useState} from 'react'
import styles from './ButtonConnectWallet.module.scss'
import Button from "../UI/Button";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrentPopup} from "../../redux/actions/popup";
import {TypeCurrentPopup} from "../../redux/reducers/popup";
import {RootState} from "../../redux/reducers";
import classNames from "classnames";
import {hideAccountAddress} from "../../utils";
import useRenderOnlyClient from "../../hooks/useRenderOnlyClient";
import { useWallet } from '@manahippo/aptos-wallet-adapter';
import {AptosClient, TokenClient, AptosAccount, FaucetClient, CoinClient} from "aptos";
import {collectionName, NODE_URL} from "../../helpers/candyMachineInfo";
import {Address, AuthKey, PublicKey} from "@manahippo/aptos-wallet-adapter/src/WalletAdapters/BaseAdapter";
import {stringToHex} from "web3-utils";



const ButtonConnectWallet = () => {
    const {currentPopup}: { currentPopup: TypeCurrentPopup } = useSelector((state: RootState) => ({
        currentPopup: state.popup.currentPopup
    }))
    const [isHover, setIsHover] = useState(false)
    const dispatch = useDispatch()
    const {isReadyRender} = useRenderOnlyClient()
    const [balance, setBalance] = useState(0)
    const {
        disconnect,
        account,
        wallet,
        connected
    } = useWallet();


    const handlerOpenModalConnectWallet = () => {
        if (connected) {
            void disconnect()
        } else {
            dispatch(changeCurrentPopup('connect-wallet'))
        }
    }

    // const getBalance = async () => {
    //     // const alice = new AptosAccount();
    //     const aptosClient = new AptosClient(NODE_URL);
    //     console.log('account', account)
    //     const tokenClient = new TokenClient(aptosClient);
    //     const token = await tokenClient.getToken(
    //         account.address,
    //         collectionName,
    //         'APT',
    //     );
    //     console.log(`Balance`, token);
    // }

    const getBalance = async () => {
        const aptosClient = new AptosClient(NODE_URL);
        const coinClient = new CoinClient(aptosClient);
        try {
            // @ts-ignore
            const result = await coinClient.checkBalance({address: () => account.address})
            if (result) {
                setBalance(parseInt(String(result)) / 100000000)
            }
        } catch {

        }
    }

    useEffect(() => {
        setBalance(0)
        if (account?.address) {
            void getBalance()
        }
    }, [account])

    return isReadyRender && (
        <div className={styles.wrapper}>

            <Button
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={handlerOpenModalConnectWallet}
                className={classNames(
                    styles.button,
                    {
                        [styles.active]: currentPopup === 'connect-wallet',
                        [styles.disconnect]: connected && isHover
                    }
                )}
            >
                <span className={styles.text}>
                    {connected && !isHover && hideAccountAddress(account.address as string)}
                    {connected && isHover && 'disconnect'}
                    {!connected && 'connect wallet'}
                </span>
            </Button>

            {
                connected &&
                <span className={styles.balance}>
                    your balance: {balance} APT
                </span>
            }
        </div>
    )
}

export default ButtonConnectWallet
