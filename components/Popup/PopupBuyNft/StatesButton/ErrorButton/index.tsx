import styles from './ErrorButton.module.scss'

export const ErrorButton = () => {

    return (
        <>
            <img
                src='/images/buttonMint/error.png'
                alt='error'
            />
            <span className={styles.failed}>failed</span>
        </>
    );
};
