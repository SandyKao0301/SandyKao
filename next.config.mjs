// next.config.mjs
/** @type {import('next').NextConfig} */
const isCI = !!(process.env.GITHUB_ACTIONS || process.env.CI);
const base = isCI ? "/SandyKao" : "";

export default {
  output: "export",
  images: { unoptimized: true },
  basePath: base,
  assetPrefix: base,
  trailingSlash: true,
  reactStrictMode: true,
};
