import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import styles from './layout.module.scss';

const Layout = (props) => {
    return(
        <>
            <Header />
            <main className={styles.mainContainer}>
                {props.children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;
