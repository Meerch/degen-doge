import React from 'react'
import styles from './PopupConnectWallet.module.scss'
import PopupLayout from "../PopupLayout";
import Button from '../../UI/Button';
import {useDispatch} from "react-redux";
import {changeCurrentPopup} from "../../../redux/actions/popup";

const PopupConnectWallet = () => {
    const dispatch = useDispatch()

    const handlerClick = () => {
        dispatch(changeCurrentPopup(null))
    }

    return (
        <PopupLayout className={styles.popup}>
            <span className={styles.title}>connect wallet</span>

            <Button onClick={handlerClick} className={styles.button}>
                <span className={styles.text}>connect with dogewallet</span>
            </Button>

            {/*<div className={styles.close}>X</div>*/}
        </PopupLayout>
    )
}

export default PopupConnectWallet
