import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Injectable } from '@nestjs/common';
import { TrackEntity } from 'src/interfaces/Track';

@Injectable()
export class TrackService {


  constructor(private readonly trackRepo: InMemoryDBService<TrackEntity>){
    trackRepo.create({ name:"track1", album:"album", artist:"artist", duration:1000, artwork:"art",audio:"audio"})
    trackRepo.create({ name:"Nightmares of the bottom", album:"Carter IV", artist:"Lil Wayne", duration:1000, artwork:"art",audio:"audio"})
  }


  getAll(): TrackEntity[] {
    return this.trackRepo.getAll();
  }

  getById(id: string): TrackEntity {
    return this.trackRepo.get(id)
}
 add(track: TrackEntity){
    this.trackRepo.create(track)
 }

 delete(id: string){
    this.trackRepo.delete(id)
 }

//  updateTrack(id: number, field: string, value: any) {
//     this.tracks[this.tracks.findIndex(track => track.id == id)]
//     this.tracks.map(track => 
//        { if(track.id == id) {
//         switch(field){
//             case 'name': track.name = value; break;
//             case 'album': track.album = value; break;
//             case 'artist': track.artist = value; break;
//             case 'artwork': track.artwork = value; break;
//             case 'audio': track.audio = value; break;
//             case 'duration': track.duration = value; break;
//         }
//     }
//     } )
// }

update(track:TrackEntity){
    this.trackRepo.update(track)
}



}
