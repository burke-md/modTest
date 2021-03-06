

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require('@nomiclabs/hardhat-ethers');
 require('hardhat-gas-reporter');
 require('solidity-coverage');
 require('dotenv').config();
 
 const alchemyApiKey = process.env.ALCHEMY_API_KEY;
 const mnemonic = process.env.MNEMONIC;
 
   module.exports = {
    solidity: "0.8.14",
    /*
    networks: {
      rinkeby: {
        url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
        accounts: { mnemonic: mnemonic },
      },
    },
    */
  };