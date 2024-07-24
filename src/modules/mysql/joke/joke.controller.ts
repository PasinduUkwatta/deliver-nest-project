// mysql/joke/joke.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { JokeService } from './joke.service';
import { Joke } from "./joke.entity";

@Controller('api/jokes') // Adjust the route prefix if necessary
export class JokeController {
  constructor(private readonly jokeService: JokeService) {}

  @Post('add')
  async addJoke(
    @Body('jokeType') jokeType: string,
    @Body('joke') joke: string,
  ) {
    const generatedId = await this.jokeService.addJoke(jokeType, joke);
    return { id: generatedId };
  }

  @Post('random')
  async getRandomJoke(@Body('jokeType') jokeType?: string): Promise<Joke | { error: string }> {
    try {
      const randomJoke = await this.jokeService.getRandomJoke(jokeType);
      return randomJoke;
    } catch (error) {
      return { error: error.message };
    }
  }
}
