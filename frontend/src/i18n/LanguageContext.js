import React, { createContext, useContext, useEffect, useState } from "react";
import { CONTENT, DEFAULT_LANG } from "./translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("cd_lang") : null;
    return saved && CONTENT[saved] ? saved : DEFAULT_LANG;
  });

  useEffect(() => {
    localStorage.setItem("cd_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = CONTENT[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
