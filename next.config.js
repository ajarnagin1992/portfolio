// next.config.js
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfig = {
  basePath: "portfolio",
  assetPrefix: "portfolio",
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        /* config for next-optimized-images */
      },
    ],

    // your other plugins here
  ],
  nextConfig
);
