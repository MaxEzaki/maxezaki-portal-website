/** @type {import('next').NextConfig} */
const withLinaria = require('next-linaria');
const nextConfig = {
  reactStrictMode: true,
};
const linariaOption = {};
module.exports = withLinaria({
  ...nextConfig,
  linaria: linariaOption,
  // webpack: (config, _options) => {
  //   config.resolve.modules.push(__dirname + '/src');
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     '@src': path.resolve(__dirname, './src'),
  //   };
  //   return config;
  // },
});
