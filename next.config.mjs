/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["better-auth"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;