import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const newUser = new User();
      newUser.name = createUserDto.name;
      const userCreated = await this.usersRepository.save(newUser);
      Logger.log(
        `User created successfully on database`,
        JSON.stringify(userCreated),
      );
      return newUser;
    } catch (error) {
      Logger.error(`Error User not created`, error);
      throw new HttpException(
        `User error ${error}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
