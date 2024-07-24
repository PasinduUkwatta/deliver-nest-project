import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from './modules/mysql/typeorm.config';
import { JokeModule } from "./modules/mongodb/joke/joke.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MySQLModule } from "./modules/mysql/mysql.module";


@Module({
  imports: [
    MySQLModule,
    TypeOrmModule.forRoot(config),
    JokeModule,
    MongooseModule.forRoot(
      `mongodb+srv://upasinduukwatta:VpwB4xI8VLMRbSpZ@cluster0.2ejcnx6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
