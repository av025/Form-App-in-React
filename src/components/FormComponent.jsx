import { useContext, useRef, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import passwordValidator from "../helper/passwordValidator";
import emailValidator from "../helper/emailValidator";
import { FormContext } from "../context/FormContext";

export default function FormComponent() {
  const [step, setStep] = useState(1);

  const { formInput } = useContext(FormContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const usernameRef = useRef(null); 
  const addressRef = useRef(null); 

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
  if (step === 1) {
    return (
      //! This noValidate prop or attribute will stop the default input field validation in React
      <form onSubmit={handleFormSubmit} noValidate>
        <InputComponent
        key={1}
          inputId={"user-email"}
          inputName={"user-email"}
          inputType="email"
          inputPlaceholder={"Enter the Email here..."}
          label={"email"}
          ref={emailRef}
          checkOnBlur={handleInvalidEmail}
        />
        <InputComponent
        key={2}
          inputId={"user-password"}
          inputName={"user-password"}
          inputType="password"
          inputPlaceholder={"Enter the Password here..."}
          label={"password"}
          ref={passwordRef}
          checkOnBlur={handleInvalidPassword}
        />
        <ButtonComponent
          buttonText={"Go On Next"}
          onClickHandler={() => setStep(step + 1)}
        />
      </form>
    );
  } else if (step === 2) {
    return (
      <form onSubmit={handleFormSubmit} noValidate>
        <InputComponent
        key={3}
          inputId={"username-input"}
          inputName={"username-input"}
          inputType="text"
          inputPlaceholder={"Enter the Username here..."}
          label={"text"}
          ref={usernameRef}
          checkOnBlur={() => console.log("Not needed Validation")}
        />
        <ButtonComponent
          buttonText={"Go On Previous"}
          onClickHandler={() => setStep(step - 1)}
        />
        <ButtonComponent
          buttonText={"Go On Next"}
          onClickHandler={() => setStep(step + 1)}
        />
      </form>
    );
  } else if (step === 3) {
    return (
      <form onSubmit={handleFormSubmit} noValidate>
        <InputComponent
        key={4}
          inputId={"user-address"}
          inputName={"user-address"}
          inputType="text"
          inputPlaceholder={"Enter the Address here..."}
          label={"text"}
          ref={addressRef}
          checkOnBlur={() => console.log("Not needed Validation")}
        />
        <ButtonComponent
          buttonText={"Go On Previous"}
          onClickHandler={() => setStep(step - 1)}
        />
        <ButtonComponent buttonText={"Submit"} />
      </form>
    );
  }
}
