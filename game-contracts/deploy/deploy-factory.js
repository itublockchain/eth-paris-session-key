const { ethers } = require("hardhat");

async function main() {
  const factory = await ethers.getContractFactory("GameFactory");
  const Factory = await factory.deploy();

  await Factory.deployed();

  const newGame = await Factory.createNewGame();
  newGame.wait();

  console.log("Factory Contract deployed to:", Factory.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
