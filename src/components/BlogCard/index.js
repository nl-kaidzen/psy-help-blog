import React from 'react';
import { Link } from 'gatsby';

import styles from './BlogCard.module.scss';

const BlogCard = ({ dateShort, introText, heading }) => {
    return(
        <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
                <span className={styles.imgBadge}>{dateShort}</span>
            </div>
            <ul className={styles.hashContainer}>
                <li>#Психология</li>
                <li>#Мотивация</li>
                <li>#Отношения</li>
            </ul>
            <h2 className={styles.heading}>{heading}</h2>
            <p>{introText}</p>
        </div>
    )
}

export default BlogCard;
