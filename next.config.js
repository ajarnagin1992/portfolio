const deployEnv = process.env.deploy_env === "production";
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withMDX = require("@next/mdx")();

const nextConfig = {
  basePath: deployEnv ? "/portfolio" : "",
  assetPrefix: deployEnv ? "/portfolio" : "",
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        /* config for next-optimized-images */
      },
    ],
    // [
    //   withMDX,
    //   {
    //     /* config for withMDX */
    //   },
    // ],
  ],
  nextConfig
);
