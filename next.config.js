/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.pdf$/,
      loader: "raw-loader",
    });

    // Important: return the modified config
    return config;
  },
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "/",
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  i18n: {
    locales: ["en", "fr"],
    // The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
    defaultLocale: "fr",
  },
};

module.exports = nextConfig;
