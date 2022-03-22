import "../styles/globals.css";
import { DeadPlantWrapper } from "../context/deadplantcontext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DeadPlantWrapper>
        <Component {...pageProps} />
      </DeadPlantWrapper>
    </>
  );
}

export default MyApp;
