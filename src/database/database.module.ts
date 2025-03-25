import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';
import { Property } from './entities/property.entity';
import dbConfig from 'src/config/db.config';
import dbProductionConfig from 'src/config/db.config.producition';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory:
        process.env.NODE_ENV === 'production' ? dbProductionConfig : dbConfig,
    }),
    TypeOrmModule.forFeature([Property]),
  ],
  controllers: [DatabaseController],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    },
    DatabaseService,
  ],
})
export class DatabaseModule {}
