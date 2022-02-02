import { LoginRequestDto } from './../../auth/dto/login.request.dto';
import { AuthService } from './../../auth/auth.service';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto';
export declare class CatsController {
    private readonly catsService;
    private readonly authService;
    constructor(catsService: CatsService, authService: AuthService);
    getCurrentCat(cat: any): any;
    signUp(body: CatRequestDto): Promise<{
        id: string;
        email: string;
        name: string;
    }>;
    login(data: LoginRequestDto): Promise<{
        token: string;
    }>;
    uploadCatImg(): string;
}
