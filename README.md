# hxnghia99.github.io

Personal portfolio site, published via GitHub Pages at https://hxnghia99.github.io

Built with plain HTML, CSS, and JavaScript — no build step or framework required.

## Structure

- `index.html` — page content and structure (hero, projects, experience, education, skills, contact)
- `styles.css` — all styling
- `script.js` — mobile nav toggle, scroll-spy nav highlighting, project filter buttons
- `assets/` — put your CV PDF, photo, or other static files here

## Customizing

Search `index.html` for `TODO` and `[bracketed placeholder]` text — these mark everything that
still needs your real content: bio, location, current role, projects, work experience, education,
skills, and links (CV, LinkedIn).

To add your CV, drop a PDF into `assets/` (e.g. `assets/cv.pdf`) and point the "Curriculum Vitae"
button in `index.html` at it.

To add a real project, duplicate one `<article class="project-card">` block in the Projects
section and set `data-category` to `academic`, `industry`, or `personal` so the filter buttons
pick it up correctly.

## Running locally

No build tools needed — just open `index.html` in a browser, or serve the folder locally:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying

This repo is named `hxnghia99.github.io`, so GitHub Pages publishes it automatically from the
`main` branch at the repo root — no extra configuration needed. Just push to `main`.
