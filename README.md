# Noor Mohammad — Portfolio

A minimal, dark, API-themed portfolio built with **React**, **Tailwind CSS**, and **lucide-react** icons. Font: **Poppins** (headings/body) paired with **JetBrains Mono** for code-style labels ("eyebrows", nav routes, tags) — a nod to the REST API / backend theme.

## Design concept

- Every nav link and section label is written like an API route (`GET /projects`, `POST /contact`) — a structural device that actually reflects what this site is: a backend developer's own "API".
- The hero's signature element is an animated JSON response card, replacing a generic hero image with something that speaks the subject's own language.
- Palette: near-black ink background (`#0B0D12`) with a warm amber/coffee accent (`#E8A33D`) — a subtle nod to Java — and a small green "status: live" accent used only for real status indicators.

## Getting started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  data/portfolioData.js   # ALL resume content lives here — edit this file to update copy
  components/
    ui/                   # small reusable pieces (SectionHeading, Tag, TerminalCard)
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Achievements.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  index.css
  main.jsx
```

## Customizing

- **Content**: everything (name, projects, skills, achievements, education, contact links) is in `src/data/portfolioData.js`. Change it there and every component updates automatically.
- **Colors**: edit the `colors` block in `tailwind.config.js` (`ink`, `text`, `amber`, `status`).
- **Resume download button**: the "Resume" button in `Navbar.jsx` currently points to `#contact`. Add your PDF to `public/` (e.g. `public/resume.pdf`) and update the `href` to `/resume.pdf` with a `download` attribute.
- **Deploying**: `npm run build` produces a static `dist/` folder — deploy it to Vercel, Netlify, GitHub Pages, or Render as a static site.
