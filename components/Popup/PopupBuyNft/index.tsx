import React, {useEffect, useState} from 'react'
import styles from './PopupBuyNft.module.scss'
import Button from "../../UI/Button";
import PopupLayout from "../PopupLayout";
import {useDispatch} from "react-redux";
import {changeCurrentPopup} from "../../../redux/actions/popup";
import {useAccount, useContractRead, useContractWrite, usePrepareContractWrite} from "wagmi";
import {
    addressDoges,
    generateContractDCSetting,
    generateContractDogesSetting
} from "../../../blockchain/utils";
import {formatEther, toWei} from "../../../utils";
import classNames from "classnames";
import useRenderOnlyClient from "../../../hooks/useRenderOnlyClient";
import {ethers} from "ethers";
import {useWaitForTransaction} from 'wagmi'
import web3 from "web3";
import {Loader} from "../../Loader";
import {ErrorButton} from "./StatesButton/ErrorButton";
import LoadingButton from "./StatesButton/LoadingButton";

const PopupBuyNft = () => {
    const {address} = useAccount()
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(1)
    const {isReadyRender} = useRenderOnlyClient()

    const {data: availableTokensToMint} = useContractRead(generateContractDogesSetting('remainToMint', {
        args: address,
        select: data => toWei(formatEther(data))
    }))

    const {data: balance} = useContractRead(generateContractDCSetting('balanceOf', {
        args: address,
        select: (data) => +formatEther(data)
    }))

    const {data: isApproved} = useContractRead(generateContractDCSetting('allowance', {
        args: [address, addressDoges],
        select: data => formatEther(data)
    }))

    const {data: priceDC} = useContractRead(generateContractDogesSetting('getPriceInDC', {
        select: data => data && formatEther(data)
    }))

    const {config: configApprove} = usePrepareContractWrite(generateContractDCSetting('approve', {
        args:
            availableTokensToMint && priceDC &&
            [addressDoges, web3.utils.toWei(String(+availableTokensToMint * +priceDC))],
    }))
    const {write: writeApprove, data: dataApprove} = useContractWrite(configApprove)
    const [isErrorApprove, setIsErrorApprove] = useState(false)
    const {
        isLoading: isLoadingApprove,
        isError: isError1,
        isSuccess: isSuccessApproved = false
    } = useWaitForTransaction({
        hash: dataApprove?.hash,
        onError: () => setIsErrorApprove(true)
    })

    const {config: configMint} = usePrepareContractWrite(generateContractDogesSetting('mintNft', {
        args: [amount, true],
        enabled: (+isApproved >= +priceDC * +availableTokensToMint) || dataApprove
    }))
    const {write: writeMint, data: dataSuccess} = useContractWrite(configMint)
    const [isErrorMint, setIsErrorMint] = useState(false)
    const {isLoading: isLoadingMint, isError, isSuccess: isSuccessMint = false} = useWaitForTransaction({
        hash: dataSuccess?.hash,
        onError: () => setIsErrorMint(true)
    })

    const handlerCounter = (value: number) => {
        const plannedValue = amount + value
        if (plannedValue > 0 && plannedValue <= +availableTokensToMint) {
            setAmount(prev => prev + value)
        }
    }

    useEffect(() => {
        if (isSuccessMint) {
            dispatch(changeCurrentPopup('success'))
        }
    }, [isSuccessMint])

    const handlerClickActionButton = async () => {
        if (isLoadingMint || isLoadingApprove) {
            return
        }

        if (isErrorApprove || isErrorMint) {
            setIsErrorApprove(false)
            setIsErrorMint(false)
        }

        if (isSuccessApproved || +isApproved >= +priceDC * +availableTokensToMint) {
            writeMint && writeMint()
        } else {
            writeApprove && writeApprove()
        }
    }

    const checkIsDisableButton = () => {
        if (isLoadingMint || isLoadingApprove) {
            return false
        }

        return (!isErrorApprove && !isErrorMint) &&
            (isSuccessApproved
            || (+isApproved >= +priceDC * +availableTokensToMint && amount === 0)
            || amount > +availableTokensToMint
            || amount * +priceDC > +balance)
    }


    return (
        <PopupLayout>
            <div className={styles.popup}>
                <span className={styles.title}>buy NFT with $DC</span>
                {/*<span>Transition approve: {data}</span>*/}

                <div className={styles.buttons}>
                    <div className={styles.counter}>
                        <span onClick={() => handlerCounter(-1)} className={styles.minus}>-</span>
                        <span className={styles.value}>{amount}</span>
                        <span onClick={() => handlerCounter(1)} className={styles.plus}>+</span>
                    </div>
                    {
                        isReadyRender &&
                        <Button
                            onClick={handlerClickActionButton}
                            className={classNames(styles.button, {
                                [styles.disabled]: checkIsDisableButton(),
                                [styles.loading]: isLoadingMint || isLoadingApprove,
                                [styles.error]: isErrorMint || isErrorApprove
                            })}
                        >
                            {
                                !isLoadingMint && !isLoadingApprove && !isErrorApprove && !isErrorMint &&
                                <span className={styles.text}>
                                    {
                                        isSuccessApproved || +isApproved >= +priceDC * +availableTokensToMint
                                            ? 'click to buy'
                                            : 'approve $DC'
                                    }
                                </span>
                            }

                            {
                                (isLoadingMint || isLoadingApprove) && <LoadingButton />
                            }

                            {
                                (isErrorApprove || isErrorMint) && <ErrorButton />
                            }
                        </Button>
                    }
                </div>

                <span className={styles.available}>{+availableTokensToMint}/20 available</span>
            </div>
        </PopupLayout>
    );
};

export default PopupBuyNft
