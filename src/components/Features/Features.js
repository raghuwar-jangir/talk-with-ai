import styles from './Features.module.css'
import Feature from "../Feature/Feature"
import featureImg from './feature-img.png'

const features = [
    {
        img: featureImg,
        title: "Save Time",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
    {
        img: featureImg,
        title: "Easy To Use",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
    {
        img: featureImg,
        title: "Customisable",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
    {
        img: featureImg,
        title: "Track You Bot",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
    {
        img: featureImg,
        title: "Easy To Embed",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
    {
        img: featureImg,
        title: "Retrain Bot",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
]

const Features = () => {
    return (
        <div className={styles["feature-section"]}>
            <h2 className={styles["feature-heading"]}>Talk<span className={styles['highlight']}>with</span>.ai Features</h2>
            <div className={styles["feature-cards"]}>
                {features.slice(0, 3).map(feature => <Feature feature={feature} />)}
            </div>
            <div className={styles["feature-cards"]}>
                {features.slice(3).map(feature => <Feature feature={feature} />)}
            </div>
            <a href="#" className={styles["app-build-button"]}>Build Your Chatbot</a>
        </div>
    )
}

export default Features