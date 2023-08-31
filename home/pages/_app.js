import "../styles/buttons.css";
import Cookies from "../components/cookies";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Cookies />
      <Component {...pageProps} />
    </>
  );
}
