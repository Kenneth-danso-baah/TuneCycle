import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
 
    const fileLoaderRule = config.module.rules.find(
      (rule): rule is { test: RegExp; exclude?: RegExp } =>
        rule.test instanceof RegExp && rule.test.test(".svg")
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }


    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
