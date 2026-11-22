import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { CommentService } from './comment.service.js';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('all')
  getall(): string {
    return this.commentService.getall();
  }

  @Post('create')
  create(): string {
    return this.commentService.create();
  }

  @Put('update')
  update(): string {
    return this.commentService.update();
  }

  @Delete('delete')
  delete(): string {
    return this.commentService.delete();
  }
}