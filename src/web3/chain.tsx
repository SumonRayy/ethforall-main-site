import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { configureChains, createClient } from "wagmi";

import { arbitrum, mainnet, polygon } from "wagmi/chains";

const chains = [arbitrum, mainnet, polygon];

// Wagmi client
export const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "2052fadc533edd004bcfe9bc3ac68527" }),
]);
export const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: "2052fadc533edd004bcfe9bc3ac68527",
    version: "1", // or "2"
    appName: "web3Modal",
    chains,
  }),
  provider,
});

// Web3Modal Ethereum Client
export const ethereumClient = new EthereumClient(wagmiClient, chains);
