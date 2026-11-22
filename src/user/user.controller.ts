import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service.js';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  getall(): string {
    return this.userService.getall();
  }

  @Post('create')
  create(): string {
    return this.userService.create();
  }

  @Put('update')
  update(): string {
    return this.userService.update();
  }

  @Delete('delete')
  delete(): string {
    return this.userService.delete();
  }
}