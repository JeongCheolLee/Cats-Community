import { CommentsCreateDto } from '../dto/comments.create.dto';
export declare class CommentsService {
    getAllComments(): Promise<string>;
    createComment(id: string, comments: CommentsCreateDto): Promise<string>;
    plusLike(id: string): Promise<string>;
}
