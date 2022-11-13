import { InMemoryDBEntity } from "@nestjs-addons/in-memory-db";

export interface TrackEntity extends InMemoryDBEntity{
    name: string;
    album: string;
    artist: string;
    duration: number;
    artwork: string;
    audio: string;
}