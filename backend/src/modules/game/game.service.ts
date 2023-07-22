import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { useInitEther } from 'src/hooks/useInitEther';
import { BadRequest } from 'src/messages/Errors';
import { Repository } from 'typeorm';

@Injectable()
export class GameService {
    constructor() {}
}
