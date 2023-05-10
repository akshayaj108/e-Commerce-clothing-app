import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP7v7LLL3U0qKh1IBAfl__YqGWLGqaCLg",
  authDomain: "e-commerce-clothing-app-3d874.firebaseapp.com",
  projectId: "e-commerce-clothing-app-3d874",
  storageBucket: "e-commerce-clothing-app-3d874.appspot.com",
  messagingSenderId: "132456905543",
  appId: "1:132456905543:web:b1d4df0aa9ebe050562a62",
};

// Initialize Firebase
initializeApp(firebaseConfig);
//google auth provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
//signIn with popup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//signIn redirect google
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const db = getFirestore();
//create user document fubnctionality
export const createUserDocs = async (userAuthRes, displayNameOfObject) => {
  const userDocRef = doc(db, "users", userAuthRes.uid);

  const userDocSnapshot = await getDoc(userDocRef);
  console.log(userDocSnapshot.exists());

  const { displayName, email } = userAuthRes;
  const createdAt = new Date();

  if (!userDocSnapshot.exists()) {
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...displayNameOfObject,
      });
      console.log("Created User Document");
    } catch (error) {
      console.log(
        "Getting Error while Creating User Document Error is- \n",
        error
      );
    }
  }
};
export const signUpUserWithEmailAndPassword = async (email, password) => {
  if (!email && !password) return;
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        alert("This Email user is already exist");
        break;
      case "auth/weak-password":
        alert(
          "Password is too weak, Password should be at least 6 characters "
        );
        break;
      default:
        console.log(error);
        break;
    }
  }
};
export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email && !password) return;

  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    //switch  case method for performace
    switch (error.code) {
      case "auth/wrong-password":
        alert("Incoorect Password");
        break;
      case "auth/user-not-found":
        alert("No User Associated with this Email");
        break;
      default:
        console.log(error);
        break;
    }
  }
};
export const signOutuser = async () => await signOut(auth);

export const onAuth_stateChangedListner = (callback) =>
  onAuthStateChanged(auth, callback);
