import { SongDocument, SongDocumentIndex } from "./song.types";

const table = "song";

export const songs: SongDocument[] = [
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

export const songIndex = () =>
  songs.reduce<SongDocumentIndex>((acc, song) => {
    acc[song.id] = song;
    return acc;
  }, {});
