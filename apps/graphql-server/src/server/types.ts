import SongsAPI from "../domains/song/data-sources/song";
import ArtistsAPI from "../domains/artist/data-sources/artist";

export interface DataSources {
  Song: SongsAPI;
  Artist: ArtistsAPI;
}

export interface Context {
  dataSources: DataSources;
}
