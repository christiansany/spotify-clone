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
  input: UserLoginInput;
};


export type MutationUserRegisterArgs = {
  input: UserRegisterInput;
};

export type Query = {
  __typename?: 'Query';
  artist?: Maybe<Artist>;
  artists: Array<Artist>;
  me?: Maybe<User>;
  song?: Maybe<Song>;
  songs: Array<Song>;
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

export type ArtistDetail_ArtistFragment = { __typename?: 'Artist', id: string, name: string, image: string } & { ' $fragmentName'?: 'ArtistDetail_ArtistFragment' };

export type UserLoginMutationVariables = Exact<{
  input: UserLoginInput;
}>;


export type UserLoginMutation = { __typename?: 'Mutation', userLogin: { __typename?: 'UserLoginPaylaod', token?: string | null, userErrors: Array<{ __typename?: 'UserError', field: Array<string>, message: string }>, user?: { __typename?: 'User', id: string, username: string } | null } };

export type GetSongDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSongDetailsQuery = { __typename?: 'Query', song?: { __typename?: 'Song', id: string, name: string, artist?: (
      { __typename?: 'Artist' }
      & { ' $fragmentRefs'?: { 'ArtistDetail_ArtistFragment': ArtistDetail_ArtistFragment } }
    ) | null } | null };

export type GetSongsQueryVariables = Exact<{
  take: Scalars['Int'];
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type GetSongsQuery = { __typename?: 'Query', songs: Array<{ __typename?: 'Song', id: string, name: string }> };

export const ArtistDetail_ArtistFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArtistDetail_Artist"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Artist"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]} as unknown as DocumentNode<ArtistDetail_ArtistFragment, unknown>;
export const GetSongDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSong"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"song"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"song:1","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetSongQuery, GetSongQueryVariables>;
export const UserLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserLoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userErrors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<UserLoginMutation, UserLoginMutationVariables>;
export const GetSongDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSongDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"song"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"song:1","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"artist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArtistDetail_Artist"}}]}}]}}]}},...ArtistDetail_ArtistFragmentDoc.definitions]} as unknown as DocumentNode<GetSongDetailsQuery, GetSongDetailsQueryVariables>;
export const GetSongsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSongs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"songs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetSongsQuery, GetSongsQueryVariables>;