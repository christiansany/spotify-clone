import { resolvers, typeDefs } from "./schema";
import { ApolloServer } from "apollo-server";

import { SongsService } from "../domains/song/data-sources/song";
import { ArtistsService } from "../domains/artist/data-sources/artist";
import { UserService } from "../domains/user/data-sources/user";
import { Context } from "./types";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    Song: new SongsService(),
    Artist: new ArtistsService(),
    User: new UserService(),
  }),
  context: ({ req }): Omit<Context, "dataSources"> => {
    const token = req.headers.authorization;
    return { token };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
