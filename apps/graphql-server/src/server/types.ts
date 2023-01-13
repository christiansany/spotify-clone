import { SongsService } from "../domains/song/data-sources/song";
import { ArtistsService } from "../domains/artist/data-sources/artist";
import { UserService } from "../domains/user/data-sources/user";

export interface DataSources {
  Song: SongsService;
  Artist: ArtistsService;
  User: UserService;
}

export interface Context {
  dataSources: DataSources;
  token?: string;
}
