import { Body, Controller, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserUseCases } from 'src/application/use-cases/user/user.use-case';
import { CreateUserDto, UpdateUserDto } from 'src/core';

@Controller('users')
export class UserController {
  constructor(private userUseCases: UserUseCases) {}

  @Get()
  async getAll() {
    return this.userUseCases.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.userUseCases.getById(id);
  }

  @Get('/name/:name')
  async getByName(@Param('name') name: any) {  
    return this.userUseCases.findOneBy('firstName', name);
  }

  @Get('/email/:email')
  async getByEmail(@Param('email') email: any) {
    console.log('vvvvvv', email);
    
    return this.userUseCases.findOneBy('email', email);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createUser(@Body() userDto: CreateUserDto) {
    return this.userUseCases.create(userDto);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  updateUser(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userUseCases.update(userId, updateUserDto);
  }
}
