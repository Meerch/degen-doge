import {useEffect} from 'react'
import styles from './PopupConnectWallet.module.scss'
import PopupLayout from "../PopupLayout";
import Button from '../../UI/Button';
import {useDispatch} from "react-redux";
import {changeCurrentPopup} from "../../../redux/actions/popup";
import {useWallet} from "@manahippo/aptos-wallet-adapter";
import {WalletName} from "@manahippo/aptos-wallet-adapter/src/WalletAdapters/BaseAdapter";

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

    const onConnect = async (name: WalletName) => {
        try {
            const test = await connect(name)
        } catch {
            console.log('error')
        }

    }

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
                                onClick={() => onConnect(option.name)}
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
