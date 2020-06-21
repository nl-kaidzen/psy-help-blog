import React from 'react';
import { Link } from 'gatsby';

import styles from './BlogCard.module.scss';

const BlogCard = ({ dateShort, introText, heading }) => {
    return(
        <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
                <span className={styles.imgBadge}>{dateShort}</span>
            </div>
            <div className={styles.infoContainer}>
                <h2 className={styles.heading}>{heading}</h2>
                <p>{introText}</p>  
                <ul className={styles.hashContainer}>
                    <li className={styles.hashItem}>#Психология</li>
                    <li className={styles.hashItem}>#Мотивация</li>
                    <li className={styles.hashItem}>#Отношения</li>
                </ul>  
            </div>
        </div>
    )
}

export default BlogCard;
  