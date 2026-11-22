import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  getall(): string {
    return 'Hamma Commentlar';
  }

  create(): string {
    return 'Comment yaratildi';
  }

  update(): string {
    return 'Comment yangilandi';
  }

  delete(): string {
    return 'Comment ochirildi';
  }
}