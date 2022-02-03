import { CatRequestDto } from './dto/cats.request.dto';
import { Model } from 'mongoose';
import { Cat } from './cats.schema';
export declare class CatsRepository {
    private readonly catModel;
    constructor(catModel: Model<Cat>);
    findAll(): Promise<(Cat & {
        _id: any;
    })[]>;
    findByIdAndUpdateImg(id: string, fileName: string): Promise<{
        id: string;
        email: string;
        name: string;
    }>;
    findCatByIdWithoutPassword(catId: string): Promise<Cat | null>;
    findCatByEmail(email: string): Promise<Cat | null>;
    existsByEmail(email: string): Promise<boolean>;
    create(cat: CatRequestDto): Promise<Cat>;
}
