import { CommentsService } from './../services/comments.service';
import { CommentsCreateDto } from '../dto/comments.create.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    getAllComments(): Promise<(import("../comments.schema").Comments & {
        _id: any;
    })[]>;
    createComment(id: string, body: CommentsCreateDto): Promise<import("../comments.schema").Comments & {
        _id: any;
    }>;
    plusLike(id: string): Promise<import("../comments.schema").Comments & {
        _id: any;
    }>;
}
