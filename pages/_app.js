import Head from 'next/head';
import Layout from '@/components/layout/layout';
import { NotificationContextProvider } from '@/store/context/notification';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <title>NextJS Blog</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}
