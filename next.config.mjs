/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compress: process.env.NODE_ENV === "production",
  optimizeFonts: process.env.NODE_ENV === "production",
  experimental: {
    optimizeCss: process.env.NODE_ENV === "production",
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/a",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
