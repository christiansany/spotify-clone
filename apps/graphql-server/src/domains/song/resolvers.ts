import { Resolvers } from "../../../__generated__/schema.generated";

export const resolvers: Resolvers = {
  Query: {
    song: (_, { id }, context) => context.dataSources.Song.getSongById(id),
    songs: (_, { where, take, skip, sort }, context) =>
      context.dataSources.Song.getAllSongs(where || {}, take, skip, sort),
  },
  Song: {
    artist: (parent, _, context) =>
      context.dataSources.Artist.getArtistById(parent.artist),
  },
};
