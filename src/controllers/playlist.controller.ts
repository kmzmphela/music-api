import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PlaylistEntity } from 'src/interfaces/Playlist';
import { TrackEntity } from 'src/interfaces/Track';
import { PlayListService } from 'src/services/tracks/playlist.service';

@Controller('playlist')
export class PlaylistController {
  [x: string]: any;
  constructor(private readonly playlistService: PlayListService) {}

 
  @Get('/get/:id')
  getPlaylist(@Param('id') id: string): PlaylistEntity {
    return this.playlistService.getById(id);
  }

  @Post('/add')
  addPlaylist(@Body() playlist: PlaylistEntity) {
     this.playlistService.add(playlist);
  }

  @Delete('/delete/:id')
  deletePlaylist(@Param('id') id: string) {
     this.playlistService.delete(id);
  }

  @Get('/get')
  getPlaylists(): PlaylistEntity[] {
    return this.playlistService.getAll();
  }

  @Put('update/:id')
  updatPlaylist( @Body() body){
    this.playlistService.update(body)
  }
}
