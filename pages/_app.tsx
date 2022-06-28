import "../styles/globals.css";
import type { AppProps } from "next/app";
import firebase from "firebase/compat/app";
import { clientCredentials } from "../firebase/clientApp";

firebase.initializeApp(clientCredentials);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
