require("hardhat-deploy");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const GOERLI_URL = process.env.GOERLI_URL;

module.exports = {
  solidity: {
    compilers: [{ version: "0.8.18" }],
  },

  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },

    arbitrumGoerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
