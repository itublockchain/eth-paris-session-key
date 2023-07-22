import { ethers } from "ethers";
import { EthersAdapter, SafeFactory, SafeAccountConfig } from "@safe-global/protocol-kit";

const RPC_URL = "https://eth-goerli.public.blastapi.io";
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

const owner = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

const ethAdapterOwner = new EthersAdapter({
    ethers,
    signerOrProvider: owner,
});

const safeFactory = await SafeFactory.create({ ethAdapter: ethAdapterOwner });

const safeAccountConfig: SafeAccountConfig = {
    owners: [await owner.getAddress()],
    threshold: 1,
};

const safe = await safeFactory.deploySafe({ safeAccountConfig });

const safeAddress = await safe.getAddress();

console.log("Your Safe has been deployed:");
console.log(`https://goerli.etherscan.io/address/${safeAddress}`);
console.log(`https://app.safe.global/gor:${safeAddress}`);

const moduleAddress = "0x";
const tx = await safe.createEnableModuleTx(moduleAddress);
const txResponse = await safeSdk.executeTransaction(safeTransaction);
await txResponse.transactionResponse?.wait();
