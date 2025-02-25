/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.microcms-assets.io"],
  },
  // experimentalセクションは不要なので削除
  // webpackの設定も削除（Next.jsのデフォルトのCSS処理を使用）
  typescript: {},
};

module.exports = nextConfig;
