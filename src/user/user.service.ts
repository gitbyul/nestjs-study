import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  // https://youtu.be/dUTKVYkDtx0?list=PLhnVDNT5zYN_PfPXedWpMy_UTeYNExbfR&t=476
  async updateHashedRefreshToken(userId:number, hashedRefreshToken:string){}

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepo.create(createUserDto);

    return await this.userRepo.save(user);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return this.userRepo.findOne({
      where: { id },
      select: ['firstName', 'lastName', 'avatarUrl'],
    });
  }

  async findByEmail(email: string) {
    return await this.userRepo.findOne({ where: { email } });
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
