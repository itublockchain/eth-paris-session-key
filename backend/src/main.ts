import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { CONFIG } from 'src/config';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: process.env.APP_CORS,
    });
    app.use(helmet());

    const config = new DocumentBuilder()
        .setTitle(CONFIG.APP_NAME)
        .setDescription('Docs')
        .setVersion(process.env.APP_VERSION)
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(CONFIG.PORT);
}
bootstrap();
