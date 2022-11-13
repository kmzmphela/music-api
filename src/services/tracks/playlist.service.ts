import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Injectable } from '@nestjs/common';
import { PlaylistEntity } from 'src/interfaces/Playlist';
import { TrackEntity } from 'src/interfaces/Track';

@Injectable()
export class PlayListService {

    constructor(private readonly playlistRepo:  InMemoryDBService<PlaylistEntity> ){
        playlistRepo.create({name:"playlist1",creator: "kamo", playtime:10000, trackList: [{id: "1",name:"track2", album:"album2", artist:"artist2", duration:1000, artwork:"art",audio:"audio"}] })
    }

//     tracks = [{id: 1, name:"track1", album:"album", artist:"artist", duration:1000, artwork:"art",audio:"audio"},
//     {id: 2, name:"Nightmares of the bottom", album:"Carter IV", artist:"Lil Wayne", duration:1000, artwork:"art",audio:"audio"}]
  
//   playlists = [{id:1,name:"playlist1",creator: "kamo", playtime:10000, trackList:this.tracks }];

  getAll(): PlaylistEntity[] {
    return this.playlistRepo.getAll();
  }

  getById(id: string): PlaylistEntity {
    return this.playlistRepo.get(id)
}
 add(playlist: PlaylistEntity){
    this.playlistRepo.create(playlist)
 }

 delete(id: string){
    this.playlistRepo.delete(id)
 }

//  updatePlaylist(id: number, field: string, value: any, body:TrackEntity[]) {
//     this.playlists.map(playlist => 
//        { if(playlist.id == id) {
//         switch(field){
//             case 'name': playlist.name = value; break;
//             case 'creator': playlist.creator = value; break;
//             case 'playtime': playlist.playtime = value; break;
//             case 'trackList': playlist.trackList = body; break;
//         }
//     }
//     } )
// }

update(playlist){
    this.playlistRepo.update(playlist)
}



}
