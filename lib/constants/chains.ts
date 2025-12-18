export const CHAINS = {
  MAINNET: "mainnet",
} as const;

export type ChainName = (typeof CHAINS)[keyof typeof CHAINS];

export const DEFAULT_CHAIN: ChainName = CHAINS.MAINNET;
