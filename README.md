# Spotify Clone

⚠️ This README contains information about this repository. For information about building the project go [here](./exercise/README.md)

## What's inside?

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `graphql-server`: A Apollo GraphQL Server app
- `web`: A [Next.js](https://nextjs.org) app
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Getting Started

Make sure to use Node version 18 & npm version.

#### Intalling dependencies

```
npm install
```

#### Develop

To develop all apps and packages, run the following command:

```
npm run dev
```

#### Codegen

To generate types for your schema:

```
npm run codegen
```

Tp generate types for your schema in watch mode:

```
npm run codegen:watch
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
- [Installing packages](https://turbo.build/repo/docs/handbook/package-installation)
