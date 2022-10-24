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


const ButtonConnectWallet = () => {
    const {currentPopup}: { currentPopup: TypeCurrentPopup } = useSelector((state: RootState) => ({
        currentPopup: state.popup.currentPopup
    }))
    const [isHover, setIsHover] = useState(false)
    const dispatch = useDispatch()
    const {isReadyRender} = useRenderOnlyClient()
    const {
        disconnect,
        account,
        connected
    } = useWallet();


    const handlerOpenModalConnectWallet = () => {
        if (connected) {
            void disconnect()
        } else {
            dispatch(changeCurrentPopup('connect-wallet'))
        }
    }

    useEffect(() => {
        console.log(isHover);
    }, [isHover])

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
                    your balance: {0} APT
                </span>
            }
        </div>
    )
}

export default ButtonConnectWallet
