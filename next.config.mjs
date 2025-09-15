/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nuagir-my-site-sbs-usea1-prod.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/public/images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
