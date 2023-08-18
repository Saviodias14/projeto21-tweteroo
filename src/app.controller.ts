import { Body, Controller, Get, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDTO } from './dtos/user.dto';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('sign-in')
  postSignIn(@Body() body: CreateUserDTO, @Res() response: Response) {
    const result = this.appService.postSignIn(body);
    return response.status(HttpStatus.OK).json(result);
  }
}

