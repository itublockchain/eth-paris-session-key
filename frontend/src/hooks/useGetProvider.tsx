import { ethers } from "ethers";
import { CONFIG } from "config/config";

export const useGetProvider = (): {
  getProvider: () => ethers.providers.JsonRpcProvider;
  getWallet: () => ethers.Wallet;
} => {
  const getProvider = (): ethers.providers.JsonRpcProvider => {
    const provider: ethers.providers.JsonRpcProvider =
      new ethers.providers.JsonRpcProvider(CONFIG.RPC_URL);
    return provider;
  };

  const getWallet = (): ethers.Wallet => {
    const provider: ethers.providers.JsonRpcProvider = getProvider();
    const wallet: ethers.Wallet = new ethers.Wallet(
      CONFIG.PRIVATE_KEY,
      provider
    );
    return wallet;
  };

  return { getProvider, getWallet };
};
