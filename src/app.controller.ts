import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDTO } from './dtos/user.dto';
import { Response } from 'express';
import { CreateTweetDTO } from './dtos/tweet.dto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('sign-up')
  async postSignIn(@Body() body: CreateUserDTO, @Res() response: Response) {
    const result = this.appService.postSignIn(body);
    return response.status(HttpStatus.OK).json(result);
  }
  @Post('tweets')
  postTweet(@Body() body: CreateTweetDTO, @Res() response: Response) {
    const result = this.appService.postTweet(body)
    return response.status(HttpStatus.CREATED).json(result)
  }
}

