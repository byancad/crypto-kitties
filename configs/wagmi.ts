import {
  InjectedConnector,
  Provider,
  chain,
  defaultChains,
  Connector
} from "wagmi";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { WalletLinkConnector } from "wagmi/connectors/walletLink";

const infuraId = process.env.INFURA_ID;

// Chains for connectors to support
const chains = defaultChains;

// Set up connectors
export const connectors = ({ chainId }: any) => {
  const rpcUrl =
    chains.find(x => x.id === chainId)?.rpcUrls?.[0] ??
    chain.mainnet.rpcUrls[0];
  return [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      options: {
        infuraId,
        qrcode: true
      }
    }),
    new WalletLinkConnector({
      options: {
        appName: "My wagmi app",
        jsonRpcUrl: `${rpcUrl}/${infuraId}`
      }
    })
  ];
};
