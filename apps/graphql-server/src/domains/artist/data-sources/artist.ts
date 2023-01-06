import { DataSource } from "apollo-datasource";
import { artistIndex } from "./artist.data";
import { ArtistDocument } from "./artist.types";

export default class SongsAPI extends DataSource {
  public async getById(id: string): Promise<ArtistDocument | null> {
    return artistIndex()[id] || null;
  }
}
