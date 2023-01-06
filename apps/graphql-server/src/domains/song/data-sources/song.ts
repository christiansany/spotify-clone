import { DataSource } from "apollo-datasource";
import { songIndex } from "./song.data";
import { SongDocument } from "./song.types";

export default class SongsAPI extends DataSource {
  public async getById(id: string): Promise<SongDocument | null> {
    return songIndex()[id] || null;
  }
}
