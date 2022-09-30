import React from 'react'
import styles from './ButtonConnectWallet.module.scss'
import Button from "../../../UI/Button";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrentPopup} from "../../../../redux/actions/popup";
import {TypeCurrentPopup} from "../../../../redux/reducers/popup";
import {RootState} from "../../../../redux/reducers";
import classNames from "classnames";


const ButtonConnectWallet = () => {
    const {currentPopup}: { currentPopup: TypeCurrentPopup } = useSelector((state: RootState) => ({
        currentPopup: state.popup.currentPopup
    }))
    const dispatch = useDispatch()

    const handlerOpenModalConnectWallet = () => {
        dispatch(changeCurrentPopup('connect-wallet'))
    }

    return (
        <div className={styles.wrapper}>

            <Button
                onClick={handlerOpenModalConnectWallet}
                className={classNames(
                    styles.button,
                    currentPopup === 'connect-wallet' && styles.active
                )}
            >
                <span className={styles.text}>connect wallet</span>
            </Button>

            <span className={styles.balance}>
                your balance: 4443 $wDOGE
            </span>
        </div>
    )
}

export default ButtonConnectWallet
