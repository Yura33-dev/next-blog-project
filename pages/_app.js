import Layout from "@/components/layout/layout";
import { NotificationContextProvider } from "@/store/context/notification";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}
