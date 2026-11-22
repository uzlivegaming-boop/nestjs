import { Controller, Delete, Get, Put } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('all')
  getall(): string {
    return this.appService.getall();
  }

  @Put('update')
  update(): string {
    return this.appService.update();
  }

  @Delete('delete')
  delete(): string {
    return this.appService.delete();
  }

}