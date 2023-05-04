import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGoogle,
  signInWithGoogleRedirect,
  createUserDocs,
} from "../../utils/firebase/firebasew.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.cpmponent";

const SignIn = () => {
  useEffect(
    () => async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        createUserDocs(response.user);
        console.log("User Craeted by Google Redirect");
      }
    },
    []
  );
  const logUserWithGoogle = async () => {
    const { user } = await signInWithGoogle();

    createUserDocs(user);
  };

  return (
    <>
      <h1>Sign In</h1>
      <button onClick={logUserWithGoogle}>SignIn with Google</button>
      <button onClick={signInWithGoogleRedirect}>
        SignIn with Google redirect
      </button>
      <SignUpForm />
    </>
  );
};

export default SignIn;
