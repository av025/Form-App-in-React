import styles from "../style/button.module.css"
export default function ButtonComponent({buttonText, onClickHandler}) {
    return <button className={styles.button} onClick={onClickHandler}>{buttonText}</button>
} 


