import { Response, Request, NextFunction } from 'express';
import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => {
      this.logger.log(
        `${req.ip}, ${req.originalUrl}, ${req.method}, ${res.statusCode}`,
      );
    });
    next();
  }
}
