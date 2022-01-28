import { Response, Request, NextFunction } from 'express';
import { NestMiddleware } from '@nestjs/common';
export declare class LoggerMiddleware implements NestMiddleware {
    private logger;
    use(req: Request, res: Response, next: NextFunction): void;
}
