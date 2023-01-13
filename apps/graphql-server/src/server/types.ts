import { SongService } from "../domains/song/data-sources/song.service";
import { ArtistsService } from "../domains/artist/data-sources/artist.service";
import { UserService } from "../domains/user/data-sources/user.service";

export interface DataSources {
  Song: SongService;
  Artist: ArtistsService;
  User: UserService;
}

export interface Context {
  dataSources: DataSources;
  token?: string;
}
