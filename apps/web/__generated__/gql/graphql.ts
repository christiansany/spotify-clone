/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Artist = {
  __typename?: 'Artist';
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  songs?: Maybe<Array<Maybe<Song>>>;
};


export type ArtistSongsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  userLogin: UserLoginPaylaod;
  userRegister: UserRegisterPaylaod;
};


export type MutationUserLoginArgs = {
  input: UserRegisterInput;
};


export type MutationUserRegisterArgs = {
  input: UserRegisterInput;
};

export type Query = {
  __typename?: 'Query';
  artist?: Maybe<Artist>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  me?: Maybe<User>;
  song?: Maybe<Song>;
  songs?: Maybe<Array<Maybe<Song>>>;
};


export type QueryArtistArgs = {
  id: Scalars['ID'];
};


export type QueryArtistsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QuerySongArgs = {
  id: Scalars['ID'];
};


export type QuerySongsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type Song = {
  __typename?: 'Song';
  artist?: Maybe<Artist>;
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  track: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
};

export type UserError = {
  __typename?: 'UserError';
  field: Array<Scalars['String']>;
  message: Scalars['String'];
};

export type UserLoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserLoginPaylaod = {
  __typename?: 'UserLoginPaylaod';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userErrors: Array<UserError>;
};

export type UserRegisterInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserRegisterPaylaod = {
  __typename?: 'UserRegisterPaylaod';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userErrors: Array<UserError>;
};

export type GetSongQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSongQuery = { __typename?: 'Query', song?: { __typename?: 'Song', id: string } | null };


export const GetSongDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSong"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"song"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"song:1","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetSongQuery, GetSongQueryVariables>;