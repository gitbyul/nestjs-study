import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';
import { pgConfig } from './dbCofnig';
import { Property } from './entities/property.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(pgConfig),
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
