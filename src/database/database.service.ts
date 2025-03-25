import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { Property } from './entities/property.entity';
import { PaginationDto } from './dto/pagination.dto';
import { DEFAULT_CURRENT_PAGE, DEFAULT_PAGE_SIZE } from './utils/constants';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepo: Repository<Property>,
  ) {}

  async findAll(paignationDto: PaginationDto) {
    return await this.propertyRepo.find({
      skip: paignationDto.offset,
      take: paignationDto.limit ?? DEFAULT_PAGE_SIZE,
    });
  }

  async paginationFindAll(paignationDto: PaginationDto) {
    const page = paignationDto.offset ?? DEFAULT_CURRENT_PAGE;
    const pageSize = paignationDto.limit ?? DEFAULT_PAGE_SIZE;

    const [data, total] = await this.propertyRepo
      .createQueryBuilder('property')
      .skip((page - 1) * pageSize)
      .take(pageSize)
      .getManyAndCount();

    const totalPages = Math.ceil(total / pageSize);

    return {
      data,
      total,
      totalPages,
      currentPage: page,
      pageSize: pageSize,
    };
  }

  async findOne(id: number) {
    const property = await this.propertyRepo.findOne({
      where: {
        id,
      },
    });

    if (!property) throw new NotFoundException();

    return property;
  }

  async create(dto: CreatePropertyDto) {
    return await this.propertyRepo.save(dto);
  }

  async update(id: number, dto: UpdatePropertyDto) {
    return await this.propertyRepo.update({ id }, dto);
  }

  async delete(id: number) {
    return await this.propertyRepo.delete({ id });
  }
}
