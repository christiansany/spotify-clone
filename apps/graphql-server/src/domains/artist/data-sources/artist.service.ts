import DataLoader from "dataloader";
import { artists } from "./artist.data";
import { ArtistDocument } from "./artist.types";

interface ArtistsLoaderKey {
  take: number;
  skip: number;
}

export class ArtistsService {
  // DataLoaders
  private artistLoader = new DataLoader<string, ArtistDocument | null>(
    async (ids) =>
      ids.map((id) => artists.find((song) => song.id === id) || null),
    {}
  );

  private artistsLoader = new DataLoader<
    ArtistsLoaderKey,
    ArtistDocument[],
    string
  >(
    async (keys) =>
      keys.map(({ take, skip }) => artists.slice(skip, skip + take)),
    { cacheKeyFn: ({ take, skip }) => `${skip};${take}` }
  );

  // Methods
  public async getArtistById(id: string): Promise<ArtistDocument | null> {
    return this.artistLoader.load(id);
  }

  public async getAllArtists(
    take: number,
    skip: number
  ): Promise<ArtistDocument[]> {
    console.log("getAllArtists", take, skip);

    return this.artistsLoader.load({ take, skip });
  }
}
