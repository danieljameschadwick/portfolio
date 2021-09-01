require('intersection-observer');
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import "../styles/base.scss";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql", // @TODO: env var process.env.API
    cache: new InMemoryCache(),
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
};

export default App;
