import { Injectable } from '@nestjs/common';
import { CommentsCreateDto } from '../dto/comments.create.dto';

@Injectable()
export class CommentsService {
  async getAllComments() {
    return 'helloworld';
  }

  async createComment(id: string, comments: CommentsCreateDto) {
    return 'hello world';
  }

  async plusLike(id: string) {
    return 'hello';
  }
}
