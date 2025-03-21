import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseId.pipe';

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

  @Post('group')
  validationGroupsCreate(
    @Body()
    body: CreatePropertyDto,
  ) {
    return body;
  }

  @Patch('group')
  validationGroupsUpdate(
    @Body()
    body: CreatePropertyDto,
  ) {
    return body;
  }

  @Get('param/:id')
  validationParam(@Param() param: IdParamDto) {
    console.log('validationParam : ', param);
    return param;
  }

  @Get('param2/:id')
  validationParam2(@Param() { id }: IdParamDto) {
    console.log('validationParam : ', id);
    return id;
  }

  @Get('parse/:id')
  parsePipe(@Param('id', ParseIdPipe) id) {
    console.log('parsePipe : ', id);
    return id;
  }
}
