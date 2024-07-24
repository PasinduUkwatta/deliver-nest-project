// src/modules/mysql/mysql.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Joke } from './joke/joke.entity';
import { JokeController } from './joke/joke.controller';
import { JokeService } from './joke/joke.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Joke]),
  ],
  controllers: [JokeController],
  providers: [JokeService],
})
export class MySQLModule {}

