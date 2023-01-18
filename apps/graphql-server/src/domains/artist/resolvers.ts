import { Resolvers } from "../../../__generated__/schema.generated";

export const resolvers: Resolvers = {
  Query: {
    artist: (_, { id }, context) =>
      context.dataSources.Artist.getArtistById(id),
    artists: (_, { take, skip }, context) =>
      context.dataSources.Artist.getAllArtists(take, skip),
  },
  Artist: {
    songs: (parent, { take, skip }, context) =>
      context.dataSources.Song.getAllSongsByArtistId(parent.id, take, skip),
  },
};
