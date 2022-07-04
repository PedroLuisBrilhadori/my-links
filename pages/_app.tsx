import "../styles/globals.css";
import type { AppProps } from "next/app";
import { initializeApp } from "firebase/app";
import { clientCredentials } from "../firebase/clientApp";

function MyApp({ Component, pageProps }: AppProps) {
  initializeApp(clientCredentials);

  return <Component {...pageProps} />;
}

export default MyApp;
