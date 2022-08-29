import Head from 'next/head';
import Layout from '../src/components/layouts/main';
import '../styles/reset.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Noto+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Max_Ezaki - Official Website -</title>
        <meta
          name="description"
          content="Max_Ezaki のオフィシャルウェブサイト"
        />
        <meta property="og:url" content="https://maxezaki.com" />
        <meta
          property="og:site_name"
          content="Max_Ezaki - Official Website -"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Max_Ezaki - Official Website -" />
        <meta
          property="og:description"
          content="Max_Ezaki のオフィシャルウェブサイト"
        />
        <meta property="og:image" content="https://maxezaki.com/ogp.jpeg" />
      </Head>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </>
  );
}

export default MyApp;
