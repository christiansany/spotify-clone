/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query GetSong {\n    song(id: \"song:1\") {\n      id\n    }\n  }\n": types.GetSongDocument,
    "\n  fragment ArtistDetail_Artist on Artist {\n    id\n    name\n    image\n  }\n": types.ArtistDetail_ArtistFragmentDoc,
    "\n  mutation UserLogin($input: UserLoginInput!) {\n    userLogin(input: $input) {\n      userErrors {\n        field\n        message\n      }\n      user {\n        id\n        username\n      }\n      token\n    }\n  }\n": types.UserLoginDocument,
    "\n  query GetSongDetails {\n    song(id: \"song:1\") {\n      id\n      name\n      artist {\n        ...ArtistDetail_Artist\n      }\n    }\n  }\n": types.GetSongDetailsDocument,
    "\n  query GetSongs(\n    $where: SongsFilter\n    $take: Int!\n    $skip: Int\n    $sort: SongSort\n  ) {\n    songs(where: $where, take: $take, skip: $skip, sort: $sort) {\n      items {\n        id\n        name\n      }\n      totalCount\n    }\n  }\n": types.GetSongsDocument,
};

export function graphql(source: "\n  query GetSong {\n    song(id: \"song:1\") {\n      id\n    }\n  }\n"): (typeof documents)["\n  query GetSong {\n    song(id: \"song:1\") {\n      id\n    }\n  }\n"];
export function graphql(source: "\n  fragment ArtistDetail_Artist on Artist {\n    id\n    name\n    image\n  }\n"): (typeof documents)["\n  fragment ArtistDetail_Artist on Artist {\n    id\n    name\n    image\n  }\n"];
export function graphql(source: "\n  mutation UserLogin($input: UserLoginInput!) {\n    userLogin(input: $input) {\n      userErrors {\n        field\n        message\n      }\n      user {\n        id\n        username\n      }\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation UserLogin($input: UserLoginInput!) {\n    userLogin(input: $input) {\n      userErrors {\n        field\n        message\n      }\n      user {\n        id\n        username\n      }\n      token\n    }\n  }\n"];
export function graphql(source: "\n  query GetSongDetails {\n    song(id: \"song:1\") {\n      id\n      name\n      artist {\n        ...ArtistDetail_Artist\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSongDetails {\n    song(id: \"song:1\") {\n      id\n      name\n      artist {\n        ...ArtistDetail_Artist\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query GetSongs(\n    $where: SongsFilter\n    $take: Int!\n    $skip: Int\n    $sort: SongSort\n  ) {\n    songs(where: $where, take: $take, skip: $skip, sort: $sort) {\n      items {\n        id\n        name\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query GetSongs(\n    $where: SongsFilter\n    $take: Int!\n    $skip: Int\n    $sort: SongSort\n  ) {\n    songs(where: $where, take: $take, skip: $skip, sort: $sort) {\n      items {\n        id\n        name\n      }\n      totalCount\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;