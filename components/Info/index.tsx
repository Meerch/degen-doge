import React, {useState} from 'react'
import Button from '../UI/Button';
import styles from './Info.module.scss'
import KeyFeatures from "./KeyFeatures";
import MintDetails from "./MintDetails";
import classNames from "classnames";

type TypeTabs = keyof typeof tabs

const tabs = {
    'key-features': <KeyFeatures/>,
    'mint-details': <MintDetails/>,
}

const Info = () => {
    const [selectedTab, setSelectedTab] = useState<TypeTabs>('key-features')

    const handlerChangeTab = (newTab: TypeTabs) => {
        setSelectedTab(newTab)
    }

    return (
        <div className={styles.info}>
            <div className={styles.tabs}>
                <Button
                    onClick={() => handlerChangeTab('key-features')}
                    className={classNames(
                        styles.tab,
                        selectedTab === 'key-features' && styles.active
                    )}
                >
                    <span className={styles.text}>Key features</span>
                </Button>
                <Button
                    onClick={() => handlerChangeTab('mint-details')}
                    className={classNames(
                        styles.tab,
                        selectedTab === 'mint-details' && styles.active
                    )}
                >
                    <span className={styles.text}>Mint details</span>
                </Button>
            </div>

            {tabs[selectedTab]}
        </div>
    )
}

export default Info
