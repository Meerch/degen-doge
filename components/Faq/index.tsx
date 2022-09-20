import React, {useState} from 'react'
import styles from './Faq.module.scss'
import {questions} from './constants'
import classNames from "classnames";

const Faq = () => {
    const [openedQuestions, setOpenedQuestions] = useState([]);

    const handlerChangeOpenedQuestions = (index: number) => {
        console.log(index)
        console.log(openedQuestions)
        if (openedQuestions.includes(index)) {
            setOpenedQuestions(prev => prev.filter(activeIndex => activeIndex !== index))
        } else {
            setOpenedQuestions(prev => [...prev, index])
        }
    }

    return (
        <div className={styles.faq}>
            <span className={styles.title}>faq</span>
            <div className={styles.items}>
                {
                    questions.map(({question, answer}, index) => (
                        <div className={styles.item} key={index}>
                            <span onClick={() => handlerChangeOpenedQuestions(index)} className={styles.question}>
                                {question}
                            </span>

                            {/*{*/}
                            {/*    openedQuestions.includes(index) &&*/}
                            {/*    <span className={styles.answer}>*/}
                            {/*        {answer}*/}
                            {/*    </span>*/}
                            {/*}*/}


                            <span
                                className={classNames(
                                    styles.answer,
                                    openedQuestions.includes(index) && styles.active
                                )}
                            >
                                    {answer}
                                </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Faq
