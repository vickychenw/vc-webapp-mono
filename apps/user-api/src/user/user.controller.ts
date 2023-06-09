import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('user')
export class UserController {

  @Get()
  findAll(): string{
    return 'Get all users';
  }


  @Post()
  create():string {
    return 'create item';
  }
}
