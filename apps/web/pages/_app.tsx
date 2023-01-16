import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "../src/apollo-client";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
