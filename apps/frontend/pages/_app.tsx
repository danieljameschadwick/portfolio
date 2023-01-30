require("intersection-observer");

import { AppProps } from "next/app";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Analytics } from "@vercel/analytics/react";

import "../styles/base.scss";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider
      client={
        new ApolloClient({
          uri: `${process.env.API}/graphql`,
          cache: new InMemoryCache(),
        })
      }
    >
      <Component {...pageProps} />
      <Analytics />
    </ApolloProvider>
  );
};

export default App;
