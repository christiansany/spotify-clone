import { Resolvers } from "../../../__generated__/schema.generated";

export const resolvers: Resolvers = {
  Query: {
    song: (_, { id }, context) => context.dataSources.Song.getSongById(id),
    songs: (_, { take, skip }, context) =>
      context.dataSources.Song.getAllSongs(take, skip),
  },
  Song: {
    artist: (parent, _, context) =>
      context.dataSources.Artist.getArtistById(parent.artist),
  },
};
