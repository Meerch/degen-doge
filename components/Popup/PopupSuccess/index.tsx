import React from 'react'
import styles from './PopupSuccess.module.scss'
import PopupLayout from "../PopupLayout";
import Button from '../../UI/Button';
import {useDispatch} from "react-redux";
import {changeCurrentPopup} from "../../../redux/actions/popup";

const PopupSuccess = () => {
    const dispatch = useDispatch()

    const handlerClick = () => {
        dispatch(changeCurrentPopup(null))
    }

    return (
        <PopupLayout className={styles.popup}>
            <span className={styles.title}>Success!!!</span>

            <img className={styles.doge} src="/images/doge-success-mint.png" alt="doge"/>

            <div className={styles.description}>
                You are the proud owner of the strange NFT on DOGECHAIN!
            </div>

            <Button onClick={handlerClick} className={styles.button}>
                <span className={styles.text}>click to view</span>
            </Button>

            {/*<div className={styles.close}>X</div>*/}
        </PopupLayout>
    )
}

export default PopupSuccess
