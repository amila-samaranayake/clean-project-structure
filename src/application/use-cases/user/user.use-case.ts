import { Injectable } from '@nestjs/common';
import { CreateUserDto, IDataServices, UpdateUserDto, User } from 'src/core';
import { UserFactoryService } from './user-factory.service';

@Injectable()
export class UserUseCases {
  constructor(
    private dataServices: IDataServices,
    private userFactoryService: UserFactoryService,
  ) {}

  getAll(): Promise<User[]> {
    return this.dataServices.users.getAll();
  }

  getById(id: any): Promise<User> {
    return this.dataServices.users.getById(id);
  }

  findOneBy(key: keyof User, value: any): Promise<User> {
    return this.dataServices.users.findOneBy(key, value);
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userFactoryService.createNewUser(createUserDto);
    return this.dataServices.users.create(user);
  }

  update(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = this.userFactoryService.updateUser(updateUserDto);
    return this.dataServices.users.update(userId, user);
  }
}
