// Footer.jsx
import React from 'react';
import styles from './Footer.module.css'; // import CSS Module file

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>© 2023 Healthy Meal Planner</p>
        </footer>
    );
}

export default Footer;
