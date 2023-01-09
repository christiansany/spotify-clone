import { resolvers, typeDefs } from "./schema";
import { ApolloServer } from "apollo-server";

import { SongsService } from "../domains/song/data-sources/song";
import { ArtistsService } from "../domains/artist/data-sources/artist";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    Song: new SongsService(),
    Artist: new ArtistsService(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
