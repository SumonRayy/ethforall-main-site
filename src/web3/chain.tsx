import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { configureChains, createClient } from "wagmi";

import { goerli, arbitrumGoerli, polygonMumbai } from "wagmi/chains";

const chains = [goerli, arbitrumGoerli, polygonMumbai];

// Wagmi client
export const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: import.meta.env.VITE_W3M_PROJECT_ID }),
]);
export const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: import.meta.env.VITE_W3M_PROJECT_ID,
    version: "1", // or "2"
    appName: "web3Modal",
    chains,
  }),
  provider,
});

// Web3Modal Ethereum Client
export const ethereumClient = new EthereumClient(wagmiClient, chains);
