/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    // Set NEXT_PUBLIC_UNOPTIMIZED_IMAGES=true on hosts without the Next image optimizer
    unoptimized: process.env.NEXT_PUBLIC_UNOPTIMIZED_IMAGES === "true",
  },
  experimental: { optimizePackageImports: ["lucide-react", "framer-motion"] },
};
export default nextConfig;
