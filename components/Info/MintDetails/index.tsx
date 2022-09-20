import React, { useState } from 'react'
import styles from './MintDetails.module.scss'


const MintDetails = () => {
    const [mintDetails, setMintDetails] = useState({
        mintDate: 0,
        price: 0,
        limitPerWallet: 0,
        supply: 0,
        nftDistribution: 0
    })

    return (
        <div className={styles.details}>
            <span className={styles.text}>Mint date: {mintDetails.mintDate}</span>
            <span className={styles.text}>Price: {mintDetails.price}</span>
            <span className={styles.text}>Limit per wallet: {mintDetails.limitPerWallet}</span>
            <span className={styles.text}>Supply: {mintDetails.supply}</span>
            <span className={styles.text}>NFT distribution: {mintDetails.nftDistribution}</span>
        </div>
    )
}

export default MintDetails
