# Project Progress Notes

## Project Overview

This is Kevin Wang's portfolio website.

- GitHub repo: `JenKaiWang/Kevin-Wang-portfolio`
- Deployment: GitHub Pages through GitHub Actions
- Frontend stack: Vite and React

## Safe Push Rules

- Do not commit `node_modules/`.
- Do not commit `dist/`.
- Do not commit `.vite/`.
- Do not commit temporary, cache, or local tooling files.
- Only commit real source code, assets, text/content updates, and necessary config files.

## Normal Update Workflow

1. Check `git status`.
2. Review changed files before staging.
3. Run `npm run build` before committing.
4. If the build passes, commit only the needed files.
5. Push to the correct branch.

## GitHub Pages Reminder

- Do not change the GitHub Actions workflow unless necessary.
- Do not change the Vite/GitHub Pages config unless necessary.
- Make sure the website still builds before pushing.
- Website path should remain `/Kevin-Wang-portfolio/`.
- `vite.config.ts` should keep `base: '/Kevin-Wang-portfolio/'`.
- Pages source should remain GitHub Actions.

## GitHub Pages Restore Notes

If the repo is accidentally changed to private and then back to public:

1. Confirm the repo is public again.
2. Confirm GitHub Pages is enabled and the source is GitHub Actions.
3. Check the `Deploy Vite site to Pages` workflow.
4. If the workflow failed, inspect the failed step and fix only that issue.
5. Run `npm install` and `npm run build` locally.
6. If the build passes but the site is still stale, make a small safe documentation commit to trigger a fresh Pages deploy.

## Latest Update Summary

The latest website update changed the project detail section layout for the Game Project area.

- Adjusted video container spacing so the video preview fits better.
- Removed extra info boxes under Story Background.
- Changed `General` to `Focus` for `Technical Game Design`.
- Kept the layout ready for additional project entries later.

## Latest Deployment Check

After the repo was changed from private back to public, the deployment setup was checked again.

- Repo visibility: public.
- Latest `Deploy Vite site to Pages` workflow: successful.
- GitHub Pages deployment workflow: successful.
- Live site returned HTTP 200 at `https://jenkaiwang.github.io/Kevin-Wang-portfolio/`.
- Local `npm install` completed.
- Local `npm run build` passed.
