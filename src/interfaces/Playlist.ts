import { InMemoryDBEntity } from "@nestjs-addons/in-memory-db";
import { TrackEntity } from "./Track";

export interface PlaylistEntity extends InMemoryDBEntity{
    name: string;
    creator: string;
    playtime: number;
    trackList: TrackEntity[];
}
