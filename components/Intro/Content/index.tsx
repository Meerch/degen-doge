import React from 'react'
import styles from './Content.module.scss'
import Button from "../../UI/Button";

const Content = () => {
    return (
        <div className={styles.content}>
            <div className={styles.poster}>
                <div className={styles.image}>
                    <img

                        // src="/images/intro-doge.jpg"
                        src="/images/intro.gif"
                        alt="Doge"
                    />

                    <span className={styles.time}>04:10:34:12</span>
                </div>

                <div className={styles.text}>
                    degen
                    <br/>o
                    <br/>g
                    <br/>e
                </div>
            </div>

            <div className={styles.info}>
                <div className={styles.description}>
                    NFT representation of your trading expirience on
                </div>

                <img
                    src="/images/dogechain.png"
                    alt="dogechain"
                    className={styles.dogechain}
                />

                <div className={styles.wrapperButton}>
                    <img className={styles.image} src="/images/doge.png" alt="Doge"/>
                    <Button className={styles.button}>
                        join community
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Content
