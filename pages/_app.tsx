import Head from 'next/head';
import Layout from '../src/components/layouts/main';
import '../styles/reset.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Max_Ezaki</title>
      </Head>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </>
  );
}

export default MyApp;
