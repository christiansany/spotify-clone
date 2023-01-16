import { ApolloClient, InMemoryCache } from "@apollo/client";
import { concatPagination } from "@apollo/client/utilities";
import fragmentTypes from "../__generated__/fragments";

export const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache({
    possibleTypes: fragmentTypes.possibleTypes,
    typePolicies: {
      Query: {
        fields: {
          songs: concatPagination(),
        },
      },
    },
  }),
});
