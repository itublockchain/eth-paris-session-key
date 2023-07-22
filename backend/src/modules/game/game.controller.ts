import { Body, Controller, Get, Post, Query } from '@nestjs/common';

// import { AddOptionDto, CreateAccountDto } from './game.dto';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
    constructor(private readonly gameService: GameService) {}

    @Get('trial')
    async trial(): Promise<string> {
        return 'await this.accountService.findByName(name.toLowerCase());';
    }
}
