module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: [
          "cdn-icons-png.flaticon.com",
          "fakestoreapi.com",
          // "dummyjson.com/products",
        ],
        port: "",
      },
    ],
  },
};

/*@type {import('next').NextConfig}*/
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
