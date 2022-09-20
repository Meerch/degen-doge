import {FC} from 'react'
import styles from './Plug.module.scss'
import SocialLinks from "../SocialLinks";

interface PlugProps {
    className?: string;
}

const Plug: FC<PlugProps> = ({className}) => {

    return (
        <div className={styles.plug}>
            <SocialLinks />
            <div className={styles.logo}>
                <img
                    className={styles.image}
                    src="/images/logo.png"
                    alt="Logo"
                />
                <span className={styles.text}>
                    <span className={styles.firstWord}>degen</span>
                    <br/>doge
                </span>
            </div>

            <span className={styles.amountNft}>5555 NFTs</span>
            <span className={styles.coming}>coming soon...</span>
            <img
                className={styles.dogechain}
                src="/images/dogechain.png"
                alt="dogechain"
            />
        </div>
    );
};

export default Plug
