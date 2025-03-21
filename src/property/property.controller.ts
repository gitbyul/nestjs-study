import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Controller('/property')
export class PropertyController {
  @Get()
  findAll(): string {
    return 'All Properties';
  }

  @Get(':id')
  findByOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    console.log({ id, type: typeof id });
    console.log({ id: sort, type: typeof sort });

    return id;
  }

  @Post('decorator')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  decoratorValidation(
    @Body()
    body: CreatePropertyDto,
  ) {
    return body;
  }

  @Post('body')
  bodyValidation(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    body: CreatePropertyDto,
  ) {
    return body;
  }
}
