/// <reference types="multer" />
import { CatsRepository } from '../cats.repository';
import { CatRequestDto } from '../dto/cats.request.dto';
import { Cat } from '../cats.schema';
export declare class CatsService {
    private readonly catsRepository;
    constructor(catsRepository: CatsRepository);
    uploadImg(cat: Cat, files: Express.Multer.File[]): Promise<{
        id: string;
        email: string;
        name: string;
    }>;
    signUp(body: CatRequestDto): Promise<{
        id: string;
        email: string;
        name: string;
    }>;
}
