/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: { INFURA_ID: process.env.INFURA_ID }
};

module.exports = nextConfig;
