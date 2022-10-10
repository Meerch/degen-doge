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

const PopupBuyNft = () => {
    const {address} = useAccount()
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(0)
    const {isReadyRender} = useRenderOnlyClient()

    const {data: availableTokensToMint} = useContractRead(generateContractDogesSetting('remainToMint', {
        args: address,
        select: data => toWei(formatEther(data)),
        onSuccess: data => console.log('init availableTokensToMint', data)
    }))

    const {data: balance} = useContractRead(generateContractDCSetting('balanceOf', {
        args: address,
        select: (data) => +formatEther(data)
    }))

    const {data: isApproved} = useContractRead(generateContractDCSetting('allowance', {
        args: [address, addressDoges],
        select: data => formatEther(data),
        onSuccess: data => console.log('approved amount', data)
    }))

    const {data: priceDC} = useContractRead(generateContractDogesSetting('getPriceInDC', {
        select: data => data && formatEther(data),
        onSuccess: data => console.log('Price', data)
    }))

    const {config: configApprove} = usePrepareContractWrite(generateContractDCSetting('approve', {
        args:
            availableTokensToMint &&
            priceDC &&
            [addressDoges, web3.utils.toWei(String(+availableTokensToMint * +priceDC))],
    }))

    const {write, data: dataApprove} = useContractWrite(configApprove)
    const {isSuccess: isSuccessApproved = false} = useWaitForTransaction({
        hash: dataApprove?.hash,
    })

    const {config: configMint} = usePrepareContractWrite(generateContractDogesSetting('mintNft', {
        args: [amount, true],
        enabled: (+isApproved >= +priceDC * +availableTokensToMint) || dataApprove
    }))
    const {write: write2, data: dataSuccess} = useContractWrite(configMint)

    const {isSuccess: isSuccessMint = false} = useWaitForTransaction({
        hash: dataSuccess?.hash,
    })

    const handlerCounter = (value: number) => {
        const plannedValue = amount + value
        if (plannedValue < 0 || plannedValue > +availableTokensToMint) {
            return
        }
        setAmount(prev => prev + value)
    }

    useEffect(() => {
        if (isSuccessMint) {
            dispatch(changeCurrentPopup('success'))
        }
    }, [isSuccessMint])

    const handlerClickActionButton = async () => {
        console.log('isApproved', isApproved)
        console.log('ethers.utils.parseEther(String(+availableTokensToMint * +priceDC))', ethers.utils.parseEther(String(+availableTokensToMint * +priceDC)))
        console.log('priceDC', priceDC)
        console.log('priceDC', priceDC)
        console.log('priceDC * 20', +priceDC * +availableTokensToMint)
        console.log('approve > price * 20', +isApproved <= +priceDC * +availableTokensToMint)

        // write()

        if (isSuccessApproved || +isApproved >= +priceDC * +availableTokensToMint) {
            write2 && write2()
            // }
        } else {
            console.log('write', write)
            write && write()
        }
        // dispatch(changeCurrentPopup('success'))
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
                        <Button onClick={handlerClickActionButton} className={classNames(styles.button, {
                            [styles.disabled]: isSuccessApproved ||
                                (+isApproved >= +priceDC * +availableTokensToMint && amount === 0)
                            || amount > +availableTokensToMint
                            || amount * +priceDC > +balance
                        })}>
                            <span className={styles.text}>
                                {
                                    isSuccessApproved || +isApproved >= +priceDC * +availableTokensToMint
                                        ? 'mint'
                                        : 'approve $DC'
                                }
                            </span>
                        </Button>
                    }
                </div>

                <span className={styles.available}>{+availableTokensToMint}/20 available</span>
            </div>
        </PopupLayout>
    );
};

export default PopupBuyNft
