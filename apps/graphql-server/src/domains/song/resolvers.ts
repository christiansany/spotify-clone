import { Resolvers } from "../../../__generated__/schema.generated";

export const resolvers: Resolvers = {
  Query: {
    song: (_, { id }, context) => context.dataSources.Song.getById(id),
  },
  Song: {
    // Field Resolvers of Song
  },
};
