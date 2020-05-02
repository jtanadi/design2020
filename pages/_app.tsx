import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jesen Tanadi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Jesen Tanadi's design portfolio" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
