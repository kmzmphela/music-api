import { Injectable } from '@nestjs/common';
import { Playlist } from 'src/interfaces/Playlist';
import { Track } from 'src/interfaces/Track';

@Injectable()
export class PlayListService {

    tracks = [{id: 1, name:"track1", album:"album", artist:"artist", duration:1000, artwork:"art",audio:"audio"},
    {id: 2, name:"Nightmares of the bottom", album:"Carter IV", artist:"Lil Wayne", duration:1000, artwork:"art",audio:"audio"}]
  
  playlists = [{id:1,name:"playlist1",creator: "kamo", playtime:10000, trackList:this.tracks }];

  getAll(): Playlist[] {
    return this.playlists;
  }

  getById(id: number): Playlist {
    return this.playlists.find(ob => ob.id == id);
}
 add(playlist: Playlist){
    this.playlists.push(playlist)
 }

 delete(id: number){
    this.playlists =  this.playlists.filter(track => track.id != id)
 }

 updatePlaylist(id: number, field: string, value: any, body:Track[]) {
    this.playlists.map(playlist => 
       { if(playlist.id == id) {
        switch(field){
            case 'name': playlist.name = value; break;
            case 'creator': playlist.creator = value; break;
            case 'playtime': playlist.playtime = value; break;
            case 'trackList': playlist.trackList = body; break;
        }
    }
    } )
}



}
