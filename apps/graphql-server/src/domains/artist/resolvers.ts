import { Resolvers } from "../../../__generated__/schema.generated";

const resolvers: Resolvers = {
  Query: {
    artist: (_, { id }, context) => context.dataSources.Song.getById(id),
  },
  Artist: {
    // Field Resolvers of Artist
  },
};

export default resolvers;
