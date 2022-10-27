import React from 'react'
import styles from './Content.module.scss'
import SaleTimer from "../../SaleTimer";
import ButtonOnIntro from "../../ButtonOnIntro";
import classNames from 'classnames';
import {svgAptos} from "../../../svg/svgAptos";

const Content = () => {
    return (
        <div className={styles.content}>
            <div className={styles.poster}>
                <div className={classNames(styles.image, styles.mintSoon)}>
                    <img
                        src="/images/intro.gif"
                        alt="Doge"
                    />

                    {/*<SaleTimer className={styles.timer}/>*/}
                </div>

                <div className={styles.text}>
                    APTOD
                    <br/>o
                    <br/>g
                    <br/>e
                </div>
            </div>

            <div className={styles.info}>
                <div className={styles.description}>
                    NFT representation of your FOMO expirience on
                </div>

                {/*<img*/}
                {/*    src="/images/aptos-logo.png"*/}
                {/*    alt="aptos"*/}
                {/*    className={styles.aptos}*/}
                {/*/>*/}
                {svgAptos}


                <div className={classNames(styles.wrapperButton)}>
                    <ButtonOnIntro className={styles.button}/>
                </div>


            </div>
        </div>
    )
}

export default Content
