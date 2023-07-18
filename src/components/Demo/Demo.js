import styles from './Demo.module.css'

const Demo = () => {
    return (
        <div className={styles["app-demo"]}>
            <h2>Demo of <span className={styles['highlight']}>Talk</span>with<span className={styles['highlight']}>.ai</span></h2>
            <iframe className={styles["app-demo-video"]} width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <p className={styles["app-demo-text"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam</p>
            <a href="#" className={styles["app-demo-button"]}>Build Your Chatbot</a>
        </div>
    );
}

export default Demo;