import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Clock } from "lucide-react";
import { IMAGES } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import Reveal from "../components/Reveal";
import { CtaBand } from "../components/PageHero";

export default function Home() {
  const { t } = useLang();
  const highlights = t.services.categories;
  const galleryPreview = t.gallery.items.slice(0, 4);

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
            src={`${process.env.PUBLIC_URL}/foto_66.jpg`}
            alt="The essence of Coiffeur Denise"
            className="rounded-2xl w-full h-[480px] object-cover shadow-xl"
          />
          <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-onyx text-cream rounded-2xl px-7 py-5 shadow-2xl">
            <p className="font-serif text-3xl text-gold">10+</p>
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

      {/* SERVICE HIGHLIGHTS */}
      <section className="bg-cream-2 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <Reveal className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.28em] text-gold mb-3">{t.home.servicesEyebrow}</p>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">{t.home.servicesTitle}</h2>
            <div className="gold-line mx-auto mt-5" />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((cat, i) => (
              <Reveal key={cat.name} delay={i * 120}>
                <div
                  data-testid={`home-service-${i}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-stone-200/70 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <Sparkles size={20} className="text-gold mb-3" />
                    <h3 className="font-serif text-xl mb-2">{cat.name}</h3>
                    <p className="text-sm text-stone-500 mb-5 flex-1">
                      {cat.items.length} {cat.items.length > 1 ? t.home.services : t.home.service}
                      {cat.items[0].price.startsWith("CHF") ? ` · ${t.home.from} ${cat.items[0].price}` : ""}
                    </p>
                    <Link
                      to="/services"
                      className="text-xs uppercase tracking-[0.2em] text-onyx group-hover:text-gold flex items-center gap-2 transition-colors"
                    >
                      {t.home.viewDetails} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              data-testid="home-all-services-btn"
              className="inline-block rounded-full border border-onyx/30 px-9 py-4 text-xs uppercase tracking-[0.22em] hover:bg-onyx hover:text-cream transition-all duration-300"
            >
              {t.home.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20 lg:py-32">
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
          {galleryPreview.map((g, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group overflow-hidden rounded-xl aspect-[3/4]">
                <img
                  src={g.src}
                  alt={g.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOURS STRIP */}
      <section className="bg-cream-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1">
            <Clock className="text-gold mb-3" size={28} />
            <h3 className="font-serif text-2xl mb-2">{t.home.hoursTitle}</h3>
            <p className="text-sm text-stone-500">{t.home.hoursSub}</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {t.hours.map((h) => (
              <div key={h.day} className="bg-white rounded-xl border border-stone-200/70 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-stone-400">{h.day}</p>
                <p className={`text-sm mt-1 ${h.closed ? "text-stone-400" : "text-onyx"}`}>{h.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}