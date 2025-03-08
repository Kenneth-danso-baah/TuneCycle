import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Ensure existing rules don't process SVGs as static files
    config.module.rules.forEach((rule: { test: { test: (arg0: string) => any; }; exclude: RegExp; }) => {
      if (
        rule.test instanceof RegExp && // Ensure test is a RegExp
        rule.test.test(".svg") &&
        "exclude" in rule // Ensure exclude property exists
      ) {
        rule.exclude = /\.svg$/;
      }
    });

    // Add SVGR loader to handle SVGs as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
