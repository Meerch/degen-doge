import React from 'react'
import styles from './Options.module.scss'
import Button from "../UI/Button";
import classNames from "classnames";
import {useDispatch} from "react-redux";
import {changeCurrentPopup} from "../../redux/actions/popup";
import SaleTimer from "../SaleTimer";
import {svgOption2} from "../../svg/svgOption2";

const Options = () => {
    const dispatch = useDispatch()

    const handlerClickOption = (event: React.MouseEvent<HTMLHyperlinkElementUtils>) => {
        event.preventDefault()
        dispatch(changeCurrentPopup('buy-nft'))

    }

    return (
        <div className={styles.options}>
            <span className={styles.title}>
               How to get my first <span className={styles.mark}>degen</span> NFT on Aptos?
            </span>

            <div className={styles.optionsItems}>
                <div className={styles.optionsItem}>
                    <div className={styles.imageWrapper}>
                        <img
                            className={styles.image}
                            src='/images/option-1.png'
                            alt="Image doge"
                        />
                    </div>
                    <span className={styles.name}>option 1</span>
                    <div className={styles.description}>get NFT instantly through our strange website</div>

                    <Button
                        className={classNames(styles.button, styles.red)}
                    >
                        <span className={styles.text}>buy with $APT</span>

                        <span className={styles.comingSoon}>coming soon</span>
                    </Button>
                </div>

                <div className={styles.optionsItem}>
                    <div className={styles.imageWrapper}>
                        {/*<img*/}
                        {/*    className={styles.image}*/}
                        {/*    src='/images/options/option-1.jpg'*/}
                        {/*    alt="Image doge"*/}
                        {/*/>*/}
                        {svgOption2}
                    </div>
                    <span className={styles.name}>option 2</span>
                    <div className={styles.description}>get NFT through available NFT marketplaces</div>

                    <Button
                        className={classNames(
                            styles.button,
                            styles.inactive
                        )}
                    >
                        <span className={styles.text}>coming soon</span>
                        {/*<SaleTimer className={styles.timer}/>*/}
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default Options
