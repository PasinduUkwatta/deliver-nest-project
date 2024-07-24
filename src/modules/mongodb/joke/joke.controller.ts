import { Controller, Post,Body, Get } from '@nestjs/common';
import{JokeService} from './joke.service';

@Controller('api/jokes')
export class JokeController {
  constructor(private readonly jokeService: JokeService) {}

  @Get('types')
  async getJokeTypes() {
    try {
      const jokeTypes = await this.jokeService.getAllJokeTypes();
      return { jokeTypes };
    } catch (error) {
      return { error: error.message };
    }
  }

  // @Post('random')
  // async getRandomJoke(@Body('jokeType') jokeType?: string) {
  //   try {
  //     const randomJoke = await this.jokeService.getRandomJoke(jokeType);
  //     return randomJoke;
  //   } catch (error) {
  //     return { error: error.message };
  //   }
  // }

}

