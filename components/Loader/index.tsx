import {FC} from 'react'
import styles from './Loader.module.scss'
import classNames from "classnames";

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = ({className}) => {

    return (
        <div className={classNames(styles.loader, className)}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    );
};
