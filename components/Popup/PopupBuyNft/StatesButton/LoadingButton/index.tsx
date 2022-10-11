import React from 'react';
import styles from './LoadingButton.module.scss'
import {Loader} from "../../../../Loader";

const LoadingButton = () => {

    return (
        <>
            <img className={styles.doge} src='/images/buttonMint/doge.png' alt='doge'/>

            <div className={styles.loading}>
                <Loader className={styles.loader}/>
                <span className={styles.text}>loading</span>
            </div>
        </>
    );
};

export default LoadingButton;
