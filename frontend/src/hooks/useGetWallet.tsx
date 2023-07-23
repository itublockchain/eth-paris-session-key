import { ethers } from "ethers";
import { CONFIG } from "config/config";

export const useGetWallet = (): {
  getProvider: () => ethers.providers.JsonRpcProvider;
  getWallet: (pk: string) => ethers.Wallet;
} => {
  const getProvider = (): ethers.providers.JsonRpcProvider => {
    const provider: ethers.providers.JsonRpcProvider =
      new ethers.providers.JsonRpcProvider(CONFIG.RPC_URL);
    return provider;
  };

  const getWallet = (pk: string): ethers.Wallet => {
    const provider: ethers.providers.JsonRpcProvider = getProvider();
    const wallet: ethers.Wallet = new ethers.Wallet(pk, provider);
    return wallet;
  };

  return { getWallet, getProvider };
};
