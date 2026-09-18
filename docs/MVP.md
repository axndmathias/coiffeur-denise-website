# Coiffeur Denise — MVP

## What the MVP is
A modern, bilingual (DE/EN), responsive marketing website for Coiffeur Denise that presents the studio's brand, services, gallery, and contact info, and lets visitors submit booking enquiries. It replaces the legacy ShowIt template.

## MVP scope — IN

### Frontend (React)
- [x] Home page — hero, essence, services preview, portfolio preview, hours
- [x] About page — story, why-choose-us
- [x] Services page — category/service list with prices
- [x] Gallery page — filterable gallery + lightbox
- [x] Book page — enquiry form + studio details + location map
- [x] Navbar with language switch + mobile menu
- [x] Footer with links, hours, social icons
- [x] Bilingual DE/EN content (DE default), persisted via localStorage
- [x] Responsive and elegant styling (Tailwind + Framer Motion)

## MVP scope — OUT (deferred)

- **Bookings backend (FastAPI + MongoDB)** — removed from the repo. Without it, the Book form and Admin page have no live API. Decision needed: restore backend, use a form service (e.g. Formspree/Google Forms), or email-only `mailto:`.
- **Online payment** — out of scope.
- **Automated email confirmations** — out of scope.
- **Custom domain / deployment** — not yet configured.
- **Admin panel** — depends on backend decision.
- **Live Instagram feed** — not wired.

## MVP acceptance criteria
1. Site renders on mobile and desktop without layout breakage.
2. DE/EN switch updates the entire UI and persists across reloads.
3. All core pages (`/`, `/about`, `/services`, `/gallery`, `/book`) are reachable and complete.
4. Gallerly filters and lightbox work.
5. No references to the legacy "Sophie Beauty" brand or ShowIt template remain.
6. Dev server runs with `npm start` (see ARCHITECTURE.md).

## Known limitations / placeholders
- Prices and hours are indicative ("to be confirmed").
- Email is hidden (empty) until provided.
- Imagery is stock (Unsplash/Pexels) until real photos are supplied.

## Next steps after MVP
1. Decide bookings flow (backend vs. form service).
2. Confirm real content: email, hours, prices, photos.
3. Deploy to a hosting provider and connect a domain.
4. QA pass on deployed environment (Lighthouse, mobile, cross-browser).