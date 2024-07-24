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

}

