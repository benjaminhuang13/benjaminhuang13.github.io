# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start             # Local dev server at http://localhost:3000
npm run build         # Production build to /build
npm run deploy        # Push /build to gh-pages branch via gh-pages package
npm test              # Jest test runner
```

# Deployment

Run npm run build && npm run deploy.

The gh-pages package handles pushing to the gh-pages branch automatically.
The live site uses a custom domain configured via public/CNAME.

## Architecture Overview

**Stack**: React 19 (CRA / react-scripts), React Router DOM 5, Styled-Components 5, Sass.

**Entry point**:

- `src/index.js` initializes React and BrowserRouter
- `src/js/frontpage.js` is the main page component

**Content Model**:

- All content is hardcoded in frontpage.js
- No CMS, APIs, or external data sources
- To update content, modify props in frontpage.js and assets in src/images/

**Parallax system**: `src/js/Parallax.js` drives the hero section. It listens to `scroll` events and translates layers (stars, moon, space station, clouds) at different speeds using `offsetY` state. Several other components (`scrollzoom.js`, `ScrollToTop.js`) also attach their own scroll listeners — be careful adding more.

**Styling is a three-layer hybrid** — don't consolidate without care:

- `src/styles/*.js` — Styled-Components for layout and themed components; uses breakpoints defined in `src/styles/theme.js` (`mobile`, `tablet`, `desktop`, `widescreen`, `fullhd`)
- `src/styles/effects/*.scss` — SCSS for keyframe animations (twinkling stars, shooting stars)
- `src/styles/*.css` — Plain CSS for global layout, glitch effects, radar animation, custom fonts

**Content is fully hardcoded** — certifications, projects, and art gallery images are all passed as props inside `frontpage.js`. There is no CMS, API, or external data source. To add or update content, edit the relevant component props in `frontpage.js` and add image assets to `src/images/`.

**Image organization**: `src/images/` is divided into subdirectories by type (`art/`, `clouds/`, `icons/`, `logo/`, `project_icons/`). SVGs are imported as `ReactComponent`; PNGs/JPGs are imported as module URLs.

**Code Modification Rules (CRITICAL)**

- Only modify files relevant to the request
- Do NOT refactor unrelated components
- Keep changes minimal, focused, and predictable
- Preserve existing visual and UI behavior unless explicitly asked to change it
- Do NOT migrate or restructure styling systems unless requested
- Avoid introducing new dependencies
- Follow existing project patterns instead of redesigning architecture

**General Guidance**

- Prefer simple solutions over complex ones
- Match existing code style and structure
- Avoid unnecessary abstraction or overengineering
- When uncertain, follow existing implementation patterns
- Keep diffs small and reviewable
- Do not “clean up” code unless asked
