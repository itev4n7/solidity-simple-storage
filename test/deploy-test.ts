import { expect } from "chai";
import { ethers } from "hardhat";
import {
    SimpleStorage,
    SimpleStorage__factory as SimpleStorageFactory,
} from "../typechain-types";

describe("SimpleSotrage", function () {
    let simpleStorageFactory: SimpleStorageFactory;
    let simpleStorage: SimpleStorage;

    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        console.log("Deploying contract...");
        simpleStorage = await simpleStorageFactory.deploy();
        await simpleStorage.deploymentTransaction()?.wait(1);
    });

    it("SC should start with faivorite number of 0", async function () {
        const currValue = await simpleStorage.getFunction("retrieve")();
        expect(currValue.toString()).to.equal("0");
    });

    it("SC should update number after store function call", async function () {
        const currValue = await simpleStorage.getFunction("retrieve")();
        const txUpdatedValue = await simpleStorage.getFunction("store")(7);
        txUpdatedValue.wait(3);
        const updatedValue = await simpleStorage.getFunction("retrieve")();
        expect(updatedValue.toString()).not.to.equal(currValue.toString());
        expect(updatedValue.toString()).to.equal("7");
    });
});
