import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('/property')
export class PropertyController {
  @Get()
  findAll(): string {
    return 'All Properties';
  }
}
