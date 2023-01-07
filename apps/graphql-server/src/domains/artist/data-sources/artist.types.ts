export interface ArtistDocument {
  id: string;
  name: string;
  image: string;
}

export interface ArtistDocumentIndex {
  [key: string]: ArtistDocument;
}
