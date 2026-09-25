import React from "react";
import { Clock, ArrowRight } from "lucide-react";
import { IMAGES, whatsappUrl } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import PageHero, { CtaBand } from "../components/PageHero";
import Reveal from "../components/Reveal";

export default function Services() {
  const { t } = useLang();
  return (
    <div data-testid="services-page">
      <PageHero
        eyebrow={t.services.heroEyebrow}
        title={t.services.heroTitle}
        subtitle={t.services.heroSubtitle}
        image={`${process.env.PUBLIC_URL}/foto_117.jpg`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-14">
        <p className="text-center text-sm text-stone-500 italic max-w-2xl mx-auto" data-testid="services-note">
          {t.services.note}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-14 lg:py-20 space-y-16">
        {t.services.categories.map((cat, ci) => (
          <Reveal key={cat.name}>
            <div data-testid={`service-category-${ci}`} className="grid lg:grid-cols-12 gap-8">
              {/* Category header card */}
              <div className="lg:col-span-4">
                <div
                  className={`relative rounded-2xl overflow-hidden sticky top-28 bg-onyx lg:h-full min-h-[220px] ${
                    ci <= 2 ? "h-[640px] sm:h-[720px]" : "h-56"
                  }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className={`absolute inset-0 w-full h-full object-cover ${
                      ci === 1 ? "lg:object-[100%_30%]" : ""
                    }`}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-onyx/90 via-onyx/40 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-7">
                    <p className="text-xs uppercase tracking-[0.24em] text-gold mb-2">
                      {String(ci + 1).padStart(2, "0")}
                    </p>
                    <h2 className="font-serif text-2xl sm:text-3xl text-cream">{cat.name}</h2>
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="lg:col-span-8 space-y-4">
                {cat.items.map((item, ii) => (
                  <div
                    key={ii}
                    data-testid={`service-item-${ci}-${ii}`}
                    className="group bg-white rounded-xl border border-stone-200/70 p-6 sm:p-7 flex items-start justify-between gap-6 hover:border-gold/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-1">
                      <h3 className="font-serif text-lg sm:text-xl mb-1.5">{item.name}</h3>
                      {item.desc && <p className="text-sm text-stone-500 mb-2">{item.desc}</p>}
                      <div className="flex items-center gap-4 text-xs text-stone-400">
                        {item.note && <span className="italic text-gold">{item.note}</span>}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-serif text-xl sm:text-2xl text-onyx">{item.price}</p>
                      <a
                        href={whatsappUrl(
                          t.wa.service[item.waIntent].replace("{service}", item.name)
                        )}
                        target="_blank"
                        rel="noreferrer"
                        data-testid={`book-service-${ci}-${ii}`}
                        className="mt-2 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.18em] text-stone-400 group-hover:text-gold transition-colors"
                      >
                        {t.services.book} <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <CtaBand />
    </div>
  );
}
