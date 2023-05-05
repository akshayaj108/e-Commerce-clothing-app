// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import {
//   auth,
//   signInWithGoogle,
//   signInWithGoogleRedirect,
//   createUserDocs,
// } from "../../utils/firebase/firebasew.utils";
import "./authentication.styles.scss";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.cpmponent";

const Auth = () => {
  // useEffect(
  //   () => async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       createUserDocs(response.user);
  //       console.log("User Craeted by Google Redirect");
  //     }
  //   },
  //   []
  // );
  // const logUserWithGoogle = async () => {
  //   const { user } = await signInWithGoogle();

  //   createUserDocs(user);
  // };

  return (
    <div className="authentication-container">
      {/* <button onClick={logUserWithGoogle}>SignIn with Google</button>
      <button onClick={signInWithGoogleRedirect}>
        SignIn with Google redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Auth;
