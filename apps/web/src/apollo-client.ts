// TODO: Make this code work by following the steps here: https://www.apollographql.com/docs/react/get-started
import { ApolloClient, InMemoryCache } from "@apollo/client";
import fragmentTypes from "../__generated__/fragments";

export const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache({
    possibleTypes: fragmentTypes.possibleTypes,
  }),
});
