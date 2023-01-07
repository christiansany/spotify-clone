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
};

export type Query = {
  __typename?: 'Query';
  artist?: Maybe<Artist>;
  song?: Maybe<Song>;
};


export type QueryArtistArgs = {
  id: Scalars['ID'];
};


export type QuerySongArgs = {
  id: Scalars['ID'];
};

export type Song = {
  __typename?: 'Song';
  id: Scalars['ID'];
};

export type GetSongQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSongQuery = { __typename?: 'Query', song?: { __typename?: 'Song', id: string } | null };


export const GetSongDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSong"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"song"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"song:1","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetSongQuery, GetSongQueryVariables>;