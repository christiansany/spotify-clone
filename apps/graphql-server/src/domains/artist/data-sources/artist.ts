import { DataSource } from "apollo-datasource";
import { artists } from "./artist.data";
import { ArtistDocument } from "./artist.types";

// TODO: Implement Dataloaders

export class ArtistsService extends DataSource {
  public async getById(id: string): Promise<ArtistDocument | null> {
    return artists.find((artist) => artist.id === id) || null;
  }
}
