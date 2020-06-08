import React from 'react';
import { Link } from 'gatsby';

import styles from './header.module.scss';

const Header = () => {
    return(
        <nav className={styles.navContainer}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link to="/" className={styles.navLink}>Главная</Link>
                </li>
                <li>
                    <Link to="/about" className={styles.navLink}>Обо мне</Link>
                </li>
                <li>
                    <Link to="/blog" className={styles.navLink}>Блог</Link>
                </li>
                <li>
                    <Link to="/case" className={styles.navLink}>Кейсы из практики</Link>
                </li>
                <li>
                    <Link to="/faq" className={styles.navLink}>Вопросы</Link>
                </li>
                <li>
                    <Link to="/contact" className={styles.navLink}>Контакты</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
