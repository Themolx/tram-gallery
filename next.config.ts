import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(isStaticExport && {
    output: "export",
    basePath,
    assetPrefix: basePath,
    trailingSlash: true,
  }),
  turbopack: {
    root: "/Users/martintomek/.gemini/antigravity/scratch/tram-gallery",
  },
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
