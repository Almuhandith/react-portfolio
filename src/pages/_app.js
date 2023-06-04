import 'tailwindcss/tailwind.css';
import '/src/app/globals.css';
import { useEffect } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('light');

    return () => {
      root.classList.remove('light');
    };
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comic+Sans+MS&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;