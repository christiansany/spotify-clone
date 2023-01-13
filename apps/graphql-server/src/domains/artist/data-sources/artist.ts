import { DataSource } from "apollo-datasource";
import Dataloader from "dataloader";
import { artists } from "./artist.data";
import { ArtistDocument } from "./artist.types";

interface ArtistsLoaderKey {
  take: number;
  skip: number;
}

export class ArtistsService extends DataSource {
  private artistLoader: Dataloader<string, ArtistDocument | null>;
  private artistsLoader: Dataloader<ArtistsLoaderKey, ArtistDocument[]>;

  constructor() {
    super();
    this.artistLoader = new Dataloader(
      async (ids) =>
        ids.map((id) => artists.find((song) => song.id === id) || null),
      {}
    );
    this.artistsLoader = new Dataloader(
      async (keys) =>
        keys.map(({ take, skip }) => artists.slice(skip, skip + take)),
      { cacheKeyFn: (key) => JSON.stringify(key) }
    );
  }

  public async getArtistById(id: string): Promise<ArtistDocument | null> {
    return this.artistLoader.load(id);
  }

  public async getAllArtists(
    take: number,
    skip: number
  ): Promise<ArtistDocument[] | null> {
    return this.artistsLoader.load({ take, skip });
  }
}
