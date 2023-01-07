export interface SongDocument {
  id: string;
  name: string;
  artist: string;
  image: string;
  track: string;
}

export interface SongDocumentIndex {
  [key: string]: SongDocument;
}
