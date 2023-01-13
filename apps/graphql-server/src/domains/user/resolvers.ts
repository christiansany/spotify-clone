import { Resolvers } from "../../../__generated__/schema.generated";

export const resolvers: Resolvers = {
  Query: {
    me: async (_, __, context) =>
      context.token ? context.dataSources.User.me(context.token) : null,
  },
  Mutation: {
    userRegister: async (_, { input }, context) => {
      return context.dataSources.User.register(input);
    },
    userLogin: async (_, { input }, context) => {
      return context.dataSources.User.login(input);
    },
  },
};
