import { mainnet, sepolia } from "@reown/appkit/networks";

export const CHAINS = {
  MAINNET: "mainnet",
  SEPOLIA: "sepolia",
} as const;

export type ChainName = (typeof CHAINS)[keyof typeof CHAINS];

export const DEFAULT_CHAIN: ChainName = CHAINS.MAINNET;

export const CHAIN_ID_BY_NAME: Record<ChainName, number> = {
  [CHAINS.MAINNET]: mainnet.id,
  [CHAINS.SEPOLIA]: sepolia.id,
};

export const getChainNameById = (chainId?: number): ChainName => {
  if (chainId === sepolia.id) {
    return CHAINS.SEPOLIA;
  }

  return DEFAULT_CHAIN;
};
