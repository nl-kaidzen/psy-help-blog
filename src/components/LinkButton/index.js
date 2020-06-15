import React from 'react';
import { Link } from 'gatsby';

import styles from './LinkButton.module.scss';

const LinkButton = ({ to, children }) => {
    return(
        <Link to={to} className={styles.link}>{children}</Link>
    )
}

export default LinkButton;
