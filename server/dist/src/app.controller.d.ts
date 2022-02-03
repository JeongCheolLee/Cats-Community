import { CatsService } from './cats/services/cats.service';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private readonly CatsService;
    constructor(appService: AppService, CatsService: CatsService);
    getHello(): string;
}
