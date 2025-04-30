import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import FloatingBookButton from '../components/FloatingBookButton';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        {/* Calendly link widget begin */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        {/* Calendly link widget end */}
      </Head>
      <Component {...pageProps} />
      <FloatingBookButton />
    </ChakraProvider>
  );
}

export default MyApp;
