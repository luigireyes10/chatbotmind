/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_INITIAL_URL: "/ecommerce/products",
    NEXT_PUBLIC_STATE_TYPE: "context",
    NEXT_PUBLIC_FILESTACK_KEY: "Ach6MsgoQHGK6tCaq5uJgz",
    NEXT_PUBLIC_LAYOUT: "default",
    NEXT_PUBLIC_MULTILINGUAL: "true",
    NEXT_PUBLIC_PRIMARY_COLOR: "#0A8FDC",
    NEXT_PUBLIC_SECONDARY_COLOR: "#F04F47",
    NEXT_PUBLIC_THEME_MODE: "light",
    NEXT_PUBLIC_NAV_STYLE: "default",
    NEXT_PUBLIC_LAYOUT_TYPE: "full-width",
    // NEXT_PUBLIC_API_URL: "https://api.ecommerce.com",
    GOOGLE_CLIENT_ID:
      "93890641501-hf0e7pvnjh43pslfu0r32gc7b7vvedgl.apps.googleusercontent.com",
    GOOGLE_SECRET_CLIENT: "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",
    GOOGLE_API_KEY: "AIzaSyBio0mnvXs3d9sdUDFctSXpoU2OmXYCSl0",
  },
  images: {
    domains: ['192.168.0.138'],
  },
};

module.exports = nextConfig;
