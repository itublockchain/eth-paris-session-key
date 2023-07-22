import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { GameModule } from './modules/game/game.module';

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }), GameModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
