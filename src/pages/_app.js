import 'tailwindcss/tailwind.css';
import '/src/app/globals.css';
import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
        <Link
          href="https://fonts.googleapis.com/css2?family=Comic+Sans+MS&display=swap"
          rel="stylesheet"
        />
        <Link
          href="https://fonts.googleapis.com/css2?family=Malgun+Gothic&display=swap"
          rel="stylesheet"
        />
        <Link
          href="https://fonts.googleapis.com/css2?family=Trebuchet+MS&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;