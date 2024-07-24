// src/modules/mongodb/mongodb.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JokeController } from './joke/joke.controller';
import { JokeService } from './joke/joke.service';
import { JokeSchema } from "./joke/joke.model";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Joke', schema: JokeSchema }]),
  ],
  controllers: [JokeController],
  providers: [JokeService],
})
export class MongoDBModule {}
