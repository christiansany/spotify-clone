import { useQuery } from "@apollo/client";
import React, { FunctionComponent } from "react";
import { graphql } from "../../__generated__/gql";

const GetSongsDocument = graphql(`
  query GetSongs($take: Int!, $skip: Int) {
    songs(take: $take, skip: $skip) {
      id
      name
    }
  }
`);

export const SongsList: FunctionComponent = () => {
  const { data, loading, error, fetchMore } = useQuery(GetSongsDocument, {
    variables: { take: 5 },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <>
      <h1>SongsList</h1>
      <ul>
        {data?.songs.map((song) => (
          <li>
            <p>Song: {song.name}</p>
          </li>
        ))}
      </ul>
      <button
        onClick={() => fetchMore({ variables: { skip: data?.songs.length } })}
      >
        Load More
      </button>
    </>
  );
};
