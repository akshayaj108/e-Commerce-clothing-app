import { useState } from "react";

import FormInput from "../form-input/form-input.component";
//imported Custom Button Component
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebasew.utils";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";

//default empty from data
const defaultData = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultData);
  const { email, password } = formFields;

  //Handle change for handle input onchange value
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    response
      ? alert("Successfully Login with Google")
      : alert("Something went wrong");
  };
  //function for clearing form data
  const clearFieldData = () => {
    setFormFields(defaultData);
  };
  // for submit function to submit data
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      user && alert("Successfully Logged In");
      clearFieldData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account</h2>
      <span>Sign In with Email</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />

        <ButtonsContainer>
          <Button type="submit">SignIn</Button>
          <Button
            type="button"
            buttontype={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            SignIn With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
