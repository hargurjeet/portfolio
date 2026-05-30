import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/Antigravitystudio",
        destination: "https://antigravity-studio-blush.vercel.app/Antigravitystudio",
      },
      {
        source: "/Antigravitystudio/:path*",
        destination: "https://antigravity-studio-blush.vercel.app/Antigravitystudio/:path*",
      },
    ];
  },
};

export default nextConfig;
