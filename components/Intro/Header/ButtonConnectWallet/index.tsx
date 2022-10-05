import React from 'react'
import styles from './ButtonConnectWallet.module.scss'
import Button from "../../../UI/Button";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrentPopup} from "../../../../redux/actions/popup";
import {TypeCurrentPopup} from "../../../../redux/reducers/popup";
import {RootState} from "../../../../redux/reducers";
import classNames from "classnames";
import {useAccount, useDisconnect} from "wagmi";
import {hideAccountAddress} from "../../../../utils";
import useRenderOnlyClient from "../../../../hooks/useRenderOnlyClient";


const ButtonConnectWallet = () => {
    const {currentPopup}: { currentPopup: TypeCurrentPopup } = useSelector((state: RootState) => ({
        currentPopup: state.popup.currentPopup
    }))
    const dispatch = useDispatch()
    const {isConnected, address} = useAccount()
    const {disconnect} = useDisconnect()
    const {isReadyRender} = useRenderOnlyClient()


    const handlerOpenModalConnectWallet = () => {
        if (isConnected) {
            disconnect()
        } else {
            dispatch(changeCurrentPopup('connect-wallet'))
        }
    }

    return (
        isReadyRender && <div className={styles.wrapper}>

            <Button
                onClick={handlerOpenModalConnectWallet}
                className={classNames(
                    styles.button,
                    {
                        [styles.active]: currentPopup === 'connect-wallet',
                        [styles.disconnect]: isConnected
                    }
                )}
            >
                <span className={styles.text}>
                    {isConnected ? 'disconnect' : 'connect wallet'}
                </span>
            </Button>

            {
                isConnected &&
                <span className={styles.balance}>
                    your balance: 4443 $WC
                </span>
            }

            {
                isConnected &&
                <span className={styles.address}>
                    your address: {hideAccountAddress(address)}
                </span>
            }
        </div>
    )
}

export default ButtonConnectWallet
