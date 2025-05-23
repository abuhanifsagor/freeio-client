import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();




  //SinUp User
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // lOgin User
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }
  //Logout User
  const logout = () => {
    return auth.signOut();
  };

  // Observe User State

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  });

  const authData = {
    user,
    setUser,
    signUp,
    login,
    logout,
    loading,
    setLoading,
    googleLogin,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthContextProvider;
