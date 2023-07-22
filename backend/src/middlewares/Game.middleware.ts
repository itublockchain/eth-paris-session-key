import type { NestMiddleware } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import type { NextFunction, Request, Response } from 'express';

@Injectable()
export class GameMiddleware implements NestMiddleware {
    constructor() {}
    async use(req: Request, res: Response, next: NextFunction): Promise<void> {
        next();
    }
}
