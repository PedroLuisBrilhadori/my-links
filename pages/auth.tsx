import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  Auth,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { SignInComponent, AdmScreen } from "../components";

export interface LoginModel {
  email: string;
  password: string;
}

function login(auth: Auth, credentials: LoginModel) {
  signInWithEmailAndPassword(auth, credentials.email, credentials.password)
    .then((user) => {
      console.log(user.user);
    })
    .catch((erro) => {
      console.log({
        code: erro.code,
        message: erro.message,
      });
    });
}

function SignInScreen() {
  const router = useRouter();
  const auth = getAuth();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(auth, (user) => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div id="login" className="flex flex-col items-center mt-5">
        <button onClick={() => router.push("/")}> HOME </button>
        <SignInComponent
          login={(credentials: LoginModel) => login(auth, credentials)}
        ></SignInComponent>
      </div>
    );
  }

  return (
    <div id="login" className="flex flex-col items-center mt-5">
      <button onClick={() => router.push("/")}> HOME </button>
      <AdmScreen></AdmScreen>
    </div>
  );
}

export default SignInScreen;
