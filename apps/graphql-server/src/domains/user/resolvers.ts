import { Resolvers } from "../../../__generated__/schema.generated";

export const resolvers: Resolvers = {
  Query: {
    me: (_, __, context) =>
      context.token ? context.dataSources.User.me(context.token) : null,
  },
  Mutation: {
    userRegister: (_, { input }, context) =>
      context.dataSources.User.register(input),
    userLogin: (_, { input }, context) => context.dataSources.User.login(input),
  },
};
