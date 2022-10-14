import React from 'react';
import styles from './ButtonOnIntro.module.scss'
import {useAccount, useContractRead} from "wagmi";
import {generateContractDogesSetting} from "../../blockchain/utils";
import {useDispatch} from "react-redux";
import {changeCurrentPopup} from "../../redux/actions/popup";
import useRenderOnlyClient from "../../hooks/useRenderOnlyClient";
import {BigNumberish} from "ethers";
import {formatEther, toWei} from "../../utils";

const ButtonOnIntro = () => {
    const {data: isMintOpen} = useContractRead(generateContractDogesSetting('isMintOpen', {
        onSuccess: data => console.log('isMintOpen', data)
    }))
    const {data: timeStartMint} = useContractRead(generateContractDogesSetting('getSaleTime', {
        select: (data: BigNumberish): number => toWei(formatEther(data)) * 1000,
        onSuccess: data => console.log('available claim free nft', +data > +new Date())
    }))
    const {isReadyRender} = useRenderOnlyClient()
    const dispatch = useDispatch()
    const {isConnected} = useAccount()

    const handlerClickButton = (event: React.MouseEvent<HTMLHyperlinkElementUtils>) => {
        if (isMintOpen && !isConnected) {
            event.preventDefault()
            dispatch(changeCurrentPopup('connect-wallet'))
            return
        }

        if (isMintOpen && +timeStartMint < +new Date()) {
            event.preventDefault()
            dispatch(changeCurrentPopup('buy-nft'))
        }
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
                    isReadyRender && isMintOpen && +timeStartMint < +new Date()
                        ? 'MINT NFT NOW!'
                        : 'join community'
                }
            </a>
        </div>
    );
};

export default ButtonOnIntro;
