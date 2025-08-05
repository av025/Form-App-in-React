import styles from "../style/button.module.css"
export default function ButtonComponent({buttonText}) {
    return <button className={styles.button}>{buttonText}</button>
} 


