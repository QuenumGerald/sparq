const hre = require("hardhat");
const { ethers, network } = hre;

async function main() {
  const [deployer] = await ethers.getSigners();
  let ownerAddress = deployer.address;


  ownerAddress = "0x4cA13E7D421b529a053EF575CA13350B0FE3346E";

  console.log("Déploiement avec l'adresse :", ownerAddress);

  const Morpho = await ethers.getContractFactory("Morpho");
  const morpho = await Morpho.deploy(ownerAddress);
  await morpho.waitForDeployment();
  console.log("Morpho déployé à :", morpho.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
