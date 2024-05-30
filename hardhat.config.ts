import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
import "./tasks/block-number";

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    networks: {
        sepolia: {
            url: process.env.SEPOLIA_RPC_URL!,
            accounts: [process.env.SEPOLIA_PRIVATE_KEY!],
            chainId: parseInt(process.env.SEPOLIA_CHAIN_ID!),
        },
        localhost: {
            url: "http://127.0.0.1:8545",
            //accounts: Placed automatically by hardhat
            chainId: 31337,
        },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY!,
    },
    gasReporter: {
        enabled: false,
        outputFile: "./gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: process.env.COINMARKETCAP_API_KEY!,
        token: "ETH",
    },
    solidity: "0.8.26",
};

export default config;
