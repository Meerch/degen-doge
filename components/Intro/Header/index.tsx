import React from 'react'
import styles from './Header.module.scss'
import ButtonConnectWallet from "./ButtonConnectWallet";
import SocialLinks from "../../SocialLinks";

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

            {/*<div className="test"/>*/}
            {/*<br/>*/}
            <SocialLinks/>
        </div>
    );
};

export default Header