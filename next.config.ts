import type { NextConfig } from "next";
import path from "path";

const isStaticExport = process.env.STATIC_EXPORT === "true";
const isCI = process.env.CI === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(isStaticExport && {
    output: "export",
    basePath,
    assetPrefix: basePath,
    trailingSlash: true,
  }),
  // turbopack.root only needed locally (multiple lockfiles on dev machine)
  ...(!isCI && {
    turbopack: {
      root: path.resolve(__dirname),
    },
  }),
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      if (Array.isArray(config.externals)) {
        config.externals.push("maplibre-gl");
      }
    }
    return config;
  },
};

export default nextConfig;
