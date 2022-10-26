import classNames from 'classnames'
import React from 'react'
import styles from './SocialLinks.module.scss'

const socialLinks = [
    {
        name: 'twitter',
        href: 'https://twitter.com/degennftdoge?s=21&t=s6lfbT7PiUGFmJSlvcHN7A'
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
        </div>
    )
}

export default SocialLinks
