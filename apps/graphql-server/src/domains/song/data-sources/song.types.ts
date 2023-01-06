export interface SongDocument {
  id: string;
  // TODO: Add more fields
}

export interface SongDocumentIndex {
  [key: string]: SongDocument;
}
