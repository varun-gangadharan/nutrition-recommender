// Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css'; // import CSS Module file

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>Healthy Meal Planner</h1>
        </nav>
    );
}

export default Navbar;
