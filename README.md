# Sandy Kao — Portfolio (Cookie‑free, GitHub Pages)

**Tech**: Next.js (static export), Tailwind CSS. No analytics, no external fonts, no cookies.
**Deploy**: GitHub Pages via Actions.

## Quick start
```bash
npm i
npm run dev
```

## Build & Export
```bash
npm run build && npm run export
```

Output goes to `./out/` for Pages.

### GitHub Pages setup
- If your repo is `username/username.github.io` (root domain): use the included `next.config.mjs` (root config).
- If your repo is a project page like `username/sandy-portfolio`: edit `next.config.mjs` and set `basePath` + `assetPrefix` as shown in the comments.

Then push to `main`. Actions will build and deploy automatically.