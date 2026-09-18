# Coiffeur Denise — Product Requirements Document (PRD)

## 1. Overview

Coiffeur Denise is a bridal hair & beauty studio located in Romanshorn, Switzerland. Its website presents the studio's services, portfolio, and story, and lets potential brides book appointments. The site replaces an outdated ShowIt-based template ("Sophie Beauty") with a modern, responsive, bilingual experience.

## 2. Goals

1. Present Coiffeur Denise as a **bridal-first** hair & beauty destination.
2. Provide real, verified business information (address, phone, social links, hours).
3. Allow brides to **enquire/book** appointments directly from the site.
4. Offer the site in **German and English** (German is the default).
5. Be fast, responsive, and visually elegant on all devices.

## 3. Non-goals (for now)

- No online payment / e-commerce.
- No automated email confirmations.
- No multi-branch management.
- No blog.
- No live Instagram feed wiring.

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

## 7. Service catalogue (indicative — to be confirmed)

### Bridal Hair & Beauty
| Service | Price |
| --- | --- |
| Bridal Hair Trial | CHF 95 |
| Wedding Day — Bride | CHF 250 |
| Bridesmaid Styling | CHF 125 |
| Flower Girl Styling | CHF 40 |
| Wedding Package | On request (travel fees may apply) |

### Special Occasion Hair
| Service | Price |
| --- | --- |
| Makeup + Hair (Ball / Event) | CHF 120 |
| Occasion Updo | On request |
| Blow-dry & Styling | On request |

### Hairdressing
| Service | Price |
| --- | --- |
| Cut & Finish | On request |
| Colour | On request |
| Treatment | On request |

> Prices shown on the site include the note that they are indicative and to be confirmed.

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
| `/book` | Book / Contact |
| `/admin` | Admin (bookings management — requires backend) |

### Key features
- **Bilingual UI (DE/EN)** — persisted in `localStorage` (`cd_lang`), DE default.
- **Responsive design** — mobile-first, works across breakpoints.
- **Gallery filters + lightbox.**
- **Booking enquiry form** — name, email, phone, preferred date/time, service, message.
- **Language-sensitive content** — all copy in `src/i18n/translations.js`.

## 10. Content sources

- `src/data/content.js` — shared non-translatable data (brand, contacts, images, social).
- `src/i18n/translations.js` — all bilingual copy + services + gallery items.
- Images: local `public/` assets + remote Unsplash/Pexels URLs.

## 11. Success metrics (future)

- Booking enquiries received via `/book`.
- Site performance (Lighthouse) and mobile usability.
- Engagement with social links (Instagram/Facebook).
- Optionally: live gallery from Instagram.

## 12. Open items needing client input

1. Real email address (or confirm none should be shown).
2. Confirmed full-week opening hours.
3. Final/live service list and prices.
4. Real studio photos/logo replacing stock imagery.
5. Live deployment target (Netlify/Vercel/GitHub Pages) and custom domain.
6. Decision/restore of bookings backend (FastAPI + MongoDB was removed from this repo).