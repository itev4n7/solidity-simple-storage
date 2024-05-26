# Ethers simple storage with hardhat

### Steps to setup hardhat local node:

- `yarn add --dev hardhat`

- `yarn hardhat init`

- `yarn add --dev @nomicfoundation/hardhat-chai-matchers @nomicfoundation/hardhat-ethers @nomicfoundation/hardhat-ignition @nomicfoundation/hardhat-ignition-ethers @nomicfoundation/hardhat-network-helpers @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-verify @typechain/ethers-v6 @typechain/hardhat @types/chai @types/mocha @types/node chai@4.4.1 hardhat-gas-reporter solidity-coverage ts-node typechain typescript`

- `yarn hardhat node`

  Note: if you have error regarding `module` type, make sure you are using commonjs and `chai` version is not higher than 4

### To use deploy script follow this steps:

- Compile abi and bin into `./abi` folder using `yarn compile` command
- Add `PRIVATE_KEY` into .env file
- Run `yarn ts-node encrypt-key.ts` in terminal
- Remove `PRIVATE_KEY` from .env file
- Then you are able to run `yarn ts-node deploy.ts`
