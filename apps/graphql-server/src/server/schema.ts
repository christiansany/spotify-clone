import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import path from "path";

const typesSubdomains = loadFilesSync(
  path.join(__dirname, "../domains/**/*.graphql"),
  { recursive: true }
);

export const typeDefs = mergeTypeDefs(typesSubdomains);
export const resolvers = loadFilesSync(
  [
    path.join(__dirname, "../domains/**/resolvers.*"),
    path.join(__dirname, "../domains/**/*.resolvers.*"),
  ],
  { extensions: ["", ".ts"] }
);
