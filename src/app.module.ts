import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { HeadersModule } from './header/header.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [PropertyModule, HeadersModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
