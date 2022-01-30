import { CatRequestDto } from './dto/cats.request.dto';
import { Model } from 'mongoose';
import { Cat } from './cats.schema';
export declare class CatsRepository {
    private readonly catModel;
    constructor(catModel: Model<Cat>);
    existsByEmail(email: string): Promise<boolean>;
    create(cat: CatRequestDto): Promise<Cat>;
}
