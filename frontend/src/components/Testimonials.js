import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import Reveal from "./Reveal";

const STACK_IMAGES = [
  `${process.env.PUBLIC_URL}/foto_34.jpg`,
  `${process.env.PUBLIC_URL}/foto_77.jpg`,
  `${process.env.PUBLIC_URL}/foto_88.jpg`,
];

export default function Testimonials() {
  const { t } = useLang();
  const slides = t.home.testimonials;
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const touchX = React.useRef(null);

  const go = useCallback(
    (d) => {
      setDir(d);
      setIndex((i) => (i + d + slides.length) % slides.length);
    },
    [slides.length]
  );

  useEffect(() => {
    const id = setInterval(() => go(1), 7000);
    return () => clearInterval(id);
  }, [go]);

  const variants = {
    enter: (d) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <section className="bg-cream py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <Reveal className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.28em] text-gold mb-3">{t.home.kundenEyebrow}</p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">{t.home.kundenTitle}</h2>
          <div className="gold-line mx-auto mt-5" />
        </Reveal>

        <div className="relative grid lg:grid-cols-2 gap-16 lg:gap-14 items-center">
          {/* Overlapping image stack */}
          <Reveal className="relative h-[400px] sm:h-[420px] lg:h-[520px]">
            <div className="absolute top-4 sm:top-6 left-0 w-[70%] lg:w-[72%] rotate-[-4deg] overflow-hidden rounded-2xl border-8 border-white shadow-2xl">
              <img src={STACK_IMAGES[0]} alt="" className="w-full aspect-[3/4] object-cover" />
            </div>
            <div className="absolute top-16 sm:top-24 lg:top-40 right-0 w-[55%] lg:w-[60%] rotate-[5deg] overflow-hidden rounded-2xl border-8 border-white shadow-2xl">
              <img src={STACK_IMAGES[1]} alt="" className="w-full aspect-[3/4] object-cover" />
            </div>
            <div className="absolute bottom-2 sm:bottom-6 lg:bottom-0 left-6 sm:left-10 w-[45%] lg:w-[48%] rotate-[2deg] overflow-hidden rounded-2xl border-8 border-white shadow-2xl">
              <img src={STACK_IMAGES[2]} alt="" className="w-full aspect-[3/4] object-cover" />
            </div>
          </Reveal>

          {/* Slider */}
          <Reveal delay={120}>
            <div
              className="relative select-none"
              onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
              onTouchEnd={(e) => {
                const dx = e.changedTouches[0].clientX - (touchX.current ?? 0);
                if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
              }}
            >
              <AnimatePresence mode="wait" custom={dir} initial={false}>
                <motion.blockquote
                  key={index}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="min-h-[260px] flex flex-col justify-between"
                >
                  <div>
                    <Quote className="text-gold/40 mb-4" size={40} fill="currentColor" />
                    <p className="font-serif text-xl sm:text-2xl leading-relaxed text-onyx mb-6">
                      “{slides[index].text}”
                    </p>
                  </div>
                  <footer>
                    <div className="flex gap-1 mb-3" aria-label={`${slides[index].rating} stars`}>
                      {Array.from({ length: slides[index].rating }).map((_, s) => (
                        <Star key={s} size={16} className="text-gold" fill="currentColor" />
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-serif text-lg text-onyx">{slides[index].name}</p>
                        <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mt-1">
                          {slides[index].detail} · {slides[index].source}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => go(-1)}
                          aria-label="Previous testimonial"
                          className="h-10 w-10 rounded-full border border-onyx/20 hover:border-gold hover:text-gold flex items-center justify-center transition-colors"
                        >
                          <ChevronLeft size={18} />
                        </button>
                        <button
                          onClick={() => go(1)}
                          aria-label="Next testimonial"
                          className="h-10 w-10 rounded-full border border-onyx/20 hover:border-gold hover:text-gold flex items-center justify-center transition-colors"
                        >
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-center gap-2 mt-8">
                      {slides.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setDir(i > index ? 1 : -1);
                            setIndex(i);
                          }}
                          aria-label={`Go to testimonial ${i + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === index ? "w-8 bg-gold" : "w-2.5 bg-stone-300 hover:bg-gold/50"
                          }`}
                        />
                      ))}
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}