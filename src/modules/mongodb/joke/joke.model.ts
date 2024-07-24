import * as mongoose from 'mongoose';

export const JokeSchema = new mongoose.Schema({
  jokeType: { type: String, required: true },
  joke: { type: String, required: true }
});


export interface Joke {
  id: String;
  jokeType: String;
  joke: String;
}

