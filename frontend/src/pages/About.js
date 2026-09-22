import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { IMAGES } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import PageHero, { CtaBand } from "../components/PageHero";
import Reveal from "../components/Reveal";

export default function About() {
  const { t } = useLang();
  return (
    <div data-testid="about-page">
      <PageHero
        eyebrow={t.about.heroEyebrow}
        title={t.about.heroTitle}
        subtitle={t.about.heroSubtitle}
        image={`${process.env.PUBLIC_URL}/foto_97.jpg`}
      />

      {/* Alternating editorial sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-20 lg:py-28 space-y-24 lg:space-y-32">
        {t.about.sections.map((s, i) => (
          <div
            key={s.id}
            data-testid={`about-section-${s.id}`}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-[420px] lg:h-[520px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-xs uppercase tracking-[0.28em] text-gold mb-4">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl tracking-tight mb-6 leading-tight">
                {s.title}
              </h2>
              <div className="gold-line mb-6" />
              <p className="text-stone-600 leading-relaxed text-lg font-cormorant">{s.body}</p>
              <Link
                to="/book"
                className="inline-block mt-8 rounded-full border border-onyx/30 px-8 py-3.5 text-xs uppercase tracking-[0.22em] hover:bg-onyx hover:text-cream transition-all duration-300"
              >
                {t.about.bookNow}
              </Link>
            </Reveal>
          </div>
        ))}
      </div>

      {/* Why choose */}
      <section className="bg-cream-2 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <Reveal className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.28em] text-gold mb-3">{t.about.whyEyebrow}</p>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">{t.about.whyTitle}</h2>
            <div className="gold-line mx-auto mt-5" />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.about.whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={i * 90}>
                <div
                  data-testid={`why-choose-${i}`}
                  className="bg-white rounded-2xl border border-stone-200/70 p-8 h-full hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-11 h-11 rounded-full bg-soft-pink flex items-center justify-center mb-5">
                    <Check size={18} className="text-onyx" />
                  </div>
                  <h3 className="font-serif text-xl mb-3">{w.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{w.body}</p>
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
