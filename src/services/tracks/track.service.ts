import { Injectable } from '@nestjs/common';
import { Track } from 'src/interfaces/Track';

@Injectable()
export class TrackService {
  
  tracks = [{id: 1, name:"track1", album:"album", artist:"artist", duration:1000, artwork:"art",audio:"audio"},
  {id: 2, name:"Nightmares of the bottom", album:"Carter IV", artist:"Lil Wayne", duration:1000, artwork:"art",audio:"audio"}

 ];

  getAll(): Track[] {
    return this.tracks;
  }

  getById(id: number): Track {
    return this.tracks.find(ob => ob.id == id);
}
 add(track: Track){
    this.tracks.push(track)
 }

 delete(id: number){
    this.tracks =  this.tracks.filter(track => track.id != id)

 }

 updateTrack(id: number, field: string, value: any) {
    this.tracks[this.tracks.findIndex(track => track.id == id)]
    this.tracks.map(track => 
       { if(track.id == id) {
        switch(field){
            case 'name': track.name = value; break;
            case 'album': track.album = value; break;
            case 'artist': track.artist = value; break;
            case 'artwork': track.artwork = value; break;
            case 'audio': track.audio = value; break;
            case 'duration': track.duration = value; break;
        }
    }
    } )
}



}
