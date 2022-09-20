import React from 'react'
import styles from './Footer.module.scss'
import SocialLinks from "../SocialLinks";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <img className={styles.logo} src="/images/logo.png" alt="Logo"/>

            <div className={styles.content}>
                <SocialLinks classNameContainer={styles.links} classNameLink={styles.link}/>
                <span className={styles.description}>made by degens for degens</span>
            </div>

            <img className={styles.logo} src="/images/logo.png" alt="Logo"/>
        </div>
    )
}

export default Footer
