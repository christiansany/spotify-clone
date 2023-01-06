import { ArtistDocument, ArtistDocumentIndex } from "./artist.types";

const table = "artist";

export const artists: ArtistDocument[] = [
  {
    id: `${table}:1`,
  },
  {
    id: `${table}:2`,
  },
  {
    id: `${table}:3`,
  },
  {
    id: `${table}:4`,
  },
];

export const artistIndex = () =>
  artists.reduce<ArtistDocumentIndex>((acc, artist) => {
    acc[artist.id] = artist;
    return acc;
  }, {});
