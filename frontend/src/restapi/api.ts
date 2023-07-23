export const API = {
  getLastGameAddress: (): string => `/getLastGameAddress`,
  createNewGame: (): string => `/createNewGame`,
  getCardGameStatus: (address: string): string =>
    `/getCardGameStatus?address=${address}`,
  getLiveCards: (address: string): string => `/getLiveCards?address=${address}`,
  getAllCardList: (address: string): string =>
    `/getAllCardList?address=${address}`,
};
