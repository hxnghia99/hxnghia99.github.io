# hxnghia99.github.io

Personal portfolio site, published via GitHub Pages at https://hxnghia99.github.io

Built with plain HTML, CSS, and JavaScript — no build step or framework required.

## Structure

- `index.html` — page content and structure (hero, projects, experience, education, publications, skills, contact)
- `styles.css` — all styling
- `script.js` — mobile nav toggle, scroll-spy nav highlighting, project filter buttons
- `assets/` — CV PDF (`MyCV.pdf`), profile photo (`MyPhoto.jpg`), and any other static files

## Customizing

The site is populated with real content pulled from `assets/MyCV.pdf`. To update it, edit the
relevant section in `index.html` directly, or replace `assets/MyCV.pdf` / `assets/MyPhoto.jpg`
and update the links/content in `index.html` to match.

To add a real project, duplicate one `<article class="project-card">` block in the Projects
section and set `data-category` to `academic` or `industry` so the filter buttons pick it up
correctly.


## Deploying

This repo is named `hxnghia99.github.io`, so GitHub Pages publishes it automatically from the
`main` branch at the repo root — no extra configuration needed. Just push to `main`.
