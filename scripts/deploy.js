const { ethers } = require("hardhat");

async function main () {
  const Contract = await ethers.getContractFactory('Contract');
  console.log('Deploying Contract..');
  const contract = await Contract.deploy();
  await contract.deployed();
  console.log(`Contract deployed to: ${contract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });