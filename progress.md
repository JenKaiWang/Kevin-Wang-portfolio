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

## Latest Update Summary

The latest website update changed the project detail section layout for the Game Project area.

- Adjusted video container spacing so the video preview fits better.
- Removed extra info boxes under Story Background.
- Changed `General` to `Focus` for `Technical Game Design`.
- Kept the layout ready for additional project entries later.
