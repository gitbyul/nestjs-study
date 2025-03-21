import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('/property')
export class PropertyController {
  @Get()
  findAll(): string {
    return 'All Properties';
  }

  @Get(':id')
  findByOne(@Param('id', ParseIntPipe) id) {
    console.log({ id, type: typeof id });

    return id;
  }
}
