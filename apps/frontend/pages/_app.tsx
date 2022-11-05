require('intersection-observer');
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import "../styles/base.scss";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ApolloProvider client={new ApolloClient({
            uri: `${process.env.API}/graphql`,
            cache: new InMemoryCache(),
        })}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
};

export default App;
