# Coiffeur Denise — Product Requirements Document (PRD)

## 1. Overview

Coiffeur Denise is a bridal hair & beauty studio located in Romanshorn, Switzerland. Its website presents the studio's services, portfolio, and story, and directs potential brides to WhatsApp to book appointments. The site replaces an outdated ShowIt-based template ("Sophie Beauty") with a modern, responsive, bilingual experience.

## 2. Goals

1. Present Coiffeur Denise as a **bridal-first** hair & beauty destination.
2. Provide real, verified business information (address, phone, social links, hours).
3. Allow brides to **enquire/book** appointments via WhatsApp, with the message pre-filled in the active language.
4. Offer the site in **German and English** (German is the default).
5. Be fast, responsive, and visually elegant on all devices.

## 3. Non-goals (for now)

- No online payment / e-commerce.
- No automated email confirmations.
- No multi-branch management.
- No blog.
- No live Instagram feed wiring.
- No backend, database or enquiry form — the site is fully static and stores no personal data.

## 4. Target audience / personas

- **Brides-to-be** (primary) — planning their wedding day look; need trials, wedding-day styling, and party styling.
- **Bridal party members** — bridesmaids, flower girls.
- **Occasion clients** — ball/event hair & makeup.
- **Everyday hairdressing clients** — cut, colour, styling.

## 5. Brand identity

- **Name:** Coiffeur Denise
- **Logo style:** uppercase word "COIFFEUR" + script word "denise"
- **Aesthetic:** elegant, bridal, luxurious
- **Colour palette (Tailwind):**
  - `cream` `#FDFBF7`, `cream-2` `#FAF4ED`
  - `onyx` `#1C1917`
  - `gold` `#C5A880`, `rose-gold` `#D4A373`
  - `blush` `#E8B4B8`, `soft-pink` `#F3E0E2`
- **Fonts:** Cinzel (serif/headings), Cormorant Garamond (serif), Inspiration (script), Plus Jakarta Sans (sans)

## 6. Real business data

| Field | Value |
| --- | --- |
| Address | Alleestrasse 58, 8590 Romanshorn, Switzerland |
| Phone | +41 79 866 67 07 |
| Instagram | https://www.instagram.com/coiffeurdenise/ |
| Facebook | https://www.facebook.com/Www.coiffeur.denise.ch/ |
| Email | Not provided yet — hidden from the UI until confirmed |

## 7. Service catalogue

Prices are not published: every service is listed with the label "Auf Anfrage" (price on request).

### Bridal Hair & Beauty
| Service | Price |
| --- | --- |
| Bridal Hair Trial | Auf Anfrage |
| Wedding Day — Bride | Auf Anfrage |
| Bridesmaid Styling | Auf Anfrage |
| Flower Girl Styling | Auf Anfrage |
| Wedding Package | Auf Anfrage |

### Special Occasion Hair
| Service | Price |
| --- | --- |
| Makeup + Hair (Ball / Event) | Auf Anfrage |
| Occasion Updo | Auf Anfrage |
| Blow-dry & Styling | Auf Anfrage |

### Hairdressing
| Service | Price |
| --- | --- |
| Cut & Finish | Auf Anfrage |
| Colour | Auf Anfrage |
| Treatment | Auf Anfrage |

> Actual prices are agreed directly with the studio (WhatsApp).

## 8. Opening hours (displayed; to be confirmed)

| Day | Hours |
| --- | --- |
| Monday | By appointment |
| Tuesday | By appointment |
| Wednesday | 09:00 – 19:00 |
| Thursday | By appointment |
| Friday | 09:00 – 19:00 |
| Saturday | 09:00 – 14:00 |
| Sunday | Closed |

## 9. Features

### Pages & routes
| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/gallery` | Gallery |

### Key features
- **Bilingual UI (DE/EN)** — persisted in `localStorage` (`cd_lang`), DE default.
- **Responsive design** — mobile-first, works across breakpoints.
- **Gallery filters + lightbox.**
- **Booking via WhatsApp** — floating button plus per-service CTAs opening `wa.me` with a pre-filled message in the active language (intents: information, booking, availability).
- **Language-sensitive content** — all copy in `src/i18n/translations.js`.

## 10. Content sources

- `src/data/content.js` — shared non-translatable data (brand, contacts, images, social).
- `src/i18n/translations.js` — all bilingual copy + services + gallery items.
- Images: local `public/` assets + remote Unsplash/Pexels URLs.

## 11. Success metrics (future)

- WhatsApp conversations started from the site.
- Site performance (Lighthouse) and mobile usability.
- Engagement with social links (Instagram/Facebook).
- Optionally: live gallery from Instagram.

## 12. Open items needing client input

1. Real email address (or confirm none should be shown).
2. Confirmed full-week opening hours.
3. Real studio photos/logo replacing stock imagery.
4. Final prices, if the "Auf Anfrage" labels should be replaced by amounts.