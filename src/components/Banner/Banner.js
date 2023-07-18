import React from "react";
import styles from './Banner.module.css'
import logo from './chat.png'

const Banner = () => {
    return (
        <div className={styles["banner"]}>
            <div className={styles["banner-text"]}>
                <h1>Create Your <span className={styles['highlight']}>Automated AI</span><br />
                    <span className={styles['highlight']}>Chatbot Feature For Your Website </span> In<br />Few Minutes</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </p>

                <a href="#" className={styles['build-btn']}>Build Your Chatbot &#8594;</a>

            </div>
            <div className={styles["banner-image"]}>
                <img src={logo} alt="Banner Image" />
            </div>
        </div >
    );
}

export default Banner;