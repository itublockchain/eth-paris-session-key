import { Body, Controller, Get, Post, Query } from '@nestjs/common';

// import { AddOptionDto, CreateAccountDto } from './game.dto';
import { GameService } from './game.service';

@Controller()
export class GameController {
    constructor(private readonly gameService: GameService) {}

    @Get('getLastGameAddress')
    async getLastGameAddress(): Promise<string> {
        return await this.gameService.getLastGameAddress();
    }

    @Get('createNewGame')
    async createNewGame(): Promise<string> {
        return await this.gameService.createNewGame();
    }

    @Get('getCardGame')
    async getCardGame(@Query('address') address: string) {
        return await this.gameService.getCardGameStatus(address);
    }

    @Get('enterGame')
    async enterGame(
        @Query('address') address: string,
        @Query('playerAddress') playerAddress: string,
    ) {
        return await this.gameService.enterGame(address, playerAddress);
    }

    @Get('getLiveCards')
    async getLiveCards(
        @Query('address') address: string,
        @Query('player') player: string,
    ) {
        return await this.gameService.getLiveCards(address, player);
    }
}
