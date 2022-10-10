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

const PopupBuyNft = () => {
    const {address} = useAccount()
    const [amount, setAmount] = useState(0)
    const {isReadyRender} = useRenderOnlyClient()
    const {data: availableTokensToMint} = useContractRead(generateContractDogesSetting('remainToMint', {
        args: address,
        select: data => data && toWei(formatEther(data)),
        onSuccess: data => console.log('availableTokensToMint', data)
    }))
    const {data: isApproved} = useContractRead(generateContractDCSetting('allowance', {
        args: [address, addressDoges],
        select: data => data && formatEther(data),
        onSuccess: data => console.log('approved amount', data)
    }))

    const {data: priceDC} = useContractRead(generateContractDogesSetting('getPriceInDC', {
        select: data => data && formatEther(data),
        onSuccess: data => console.log('Price', data)
    }))

    // const { config } = usePrepareContractWrite(generateContractDCSetting('approve', {
    //     args: [addressDoges, ethers.utils.parseEther(String(+availableTokensToMint * +priceDC))]
    // }))
    //
    // const {write} = useContractWrite(config)

    const {config: config2} = usePrepareContractWrite(generateContractDogesSetting('mintNft', {
        args: [amount, true]
    }))
    const {write: write2, isSuccess: isSuccessMint} = useContractWrite(config2)

    const dispatch = useDispatch()

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
        console.log('approve > price * 20', +isApproved >= toWei(String(priceDC)) * +availableTokensToMint)

        // write()

        if (+isApproved >= +priceDC * +availableTokensToMint) {
            const res = await write2()
            console.log('res result', res);
        // }
        } else {
            // write()
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
                            [styles.disabled]: amount === 0 || amount > +availableTokensToMint
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
