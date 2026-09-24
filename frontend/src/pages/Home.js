import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { IMAGES, BRIDE_EXPERIENCE, PORTFOLIO } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import Reveal from "../components/Reveal";
import Testimonials from "../components/Testimonials";
import { CtaBand } from "../components/PageHero";

export default function Home() {
  const { t } = useLang();

  return (
    <div data-testid="home-page">
      {/* HERO — split layout (text left, portrait right) */}
      <section className="relative min-h-[100vh] grid lg:grid-cols-2 bg-onyx">
        {/* Portrait */}
        <div className="relative min-h-[48vh] lg:min-h-screen order-1 lg:order-2">
          <img
            src={`${process.env.PUBLIC_URL}/hero-bg.jpg`}
            alt="Coiffeur Denise bridal beauty"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-onyx lg:bg-gradient-to-r lg:from-onyx lg:via-onyx/10 lg:to-transparent" />
        </div>

        {/* Text */}
        <div className="relative z-10 flex items-center order-2 lg:order-1">
          <div className="w-full max-w-xl mx-auto px-6 sm:px-10 lg:px-16 py-14 lg:py-24 animate-fadeUp">
            <p className="flex items-center gap-3 text-gold text-xs uppercase tracking-[0.28em] mb-4">
              <span className="h-px w-10 bg-gold" /> {t.hero.kicker}
            </p>
            <h1 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-cream tracking-tight leading-[1.15] mb-6">
              {t.hero.quote1}{" "}
              <span className="font-script font-normal italic text-blush">{t.hero.quote2}</span>
            </h1>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/book"
                data-testid="hero-book-btn"
                className="rounded-full bg-gold text-onyx px-9 py-4 text-xs uppercase tracking-[0.22em] hover:bg-blush transition-all duration-300 flex items-center gap-2"
              >
                {t.hero.book} <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                data-testid="hero-services-btn"
                className="rounded-full border border-cream/40 text-cream px-9 py-4 text-xs uppercase tracking-[0.22em] hover:border-gold hover:text-gold transition-all duration-300"
              >
                {t.hero.explore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO / ESSENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20 lg:py-32 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="relative">
          <img
            src={`${process.env.PUBLIC_URL}/foto_611.jpg`}
            alt="The essence of Coiffeur Denise"
            className="rounded-2xl w-full h-[480px] object-cover object-[50%_20%] shadow-xl"
          />
          <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-onyx text-cream rounded-2xl px-7 py-5 shadow-2xl">
            <p className="font-serif text-3xl text-gold">20+</p>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/70">{t.home.experience}</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-xs uppercase tracking-[0.28em] text-gold mb-4">{t.home.essenceEyebrow}</p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight mb-6 leading-tight">
            {t.home.essenceTitle}
          </h2>
          <div className="gold-line mb-6" />
          <p className="text-stone-600 leading-relaxed mb-5">{t.home.essenceBody}</p>
          <Link
            to="/about"
            data-testid="home-about-link"
            className="inline-flex items-center gap-2 text-onyx font-medium border-b border-gold pb-1 hover:text-gold transition-colors"
          >
            {t.home.discover} <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      {/* BRIDE EXPERIENCE */}
      <section className="bg-cream-2 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <Reveal className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.28em] text-gold mb-3">{t.home.brideKicker}</p>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">{t.home.brideTitle}</h2>
            <div className="gold-line mx-auto mt-5" />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {t.home.brideCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 120}>
                <div
                  data-testid={`home-service-${i}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-stone-200/70 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={BRIDE_EXPERIENCE[i].image}
                      alt={BRIDE_EXPERIENCE[i].alt}
className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                      i === 1 ? "object-[50%_-15%]" : ""
                    }`}
                    />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="font-serif text-xl mb-3">{card.title}</h3>
                    <p className="text-sm text-stone-500 mb-6 flex-1 leading-relaxed">{card.body}</p>
                    <a
                      href={BRIDE_EXPERIENCE[i].href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold group-hover:text-onyx transition-colors"
                    >
                      {card.cta} <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STRESSFREI AM HOCHZEITSTAG */}
      <section className="py-20 lg:py-32" style={{ backgroundColor: "#FBF9F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-gold mb-4">{t.home.stressEyebrow}</p>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tight mb-6 leading-tight">
              {t.home.stressTitle}
            </h2>
            <div className="gold-line mb-6" />
            <p className="text-stone-600 leading-relaxed mb-8">{t.home.stressBody}</p>
            <ul className="space-y-5">
              {t.home.stressPoints.map((p) => (
                <li key={p.title} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                  <span>
                    <span className="block font-serif text-lg text-onyx">{p.title}</span>
                    <span className="block text-sm text-stone-500">{p.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="relative">
            <div className="rounded-2xl overflow-hidden border border-white shadow-xl">
              <img
                src={`${process.env.PUBLIC_URL}/foto_6.jpg`}
                alt="Entspannte Vorbereitung am Hochzeitstag"
                loading="lazy"
                className="w-full h-[420px] sm:h-[520px] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* KUNDENSTIMMEN */}
      <Testimonials />

      {/* CTA */}
      <section
        data-testid="home-cta"
        className="relative overflow-hidden bg-onyx text-center"
      >
        <img
          src={`${process.env.PUBLIC_URL}/foto_3.jpg`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-onyx/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 py-20 lg:py-28">
          <Reveal>
            <p className="text-gold text-xs uppercase tracking-[0.28em] mb-4">
              {t.home.ctaEyebrow}
            </p>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-cream leading-tight mb-8">
              {t.home.ctaTitle}
            </h2>
            <Link
              to="/book"
              data-testid="home-cta-btn"
              className="inline-block rounded-full bg-gold text-onyx px-10 py-4 text-xs uppercase tracking-[0.22em] hover:bg-blush transition-all duration-300"
            >
              {t.home.ctaButton} <ArrowRight size={16} className="inline -mt-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-cream-2 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-gold mb-3">{t.home.portfolioEyebrow}</p>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">{t.home.portfolioTitle}</h2>
          </div>
          <Link
            to="/gallery"
            data-testid="home-gallery-link"
            className="text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:text-gold transition-colors"
          >
            {t.home.fullGallery} <ArrowRight size={14} />
          </Link>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {PORTFOLIO.map((g, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group overflow-hidden rounded-xl aspect-[3/4]">
                <img
                  src={g.image}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  style={g.objectPosition ? { objectPosition: g.objectPosition } : undefined}
                />
              </div>
            </Reveal>
          ))}
        </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}