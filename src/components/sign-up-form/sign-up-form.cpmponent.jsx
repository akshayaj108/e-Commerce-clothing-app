import { useState } from "react";
import "./sign-up-form.styles.scss";

import {
  signUpUserWithEmailAndPassword,
  createUserDocs,
} from "../../utils/firebase/firebasew.utils";
import FormInput from "../form-input/form-input.component";
//imported Custom Button Component
import Button from "../button/button.component";
//imported global contexts
// import { UserContext } from "../../contexts/user.contexts";

//default empty from data
const defaultData = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultData);
  const { displayName, email, password, confirmPassword } = formFields;

  //Handle change for handle input onchange value
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setFormFields({ ...formFields, [name]: value });
  };
  //function for clearing form data
  const clearFieldData = () => {
    setFormFields(defaultData);
  };
  // for submit function to submit data
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("handleSubmit get called");
    if (password !== confirmPassword) {
      alert("Password Not same");
      return;
    }
    try {
      console.log(email, ": ", password);
      const { user } = await signUpUserWithEmailAndPassword(email, password);

      await createUserDocs(user, { displayName });
      clearFieldData();
    } catch (error) {
      console.log(` ${error}`);
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have a account</h2>
      <span>Sign Up with Email</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button type="submit">SignUp</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
