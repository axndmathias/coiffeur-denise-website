import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { BRAND } from "../data/content";
import { useLang } from "../i18n/LanguageContext";

const ROUTES = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/services", key: "services" },
  { to: "/gallery", key: "gallery" },
  { to: "/book", key: "contact" },
];

function LangSwitch({ className = "" }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`flex items-center gap-0.5 text-xs uppercase tracking-[0.18em] rounded-full border border-gold/40 bg-onyx/40 backdrop-blur-sm px-1.5 py-1 ${className}`}
    >
      <Globe size={12} className="text-gold ml-1 mr-0.5" />
      {["de", "en"].map((l, i) => (
        <React.Fragment key={l}>
          {i > 0 && <span className="w-px h-3.5 bg-gold/25" />}
          <button
            data-testid={`lang-${l}`}
            onClick={() => setLang(l)}
            className={`px-2 py-0.5 rounded-full transition-all duration-300 ${
              lang === l
                ? "bg-gold text-onyx font-semibold shadow-[0_2px_8px_rgba(197,168,128,0.45)]"
                : "text-cream/70 hover:text-gold"
            }`}
          >
            {l.toUpperCase()}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}

export default function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      data-testid="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-onyx/90 backdrop-blur-md border-b border-gold/20 py-3"
          : "bg-gradient-to-b from-onyx/70 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between">
        <Link to="/" data-testid="logo-link" className="flex flex-col leading-none group">
          <span className="font-serif text-xl sm:text-2xl tracking-[0.18em] text-cream font-semibold">
            {BRAND.logoTop}
          </span>
          <span className="font-script text-3xl sm:text-4xl -mt-1 leading-none text-gold group-hover:text-blush transition-colors [text-shadow:0_1px_8px_rgba(0,0,0,0.85)]">
            {BRAND.logoScript}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {ROUTES.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              data-testid={`nav-${l.key}-link`}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.22em] transition-colors relative py-1 ${
                  isActive ? "text-gold" : "text-cream/80 hover:text-gold"
                }`
              }
            >
              {t.nav[l.key]}
            </NavLink>
          ))}
          <LangSwitch className="ml-1" />
          <Link
            to="/book"
            data-testid="nav-book-cta"
            className="ml-1 rounded-full border border-gold/70 text-gold px-6 py-2.5 text-xs uppercase tracking-[0.22em] hover:bg-gold hover:text-onyx transition-all duration-300"
          >
            {t.nav.book}
          </Link>
        </nav>

        <div className="flex items-center gap-4 lg:hidden">
          <LangSwitch />
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((o) => !o)}
            className="text-cream p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-onyx/95 backdrop-blur-md ${
          open ? "max-h-[420px] border-t border-gold/20" : "max-h-0"
        }`}
        data-testid="mobile-menu"
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
          {ROUTES.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              data-testid={`mobile-nav-${l.key}-link`}
              className={({ isActive }) =>
                `text-sm uppercase tracking-[0.22em] ${isActive ? "text-gold" : "text-cream/85"}`
              }
            >
              {t.nav[l.key]}
            </NavLink>
          ))}
          <Link
            to="/book"
            data-testid="mobile-nav-book-cta"
            className="mt-2 text-center rounded-full border border-gold text-gold px-6 py-3 text-xs uppercase tracking-[0.22em]"
          >
            {t.nav.book}
          </Link>
        </nav>
      </div>
    </header>
  );
}
