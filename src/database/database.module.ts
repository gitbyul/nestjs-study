import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from './dbCofnig';

@Module({
  imports: [TypeOrmModule.forRoot(pgConfig)],
})
export class DatabaseModule {}
