# Coiffeur Denise — Documentation

Central documentation for the Coiffeur Denise website (Bridal Hair & Beauty, Romanshorn, Switzerland).

## Quick links

| Document | Purpose |
| --- | --- |
| [PRD](PRD.md) | Product Requirements Document — goals, audience, features, content |
| [MVP](MVP.md) | MVP scope — what is in/out for the first launch |
| [ARCHITECTURE](ARCHITECTURE.md) | Tech stack, project structure, data & content model |

## Project at a glance

- **Brand:** Coiffeur Denise — bridal hair & beauty
- **Location:** Alleestrasse 58, 8590 Romanshorn, Switzerland
- **Stack:** React 18 (Create React App) + Tailwind CSS + Framer Motion, bilingual DE/EN
- **Status:** Live at https://coiffeur-denise.ch (GitHub Pages); bookings run through WhatsApp, prices shown as "Auf Anfrage"

## Repository layout

```
frontend/       React application (all source code lives here)
docs/           This documentation
.gitignore      Git ignore rules (node_modules excluded)
```

The repository contains only the modern React frontend. The previous ShowIt-based template was removed during the rebuild. The site is fully static: no backend, no database, no enquiry form — bookings happen over WhatsApp.