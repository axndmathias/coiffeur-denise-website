import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin, Phone, Mail, Github, MessageCircle } from "lucide-react";
import { BRAND, INSTAGRAM_FEED, whatsappUrl } from "../data/content";
import { useLang } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer data-testid="main-footer" className="bg-onyx text-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex flex-col leading-none mb-5">
            <span className="font-serif text-2xl tracking-[0.18em] text-cream font-semibold">{BRAND.logoTop}</span>
            <span className="font-script text-4xl -mt-1 text-gold">{BRAND.logoScript}</span>
          </div>
          <p className="text-sm leading-relaxed text-cream/60 max-w-xs">{t.hero.intro}</p>
          <div className="flex gap-3 mt-6">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noreferrer"
              data-testid="footer-instagram"
              className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-onyx transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href={BRAND.facebookUrl}
              target="_blank"
              rel="noreferrer"
              data-testid="footer-facebook"
              className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-onyx transition-all"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick nav */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-gold mb-5">{t.footer.explore}</h4>
          <ul className="space-y-3 text-sm">
            {t.footer.links.map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="text-cream/70 hover:text-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-gold mb-5">{t.footer.openingHours}</h4>
          <p className="text-sm text-cream/70 max-w-[240px] leading-relaxed">{t.hours}</p>
        </div>

        {/* Contact + Instagram feed */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.22em] text-gold mb-5">{t.footer.followUs}</h4>
          <div className="grid grid-cols-3 gap-2 mb-6">
            {INSTAGRAM_FEED.map((src, i) => (
              <a
                key={i}
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="aspect-square overflow-hidden rounded-md group"
              >
                <img
                  src={src}
                  alt="Coiffeur Denise work"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-center gap-3 text-cream/70">
              <MapPin size={15} className="text-gold shrink-0" />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold transition-colors"
              >
                {BRAND.address}
              </a>
            </li>
            <li className="flex items-center gap-3 text-cream/70">
              <Phone size={15} className="text-gold shrink-0" />
              <a href={BRAND.phoneHref} className="hover:text-gold transition-colors">
                {BRAND.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 text-cream/70">
              <MessageCircle size={15} className="text-gold shrink-0" />
              <a
                href={whatsappUrl(t.wa.message)}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-whatsapp"
                className="hover:text-gold transition-colors"
              >
                {t.wa.label}
              </a>
            </li>
            {BRAND.email && (
              <li className="flex items-center gap-3 text-cream/70">
                <Mail size={15} className="text-gold shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-gold transition-colors">
                  {BRAND.email}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-16">
        <h4 className="text-xs uppercase tracking-[0.22em] text-gold mb-5">{t.footer.mapTitle}</h4>
        <div className="rounded-2xl overflow-hidden border border-cream/10 h-64">
          <iframe
            title="Coiffeur Denise location"
            data-testid="footer-map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(BRAND.mapQuery)}&output=embed`}
          />
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-cream/40">
          <span>{t.footer.copyright}</span>
          <a
            href={BRAND.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
            data-testid="footer-developed-by"
          >
            <Github size={13} aria-label={t.footer.developedBy} />
            <span>{t.footer.developedBy}</span>
          </a>
          <span>{BRAND.instagram}</span>
        </div>
      </div>
    </footer>
  );
}
