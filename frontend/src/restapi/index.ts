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
