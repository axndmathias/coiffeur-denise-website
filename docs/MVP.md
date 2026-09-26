# Coiffeur Denise — MVP

## What the MVP is
A modern, bilingual (DE/EN), responsive marketing website for Coiffeur Denise that presents the studio's brand, services, gallery, and contact info, and sends interested visitors straight to WhatsApp to book. It replaces the legacy ShowIt template.

## MVP scope — IN

### Frontend (React)
- [x] Home page — hero, essence, services preview, portfolio preview, appointment notice
- [x] About page — story, why-choose-us
- [x] Services page — category/service list with price labels ("Auf Anfrage")
- [x] Gallery page — filterable gallery + lightbox
- [x] Booking via WhatsApp — all CTAs open a pre-filled, language-aware chat
- [x] Navbar with language switch + mobile menu
- [x] Footer with contact details, appointment notice, map, social icons
- [x] Bilingual DE/EN content (DE default), persisted via localStorage
- [x] Responsive and elegant styling (Tailwind + Framer Motion)
- [x] Deployed on GitHub Pages with custom domain `coiffeur-denise.ch`

## MVP scope — OUT (deferred)

- **Online payment** — out of scope.
- **Automated email confirmations** — out of scope.
- **Enquiry form / backend / database** — not used. The site is fully static; there is no server, no API and no stored personal data.
- **Live Instagram feed** — not wired.

## MVP acceptance criteria
1. Site renders on mobile and desktop without layout breakage.
2. DE/EN switch updates the entire UI and persists across reloads.
3. All core pages (`/`, `/about`, `/services`, `/gallery`) are reachable and complete.
4. Gallerly filters and lightbox work.
5. No references to the legacy "Sophie Beauty" brand or ShowIt template remain.
6. Dev server runs with `npm start` (see ARCHITECTURE.md).
7. Booking CTAs open WhatsApp with the correct message in the active language.

## Known limitations / placeholders
- All services are shown as "Auf Anfrage" (price on request) until final prices are confirmed.
- Imagery is stock (Unsplash/Pexels) until real photos are supplied.

## Next steps after MVP
1. Supply real studio photos/logo to replace stock imagery.
2. Confirm final prices if the "Auf Anfrage" labels should be replaced by amounts.
3. QA pass on the deployed environment (Lighthouse, mobile, cross-browser).