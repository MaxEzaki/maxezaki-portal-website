/** @type {import('next').NextConfig} */

/** app/[type] が静的生成する型。next.config.js は TS を読めないのでここに持つ */
const ROUTE_TYPES = [
  "stockphoto",
  "mc",
  "engineer",
  "teacher",
  "percussionist",
  "actor",
];

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
  // 旧形式 /?type=engineer を /engineer に寄せる。
  // 既知の型のみ対象にして、未知の値や ?type=index は従来どおり
  // トップページ（index のカード）を表示させる。
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "query",
            key: "type",
            value: `(?<type>${ROUTE_TYPES.join("|")})`,
          },
        ],
        destination: "/:type",
        permanent: false,
      },
    ];
  },
  typescript: {},
};

module.exports = nextConfig;
