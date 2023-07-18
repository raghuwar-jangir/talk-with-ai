import styles from './Step.module.css'
const Step = ({ step, index }) => {
    return (
        <div className={styles["card"]}>
            <img src={step.img} alt="Image 1" />
            <text>{index + 1}. {step.title}</text>
            <p>{step.description}</p>
        </div>
    )
}

export default Step;