import React from 'react';
import styles from './ButtonOnIntro.module.scss'
import {useAccount, useContractRead} from "wagmi";
import {generateContractDogesSetting} from "../../blockchain/utils";
import {useDispatch} from "react-redux";
import {changeCurrentPopup} from "../../redux/actions/popup";
import useRenderOnlyClient from "../../hooks/useRenderOnlyClient";

const ButtonOnIntro = () => {
    const {data: isMintOpen} = useContractRead(generateContractDogesSetting('isMintOpen', {
        onSuccess: data => console.log('isMintOpen', data)
    }))
    const {isReadyRender} = useRenderOnlyClient()
    const dispatch = useDispatch()
    const {isConnected} = useAccount()

    const handlerClickButton = (event: React.MouseEvent<HTMLHyperlinkElementUtils>) => {
        console.log('isConnected', isConnected)
        if (isMintOpen && !isConnected) {
            event.preventDefault()
            dispatch(changeCurrentPopup('connect-wallet'))
            return
        }

        if (isMintOpen) {
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
                    isReadyRender && isMintOpen ? 'MINT NFT NOW!' : 'join community'
                }
            </a>
        </div>
    );
};

export default ButtonOnIntro;
