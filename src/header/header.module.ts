import { Module } from '@nestjs/common';
import { HeadersController } from './header.controller';

@Module({
  controllers: [HeadersController],
})
export class HeadersModule {}
