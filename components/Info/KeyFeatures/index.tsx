import React from 'react'
import styles from './KeyFeatures.module.scss'

const features = [
    {
        image: '/images/intro-doge.jpg',
        name: 'much wow 1'
    },
    {
        image: '/images/intro-doge.jpg',
        name: 'much wow 2'
    },
    {
        image: '/images/intro-doge.jpg',
        name: 'much wow 3'
    },
    {
        image: '/images/intro-doge.jpg',
        name: 'much wow 4'
    },
    {
        image: '/images/intro-doge.jpg',
        name: 'much wow 5'
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
