import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ethers } from 'ethers';
import { ABI } from 'src/constants/abi';
import { ADDRESS } from 'src/constants/address';
import { useInitEther } from 'src/hooks/useInitEther';
import { useProvider } from 'src/hooks/useProvider';
import { BadRequest } from 'src/messages/Errors';
import { GameStatus } from 'src/modules/game/game.dto';
import { Repository } from 'typeorm';

@Injectable()
export class GameService {
    private provider;
    private wallet;
    constructor() {
        this.provider = useProvider().getProvider();

        this.wallet = useProvider().getWallet();
    }

    async getLastGameAddress(): Promise<string> {
        const factoryContract = new ethers.Contract(
            ADDRESS.factory,
            ABI.factory,
            this.wallet,
        );

        const tx = await factoryContract.getLastGameAddress();

        return tx;
    }

    async createNewGame(): Promise<string> {
        const factoryContract = new ethers.Contract(
            ADDRESS.factory,
            ABI.factory,
            this.wallet,
        );

        const tx = await factoryContract.createNewGame();
        tx.wait();
        const lastAddress = await this.getLastGameAddress();

        return lastAddress;
    }

    async getCardGameStatus(address: string): Promise<string> {
        const gameContract = new ethers.Contract(
            address,
            ABI.cardGame,
            this.wallet,
        );
        const gameStatus = await gameContract.gameStatus();
        return gameStatus.toString();
    }

    async getLiveCards(
        address: string,
        player: string,
    ): Promise<
        Array<{
            id: string;
            health: string;
            power: string;
            isTaken: boolean;
            isAlive: boolean;
        }>
    > {
        const gameContract = new ethers.Contract(
            address,
            ABI.cardGame,
            this.wallet,
        );
        let cardIds: Array<number> = [];
        let cards: Array<any> = [];
        for (let i = 0; i < 6; i++) {
            try {
                const cardId =
                    Number(player) === 1
                        ? await gameContract.user2Cards(i)
                        : await gameContract.user1Cards(i);
                cardIds.push(Number(cardId.toString()));
            } catch (e) {
                console.log(e);
            }
        }
        for (let i = 0; i < cardIds.length; i++) {
            try {
                const card = await gameContract.cards(cardIds[i]);
                cards.push(setCard(card));
            } catch (e) {
                console.log(e);
            }
        }

        return cards;
    }

    async enterGame(address: string, playerAddress: string): Promise<string> {
        const gameContract = new ethers.Contract(
            address,
            ABI.cardGame,
            this.wallet,
        );
        const tx = await gameContract.enter(address);
        tx.wait();
        return playerAddress;
    }
}

const setCard = (
    cards: Array<{
        id: any;
        health: any;
        power: any;
        isTaken: any;
        isAlive: any;
    }>,
) => {
    const id = cards['id'].toString();
    const health = cards['health'].toString();
    const power = cards['power'].toString();
    const isTaken = cards['isTaken'];
    const isAlive = cards['isAlive'];
    return {
        id,
        health,
        power,
        isTaken,
        isAlive,
    };
};
