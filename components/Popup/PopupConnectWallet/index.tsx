import {useEffect} from 'react'
import styles from './PopupConnectWallet.module.scss'
import PopupLayout from "../PopupLayout";
import Button from '../../UI/Button';
import {useDispatch} from "react-redux";
import {changeCurrentPopup} from "../../../redux/actions/popup";
import {useWallet} from "@manahippo/aptos-wallet-adapter";

const PopupConnectWallet = () => {
    const dispatch = useDispatch()
    const {
        connect,
        wallets,
        connected
    } = useWallet();

    useEffect(() => {
        if (connected) {
            dispatch(changeCurrentPopup(null))
        }
    }, [connected])

    return (
        <PopupLayout className={styles.popup}>
            <span className={styles.title}>Connect wallet</span>

            <div className={styles.buttons}>
                {
                    wallets.map((wallet) => {
                        const option = wallet.adapter;
                        return (
                            <Button
                                className={styles.button}
                                onClick={() => {
                                    void connect(option.name);
                                }}
                                id={option.name.split(' ').join('_')}
                                key={option.name}
                            >
                                <span className={styles.text}>connect with {option.name}</span>
                            </Button>
                        )
                    })
                }
            </div>
        </PopupLayout>
    )
}

export default PopupConnectWallet
