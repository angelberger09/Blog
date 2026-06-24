# Soft Strange Studio Blog

A tiny Astro blog and public content feed for mock learning-in-public posts.

## Content model

Each post lives in its own folder under `src/posts/<slug>/`.

- `profile.json` stores structured metadata for cards, feeds, sorting, filtering, and future imports into the main Website repo.
- `content.md` stores the readable Markdown body.
- `src/data/posts.json` is the top-level post index used by the Astro pages.
- `public/posts.json` exposes the same index publicly at `/Blog/posts.json` after deployment.

## Local commands

```bash
npm install
npm run dev
npm run build
npm run preview
```
