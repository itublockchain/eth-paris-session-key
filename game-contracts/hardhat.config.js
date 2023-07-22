require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY_ACCOUNT_2 = process.env.PRIVATE_KEY_ACCOUNT_2;

module.exports = {
	solidity: {
		compilers: [{ version: "0.8.18" }],
	},
	namedAccounts: {
		deployer: {
			default: 0,
			1: 0,
		},
		player: {
			default: 1,
		},
	},
	defaultNetwork: "arbitrumGoerli",
	networks: {
		hardhat: {
			chainId: 31337,
			blockConfirmations: 1,
			accounts: [
				{
					privateKey: PRIVATE_KEY,
					balance: "100000000000000000000000",
				},
				{
					privateKey: PRIVATE_KEY_ACCOUNT_2,
					balance: "100000000000000000000000",
				},
			],
		},
		localhost: {
			chainId: 31337,
		},
		arbitrumGoerli: {
			url: GOERLI_URL,
			chainId: 421613,
			accounts: [PRIVATE_KEY],
			saveDeployments: true,
			blockConfirmations: 6,
		},
	},

	etherscan: {
		apiKey: {
			goerli: ETHERSCAN_API_KEY,
		},
	},
	mocha: {
		timeout: 200000,
	},
};
