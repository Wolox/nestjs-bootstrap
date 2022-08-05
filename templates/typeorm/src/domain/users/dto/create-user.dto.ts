import { ApiProperty } from '@nestjs/swagger';

import { IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'name of user',
    example: 'john',
    nullable: false,
    minLength: 1
  })
  @IsString()
  @MinLength(1)
  readonly name: string;
}
