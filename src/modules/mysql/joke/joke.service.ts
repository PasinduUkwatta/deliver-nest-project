import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Joke } from './joke.entity';

@Injectable()
export class JokeService {
  constructor(
    @InjectRepository(Joke)
    private jokeRepository: Repository<Joke>,
  ) {}

  async addJoke(jokeType: string, joke: string): Promise<number> {
    const newJoke = this.jokeRepository.create({ jokeType, joke });
    await this.jokeRepository.save(newJoke);
    return newJoke.id;
  }

  async getRandomJoke(jokeType?: string): Promise<Joke> {
    let query = this.jokeRepository.createQueryBuilder('joke');

    if (jokeType) {
      query = query.where('joke.jokeType = :jokeType', { jokeType });
    }

    const count = await query.getCount();
    const randomIndex = Math.floor(Math.random() * count);

    const randomJoke = await query.offset(randomIndex).limit(1).getOne();

    if (!randomJoke) {
      throw new Error('No jokes found');
    }

    return randomJoke;
  }
}
