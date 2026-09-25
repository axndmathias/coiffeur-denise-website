import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { MessageCircle } from "lucide-react";
import { LanguageProvider, useLang } from "./i18n/LanguageContext";
import { whatsappUrl } from "./data/content";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function WhatsAppButton() {
  const { t } = useLang();
  return (
    <a
      href={whatsappUrl(t.wa.message)}
      target="_blank"
      rel="noreferrer"
      data-testid="floating-whatsapp"
      aria-label={t.wa.label}
      title={t.wa.label}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-black/25 hover:bg-[#1eb855] hover:scale-105 transition-all duration-300"
    >
      <MessageCircle size={28} />
    </a>
  );
}

const BASENAME = window.location.hostname.endsWith(".github.io")
  ? "/coiffeur-denise-website"
  : "";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <BrowserRouter basename={BASENAME}>
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
          <Toaster position="top-center" richColors />
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;
