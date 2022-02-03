/// <reference types="multer" />
import { LoginRequestDto } from '../../../auth/dto/login.request.dto';
import { AuthService } from '../../../auth/auth.service';
import { CatsService } from '../services/cats.service';
import { CatRequestDto } from '../dto/cats.request.dto';
import { Cat } from '../cats.schema';
export declare class CatsController {
    private readonly catsService;
    private readonly authService;
    constructor(catsService: CatsService, authService: AuthService);
    getCurrentCat(cat: any): any;
    signUp(body: CatRequestDto): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
        comments: import("../../comments/comments.schema").Comments[];
    }>;
    login(data: LoginRequestDto): Promise<{
        token: string;
    }>;
    uploadCatImg(files: Array<Express.Multer.File>, cat: Cat): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
        comments: import("../../comments/comments.schema").Comments[];
    }>;
    getAllCat(): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
        comments: import("../../comments/comments.schema").Comments[];
    }[]>;
}
