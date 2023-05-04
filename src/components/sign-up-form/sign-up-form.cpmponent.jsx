import { useState } from "react";
import {
  signUpUserWithEmailAndPassword,
  createUserDocs,
} from "../../utils/firebase/firebasew.utils";
import FormInput from "../form-input/form-input.component";
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
      if (error.code === "auth/email-already-in-use") {
        alert("Its Existed email");
        return;
      }

      console.log(` ${error}`);
    }
  };
  return (
    <>
      <h1>Sign Up with Email</h1>
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
        <button type="submit">SignUp</button>
      </form>
    </>
  );
};

export default SignUpForm;
