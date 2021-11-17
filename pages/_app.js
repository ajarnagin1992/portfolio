import "styles/globals.css";
import { Layout } from "layout/Layout.js";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
