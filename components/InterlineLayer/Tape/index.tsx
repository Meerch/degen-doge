import React from 'react'
import styles from './Tape.module.scss'

const Tape = () => {
    return (
        <div className={styles.tape}>
            <div className={styles.text}>
                <span className={styles.word}>MARKETPLACE SOON</span>
                <span className={styles.word}>5555 NFTs</span>
                <span className={styles.word}>HOSTED ON IPFS</span>
                <span className={styles.word}>MARKETPLACE SOON</span>
                <span className={styles.word}>5555 NFTs</span>
                <span className={styles.word}>HOSTED ON IPFS</span>
            </div>

            <div className={styles.text}>
                <span className={styles.word}>MARKETPLACE SOON</span>
                <span className={styles.word}>5555 NFTs</span>
                <span className={styles.word}>HOSTED ON IPFS</span>
                <span className={styles.word}>MARKETPLACE SOON</span>
                <span className={styles.word}>5555 NFTs</span>
                <span className={styles.word}>HOSTED ON IPFS</span>
            </div>
        </div>
    )
}

export default Tape
