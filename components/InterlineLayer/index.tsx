import React from 'react'
import styles from './InterlineLayer.module.scss'
import Tape from "./Tape"

const InterlineLayer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.containerCarousel}>
                <div className={styles.image}/>
                <div className={styles.image}/>
            </div>

            <Tape/>
            <Tape/>
        </div>
    )
}

export default InterlineLayer
