import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  getall(): string {
    return 'Hamma Postlar';
  }

  create(): string {
    return 'Post yaratildi';
  }

  update(): string {
    return 'Post yangilandi';
  }

  delete(): string {
    return 'Post ochirildi';
  }
}