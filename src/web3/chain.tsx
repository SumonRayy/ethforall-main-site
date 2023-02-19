import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { configureChains, createClient } from "wagmi";

import { goerli, polygonMumbai } from "wagmi/chains";
import { Chain } from "wagmi";

const mantleTestnet = {
  id: 5001,
  name: "Mantle Testnet",
  network: "mantleTestnet",
  rpcUrls: {
    public: {
      http: [`https://rpc.testnet.mantle.xyz`],
    },
    default: {
      http: [`https://rpc.testnet.mantle.xyz`],
    },
  },
  nativeCurrency: {
    name: "BIT",
    symbol: "BIT",
    decimals: 18,
  },
} as const satisfies Chain;

const chains = [polygonMumbai, goerli, mantleTestnet];


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
