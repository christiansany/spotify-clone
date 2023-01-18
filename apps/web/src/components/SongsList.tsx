import { useQuery } from "@apollo/client";
import React, { FunctionComponent, useState } from "react";
import { graphql } from "../../__generated__/gql";
import { SongSort } from "../../__generated__/gql/graphql";

const GetSongsDocument = graphql(`
  query GetSongs(
    $where: SongsFilter
    $take: Int!
    $skip: Int
    $sort: SongSort
  ) {
    songs(where: $where, take: $take, skip: $skip, sort: $sort) {
      items {
        id
        name
      }
      totalCount
    }
  }
`);

export const SongsList: FunctionComponent = () => {
  const [sort, setSort] = useState<SongSort>(SongSort.NameAsc);
  const { data, loading, error, fetchMore } = useQuery(GetSongsDocument, {
    variables: { take: 5, sort },
  });

  return (
    <div>
      <select onChange={(e) => setSort(e.target.value as SongSort)}>
        <option value={SongSort.NameAsc}>Name (ascending)</option>
        <option value={SongSort.NameDesc}>name (descending)</option>
      </select>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : !data ? (
        <p>No Data was found...</p>
      ) : (
        <>
          <ul>
            {data?.songs.items.map((song) => (
              <li key={song.id}>
                <p>Song: {song.name}</p>
              </li>
            ))}
          </ul>

          {data.songs.items.length < data.songs.totalCount ? (
            <button
              onClick={() =>
                fetchMore({ variables: { skip: data.songs.items.length } })
              }
            >
              Load More
            </button>
          ) : null}
        </>
      )}
    </div>
  );
};
