import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserModule } from './user/user.module.js';
import { PostModule } from './post/post.module.js';
import { CommentModule } from './comment/comment.module.js';

@Module({
  imports: [UserModule, PostModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}