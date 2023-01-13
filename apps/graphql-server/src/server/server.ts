import { resolvers, typeDefs } from "./schema";
import { ApolloServer } from "apollo-server";

import { SongService } from "../domains/song/data-sources/song.service";
import { ArtistsService } from "../domains/artist/data-sources/artist.service";
import { UserService } from "../domains/user/data-sources/user.service";
import { Context } from "./types";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    Song: new SongService(),
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
