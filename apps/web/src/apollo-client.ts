import { ApolloClient, InMemoryCache } from "@apollo/client";
import fragmentTypes from "../__generated__/fragments";

export const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache({
    possibleTypes: fragmentTypes.possibleTypes,
    typePolicies: {
      Query: {
        fields: {
          songs: {
            keyArgs: ["where", "sort"],
            merge(existing, incoming) {
              return {
                ...incoming,
                items: [...(existing?.items || []), ...incoming.items],
              };
            },
          },
        },
      },
    },
  }),
});
