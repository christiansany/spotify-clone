import { useQuery } from "@apollo/client";
import React, { FunctionComponent } from "react";
import { graphql } from "../../__generated__/gql";
import { ArtistDetails } from "./ArtistDetails";

const GetSongDetailsDocument = graphql(`
  query GetSongDetails {
    song(id: "song:1") {
      id
      name
      artist {
        ...ArtistDetail_Artist
      }
    }
  }
`);

export const SongDetails: FunctionComponent = () => {
  const { data, loading, error } = useQuery(GetSongDetailsDocument);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <>
      <h1>Song: {data?.song?.name}</h1>
      {data?.song?.artist ? (
        <ArtistDetails artist={data.song.artist}></ArtistDetails>
      ) : null}
    </>
  );
};
