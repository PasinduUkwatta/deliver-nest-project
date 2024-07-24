import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'pasindu',
  password: 'pansilu@1996',
  database: 'nestjs_db', // Replace with your database name
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // set to false in production
};

export default config;
