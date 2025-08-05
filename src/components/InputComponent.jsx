import styles from "../style/input-component.module.css";
export default function InputComponent({
  inputType,
  inputPlaceholder,
  inputId,
  value,
  onChangeHandler,
  inputName,
}) {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        value={value}
        type={inputType}
        placeholder={inputPlaceholder}
        name={inputName}
        id={inputId}
        onChange={onChangeHandler}
      />
    </div>
  );
}
