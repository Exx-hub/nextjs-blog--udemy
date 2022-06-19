const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_EXPORT,
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
} = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      nextConfig,
      env: {
        mongo_username: "AlvinAcosta",
        mongo_password: "A7v1n",
        mongo_cluster: "nextjscluster",
        mongo_dbname: "blogProject-dev",
        mongo_collection: "contactUs-dev",
      },
    };
  }

  return {
    nextConfig,
    env: {
      mongo_username: "AlvinAcosta",
      mongo_password: "A7v1n",
      mongo_cluster: "nextjscluster",
      mongo_dbname: "blogProject",
      mongo_collection: "contactUs",
    },
  };
};
