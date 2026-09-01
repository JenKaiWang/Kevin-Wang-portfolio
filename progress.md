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

The latest website work expanded and refined the Game Project and Work Experience sections.

### Agent 067

- Added `Agent 067` above `Welcome Stranger` in the Game Project section.
- Added the UEFN gameplay video, project thumbnail, agency office, parking lot, night club, and laboratory images.
- Added project information for Unreal Editor for Fortnite (UEFN), team size, published status, island code, and story background.
- Replaced the original vertically stacked Agent 067 media cards with a compact Steam-style gallery.
- The gameplay video is selected by default, and React state switches the main viewer when a thumbnail is selected.
- The selected thumbnail uses a cyan border and glow, and the main viewer label updates dynamically.
- All media uses a consistent 16:9 viewer so switching items does not change the page height.
- On desktop, the gallery remains on the left and project information remains on the right.
- On mobile, project information appears before the media gallery.
- Added a gallery-specific horizontal scrollbar with a dark navy track, cyan thumb, pink hover state, rounded corners, and Firefox support.

### Welcome Stranger

- Removed the arrow-based video carousel.
- Both prototype videos are now displayed directly, with Dialogue System and Storytelling first and Character and Animation second.
- Kept the existing project information and Story Background design.

### Work Experience

- Added Alliance Française de Chicago as the newest Work Experience entry.
- Added and connected the updated `AFImage.png` logo asset.
- Corrected the image import filename so the AF image builds and displays correctly.

## Latest Local Verification

- The latest `npm run build` completed successfully.
- Vite transformed 2,038 modules and included the new AF and Agent 067 media assets in the production build.
- No unrelated portfolio sections were redesigned as part of these updates.

## Latest Deployment Check

After the repo was changed from private back to public, the deployment setup was checked again.

- Repo visibility: public.
- Latest `Deploy Vite site to Pages` workflow: successful.
- GitHub Pages deployment workflow: successful.
- Live site returned HTTP 200 at `https://jenkaiwang.github.io/Kevin-Wang-portfolio/`.
- Local `npm install` completed.
- Local `npm run build` passed.
