import React from 'react';
import styles from './ButtonGetFreeNft.module.scss'
import {useAccount, useContractRead} from "wagmi";
import {useDispatch} from "react-redux";
import {changeCurrentPopup} from "../../redux/actions/popup";
import Button from "../UI/Button";
import {generateContractDogesSetting} from "../../blockchain/utils";
import {BigNumberish} from "ethers";
import {formatEther, toWei} from "../../utils";
import classNames from "classnames";

const ButtonGetFreeNft = () => {
    // const {data: isMintOpen} = useContractRead(generateContractDogesSetting('isMintOpen', {
    //     onSuccess: data => console.log('isMintOpen', data)
    // }))
    // const {data: timeStartMint} = useContractRead(generateContractDogesSetting('getSaleTime', {
    //     select: (data: BigNumberish): number => toWei(formatEther(data)) * 1000,
    //     onSuccess: data => console.log('available claim free nft', +data > +new Date())
    // }))
    // const dispatch = useDispatch()
    // const {isConnected} = useAccount()
    //
    // const handlerClickButton = () => {
    //     if (!isConnected) {
    //         dispatch(changeCurrentPopup('connect-wallet'))
    //         return
    //     }
    //
    //     if (+timeStartMint < +new Date() && isMintOpen) {
    //         dispatch(changeCurrentPopup('get-free-nft'))
    //     }
    // }

    return (
        <Button
            // onClick={handlerClickButton}
            className={classNames(styles.button, {
                // [styles.inactive]: +timeStartMint > +new Date() || !isMintOpen
            })}
        >
            check eglibility for free NFT
        </Button>
    );
};

export default ButtonGetFreeNft;
