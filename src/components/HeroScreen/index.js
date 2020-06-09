import React from 'react';

import styles from './heroscreen.module.scss';
import photo from '../../images/1.jpg'

const HeroScreen = () => {
    return(
        <section className={styles.main}>
            <div className={styles.left}>
                <img src={photo} className={styles.photo} alt="Фотография психолога"/>
            </div>
            <div className={styles.right}>
                <h1 className="h4-text">Меня зовут Анастасия Анишина. Я занимаюсь психологией...</h1>
                <p>Я помогу вам найти дорогу к своему счастью...</p>
            </div>
        </section>
    )
}

export default HeroScreen;
