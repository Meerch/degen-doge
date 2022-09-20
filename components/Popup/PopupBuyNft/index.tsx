import React, {FC, useState} from 'react'
import styles from './PopupBuyNft.module.scss'
import Button from "../../UI/Button";
import PopupLayout from "../PopupLayout";
import {useDispatch} from "react-redux";
import {changeCurrentPopup} from "../../../redux/actions/popup";

interface PopupBuyNftProps {
    onClick?: () => void
}

const PopupBuyNft: FC<PopupBuyNftProps> = ({onClick}) => {
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(0)
    const [step, setStep] = useState(0)

    const handlerCounter = (value: number) => {
        setAmount(prev => {
            const newValue = prev + value
            return newValue < 0 ? prev : newValue
        })
    }

    const handlerClickActionButton = () => {
        dispatch(changeCurrentPopup('success'))
    }

    return (
        <PopupLayout>
            <div className={styles.popup}>
                <span className={styles.title}>buy NFT with $DC</span>

                <div className={styles.buttons}>
                    <div className={styles.counter}>
                        <span onClick={() => handlerCounter(-1)} className={styles.minus}>-</span>
                        <span className={styles.value}>{amount}</span>
                        <span onClick={() => handlerCounter(1)} className={styles.plus}>+</span>
                    </div>
                    <Button onClick={handlerClickActionButton} className={styles.button}>
                        <span className={styles.text}>
                            approve $DC
                        </span>
                    </Button>
                </div>
            </div>
        </PopupLayout>
    );
};

export default PopupBuyNft
