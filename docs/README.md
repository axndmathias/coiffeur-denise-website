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
- **Status:** Frontend MVP live in development; branding/content defined, pricing and hours to be confirmed

## Repository layout

```
frontend/       React application (all source code lives here)
docs/           This documentation
.gitignore      Git ignore rules (node_modules excluded)
```

The repository contains only the modern React frontend. The previous ShowIt-based template and the FastAPI backend were removed during the rebuild; see [ARCHITECTURE](ARCHITECTURE.md) for details and [MVP](MVP.md) for the bookings flow status.