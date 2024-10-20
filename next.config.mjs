/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compress: process.env.NODE_ENV === "production",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/a",
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // https://react-svgr.com/docs/options/
            icon: true,
            dimensions: false,
            svgo: true,
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
