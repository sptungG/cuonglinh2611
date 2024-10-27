/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV !== "production",
  swcMinify: process.env.NODE_ENV === "production",
  compress: process.env.NODE_ENV === "production",
  experimental: {
    optimizeCss: process.env.NODE_ENV === "production",
    scrollRestoration: false,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/c",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
