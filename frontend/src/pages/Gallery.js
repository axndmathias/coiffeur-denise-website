import React, { useState } from "react";
import { X } from "lucide-react";
import { IMAGES } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import PageHero, { CtaBand } from "../components/PageHero";
import Reveal from "../components/Reveal";

export default function Gallery() {
  const { t } = useLang();
  const filters = t.gallery.filters;
  const [filter, setFilter] = useState(filters[0]);
  const [lightbox, setLightbox] = useState(null);

  const items = filter === filters[0] ? t.gallery.items : t.gallery.items.filter((g) => g.category === filter);

  return (
    <div data-testid="gallery-page">
      <PageHero
        eyebrow={t.gallery.heroEyebrow}
        title={t.gallery.heroTitle}
        subtitle={t.gallery.heroSubtitle}
        image={`${process.env.PUBLIC_URL}/foto_1061.jpg`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f, i) => (
            <button
              key={f}
              data-testid={`gallery-filter-${i}`}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
                filter === f
                  ? "bg-onyx text-cream"
                  : "border border-stone-300 text-stone-500 hover:border-gold hover:text-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry-ish grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {items.map((g, i) => (
            <Reveal key={`${g.title}-${i}`} delay={(i % 3) * 90} className="break-inside-avoid">
              <button
                data-testid={`gallery-item-${i}`}
                onClick={() => setLightbox(g)}
                className="group block w-full overflow-hidden rounded-xl relative"
              >
                <img
                  src={g.src}
                  alt={g.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/40 transition-all duration-300 flex items-end p-5">
                  <div className="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-left">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold">{g.category}</p>
                    <p className="font-serif text-lg text-cream">{g.title}</p>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          data-testid="gallery-lightbox"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] bg-onyx/95 backdrop-blur-sm flex items-center justify-center p-6 animate-fadeUp"
        >
          <button
            data-testid="lightbox-close"
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-cream/80 hover:text-gold"
          >
            <X size={30} />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="max-w-3xl w-full text-center">
            <img src={lightbox.src} alt={lightbox.title} className="max-h-[75vh] w-auto mx-auto rounded-lg" />
            <p className="text-xs uppercase tracking-[0.24em] text-gold mt-5">{lightbox.category}</p>
            <p className="font-serif text-2xl text-cream mt-1">{lightbox.title}</p>
          </div>
        </div>
      )}

      <CtaBand />
    </div>
  );
}
