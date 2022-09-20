import React, {FC, HTMLProps, useEffect, useRef} from 'react'
import {useOnClickOutside} from 'usehooks-ts'
import styles from './PopupLayout.module.scss'
import {useDispatch} from "react-redux";
import {changeCurrentPopup} from "../../../redux/actions/popup";
import classNames from 'classnames';

interface PopupLayoutProps {

}

const PopupLayout: FC<HTMLProps<PopupLayoutProps>> = ({children, className}) => {
    const ref = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if (window !== undefined) {
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = 'visible'
        }
    }, [])

    const handlerClosePopup = () => {
        dispatch(changeCurrentPopup(null))
    }

    useOnClickOutside(ref, handlerClosePopup)

    return (
        <div className={styles.container}>
            <div ref={ref} className={classNames(styles.popup, className)}>
                {children}

                <div
                    onClick={handlerClosePopup}
                    className={styles.close}
                >
                    X
                </div>
            </div>
        </div>
    )
}

export default PopupLayout
