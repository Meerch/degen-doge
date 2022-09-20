import React from 'react'
import Content from './Content';
import Header from './Header';
import styles from './Intro.module.scss'

const Intro = () => {
    return (
        <div className={styles.intro}>
            <Header />
            <Content />
        </div>
    );
};

export default Intro;