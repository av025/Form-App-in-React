import { useState } from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import Heading from "./components/Heading";
import { FormContext } from "./context/FormContext";

function App() {
  const [formInput, setFormInput] = useState({
   email : "",
   password: ""
  });

  return (
    <FormContext value={{formInput, setFormInput}}>
      <Heading />
      <FormComponent />
    </FormContext>
  );
}

export default App;
