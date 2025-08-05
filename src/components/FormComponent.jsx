import { useContext, useRef, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import passwordValidator from "../helper/passwordValidator";
import emailValidator from "../helper/emailValidator";
import { FormContext } from "../context/FormContext";

export default function FormComponent() {
  const { formInput } = useContext(FormContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleInvalidEmail();
    handleInvalidPassword();
  };

  const handleInvalidEmail = () => {
    if (!emailValidator(formInput.email)) {
      emailRef.current.focus();
      emailRef.current.invalid();
      emailRef.current.shake();
    }
  };

  const handleInvalidPassword = () => {
    if (!passwordValidator(formInput.password)) {
      passwordRef.current.focus();
      passwordRef.current.invalid();
      passwordRef.current.shake();
    }
  };

  return (
    //! This noValidate prop or attribute will stop the default input field validation in React
    <form onSubmit={handleFormSubmit} noValidate>
      <InputComponent
        inputId={"user-email"}
        inputName={"user-email"}
        inputType="email"
        inputPlaceholder={"Enter the Email here..."}
        label={"email"}
        ref={emailRef}
        checkOnBlur={handleInvalidEmail}
      />
      <InputComponent
        inputId={"user-password"}
        inputName={"user-password"}
        inputType="password"
        inputPlaceholder={"Enter the Password here..."}
        label={"password"}
        ref={passwordRef}
        checkOnBlur={handleInvalidPassword}
      />
      <ButtonComponent buttonText={"Submit"} />
    </form>
  );
}
