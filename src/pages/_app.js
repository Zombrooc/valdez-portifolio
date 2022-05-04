/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

        <link
          href="//fonts.googleapis.com/css?family=Nunito"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
