import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const uiConfig = {
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
};

function SignInScreen() {
  const router = useRouter();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div
        style={{
          margin: "50px",
        }}
      >
        {
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          ></StyledFirebaseAuth>
        }
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <p>
        Bem Vindo {firebase.auth().currentUser?.displayName}! Você está logado.
      </p>

      <div>
        <a style={{ marginRight: "5px" }} onClick={() => router.push("/")}>
          Home
        </a>

        <a
          style={{ marginLeft: "5px" }}
          onClick={() => firebase.auth().signOut()}
        >
          Sair
        </a>
      </div>
    </div>
  );
}

export default SignInScreen;
