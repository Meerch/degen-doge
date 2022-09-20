import React from 'react'
import styles from './InterlineLayer.module.scss'
import Tape from "./Tape"

const InterlineLayer = () => {
    return (
        <div className={styles.wrapper}>
            <img
                className={styles.image}
                src="/images/examples-doge.png"
                alt="doges"
            />

            <Tape />
            <Tape />
        </div>
    )
}

export default InterlineLayer
