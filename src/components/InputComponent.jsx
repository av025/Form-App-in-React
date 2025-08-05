import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import styles from "../style/input-component.module.css";
import { FormContext } from "../context/FormContext";

export default forwardRef(function InputComponent(
  { inputType, inputPlaceholder, inputId, inputName, label, valid },
  ref
) {
  const { formInput, setFormInput } = useContext(FormContext);
  const [text, setText] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [shake, setShake] = useState(false); 

  //  Introduce the local Ref which was local to this component
  const localRef = useRef(null);


  useEffect(() => {
    setIsValid(true);
    setShake(false)
  }, [text])

  //* Using useImperativeHandle hook to modify our ref
  useImperativeHandle(
    ref,
    () => {
      return {
        focus: () => localRef.current.focus(),
        invalid: () => setIsValid(false),
        shake: () => setShake(true)
      };
    },
    [setIsValid , setShake]
  );

  return (
    <div className={styles.inputWrapper}>
      <input
        className={`${!isValid ? styles.inputError : styles.input} ${shake && styles.shake}`}
        type={inputType}
        placeholder={inputPlaceholder}
        name={inputName}
        id={inputId}
        value={text}
        onChange={(event) => {
          setText(event.target.value);
          setFormInput({ ...formInput, [label]: event.target.value });
        }}
        ref={localRef}
      /> 
      {isValid && <p className={styles.errorText}>{label} is invalid</p>}
    </div>
  );
});
