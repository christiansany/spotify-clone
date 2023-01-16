import React, { FunctionComponent } from "react";
import { FragmentType, graphql, useFragment } from "../../__generated__/gql";

const ArtistDetail_Artist = graphql(`
  fragment ArtistDetail_Artist on Artist {
    id
    name
    image
  }
`);

export interface IArtistDetailsProps {
  artist: FragmentType<typeof ArtistDetail_Artist>;
}

export const ArtistDetails: FunctionComponent<IArtistDetailsProps> = ({
  artist: artistData,
}) => {
  const artist = useFragment(ArtistDetail_Artist, artistData);
  return (
    <p>
      Artist: {artist.name}, {artist.image}
    </p>
  );
};
