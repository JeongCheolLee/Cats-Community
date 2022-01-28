import { CatRequestDto } from './dto/cats.request.dto';
import { Cat } from './cats.schema';
import { Model } from 'mongoose';
export declare class CatsService {
    private readonly catModel;
    constructor(catModel: Model<Cat>);
    signUp(body: CatRequestDto): Promise<{
        id: string;
        email: string;
        name: string;
    }>;
}
