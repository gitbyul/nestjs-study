import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import * as path from 'path';
import { registerAs } from '@nestjs/config';

export default registerAs(
  'dbconfig.env',
  (): PostgresConnectionOptions => ({
    url: process.env.DB_URL,
    type: 'postgres',
    port: Number(process.env.DB_PORT),
    entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    namingStrategy: new SnakeNamingStrategy(),
  }),
);
