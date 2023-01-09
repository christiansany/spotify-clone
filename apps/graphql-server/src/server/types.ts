import { SongsService } from "../domains/song/data-sources/song";
import { ArtistsService } from "../domains/artist/data-sources/artist";

export interface DataSources {
  Song: SongsService;
  Artist: ArtistsService;
}

export interface Context {
  dataSources: DataSources;
}
