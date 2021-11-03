// next.config.js
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withMDX = require("@next/mdx")();

const nextConfig = {
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        /* config for next-optimized-images */
      },
    ],
    [
      withMDX,
      {
        /* config for withMDX */
      },
    ],
  ],
  nextConfig
);
