const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Contract', function () {
  before(async function () {
    this.Contract = await ethers.getContractFactory('Contract');
  });

  beforeEach(async function () {
    this.contract = await this.Contract.deploy();
    await this.contract.deployed();
  });

  it('The addOne function should increment the state variable by one (regular modifier).', async function () {
    
    await this.contract.addOne();

    expect((await this.contract.stateValue()).toString()).to.equal('1');
  });

  it('The addTwo function should NOT increment the state variable by two (modifier has been written in reverse order).', async function () {
    
    await this.contract.addOne();

    expect((await this.contract.stateValue()).toString()).to.not.equal('2');
  });

  it('The addThree function should NOT increment the state variable by three (additional code has been written at bottom of the modifier).', async function () {
    
    await this.contract.addOne();

    expect((await this.contract.stateValue()).toString()).to.equal('1');
  });
  
});