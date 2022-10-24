import React, {useState} from 'react'
import styles from './PopupBuyNft.module.scss'
import Button from "../../UI/Button"
import PopupLayout from "../PopupLayout"
import classNames from "classnames"
import {ErrorButton} from "./StatesButton/ErrorButton"
import LoadingButton from "./StatesButton/LoadingButton"
import {useMint} from "./useMint"

const PopupBuyNft = () => {
    // const [amount, setAmount] = useState(1)
    // const {
    //     isViewActiveButton,
    //     availableTokensToMint,
    //     handlerClickActionButton,
    //     checkIsDisableButton,
    //     isError,
    //     isLoading,
    //     isApprove
    // } = useMint(amount)
    //
    // const handlerCounter = (value: number) => {
    //     const plannedValue = amount + value
    //     if (plannedValue > 0 && plannedValue <= +availableTokensToMint) {
    //         setAmount(prev => prev + value)
    //     }
    // }
    //
    // return (
    //     <PopupLayout>
    //         <div className={styles.popup}>
    //             <span className={styles.title}>buy NFT with $DC</span>
    //
    //             <div className={styles.buttons}>
    //                 <div className={styles.counter}>
    //                     <span onClick={() => handlerCounter(-1)} className={styles.minus}>-</span>
    //                     <span className={styles.value}>{amount}</span>
    //                     <span onClick={() => handlerCounter(1)} className={styles.plus}>+</span>
    //                 </div>
    //
    //                 <Button
    //                     onClick={handlerClickActionButton}
    //                     className={classNames(styles.button, {
    //                         [styles.disabled]: checkIsDisableButton(),
    //                         [styles.loading]: isLoading,
    //                         [styles.error]: isError
    //                     })}
    //                 >
    //                     {
    //                         isViewActiveButton &&
    //                         <span className={styles.text}>
    //                                 {
    //                                     isApprove
    //                                         ? 'click to buy'
    //                                         : 'approve $DC'
    //                                 }
    //                             </span>
    //                     }
    //
    //                     {
    //                         isLoading && <LoadingButton/>
    //                     }
    //
    //                     {
    //                         isError && <ErrorButton/>
    //                     }
    //                 </Button>
    //             </div>
    //
    //             <span className={styles.available}>{+availableTokensToMint}/20 available</span>
    //         </div>
    //     </PopupLayout>
    // )
}

export default PopupBuyNft
