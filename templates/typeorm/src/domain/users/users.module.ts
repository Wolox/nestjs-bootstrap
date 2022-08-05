import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

@Module({
  controllers: [UsersController],
  exports: [UsersController, UsersService, TypeOrmModule],
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersController, UsersService],
})
export class UsersModule {}
