import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve ??= {};
    config.resolve.alias ??= {};

    (config.resolve.alias as Record<string, string | false>)[
      "@react-native-async-storage/async-storage"
    ] = false;

    return config;
  },
};

export default nextConfig;
