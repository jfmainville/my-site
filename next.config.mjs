/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nuagir-sbs-my-site-usea1-prod.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/public/images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
