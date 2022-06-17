const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Contract', function () {
  before(async function () {
    //this.Contract = await ethers.getContractFactory('Contract');
  });

  beforeEach(async function () {
    //this.contract = await this.Contract.deploy();
    //await this.contract.deployed();
  });

  it('test descriptor', async function () {
    expect('2').to.equal('2');
  });
  
});