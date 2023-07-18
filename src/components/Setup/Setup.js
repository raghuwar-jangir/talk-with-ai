import styles from './Setup.module.css';
import Step from '../Step/Step';
import stepImg from './setup.jpg'

const steps = [
    {
        img: stepImg,
        title: "Login with your account",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
    {
        img: stepImg,
        title: "Login with your account",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
    {
        img: stepImg,
        title: "Login with your account",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
    {
        img: stepImg,
        title: "Login with your account",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    }
]

const Setup = () => {
    return (
        <div className={styles["easy-setup"]}>
            <h2 className={styles["easy-setup-heading"]}>Easy <span className={styles['highlight']}>To</span> Setup</h2>
            <div className={styles["easy-setup-cards"]}>
                {steps.map((step, index) => <Step step={step} index={index} />)}
            </div>
            <a href="#" className={styles["easy-setup-button"]}>Build Your Chatbot</a>
        </div>
    )
}

export default Setup;