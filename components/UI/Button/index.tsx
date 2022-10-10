import React, {ButtonHTMLAttributes} from 'react'
import styles from './Button.module.scss'
import classNames from "classnames"
import useRenderOnlyClient from "../../../hooks/useRenderOnlyClient";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({className, children, ...props}) => {
    const {isReadyRender} = useRenderOnlyClient()

    return isReadyRender && (
        <button
            className={classNames(styles.button, className)}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
