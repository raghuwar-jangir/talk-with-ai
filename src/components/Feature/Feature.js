import styles from './Feature.module.css'


const Feature = ({ feature }) => {

    return (
        <div className={styles["feature-card"]}>
            <img src={feature.img} alt="Feature Image" />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
        </div>
    )

}

export default Feature;