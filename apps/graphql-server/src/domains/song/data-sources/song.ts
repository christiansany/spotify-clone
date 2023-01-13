import { DataSource } from "apollo-datasource";
import { songs } from "./song.data";
import { SongDocument } from "./song.types";
import Dataloader from "dataloader";

interface SongsLoaderKey {
  artist?: string;
  take: number;
  skip: number;
}

export class SongsService extends DataSource {
  private songLoader: Dataloader<string, SongDocument | null>;
  private songsLoader: Dataloader<SongsLoaderKey, SongDocument[]>;

  constructor() {
    super();
    this.songLoader = new Dataloader(async (ids) =>
      ids.map((id) => songs.find((song) => song.id === id) || null)
    );
    this.songsLoader = new Dataloader(
      async (keys) =>
        keys.map(({ artist, take, skip }) => {
          if (artist) {
            return songs
              .filter((song) => song.artist === artist)
              .slice(skip, skip + take);
          }
          return songs.slice(skip, skip + take);
        }),
      { cacheKeyFn: (key) => JSON.stringify(key) }
    );
  }

  public async getSongById(id: string): Promise<SongDocument | null> {
    return this.songLoader.load(id);
  }

  public async getAllSongs(
    take: number,
    skip: number
  ): Promise<SongDocument[] | null> {
    return this.songsLoader.load({ take, skip });
  }

  public async getAllSongsByArtistId(
    artist: string,
    take: number,
    skip: number
  ): Promise<SongDocument[] | null> {
    return this.songsLoader.load({ artist, take, skip });
  }
}
