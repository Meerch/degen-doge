import React from 'react'
import styles from './Content.module.scss'
import SaleTimer from "../../SaleTimer";
import ButtonOnIntro from "../../ButtonOnIntro";

const Content = () => {
    return (
        <div className={styles.content}>
            <div className={styles.poster}>
                <div className={styles.image}>
                    <img
                        src="/images/intro.gif"
                        alt="Doge"
                    />

                    <SaleTimer className={styles.timer}/>
                </div>

                <div className={styles.text}>
                    APTOD
                    <br/>o
                    <br/>g
                    <br/>e
                </div>
            </div>

            <div className={styles.info}>
                <div className={styles.description}>
                    NFT representation of your FOMO expirience on
                </div>

                <img
                    src="/images/aptos.png"
                    alt="dogechain"
                    className={styles.dogechain}
                />

                <ButtonOnIntro />
            </div>
        </div>
    )
}

export default Content
