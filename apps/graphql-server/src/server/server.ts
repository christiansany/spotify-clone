import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers, typeDefs } from "./schema";
import SonsAPI from "../domains/song/data-sources/song";
import ArtistAPI from "../domains/artist/data-sources/artist";
import { Context } from "./types";

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => {
    return {
      dataSources: {
        Song: new SonsAPI(),
        Artist: new ArtistAPI(),
      },
    };
  },
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
