import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Config/FirebaseConfig";
import useAxios from "../Hooks/useAxios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const axios = useAxios();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const newUserSignUp = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userLogOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
        const email = user.email;
        const res = axios.post("/auth/access-token", { email });

        console.log(email);
      }
    });
    return () => unSubscribe();
  }, [axios]);
  const values = { newUserSignUp, userLogin, userLogOut, user, isLoading };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
