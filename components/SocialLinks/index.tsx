import classNames from 'classnames'
import React from 'react'
import styles from './SocialLinks.module.scss'
import {Link} from "react-scroll";

const socialLinks = [
    {
        name: 'twitter',
        href: 'https://twitter.com/aptodoge'
    },
    {
        name: 'discord',
        href: 'https://discord.com'
    },

]

interface SocialLinksProps {
    classNameLink?: string
    classNameContainer?: string
}

const SocialLinks: React.FC<SocialLinksProps> = ({classNameLink, classNameContainer}) => {

    return (
        <div className={classNames(styles.socialLinks, classNameContainer)}>
            {
                socialLinks.map(({name, href}) => (
                    <a
                        key={href}
                        href={href}
                        target='_blank'
                        rel='noreferrer'
                        className={classNames(styles.item, classNameLink)}
                    >
                        {name}
                    </a>
                ))
            }

            {/*<span*/}
            {/*    className={classNames(styles.item, classNameLink)}*/}
            {/*>*/}
            {/*    FAQ*/}
            {/*</span>*/}
            <Link
                smooth={true}
                to='faq'
                className={classNames(styles.item, classNameLink)}
            >
                FAQ
            </Link>
        </div>
    )
}

export default SocialLinks
