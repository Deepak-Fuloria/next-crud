/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  allowedDevOrigins: ["172.25.176.1"],
  experimental: {
    agentFeedback: true,
  },
  reactCompiler: true,
  reactStrictMode: false,
};

export default nextConfig;
