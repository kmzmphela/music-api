import { Track } from "./Track";

export interface Playlist{
    id: number;
    name: string;
    creator: string;
    playtime: number;
    trackList: Track[];
}
