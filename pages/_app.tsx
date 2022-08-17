import { ChakraProvider } from '@chakra-ui/provider';
import Layout from '../src/components/layouts/main';
import '../styles/reset.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
// import { css } from '@linaria/core';
// const style = css`
//   background-color: #fafafa;
// `;

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    // <ChakraProvider>
    <Layout router={router}>
      <Component {...pageProps} key={router.route} />
    </Layout>
    // </ChakraProvider>
  );
}

export default MyApp;
