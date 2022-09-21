import React from 'react'
import styles from './KeyFeatures.module.scss'

const features = [
    {
        image: '/images/intro-doge.jpg',
        name: '150 unique traits '
    },
    {
        image: '/images/intro-doge.jpg',
        name: 'Much wow'
    },
    {
        image: '/images/intro-doge.jpg',
        name: 'Dogs'
    },
    {
        image: '/images/intro-doge.jpg',
        name: 'Eco-Friendly'
    },
    {
        image: '/images/intro-doge.jpg',
        name: 'Based on IPFS'
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
