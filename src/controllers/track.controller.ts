import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TrackEntity } from 'src/interfaces/Track';
import { TrackService } from 'src/services/tracks/track.service';

@Controller('track')
export class TrackController {
  [x: string]: any;
  constructor(private readonly trackService: TrackService) {}

// let baseUrl: string = 'track/';

 
  @Get('/get/:id')
  getTrack(@Param('id') id: string): TrackEntity {
    return this.trackService.getById(id);
  }

  @Post('/add')
  addTrack(@Body() track: TrackEntity) {
     this.trackService.add(track);
  }

  @Delete('/delete/:id')
  deleteTrack(@Param('id') id: string) {
    console.log("deleting: #{id}")
     this.trackService.delete(id);
  }

  @Get('/get')
  getTracks(): TrackEntity[] {
    return this.trackService.getAll();
  }

  @Put('update/:id')
  updateTrack(@Param('id') id:number, @Body() track: TrackEntity){
    this.trackService.update(track)
  }
}

