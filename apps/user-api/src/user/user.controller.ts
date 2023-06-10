import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {Request, Response} from 'express';

@Controller('user')
export class UserController {

  //This is the express way - not recommended
  @Get()
  findAll(@Req() req: Request, @Res() res: Response): Response{
    console.log('req.url', req.url);
    return res.send('Hello Vicky');
  }

  //Recommended way with NestJS
  @Get(':id')
  findOne(@Param('id') id) : string{
    return `Your id is ${id}`;
  }


  @Post()
  create(@Body() reqPayload: CreateUserDto):string {
    return `${reqPayload.firstName}, ${reqPayload.lastName} created ${JSON.stringify(reqPayload)}`;
  }

  @Delete(':id')
  delete(@Param() param): string{//different ways of accessing params
    return `${param.id} deleted!`;
  }

  @Put(':id')
  update(@Body() reqPayload: CreateUserDto, @Param ('id') id):string{
    return `User ${id} updated, name=${reqPayload.firstName}`;
  }


}
