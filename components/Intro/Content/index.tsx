import React, {useEffect, useState} from 'react'
import styles from './Content.module.scss'
import {calculateDiffTime} from "../../../utils";
import useRenderOnlyClient from "../../../hooks/useRenderOnlyClient";

const Content = () => {
    const [time, setTime] = useState('')
    const {isReadyRender} = useRenderOnlyClient()
    const [deadline, setDeadline] = useState(new Date(2022, 9, 18));

    useEffect(() => {
        const timerId = setInterval(() => {
            const diffTime = calculateDiffTime(new Date(), deadline)
            setTime(diffTime)
        }, 1000);

        return () => clearInterval(timerId)
    }, [])

    return isReadyRender && (
        <div className={styles.content}>
            <div className={styles.poster}>
                <div className={styles.image}>
                    <img
                        src="/images/intro.gif"
                        alt="Doge"
                    />

                    <span className={styles.time}>{time}</span>
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
                    <a
                        href='https://t.me/degendogechat'
                        target='_blank'
                        rel='noreferrer'
                        className={styles.button}
                    >
                        join community
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Content
