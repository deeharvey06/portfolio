# Clifford Harvey — Portfolio

A React (Vite) single-page portfolio. Design system is plain CSS with
custom properties — no framework lock-in, easy to tweak.

## Run locally

```bash
npm install
npm run dev
```

Open the printed localhost URL.

## Editing content

All real content lives in `src/data/`:

- `projects.js` — the 5 case studies (problem / approach / impact)
- `experience.js` — the work-history timeline
- `skills.js` — grouped skill chips

Edit these directly; the components read from them, so no JSX hunting
required for content changes.

Your résumé PDF lives at `public/Clifford_Harvey_Resume.pdf` — swap the
file (keep the same name) to update the "Résumé" download link, or
rename it and update the `href` in `src/components/Nav.jsx`.

## Deploying to GitHub Pages

**1. Set the correct base path.**

Open `vite.config.js` and set `base` to match your repo name exactly:

```js
base: '/your-repo-name/',
```

If you're deploying to a repo named `cliff-portfolio`, that's
`base: '/cliff-portfolio/'`. If you ever deploy to a custom domain or a
`username.github.io` root repo, set `base: '/'` instead.

**2. Push to GitHub, then enable Pages.**

- Push this project to a new GitHub repo.
- In the repo, go to **Settings → Pages** and set **Source** to
  **GitHub Actions**.
- The included workflow (`.github/workflows/deploy.yml`) will build and
  deploy automatically on every push to `main`.

That's it — no `gh-pages` branch to manage by hand. Every push to
`main` redeploys the live site.

**Alternative (manual) deploy**, if you'd rather not use Actions:

```bash
npm install
npm run build
npm run deploy
```

This uses the `gh-pages` package to push the `dist/` folder to a
`gh-pages` branch — set Pages source to that branch instead if you go
this route.

## Structure

```
src/
  components/   one component + one CSS file per section
  data/         resume-derived content (edit here)
  App.jsx       composes the page
  index.css     design tokens + shared utilities
```
