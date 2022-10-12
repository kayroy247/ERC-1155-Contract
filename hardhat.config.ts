import { HardhatUserConfig } from "hardhat/config";
require("dotenv").config();
import "@nomicfoundation/hardhat-toolbox";

const { ALCHEMY_API_KEY, API_URL, PRIVATE_KEY, GOERLI_ETHERSCAN_API_KEY } =
  process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: API_URL,
      accounts: [PRIVATE_KEY as any],
    },
  },
  etherscan: {
    apiKey: {
      goerli: GOERLI_ETHERSCAN_API_KEY as any,
    },
  },
};

export default config;
