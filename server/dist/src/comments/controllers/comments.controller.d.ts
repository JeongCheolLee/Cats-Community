import { CommentsService } from './../services/comments.service';
import { CommentsCreateDto } from '../dto/comments.create.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    getAllComments(): Promise<string>;
    createComment(id: string, body: CommentsCreateDto): Promise<string>;
    plusLike(id: string): Promise<string>;
}
