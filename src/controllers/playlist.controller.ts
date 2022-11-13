import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Playlist } from 'src/interfaces/Playlist';
import { Track } from 'src/interfaces/Track';
import { PlayListService } from 'src/services/tracks/playlist.service';

@Controller('playlist')
export class PlaylistController {
  [x: string]: any;
  constructor(private readonly playlistService: PlayListService) {}

 
  @Get('/get/:id')
  getPlaylist(@Param('id') id: number): Playlist {
    return this.playlistService.getById(id);
  }

  @Post('/add')
  addPlaylist(@Body() playlist: Playlist) {
     this.playlistService.add(playlist);
  }

  @Delete('/delete/:id')
  deletePlaylist(@Param('id') id: number) {
     this.playlistService.delete(id);
  }

  @Get('/get')
  getPlaylists(): Playlist[] {
    return this.playlistService.getAll();
  }

  @Put('update/:id')
  updatPlaylist(@Param('id') id:number, @Query('field') field: string, @Query('value') value, @Body() body){
    console.log(field)
    console.log(value)
    console.table(body)
    this.playlistService.updatePlaylist(id,field,value,body)
  }
}
