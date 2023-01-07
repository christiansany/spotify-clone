import { ArtistDocument, ArtistDocumentIndex } from "./artist.types";

export const artists: ArtistDocument[] = [
  {
    id: "artist:1",
    name: "Benjamin Tissot",
    image: "dreams-X2.webp",
  },
  {
    id: "artist:2",
    name: "Eminem",
    image: "littleidea-X2.webp",
  },
  {
    id: "artist:3",
    name: "Dr. Dre",
    image: "summer-X2.webp",
  },
];

export const artistIndex = () =>
  artists.reduce<ArtistDocumentIndex>((acc, artist) => {
    acc[artist.id] = artist;
    return acc;
  }, {});
