import { createContext, useState, useEffect } from "react";
import {
  createUserDocs,
  onAuth_stateChangedListner,
} from "../utils/firebase/firebasew.utils";

//as actual value you want to store
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuth_stateChangedListner((user) => {
      if (user) {
        createUserDocs(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
