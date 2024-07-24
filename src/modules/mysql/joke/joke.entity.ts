import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Joke {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jokeType: string;

  @Column()
  joke: string;
}
