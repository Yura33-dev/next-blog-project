/** @type {import('next').NextConfig} */

import dotenv from 'dotenv';
dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodb_username: process.env.mongodb_username,
    mongodb_password: process.env.mongodb_password,
    mongodb_cluster: process.env.mongodb_cluster,
    mongodb_database: process.env.mongodb_database,
  },
};

export default nextConfig;
