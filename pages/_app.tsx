import Layout from "../components/layout/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "../public/css/style.css";
import "../public/css/media.css";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import SnackbarProvider from "react-simple-snackbar";
import AppContext from "../utils/AppContext";
import { useState } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [contextData, setContextData] = useState<any>();
  return (
    <AppContext.Provider
      value={{
        state: contextData,
        setState: setContextData,
      }}
    >
      <Provider store={store}>
        <SnackbarProvider>
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        </SnackbarProvider>
      </Provider>
    </AppContext.Provider>
  );
}

export default MyApp;
