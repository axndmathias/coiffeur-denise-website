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
| HTTP | `axios` (used by Book/Admin pages) |
| Language | Node 18+ (dev on Node 24), npm / yarn |

## Project structure

```
frontend/
├── public/
│   ├── index.html            # HTML shell, fonts, meta
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
│       ├── Gallery.js
│       ├── Book.js
│       └── Admin.js
├── tailwind.config.js      # palette, fonts, animations
├── postcss.config.js
└── package.json
```

## App flow

- `src/index.js` mounts `<App />`.
- `App.js` wraps everything in `LanguageProvider` + `BrowserRouter`; defines all routes.
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
Two parallel trees `de` and `en`, each containing: `nav`, `hero`, `home`, `about`, `services` (with `categories[].items[]` incl. price), `gallery` (items with category), `book`, `footer`, `cta`, `hours`.

## Configuration

- **Language default:** `DEFAULT_LANG = "de"` (edit in `translations.js`).
- **API base URL:** pages read `process.env.REACT_APP_BACKEND_URL` (currently unused — backend removed).
- Map embed uses `BRAND.mapQuery` against `google.com/maps?q=...&output=embed`.

## Running locally

```bash
cd frontend
npm install     # or: yarn
npm start       # dev server → http://localhost:3000
npm run build   # production build to frontend/build
```

## Backend — note (removed)

A FastAPI backend existed previously (`backend/server.py`, FastAPI + Motor/MongoDB) exposing:
- `POST /api/bookings`
- `GET /api/bookings` (admin, `X-Admin-Token`)
- `PATCH /api/bookings/{id}?status=...` (admin)

It required `.env` with `MONGO_URL`, `DB_NAME`, `ADMIN_TOKEN` and was removed from the repository (no MongoDB instance configured). The frontend Book/Admin pages still reference `REACT_APP_BACKEND_URL`. Restore or replace this when the bookings flow is decided (see MVP.md).

## Deployment (future)
Not yet configured. Options: Netlify, Vercel, GitHub Pages. The React app is a static build (`npm run build`) and can be served from any static host.