import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { SessionProvider } from 'next-auth/react';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.sessions}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
