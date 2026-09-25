# Coiffeur Denise — Architecture

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | React 18 + Create React App (`react-scripts`) |
| Routing | `react-router-dom` v6 |
| Styling | Tailwind CSS v3 + PostCSS + Autoprefixer |
| Animation | Framer Motion, CSS keyframes (`fadeUp`, `kenburns`) |
| Icons | `lucide-react` |
| Toasts | `sonner` |
| Language | Node 18+ (dev on Node 24), npm |

## Project structure

```
frontend/
├── public/
│   ├── index.html            # HTML shell, fonts, meta, SPA redirect script
│   ├── 404.html              # SPA fallback for direct route visits
│   ├── CNAME                 # Custom domain (coiffeur-denise.ch)
│   ├── hero-bg.jpg           # Local hero image
│   └── logo-coiffeur-denise.jpg
├── src/
│   ├── index.js              # React entry
│   ├── App.js                # Routes + providers
│   ├── App.css / index.css   # Global styles
│   ├── components/
│   │   ├── Navbar.js         # Nav + language switch + mobile menu
│   │   ├── Footer.js
│   │   ├── PageHero.js       # Shared page hero + CtaBand
│   │   └── Reveal.js         # Scroll-reveal wrapper
│   ├── data/
│   │   └── content.js        # BRAND (contact/social) + IMAGES + feed
│   ├── hooks/
│   │   └── useReveal.js
│   ├── i18n/
│   │   ├── LanguageContext.js  # language state + localStorage ('cd_lang')
│   │   └── translations.js     # de + en content trees
│   └── pages/
│       ├── Home.js
│       ├── About.js
│       ├── Services.js
│       └── Gallery.js
├── tailwind.config.js      # palette, fonts, animations
├── postcss.config.js
└── package.json
```

## App flow

- `src/index.js` mounts `<App />`.
- `App.js` wraps everything in `LanguageProvider` + `BrowserRouter`; defines the four public routes (`/`, `/about`, `/services`, `/gallery`).
- Bookings are not handled by the site: every call-to-action opens WhatsApp (`wa.me`) with a pre-filled, language-aware message.
- Each page reads copy via `useLang().t`; shared brand/contact data comes from `content.js`.
- `LanguageContext` initialises from `localStorage.getItem("cd_lang")`, falls back to `DEFAULT_LANG` (`de`), persists on change.

## Data & content model

### `content.js` (non-translatable)
```js
BRAND = {
  name, logoTop, logoScript,
  instagram, instagramUrl, facebookUrl,
  phone, phoneHref, email, address, mapQuery
}
IMAGES = { hero, essence, redCarpet, bridal, serviceGlam, serviceEditorial, serviceBrushes }
INSTAGRAM_FEED = [ ...urls ]
```

### `translations.js` (bilingual)
Two parallel trees `de` and `en`, each containing: `nav`, `hero`, `home`, `about`, `services` (with `categories[].items[]` incl. price label), `gallery` (items with category), `wa` (WhatsApp copy + per-service intents), `footer`, `cta`, `hours`.

## Configuration

- **Language default:** `DEFAULT_LANG = "de"` (edit in `translations.js`).
- Map embed uses `BRAND.mapQuery` against `google.com/maps?q=...&output=embed`.
- There is no backend, database or environment configuration: the site is a fully static build.

## Running locally

```bash
cd frontend
npm install
npm start       # dev server → http://localhost:3000
npm run build   # production build to frontend/build
```

## Deployment
GitHub Pages, deployed from `main` via `npm run deploy` (build → `gh-pages` branch).

- **Custom domain:** `https://coiffeur-denise.ch` (DNS at Infomaniak → GitHub Pages; `frontend/public/CNAME`).
- **Fallback URL:** `https://axndmathias.github.io/coiffeur-denise-website/`.
- `package.json` sets `"homepage": "."` so assets resolve relatively on both URLs; `App.js` derives the router `basename` from the hostname.
- Direct visits to sub-routes (e.g. `/services`) are served by `public/404.html`, which restores the original URL via `history.replaceState` and loads the app.