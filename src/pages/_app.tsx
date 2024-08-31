import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppContextProvider from "@crema/context/AppContextProvider";
import AppThemeProvider from "@crema/context/AppThemeProvider";
import AppLocaleProvider from "@crema/context/AppLocaleProvider";
import AppAuthProvider from "@crema/core/AppAuthProvider";
import AuthRoutes from "@crema/components/AuthRoutes";
import "@crema/mockapi";
import AppPageMeta from "@crema/components/AppPageMeta";
import InfoViewContextProvider from "@crema/context/AppContextProvider/InfoViewContextProvider";
import "antd/dist/reset.css";
import "../../public/styles/index.css";
import { GlobalStyles } from "@crema/core/theme/GlobalStyle";
import { Normalize } from "styled-normalize";
import { AppProps } from "next/app";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

// Client-side cache, shared for the whole session of the user in the browser.

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  const [clientToken, setClientToken] = useState<string>();

  const link = createUploadLink({
    // uri: 'https://l8378ppz-4005.use2.devtunnels.ms/graphql',
    uri: "http://1localhost:4006/graphql",
    // uri:'https://tr2wdsbj-4005.use2.devtunnels.ms/graphql',
    //uri: 'https://ws.vegamovil.com:4005/graphql',
    // uri: 'http://192.168.1.148:4000/graphql',
    // uri: 'http://192.168.199.5:4000/graphql',
    headers: {
      authorization: `${clientToken}`,
    },
  });

  useEffect(() => {
    if (localStorage.getItem("clientToken")) {
      setClientToken(localStorage.getItem("clientToken").toString());
    }
  }, []);

  const client = new ApolloClient({
    name: "web",
    version: "1.0",
    cache: new InMemoryCache(),
    link: link,
  });

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  
  return (
    <ApolloProvider client={client}>
      <AppContextProvider>
        <AppThemeProvider>
          <AppLocaleProvider>
            <InfoViewContextProvider>
              <AppAuthProvider>
                <AuthRoutes>
                  <AppPageMeta />
                  <GlobalStyles />
                  <Normalize />
                  <Component {...pageProps} />
                </AuthRoutes>
              </AppAuthProvider>
            </InfoViewContextProvider>
          </AppLocaleProvider>
        </AppThemeProvider>
      </AppContextProvider>
    </ApolloProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
