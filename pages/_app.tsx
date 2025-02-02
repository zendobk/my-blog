import '@/styles/globals.css';
import { GoogleTagManager } from '@next/third-parties/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <Component {...pageProps} />
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
    </>
  );
};

export default App;
