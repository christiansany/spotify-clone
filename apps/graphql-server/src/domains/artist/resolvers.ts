import { Resolvers } from "../../../__generated__/schema.generated";

const resolvers: Resolvers = {
  Query: {
    artist: (_, { id }, context) => context.dataSources.Song.getById(id),
  },
};

export default resolvers;
