import styles from './FieldPrintLogo.module.scss'
import React, {useCallback, useState} from 'react'
import {useSelector} from "react-redux";

export const FieldPrintLogo = () => {
    const [items, setItems] = useState([])

    const onClickWrapper = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        console.log(event.clientY)
        console.log(event.clientX)
        const x = event.pageX - 15
        const y =  event.pageY - 15

        const findItem = items.find((item) => item.x === x && item.y === y)

        if (!findItem) {
            console.log('not found')
            setItems(prev => {
                return [...prev, {
                    x: event.pageX - 15,
                    y: event.pageY - 15
                }]
            })
        }
    }, [])

    return (
        <div onClick={onClickWrapper} className={styles.field}>
            {
                items && items.map(({x, y}, index) => (
                    <img
                        style={{
                            left: x,
                            top: y
                        }}
                        key={x + y + index}
                        className={styles.logo}
                        src="/images/logo.png"
                        alt="LOGO"
                    />
                ))
            }
        </div>
    );
};
