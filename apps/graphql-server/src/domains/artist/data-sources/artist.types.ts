export interface ArtistDocument {
  id: string;
  // TODO: Add more fields
}

export interface ArtistDocumentIndex {
  [key: string]: ArtistDocument;
}
