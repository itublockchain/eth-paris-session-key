import { config } from 'dotenv';

config();

export const CONFIG: Config = {
    PORT: Number(process.env.PORT),
    RESPONSE_LIMIT: Number(process.env.RESPONSE_LIMIT),
    APP_CORS: process.env.APP_CORS,
    APP_NAME: 'sessionkey',
    MACIG_KEY: process.env.MACIG_KEY as string,
    RPC: process.env.RPC as string,
};

type Config = {
    PORT: number;
    RESPONSE_LIMIT: number;
    APP_CORS: string;
    APP_NAME: string;
    MACIG_KEY: string;
    RPC: string;
};
