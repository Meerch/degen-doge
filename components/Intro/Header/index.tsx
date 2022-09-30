import React from 'react'
import styles from './Header.module.scss'
import SocialLinks from "../../SocialLinks";
import ButtonConnectWallet from "./ButtonConnectWallet";

const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img
                    className={styles.image}
                    src="/images/logo.png"
                    alt="Logo"
                />

                <span className={styles.text}>
                    degen <br/> doge
                </span>
            </div>

            <ButtonConnectWallet/>

            <SocialLinks/>
        </div>
    );
};

export default Header