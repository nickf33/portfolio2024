const path = require("path");

const nextConfig = {
  images: {
    // Define remote image patterns for Next.js Image component
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disbale: false,
});

module.exports = withPWA(nextConfig);
