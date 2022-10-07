import React, {useEffect, useState} from 'react'
import styles from './Options.module.scss'
import Button from "../UI/Button";
import classNames from "classnames";
import {useDispatch} from "react-redux";
import {changeCurrentPopup} from "../../redux/actions/popup";
import {options} from "./constants";
import {calculateDiffTime} from "../../utils";

const Options = () => {
    const dispatch = useDispatch()
    const [time, setTime] = useState('')
    const [deadline, setDeadline] = useState(new Date(2022, 9, 18));

    useEffect(() => {
        const timerId = setInterval(() => {
            const diffTime = calculateDiffTime(new Date(), deadline)
            setTime(diffTime)
        }, 1000);

        return () => clearInterval(timerId)
    }, [])

    const handlerClickOption = ({index, href, event}) => {
        if (!href) {
            event.preventDefault()
        }

        // if (index === 2) {
        //     dispatch(changeCurrentPopup('buy-nft'))
        // }
    }


    return (
        <div className={styles.options}>
            <span className={styles.title}>
                How to get my <span className={styles.titleMark}>first</span> NFT on DogeChain?
            </span>

            <div className={styles.optionsItems}>
                {
                    options.map(({image, name, description, button, info}, index) => (
                        <div key={description} className={styles.optionsItem}>
                            <div
                                className={classNames(
                                    styles.imageWrapper,
                                    options.length - 1 === index && styles.last
                                )}>
                                <img
                                    className={styles.image}
                                    src={image}
                                    alt="Image doge"
                                />
                            </div>
                            <span
                                className={classNames(
                                    styles.name,
                                    options.length - 1 === index && styles.yellow
                                )}
                            >
                                {name}
                            </span>
                            <div
                                className={classNames(
                                    styles.description,
                                    index === 1 && styles.second
                                )}>
                                {description}
                            </div>
                            <div
                                className={classNames(
                                    styles.info,
                                    options.length - 1 === index && styles.best
                                )}
                            >
                                {
                                    info.map(({text, value}) => `${value} ${text}`).join(' / ')
                                }
                            </div>

                            <a
                                onClick={(event) => handlerClickOption({index, event, href: button.href})}
                                href={button.href}
                                target="_blank"
                                rel='noreferrer'
                            >
                                <Button
                                    style={{backgroundColor: button.color}}
                                    className={classNames(
                                        styles.button,
                                        index === 1 && styles.two,
                                        options.length - 1 === index && styles.last
                                    )}
                                >
                                    <span className={styles.text}>{button.text}</span>
                                    {
                                        index === 1 &&
                                        <img className={styles.doge} src='/images/doge.png' alt="Image doge"/>
                                    }

                                    {
                                        index === 2 &&
                                        <span className={styles.timer}>{time}</span>
                                    }
                                </Button>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Options
