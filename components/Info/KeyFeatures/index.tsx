import React from 'react'
import styles from './KeyFeatures.module.scss'

const features = [
    {
        image: '/images/keyFeatures/key-1-2x.png',
        name: 'Dogs'
    },
    {
        image: '/images/keyFeatures/key-2-2x.png',
        name: '150 unique traits'
    },
    {
        image: '/images/keyFeatures/key-3-2x.png',
        name: 'Much wow'
    },
    {
        image: '/images/keyFeatures/key-4-2x.png',
        name: 'Based on IPFS'
    },
    {
        image: '/images/keyFeatures/key-5-2x.png',
        name: 'Eco-Friendly'
    }
]

const KeyFeatures = () => {
    return (
        <div className={styles.features}>
            <div className={styles.featuresItems}>
                {
                    features.map(({image, name}) => (
                        <div key={name} className={styles.featuresItem}>
                            <img
                                className={styles.image}
                                src={image}
                                alt={name}
                            />
                            <span className={styles.name}>{name}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default KeyFeatures
