import { Resolvers } from "../../../__generated__/schema.generated";

const resolvers: Resolvers = {
  Query: {
    artist: (_, { id }, context) =>
      context.dataSources.Artist.getArtistById(id),
  },
  Artist: {
    songs: (parent, { take, skip }, context) =>
      context.dataSources.Song.getAllSongsByArtistId(parent.id, take, skip),
  },
};

export default resolvers;
