const deployEnv = process.env.deploy_env === "production";

const nextConfig = {
  basePath: deployEnv ? "/portfolio" : "",
  assetPrefix: deployEnv ? "/portfolio" : "",
};

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  nextConfig,
};
