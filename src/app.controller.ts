import { Body, Controller, Get, HttpException, HttpStatus, Post, Query, Res } from '@nestjs/common';
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
  @Get('tweets')
  getTweets(@Query('page') page: string) {
    const newPage = parseInt(page)

    if (typeof newPage !== 'number' || newPage < 1) {
      throw new HttpException('BAD REQUEST', HttpStatus.BAD_REQUEST)
    }
    return this.appService.getTweets(newPage)
  }
}

