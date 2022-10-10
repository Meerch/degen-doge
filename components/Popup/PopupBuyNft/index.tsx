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
    const {data: isApproved} = useContractRead(generateContractDCSetting('allowance', {
        args: [address, addressDoges],
        select: data => formatEther(data),
        onSuccess: data => console.log('approved amount', data)
    }))

    const {data: priceDC} = useContractRead(generateContractDogesSetting('getPriceInDC', {
        select: data => data && formatEther(data),
        onSuccess: data => console.log('Price', data)
    }))

    const { config } = usePrepareContractWrite(generateContractDCSetting('approve', {
        // args: [addressDoges, ethers.utils.parseEther(String(+availableTokensToMint * toWei(String(priceDC))))]
        args:
            Boolean(availableTokensToMint) &&
            Boolean(priceDC) &&
            [addressDoges, web3.utils.toWei(String(+availableTokensToMint * +priceDC))],
        // enabled: Boolean(availableTokensToMint)
        // enabled: false
    }))

    const {write} = useContractWrite(config)

    useEffect(() => {
        // console.log('web3.utils.toWei(String(+availableTokensToMint * +priceDC))', web3.utils.toWei(String(+availableTokensToMint * +priceDC)))
        console.log('priceDC', +priceDC);
        console.log('availableTokensToMint', availableTokensToMint);
        console.log('aaaaa', +availableTokensToMint * +priceDC);
        console.log('aaaaa', String(+availableTokensToMint * +priceDC));
    }, [priceDC, availableTokensToMint])

    const {config: config2} = usePrepareContractWrite(generateContractDogesSetting('mintNft', {
        args: [amount, true],
        // enabled: (+isApproved >= +priceDC * +availableTokensToMint) || dateApprove
    }))
    const {write: write2, isSuccess: isSuccessMint} = useContractWrite(config2)

    // useEffect(() => {
    //
    // }, [dateApprove])

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

        if (+isApproved >= +priceDC * +availableTokensToMint) {
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
                            [styles.disabled]: (+isApproved >= +priceDC * +availableTokensToMint && amount === 0) || amount > +availableTokensToMint
                        })}>
                            <span className={styles.text}>
                                {
                                    +isApproved >= +priceDC * +availableTokensToMint
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
