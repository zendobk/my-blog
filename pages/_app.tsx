import '@/styles/globals.css';
import { GoogleTagManager } from '@next/third-parties/google';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />;
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
    </>
  );
};

export default App;
