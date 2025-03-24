import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { DatabaseService } from './database.service';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { UpdatePropertyDto } from './dto/updateProperty.dto';


@Controller('/db')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get()
  findAll() {
    return this.databaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.databaseService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreatePropertyDto) {
    return this.databaseService.create(dto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id, @Body() body: UpdatePropertyDto) {
    return this.databaseService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id) {
    return this.databaseService.delete(id);
  }
}