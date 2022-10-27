import {useMousePosition} from "../../hooks/useMousePosition";
import styles from "./DotRing.module.scss";

const DotRing = () => {
    const {x, y} = useMousePosition();

    return (
        <>
            <img
                src='/images/logo.png'
                alt='0'
                style={{left: `${x}px`, top: `${y}px`}}
                className={styles.dot}
            />
            <img
                src='/images/logo.png'
                alt='0'
                style={{left: `${x}px`, top: `${y}px`}}
                className={styles.ring}
            />
            <img
                src='/images/logo.png'
                alt='0'
                style={{left: `${x}px`, top: `${y}px`}}
                className={styles.ring}
            />
            <img
                src='/images/logo.png'
                alt='0'
                style={{left: `${x}px`, top: `${y}px`}}
                className={styles.ring}
            />
        </>
    );
};

export default DotRing;