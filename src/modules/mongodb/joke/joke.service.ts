import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Joke} from './joke.model'
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EntityClassOrSchema } from "@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type";
@Injectable()
export class JokeService {

  constructor(
    @InjectModel('Joke')
    private readonly jokeModel: Model<Joke>,
  ) {}

  async getAllJokeTypes() {
    try {
      const jokeTypes = await this.jokeModel.distinct('jokeType');
      return jokeTypes;
    } catch (error) {
      throw new Error('Failed to fetch joke types');
    }
  }

  async getRandomJoke(jokeType?: string): Promise<Joke | null> {
    const filter = jokeType ? { jokeType: jokeType } : {};
    const count = await this.jokeModel.countDocuments(filter);
    const randomIndex = Math.floor(Math.random() * count);

    const randomJoke = await this.jokeModel.findOne(filter).skip(randomIndex).exec();
    return randomJoke;
  }
}


