import Axios from "axios";
import type { AxiosResponse } from "axios";
import { CONFIG } from "config/config";
import { ethers } from "ethers";
import { API } from "restapi/api";
import type { Cards } from "restapi/types";

const baseURL = "http://localhost:8000";

export const provider: ethers.providers.JsonRpcProvider =
  new ethers.providers.JsonRpcProvider(CONFIG.RPC_URL);

export const axios = Axios.create({
  baseURL,
});

export const apiGetLastGameAddress = async (): Promise<
  AxiosResponse<string>
> => {
  return await axios.get(API.getLastGameAddress());
};
export const apiCreateNewGame = async (): Promise<AxiosResponse<string>> => {
  return await axios.get(API.createNewGame());
};

export const pk1 = "9bd05a1726e88d811308f44".concat(
  "706c23bcb83893ce97c159a3087b2cdb1a0970622"
);
export const pk2 = "3e02c4c64d463ba12fcbaffcb8f29e".concat(
  "3b4fcf7559f7f2b836d5c7336d4b420fca"
);
export const apiGetCardGameStatus = async (
  address: string
): Promise<AxiosResponse<string>> => {
  return await axios.get(API.getCardGameStatus(address));
};

export const apiGetLiveCards = async (
  address: string
): Promise<AxiosResponse<Array<Array<Cards>>>> => {
  return await axios.get(API.getLiveCards(address));
};
