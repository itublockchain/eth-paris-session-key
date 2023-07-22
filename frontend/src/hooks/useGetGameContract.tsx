import { ABI } from "constants/abi";
import { Contract } from "ethers";
import { provider } from "restapi/index";

export const useGetGameContract = async (
  _address: string
): Promise<Contract> => {
  const contract: Contract = new Contract(_address, ABI.cardGame, provider);

  return contract;
};
