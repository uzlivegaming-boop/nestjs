import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getall(): string {
    return 'Hamma Userlar';
  }

  create(): string {
    return 'User yaratildi';
  }

  update(): string {
    return 'User yangilandi';
  }

  delete(): string {
    return 'User ochirildi';
  }
}