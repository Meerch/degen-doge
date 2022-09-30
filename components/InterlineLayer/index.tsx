import React from 'react'
import styles from './InterlineLayer.module.scss'
import Tape from "./Tape"
import classNames from "classnames";

const InterlineLayer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.containerCarousel}>
                <div className={styles.image}/>
                <div className={classNames(styles.image, styles.secondImage)}/>
            </div>

            <Tape/>
            <Tape/>
        </div>
    )
}

export default InterlineLayer
