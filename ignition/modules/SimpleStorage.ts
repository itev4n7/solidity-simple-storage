import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SimpleStorageModule = buildModule("SimpleStorageModule", (m) => {
    const simpleStorageContract = m.contract("SimpleStorage");
    return { simpleStorageContract };
});

export default SimpleStorageModule;
