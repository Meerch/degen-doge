import React, {useEffect, useState} from 'react'
import styles from './ButtonConnectWallet.module.scss'
import Button from "../UI/Button";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrentPopup} from "../../redux/actions/popup";
import {TypeCurrentPopup} from "../../redux/reducers/popup";
import {RootState} from "../../redux/reducers";
import classNames from "classnames";
import {useAccount, useContractRead, useDisconnect} from "wagmi";
import {formatEther, hideAccountAddress} from "../../utils";
import {generateContractDCSetting} from "../../blockchain/utils";
import useRenderOnlyClient from "../../hooks/useRenderOnlyClient";


const ButtonConnectWallet = () => {
    const {currentPopup}: { currentPopup: TypeCurrentPopup } = useSelector((state: RootState) => ({
        currentPopup: state.popup.currentPopup
    }))
    const [isHover, setIsHover] = useState(false)
    const dispatch = useDispatch()
    const {isConnected, address} = useAccount()
    const {disconnect} = useDisconnect()
    const {isReadyRender} = useRenderOnlyClient()
    const {data: balance} = useContractRead(generateContractDCSetting('balanceOf', {
        args: address,
        select: (data) => +formatEther(data),
        onSuccess: (data) => {
            console.log('data balance', data)
        },
        onError: () => {
            console.log('error')
        }
    }))

    const handlerOpenModalConnectWallet = () => {
        if (isConnected) {
            disconnect()
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
                        [styles.disconnect]: isConnected && isHover
                    }
                )}
            >
                <span className={styles.text}>
                    {isConnected && !isHover && hideAccountAddress(address)}
                    {isConnected && isHover && 'disconnect'}
                    {!isConnected && 'connect wallet'}
                </span>
            </Button>

            {
                isConnected &&
                <span className={styles.balance}>
                    your balance: {balance || 0} $WC
                </span>
            }
        </div>
    )
}

export default ButtonConnectWallet
