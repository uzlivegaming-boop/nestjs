import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getall(): string {
    return 'Hammasi get qilindi'
  }

  update(): string {
    return 'Update qilindi';
  }

  delete(): string{
    return 'Delete qilindi';
  }
}
