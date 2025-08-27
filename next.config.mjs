// Next.js static export for GitHub Pages
const isProd = process.env.NODE_ENV === 'production';

// If deploying to a project repo (e.g., username/sandy-portfolio), set these:
// const repo = 'sandy-portfolio';
// export default {
//   output: 'export',
//   images: { unoptimized: true },
//   basePath: isProd ? `/${repo}` : '',
//   assetPrefix: isProd ? `/${repo}/` : '',
//   trailingSlash: true,
// };

// If deploying to username.github.io (root), use this simpler config:
export default {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};