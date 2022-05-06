const withLess = require('next-with-less');
const withPlugins = require('next-compose-plugins');
const nextTranslate = require('next-translate');

const plugins = [[withLess, {}], [nextTranslate]];

module.exports = withPlugins(plugins, {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i2.wp.com'], // This is just to allow images from i2.wp.com, you can add more domains if you wish
  },
});
