import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";

// Small interior-page hero used on About / Services / Gallery / Book
export default function PageHero({ eyebrow, title, subtitle, image, imagePosition = "object-center" }) {
  return (
    <section
      data-testid="page-hero"
      className="relative min-h-[52vh] flex items-center justify-center text-center overflow-hidden bg-onyx"
    >
      <img
        src={image}
        alt={title}
        className={`absolute inset-0 w-full h-full object-cover ${imagePosition} opacity-45 animate-kenburns`}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-onyx/60 via-onyx/40 to-cream" />
      <div className="relative z-10 px-6 pt-20">
        {eyebrow && <p className="font-script text-4xl sm:text-5xl text-gold mb-1">{eyebrow}</p>}
        <h1 className="font-serif text-3xl sm:text-5xl tracking-tight text-cream mb-4">{title}</h1>
        <div className="gold-line mx-auto" />
        {subtitle && (
          <p className="mt-5 max-w-xl mx-auto text-cream/80 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function CtaBand() {
  const { t } = useLang();
  return (
    <section className="bg-onyx text-cream" data-testid="cta-band">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20 text-center">
        <p className="font-script text-4xl text-gold mb-2">{t.cta.script}</p>
        <h2 className="font-serif text-2xl sm:text-4xl mb-6">{t.cta.title}</h2>
        <p className="max-w-xl mx-auto text-cream/70 mb-9 leading-relaxed">{t.cta.body}</p>
        <Link
          to="/book"
          data-testid="cta-band-book-btn"
          className="inline-block rounded-full bg-gold text-onyx px-10 py-4 text-xs uppercase tracking-[0.22em] hover:bg-blush transition-all duration-300"
        >
          {t.cta.button}
        </Link>
      </div>
    </section>
  );
}
