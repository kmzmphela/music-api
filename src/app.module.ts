import { Module } from '@nestjs/common';
import { PlaylistController } from './controllers/playlist.controller';
import { TrackController } from './controllers/track.controller';
import { PlayListService } from './services/tracks/playlist.service';
import { TrackService } from './services/tracks/track.service';

@Module({
  imports: [],
  controllers: [TrackController,PlaylistController],
  providers: [TrackService,PlayListService],
})
export class AppModule {}
