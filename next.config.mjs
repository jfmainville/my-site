/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  allowedDevOrigins: ["192.168.0.214"],
  output: process.env.NEXT_OUTPUT === "export" ? "export" : undefined,
};

export default nextConfig;
