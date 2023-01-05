//https://eth-goerli.g.alchemy.com/v2/cJghnXGbDZZHkfgO8ISZnRaXvm6WdA8j
/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/cJghnXGbDZZHkfgO8ISZnRaXvm6WdA8j',
      accounts: ['d1772bb588880094ff58294f98e6062773c0df0228d9d7b9664a51841b93dde8']
    }
  }
};
