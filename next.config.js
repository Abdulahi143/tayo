/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  metadataBase: "https://yourdomain.comhttps://main--tayo-website-v2.netlify.app", // Replace with your actual production domain
};

module.exports = nextConfig;
