import React from 'react'
import Content from './Content';
import Header from './Header';
import styles from './Intro.module.scss'
import {svgMartian} from "../../svg/svgMartian";
import {svgPantem} from "../../svg/svgPantem";
import {svgFewcha} from "../../svg/svgFewcha";
import { svgRise } from '../../svg/svgRise';
import {svgPetra} from "../../svg/svgPetra";

const Intro = () => {

    return (
        <div className={styles.intro}>
            <Header />
            <Content />


            <div className={styles.supportedWallets}>
                        <span className={styles.name}>
                            supported wallets:
                        </span>
                <div className={styles.wallets}>
                    {svgMartian}
                    {svgPantem}
                    {svgFewcha}
                    {svgRise}
                    {svgPetra}
                </div>
            </div>

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