// next.config.mjs — deploy to https://USERNAME.github.io/SandyKao/
const isProd = process.env.NODE_ENV === 'production';
const repo = 'SandyKao';

export default {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true,
};
