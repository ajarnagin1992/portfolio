// next.config.js
const ghPages = process.env.DEPLOY_TARGET === "gh-pages";
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withMDX = require("@next/mdx")();

const nextConfig = {
  basePath: ghPages ? "/blog/" : "",
  assetPrefix: ghPages ? "/blog/" : "",
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
