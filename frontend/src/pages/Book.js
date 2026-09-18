import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Check } from "lucide-react";
import { BRAND, IMAGES } from "../data/content";
import { useLang } from "../i18n/LanguageContext";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  service: "",
  preferred_datetime: "",
  message: "",
};

export default function Book() {
  const { t } = useLang();
  const [form, setForm] = useState(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(null);

  const serviceOptions = t.services.categories.flatMap((c) =>
    c.items.map((i) => `${c.name} — ${i.name}`)
  );

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.service || !form.preferred_datetime) {
      toast.error(t.book.validationToast);
      return;
    }
    setSubmitting(true);
    try {
      const { data } = await axios.post(`${API}/bookings`, form);
      setConfirmed(data);
      setForm(EMPTY);
      toast.success(t.book.successToast);
    } catch (err) {
      toast.error(t.book.errorToast);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="book-page">
      <PageHero
        eyebrow={t.book.heroEyebrow}
        title={t.book.heroTitle}
        subtitle={t.book.heroSubtitle}
        image={IMAGES.serviceGlam}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-24 grid lg:grid-cols-5 gap-10">
        {/* Form */}
        <div className="lg:col-span-3">
          <Reveal>
            <div className="bg-white rounded-2xl border border-stone-200/70 shadow-sm p-7 sm:p-10">
              {confirmed ? (
                <div data-testid="booking-confirmation" className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-soft-pink mx-auto flex items-center justify-center mb-6">
                    <Check size={30} className="text-onyx" />
                  </div>
                  <h2 className="font-serif text-3xl mb-3">
                    {t.book.thankYouPre}
                    {confirmed.name}!
                  </h2>
                  <p className="text-stone-600 max-w-md mx-auto leading-relaxed mb-6">
                    {t.book.confirmPre} <span className="text-gold">{confirmed.service}</span>{" "}
                    {t.book.confirmMid} <span className="text-gold">{confirmed.preferred_datetime}</span>{" "}
                    {t.book.confirmPost} {confirmed.email}
                    {t.book.confirmSuffix}
                  </p>
                  <button
                    data-testid="new-booking-btn"
                    onClick={() => setConfirmed(null)}
                    className="rounded-full border border-onyx/30 px-8 py-3.5 text-xs uppercase tracking-[0.22em] hover:bg-onyx hover:text-cream transition-all duration-300"
                  >
                    {t.book.anotherBtn}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} data-testid="booking-form" className="space-y-5">
                  <h2 className="font-serif text-2xl mb-1">{t.book.formTitle}</h2>
                  <p className="text-sm text-stone-500 mb-4">{t.book.requiredNote}</p>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label={t.book.fullName}>
                      <input
                        data-testid="input-name"
                        value={form.name}
                        onChange={update("name")}
                        className="form-input"
                        placeholder={t.book.phName}
                      />
                    </Field>
                    <Field label={t.book.email}>
                      <input
                        data-testid="input-email"
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        className="form-input"
                        placeholder={t.book.phEmail}
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label={t.book.phone}>
                      <input
                        data-testid="input-phone"
                        value={form.phone}
                        onChange={update("phone")}
                        className="form-input"
                        placeholder={t.book.phPhone}
                      />
                    </Field>
                    <Field label={t.book.datetime}>
                      <input
                        data-testid="input-datetime"
                        value={form.preferred_datetime}
                        onChange={update("preferred_datetime")}
                        className="form-input"
                        placeholder={t.book.phDatetime}
                      />
                    </Field>
                  </div>

                  <Field label={t.book.service}>
                    <select
                      data-testid="input-service"
                      value={form.service}
                      onChange={update("service")}
                      className="form-input"
                    >
                      <option value="">{t.book.servicePlaceholder}</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label={t.book.message}>
                    <textarea
                      data-testid="input-message"
                      value={form.message}
                      onChange={update("message")}
                      rows={4}
                      className="form-input resize-none"
                      placeholder={t.book.phMessage}
                    />
                  </Field>

                  <button
                    type="submit"
                    data-testid="booking-submit-btn"
                    disabled={submitting}
                    className="w-full rounded-full bg-onyx text-cream py-4 text-xs uppercase tracking-[0.22em] hover:bg-gold hover:text-onyx transition-all duration-300 disabled:opacity-60"
                  >
                    {submitting ? t.book.sending : t.book.submit}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* Info sidebar */}
        <div className="lg:col-span-2 space-y-6">
          <Reveal delay={120}>
            <div className="bg-onyx text-cream rounded-2xl p-8">
              <h3 className="font-serif text-2xl mb-6">{t.book.studioDetails}</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin size={18} className="text-gold shrink-0 mt-0.5" /> {BRAND.address}
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="text-gold shrink-0 mt-0.5" />
                  <a href={BRAND.phoneHref} className="hover:text-gold transition-colors">
                    {BRAND.phone}
                  </a>
                </li>
                {BRAND.email && (
                  <li className="flex gap-3">
                    <Mail size={18} className="text-gold shrink-0 mt-0.5" />
                    <a href={`mailto:${BRAND.email}`} className="hover:text-gold transition-colors">
                      {BRAND.email}
                    </a>
                  </li>
                )}
              </ul>
              <div className="mt-8 pt-8 border-t border-cream/10">
                <h4 className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold mb-4">
                  <Clock size={15} /> {t.book.openingHours}
                </h4>
                <ul className="space-y-2 text-sm">
                  {t.hours.map((h) => (
                    <li key={h.day} className="flex justify-between">
                      <span className="text-cream/70">{h.day}</span>
                      <span className={h.closed ? "text-cream/40" : "text-cream/90"}>{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-cream/50 mt-4 italic">{t.book.hoursNote}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-2xl overflow-hidden border border-stone-200/70 h-64">
              <iframe
                title="Coiffeur Denise location"
                data-testid="location-map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(BRAND.mapQuery)}&output=embed`}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.16em] text-stone-500 mb-2">{label}</span>
      {children}
    </label>
  );
}
