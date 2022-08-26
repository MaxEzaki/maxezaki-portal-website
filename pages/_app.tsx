import Head from 'next/head';
import Layout from '../src/components/layouts/main';
import '../styles/reset.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import css from 'linaria';

// export const global = css`
//   :global() {
//   }
// `;

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
      </Head>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </>
  );
}

export default MyApp;
