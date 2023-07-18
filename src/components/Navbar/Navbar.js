import React from "react";
import styles from './Navbar.module.css'
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <a href="#" className={styles["navbar-logo"]}><span className={styles['highlight']}>Talk</span>with
                &nbsp;<img src="https://e7.pngegg.com/pngimages/498/917/png-clipart-computer-icons-desktop-chatbot-icon-blue-angle-thumbnail.png" alt="Logo" className={styles["navbar-logo"]} />
            </a>

            <ul className={styles["navbar-links"]}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact-us">Contact Us</a></li>
            </ul>
            <a href="#" className={styles["navbar-button"]}>Build Your Chatbot</a>
        </nav>
    )
}

export default Navbar;