import React from 'react';
import styles from './ButtonOnIntro.module.scss'
import {useAccount, useContractRead} from "wagmi";
import {generateContractDogesSetting} from "../../blockchain/utils";
import {useDispatch} from "react-redux";
import {changeCurrentPopup} from "../../redux/actions/popup";
import useRenderOnlyClient from "../../hooks/useRenderOnlyClient";
import {BigNumberish} from "ethers";
import {formatEther, toWei} from "../../utils";
import { useWallet } from '@manahippo/aptos-wallet-adapter';

const ButtonOnIntro = () => {
    // const {data: isMintOpen} = useContractRead(generateContractDogesSetting('isMintOpen', {
    //     onSuccess: data => console.log('isMintOpen', data)
    // }))
    // const {data: timeStartMint} = useContractRead(generateContractDogesSetting('getSaleTime', {
    //     select: (data: BigNumberish): number => toWei(formatEther(data)) * 1000,
    //     onSuccess: data => console.log('available claim free nft', +data > +new Date())
    // }))
    // const {isReadyRender} = useRenderOnlyClient()
    const dispatch = useDispatch()
    const {connected} = useWallet()
    // const {isConnected} = useAccount()
    //
    const handlerClickButton = (event: React.MouseEvent<HTMLHyperlinkElementUtils>) => {
        event.preventDefault()

        if (!connected) {
            dispatch(changeCurrentPopup('connect-wallet'))
        } else {
            dispatch(changeCurrentPopup('buy-nft'))
        }

        // if (isMintOpen && +timeStartMint < +new Date()) {
        //     event.preventDefault()
        //
        // }
    }

    return (
        <div className={styles.wrapperButton}>
            <img className={styles.image} src="/images/doge.png" alt="Doge"/>
            <a
                onClick={handlerClickButton}
                href='https://t.me/degendogechat'
                target='_blank'
                rel='noreferrer'
                className={styles.button}
            >
                {
                    connected
                        ? 'MINT IT'
                        : 'connect wallet'
                }
            </a>
        </div>
    );
};

export default ButtonOnIntro;
