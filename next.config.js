const deployEnv = process.env.deploy_env === "production";

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  basePath: deployEnv ? "/portfolio" : "",
  assetPrefix: deployEnv ? "/portfolio" : "",
};
