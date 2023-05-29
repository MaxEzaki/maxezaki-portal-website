/** @type {import('next').NextConfig} */
const withLinaria = require("next-linaria");
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeFonts: true,
    appDir: true,
  },
};

const linariaOption = {};
module.exports = withLinaria({
  ...nextConfig,
  linaria: linariaOption,
});
