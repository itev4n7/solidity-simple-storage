import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";

export default task("block-number", "Prints current block number").setAction(
    async (taskArgs: any, hre: HardhatRuntimeEnvironment) => {
        const blockNum = await hre.ethers.provider.getBlockNumber();
        console.log(`Current block number is ${blockNum}`);
    }
);
