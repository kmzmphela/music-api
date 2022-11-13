import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Track } from 'src/interfaces/Track';
import { TrackService } from 'src/services/tracks/track.service';

@Controller('track')
export class TrackController {
  [x: string]: any;
  constructor(private readonly trackService: TrackService) {}

// let baseUrl: string = 'track/';

 
  @Get('/get/:id')
  getTrack(@Param('id') id: number): Track {
    return this.trackService.getById(id);
  }

  @Post('/add')
  addTrack(@Body() track: Track) {
     this.trackService.add(track);
  }

  @Delete('/delete/:id')
  deleteTrack(@Param('id') id: number) {
    console.log("deleting: #{id}")
     this.trackService.delete(id);
  }

  @Get('/get')
  getTracks(): Track[] {
    return this.trackService.getAll();
  }

  @Put('update/:id')
  updateTrack(@Param('id') id:number, @Query('field') field: string, @Query('value') value){
    console.log(field)
    console.log(value)
    this.trackService.updateTrack(id,field,value)
  }
}

