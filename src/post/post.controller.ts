import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { PostService } from './post.service.js';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('all')
  getall(): string {
    return this.postService.getall();
  }

  @Post('create')
  create(): string {
    return this.postService.create();
  }

  @Put('update')
  update(): string {
    return this.postService.update();
  }

  @Delete('delete')
  delete(): string {
    return this.postService.delete();
  }
}