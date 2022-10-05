import React, { useState } from 'react'
import styles from './MintDetails.module.scss'
import classNames from "classnames";


const MintDetails = () => {
    const [mintDetails, setMintDetails] = useState({
        mintDate: null,
        price: 9999,
        limitPerWallet: 20,
        supply: 5555
    })

    return (
        <div className={styles.details}>
            <span className={styles.text}>Mint date: {mintDetails.mintDate || 'TBA'}</span>
            <div className={classNames(styles.text, styles.price)}>
                Price: {mintDetails.price || 'TBA'} $DC
                <span className={styles.convert}>( ~$9 )</span>
            </div>
            <span className={styles.text}>Limit per wallet: {mintDetails.limitPerWallet || 'TBA'}</span>
            <span className={styles.text}>Supply: {mintDetails.supply || 'TBA'} HFT</span>
            {/*<span className={styles.text}>NFT distribution: {mintDetails.nftDistribution}</span>*/}
        </div>
    )
}

export default MintDetails
