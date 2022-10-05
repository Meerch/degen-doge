import React from 'react'
import Content from './Content';
import Header from './Header';
import styles from './Intro.module.scss'

const Intro = () => {
    return (
        <div className={styles.intro}>
            <Header />
            <Content />
            <div className={styles.backgroundText}>
                <span className={styles.text}>wen lambo</span>
                <span className={styles.text}>much wow</span>
                <span className={styles.text}>420x</span>
                <span className={styles.text}>to the moon...</span>
            </div>
        </div>
    );
};

export default Intro;