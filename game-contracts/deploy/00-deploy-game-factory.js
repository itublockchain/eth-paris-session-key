const { network } = require("hardhat");
const { verify } = require("../utils/verify");
require("dotenv").config();

module.exports = async ({ getNamedAccounts, deployments }) => {
	const { deploy, log } = deployments;
	const { deployer } = await getNamedAccounts();

	const args = [];
	const gameFactory = await deploy("GameFactory", {
		from: deployer,
		args: args,
		log: true,
		waitConfirmations: network.config.blockConfirmations || 1,
	});
	console.log("----****---DEPLOYER: ", deployer);

	if (process.env.ETHERSCAN_API_KEY) {
		await verify(gameFactory.address, args);
		log("-------------------------------------------------");
	}
};
module.exports.tags = ["all", "lottery"];
