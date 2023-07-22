import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ethers } from 'ethers';
import { ABI } from 'src/constants/abi';
import { ADDRESS } from 'src/constants/address';
import { useInitEther } from 'src/hooks/useInitEther';
import { useProvider } from 'src/hooks/useProvider';
import { BadRequest } from 'src/messages/Errors';
import { Repository } from 'typeorm';

@Injectable()
export class GameService {
    private provider;
    private wallet;
    constructor() {
        this.provider = useProvider().getProvider();

        this.wallet = useProvider().getWallet();
    }

    async createGame(name: string): Promise<string> {
        const factoryContract = new ethers.Contract(
            ADDRESS.factory,
            ABI.factory,
            this.wallet,
        );

        // const tx = await factoryContract.getLast

        return 'account';
    }
}
