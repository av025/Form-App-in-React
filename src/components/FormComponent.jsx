import { useRef, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import passwordValidator from "../helper/passwordValidator";
import emailValidator from "../helper/emailValidator";

export default function FormComponent() {
  const [formValues, setFormValues] = useState({ email: "", password: "" }); 

  const emailRef = useRef(null); 
  const passwordRef = useRef(null); 
 
  const handleFormSubmit = (event) => {
    event.preventDefault(); 
    validatePassword();
    validateEmail(); 

  }

  const validatePassword = () => {
    const password = formValues.password; 
    if(!passwordValidator(password)) {
      passwordRef.current.focus(); 
       console.log("Params are doesn't match")
    }
    
  }; 

  const validateEmail = () => {
    const email = formValues.email; 
    if(!emailValidator(email)) {
      emailRef.current.focus(); 
        console.log("Email are doesn't match")
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <InputComponent
      inputId= {"user-email"}
      inputName = {"user-email"}
        inputType="email"
        value={formValues.email}
        inputPlaceholder={"Enter the Email here..."}
        onChangeHandler = {(event) => {
            setFormValues({...formValues, email: event.target.value})
        }}
        ref={emailRef}
      />
      <InputComponent
      inputId={"user-password"}
      inputName={"user-password"}
        inputType="password"
        value={formValues.password}
        inputPlaceholder={"Enter the Password here..."}
        onChangeHandler={(event) => {
            setFormValues({...formValues, password: event.target.value})
        }}
        ref={passwordRef}
      />
      <ButtonComponent buttonText={"Submit"} />
    </form>
  );
}
