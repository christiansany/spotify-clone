export interface SongDocument {
  id: string;
  name: string;
  artist: string;
  image: string;
  track: string;
}

export interface SongList {
  items: SongDocument[];
  totalCount: number;
}
