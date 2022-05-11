/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withCss = require("@zeit/next-css");
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");


const nextConfig = {
  webpack: (config) => {

    config.node = {
      fs: 'empty'
    }
        
    config.module.rules.push({
      include: /node_modules/,
      test: /\.mjs$/,
      type: 'javascript/auto'
    })  

    config.module.rules.push({
      test: /\.(eot|woff|woff2|ogg|mp3|wav|ttf|otf|ico|mpe?g)$/i,
      loader: "file-loader",
      options: {
        name: "[path][name].[ext]",
      },
    });

    if (config.module.css) {
      config.module.css.config.plugins.push(
        new FilterWarningsPlugin({
          exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
        })
      );
    }

    return config;
  },
  env: {},
};
module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        handleImages: ["jpeg", "png", "gif", "svg", "ico"],
      },
    ],
    withFonts,
    withCss,
    [withSass],
    [
      withLess,
      {
        lessLoaderOptions: {
          javascriptEnabled: true,
        },
      },
    ],
  ],
  {
    ...nextConfig,
    experimental: { granularChunks: true },
  }
);
