import { DataSource } from "apollo-datasource";
import { songs } from "./song.data";
import { SongDocument } from "./song.types";

// TODO: Implement Dataloaders

export class SongsService extends DataSource {
  public async getById(id: string): Promise<SongDocument | null> {
    return songs.find((song) => song.id === id) || null;
  }
}
