import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { JokeController } from './joke.controller';
import { JokeService } from './joke.service';
import { JokeSchema } from './joke.model';
@Module({
  imports:[MongooseModule.forFeature([{ name: 'Joke', schema: JokeSchema }])],
  controllers: [JokeController],
  providers: [JokeService],
})
export class JokeModule {}