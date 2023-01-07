import { resolvers, typeDefs } from "./schema";
import { ApolloServer } from "apollo-server";

import SonsAPI from "../domains/song/data-sources/song";
import ArtistAPI from "../domains/artist/data-sources/artist";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    Song: new SonsAPI(),
    Artist: new ArtistAPI(),
  }),
});

server.listen().then(({ url }) => {
  // tslint:disable-next-line
  console.log(`🚀 Server ready at ${url}`);
});
