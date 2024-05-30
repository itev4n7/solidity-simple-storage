import { ethers, run, network } from "hardhat";

async function verify(contractAddress: string, args: any[]) {
    console.log("Verifiyng contract...");
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        });
    } catch (e: any) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified!");
        } else {
            console.log(e);
        }
    }
}

async function main() {
    //..
    const simpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    );
    console.log("Deploying contract...");
    const simpleStorage = await simpleStorageFactory.deploy();
    await simpleStorage.deploymentTransaction()?.wait(1);

    if (network.config.chainId !== 31337 && process.env.ETHERSCAN_API_KEY!) {
        await simpleStorage.deploymentTransaction()?.wait(5);
        await verify(await simpleStorage.getAddress(), []);
    }
    const currentValue = await simpleStorage.getFunction("retrieve")();
    console.log(`Current value is ${currentValue}`);
    const txResponce = await simpleStorage.getFunction("store")(7);
    await txResponce.wait(1);
    const updatedValue = await simpleStorage.getFunction("retrieve")();
    console.log(`Updated value value is ${updatedValue}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
