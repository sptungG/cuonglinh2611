/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV !== "production",
  swcMinify: process.env.NODE_ENV === "production",
  compress: process.env.NODE_ENV === "production",
  optimizeFonts: process.env.NODE_ENV === "production",
  experimental: {
    optimizeCss: process.env.NODE_ENV === "production",
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
