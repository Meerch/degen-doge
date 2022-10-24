import React from 'react';
import styles from './ButtonOnIntro.module.scss'
import {useDispatch} from "react-redux";
import {changeCurrentPopup} from "../../redux/actions/popup";
import { useWallet } from '@manahippo/aptos-wallet-adapter';

const ButtonOnIntro = () => {
    const dispatch = useDispatch()
    const {connected} = useWallet()

    const handlerClickButton = (event: React.MouseEvent<HTMLHyperlinkElementUtils>) => {
        event.preventDefault()

        if (!connected) {
            dispatch(changeCurrentPopup('connect-wallet'))
        } else {
            dispatch(changeCurrentPopup('buy-nft'))
        }
    }

    return (
        <div className={styles.wrapperButton}>
            <a
                onClick={handlerClickButton}
                href='https://t.me/degendogechat'
                target='_blank'
                rel='noreferrer'
                className={styles.button}
            >
                {
                    connected
                        ? 'MINT SOON'
                        : 'connect wallet'
                }
            </a>

            <span className={styles.amountMinted}>0/5555 minted</span>
        </div>
    );
};

export default ButtonOnIntro;
