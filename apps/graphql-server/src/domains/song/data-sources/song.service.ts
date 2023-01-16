import { songs } from "./song.data";
import { SongDocument } from "./song.types";
import Dataloader from "dataloader";

interface SongsLoaderKey {
  artist?: string;
  take: number;
  skip: number;
}

export class SongService {
  // DataLoaders
  private songLoader = new Dataloader<string, SongDocument | null>(
    async (ids) => ids.map((id) => songs.find((song) => song.id === id) || null)
  );

  private songsLoader = new Dataloader<SongsLoaderKey, SongDocument[], string>(
    async (keys) =>
      keys.map(({ artist, take, skip }) => {
        if (artist) {
          return songs
            .filter((song) => song.artist === artist)
            .slice(skip, skip + take);
        }
        return songs.slice(skip, skip + take);
      }),
    { cacheKeyFn: ({ artist, take, skip }) => `${artist};${skip};${take}` }
  );

  // Methods
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
