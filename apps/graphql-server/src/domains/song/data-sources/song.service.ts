import { songs } from "./song.data";
import { SongDocument, SongList } from "./song.types";
import Dataloader from "dataloader";
import {
  SongsFilter,
  SongSort,
} from "../../../../__generated__/schema.generated";

interface SongsLoaderKey {
  artist?: string;
  take: number;
  skip: number;
  sort?: SongSort;
}

export class SongService {
  // DataLoaders
  private songLoader = new Dataloader<string, SongDocument | null>(
    async (ids) => ids.map((id) => songs.find((song) => song.id === id) || null)
  );

  private songsLoader = new Dataloader<SongsLoaderKey, SongDocument[], string>(
    async (keys) =>
      keys.map(({ artist, take, skip, sort }) => {
        let _song = songs.slice(0);

        if (sort) {
          _song.sort((a, b) => {
            if (sort === SongSort.NameAsc) {
              return a.name.localeCompare(b.name);
            }
            if (sort === SongSort.NameDesc) {
              return b.name.localeCompare(a.name);
            }
            return 0;
          });
        }

        if (artist) {
          _song = _song.filter((song) => song.artist === artist);
        }

        return _song.slice(skip, skip + take);
      }),
    {
      cacheKeyFn: ({ artist, take, skip, sort }) =>
        `${artist};${skip};${take};${sort}`,
    }
  );

  // Methods
  public async getSongById(id: string): Promise<SongDocument | null> {
    return this.songLoader.load(id);
  }

  public async getAllSongs(
    where: SongsFilter | null = {},
    take: number,
    skip: number,
    sort?: SongSort | null
  ): Promise<SongList> {
    return {
      items: await this.songsLoader.load({
        take,
        skip,
        sort: sort || SongSort.NameAsc,
      }),
      totalCount: songs.length,
    };
  }

  public async getAllSongsByArtistId(
    artist: string,
    take: number,
    skip: number
  ): Promise<SongDocument[]> {
    return this.songsLoader.load({ artist, take, skip });
  }
}
