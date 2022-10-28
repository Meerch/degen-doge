import React, { FC } from 'react';
import styles from './ButtonOnIntro.module.scss'
import {useDispatch} from "react-redux";
import {changeCurrentPopup} from "../../redux/actions/popup";
import { useWallet } from '@manahippo/aptos-wallet-adapter';
import Button from "../UI/Button";
import SaleTimer from "../SaleTimer";
import classNames from "classnames";

interface ButtonOnIntroProps {
    className?: string
}

const ButtonOnIntro: FC<ButtonOnIntroProps> = ({className}) => {
    const dispatch = useDispatch()
    const {connected} = useWallet()

    const handlerClickButton = () => {
        if (!connected) {
            dispatch(changeCurrentPopup('connect-wallet'))
        } else {
            dispatch(changeCurrentPopup('buy-nft'))
        }
    }

    return (
            <Button
                onClick={handlerClickButton}
                className={classNames(styles.button, className)}
            >
                {/*{*/}
                {/*    connected*/}
                {/*        ? 'MINT SOON'*/}
                {/*        : 'connect wallet'*/}
                {/*}*/}
                {/*<SaleTimer />*/}
                coming soon
            </Button>
    );
};

export default ButtonOnIntro;
