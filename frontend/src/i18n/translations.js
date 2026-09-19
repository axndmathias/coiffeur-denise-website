// Bilingual content for Coiffeur Denise. German (de) is the default.
// Shared, non-translatable data (contact, images, social) lives in content.js.
import { IMAGES } from "../data/content";

// ---------- GERMAN (default) ----------
const de = {
  langLabel: "DE",
  nav: {
    home: "Start",
    about: "Über uns",
    services: "Leistungen",
    gallery: "Galerie",
    contact: "Kontakt",
    book: "Termin buchen",
  },
  hero: {
    eyebrow: "Für die Braut",
    script: "Coiffeur",
    title: "DENISE",
    tagline: "Brautstyling & Beauty",
    kicker: "Brautstyling & Beauty in der Schweiz",
    title1: "Strahlende Eleganz",
    title2: "für deinen unvergesslichen Tag.",
    subtitle:
      "Perfekte Harmonie aus Make-up und Haaren – mit der Ruhe, Präzision und Hingabe, die dein grosser Moment verdient.",
    quote1: "Was eine schöne Braut ausmacht, ist nicht das Kleid, nicht das Make-up und nicht das Haar …",
    quote2: "sondern die Harmonie zwischen allen Elementen.",
    intro:
      "Ihr Ziel für den grossen Tag – Brautfrisuren, Probetermine und Glamour für die ganze Hochzeitsgesellschaft, dazu Styling für jeden Anlass.",
    book: "Termin buchen",
    explore: "Leistungen entdecken",
  },
  home: {
    experience: "Jahre Erfahrung",
    essenceEyebrow: "Die Essenz",
    essenceTitle: "Wo deine Hochzeitsvision zum Leben erwacht",
    essenceBody:
      "Mit meisterhafter Präzision, viel Liebe zum Detail und der nötigen Ruhe begleite ich dich an deinem besonderen Tag. Vom entspannten Probetermin bis zum perfekten Finish an deinem Wunschort – gemeinsam kreieren wir einen zeitlosen Look, der deine natürliche Schönheit strahlen lässt.",
    discover: "Unsere Geschichte entdecken",
    servicesEyebrow: "Unser Angebot",
    servicesTitle: "Unsere Leistungen",
    service: "Leistung",
    services: "Leistungen",
    from: "ab",
    viewDetails: "Details ansehen",
    viewAll: "Alle Leistungen ansehen",
    portfolioEyebrow: "Portfolio",
    portfolioTitle: "Ein Einblick in unsere Arbeit",
    fullGallery: "Ganze Galerie",
    hoursTitle: "Öffnungszeiten",
    hoursSub: "Wir freuen uns auf Ihren Besuch.",
  },
  about: {
    heroEyebrow: "Unsere Geschichte",
    heroTitle: "Über Coiffeur Denise",
    heroSubtitle:
      "Brautstyling & Beauty in Romanshorn – wo Ihre Hochzeitsvision wunderschön zum Leben erwacht.",
    bookNow: "Jetzt buchen",
    whyEyebrow: "Der Unterschied",
    whyTitle: "Warum Coiffeur Denise",
    sections: [
      {
        id: "essence",
        title: "Die Essenz von Coiffeur Denise",
        body:
          "Coiffeur Denise ist der Ort, an dem Ihre Hochzeitsvision Wirklichkeit wird. Wir verbinden Kunst und Inspiration und verwandeln Sie in die strahlendste Version Ihrer selbst – zeitlose Braut-Eleganz mit einer modernen Note, ganz individuell auf Sie abgestimmt.",
        image: IMAGES.bridal,
      },
      {
        id: "occasion",
        title: "Für Ihren grossen Tag gemacht",
        body:
          "Vom ersten Probetermin bis zum letzten Schleier sind wir an Ihrer Seite. Ob intime Trauung oder grosse Feier – unser Brautstyling sorgt dafür, dass Sie und Ihre ganze Hochzeitsgesellschaft in den wichtigsten Momenten aussehen und sich fühlen wie nie zuvor.",
        image: IMAGES.serviceGlam,
      },
      {
        id: "red-carpet",
        title: "Bereit für den Gang zum Altar",
        body:
          "Stellen Sie sich vor, wie Sie voller Selbstbewusstsein und Anmut zum Altar schreiten. Unser Styling ist Ihr Ticket für diesen unvergesslichen Auftritt – von Hochzeiten und Verlobungsfeiern bis zu besonderen Anlässen bringen wir Sie zum Strahlen.",
        image: IMAGES.redCarpet,
      },
      {
        id: "signature",
        title: "Entdecken Sie Ihren Signature-Look",
        body:
          "Unsere Stylistinnen sind Künstlerinnen, die individuelle Braut-Looks kreieren, die Ihren Stil widerspiegeln und Ihre Vorzüge betonen. Ob sanfte, romantische Wellen, eine elegante Hochsteckfrisur oder ein makelloses Finish – wir verwirklichen Ihre Vorstellung.",
        image: IMAGES.essence,
      },
    ],
    whyChoose: [
      {
        title: "Braut-Expertise",
        body:
          "Unsere Spezialistinnen sind erfahrene Profis, die Können mit Leidenschaft verbinden und Braut-Looks kreieren, die den ganzen Tag halten und begeistern.",
      },
      {
        title: "Ganz auf Sie abgestimmt",
        body:
          "Jede Braut ist einzigartig – und so auch Ihr Erlebnis. Vom Probetermin bis zum Hochzeitstag arbeiten wir eng mit Ihnen zusammen, damit Ihr Look perfekt wird.",
      },
      {
        title: "Ruhiges, edles Ambiente",
        body:
          "Entspannen Sie und lassen Sie sich in unserem warmen, einladenden Studio im Herzen von Romanshorn für Ihren grossen Tag verwöhnen.",
      },
      {
        title: "Makelloses, langanhaltendes Ergebnis",
        body:
          "Mit hochwertigen Produkten und feinen Techniken schaffen wir ein wunderschönes, langanhaltendes Styling – vom ersten Blick bis zum letzten Tanz.",
      },
      {
        title: "Selbstbewusst in Ihrem Moment",
        body:
          "Schönes Haar und Beauty bedeuten nicht nur Aussehen, sondern das Gefühl, in den grössten Momenten Ihres Lebens zu strahlen.",
      },
    ],
  },
  services: {
    heroEyebrow: "Haar & Beauty",
    heroTitle: "Unsere Leistungen",
    heroSubtitle:
      "Brautstyling & Beauty, Anlass-Frisuren und alltägliche Coiffure – ganz für Sie gemacht.",
    note:
      "Die Preise sind Richtwerte und noch zu bestätigen – kontaktieren Sie uns für eine persönliche Brautberatung.",
    book: "Buchen",
    categories: [
      {
        name: "Brautstyling & Beauty",
        image: IMAGES.bridal,
        items: [
          { name: "Braut-Probetermin", desc: "Beratung und Probestyling vor der Hochzeit.", price: "CHF 95" },
          { name: "Hochzeitstag – Braut", desc: "Komplettes Brautstyling für Ihren Tag.", price: "CHF 250" },
          { name: "Styling Brautjungfer", desc: "Elegantes Styling passend zur Hochzeitsgesellschaft.", price: "CHF 125" },
          { name: "Styling Blumenmädchen", desc: "Süsses Styling für Ihre kleinsten Gäste.", price: "CHF 40" },
          { name: "Hochzeitspaket", desc: "Komplettpaket für die Hochzeitsgesellschaft.", price: "Auf Anfrage", note: "Anfahrtskosten können anfallen" },
        ],
      },
      {
        name: "Anlass-Frisuren",
        image: IMAGES.serviceGlam,
        items: [
          { name: "Make-up + Haar (Ball / Event)", desc: "Haarstyling & Make-up für Bälle und Events.", price: "CHF 120" },
          { name: "Hochsteckfrisur für Anlässe", desc: "Elegante Hochsteckfrisur für besondere Anlässe.", price: "Auf Anfrage" },
          { name: "Föhnen & Styling", desc: "Gepflegtes Föhn-Finish.", price: "Auf Anfrage" },
        ],
      },
      {
        name: "Coiffure",
        image: IMAGES.serviceEditorial,
        items: [
          { name: "Schnitt & Finish", desc: "Präziser Schnitt und Styling.", price: "Auf Anfrage" },
          { name: "Farbe", desc: "Volle Farbe oder Strähnen.", price: "Auf Anfrage" },
          { name: "Pflegebehandlung", desc: "Pflegende Haarbehandlung.", price: "Auf Anfrage" },
        ],
      },
    ],
  },
  gallery: {
    heroEyebrow: "Portfolio",
    heroTitle: "Die Galerie",
    heroSubtitle:
      "Eine kuratierte Auswahl unserer schönsten Looks – von Brautfrisuren bis bereit für den grossen Auftritt.",
    filters: ["Alle Arbeiten", "Brautfrisuren", "Hochsteckfrisuren & Styling", "Haar & Make-up", "Besondere Anlässe"],
    items: [
      { src: IMAGES.bridal, category: "Brautfrisuren", title: "Die Braut" },
      { src: IMAGES.essence, category: "Hochsteckfrisuren & Styling", title: "Zeitlose Hochsteckfrisur" },
      { src: IMAGES.redCarpet, category: "Brautfrisuren", title: "Eleganz mit Schleier" },
      { src: IMAGES.serviceEditorial, category: "Besondere Anlässe", title: "Abend-Glamour" },
      { src: IMAGES.serviceGlam, category: "Haar & Make-up", title: "Hochzeitsgesellschaft" },
      {
        src: "https://images.unsplash.com/photo-1590156351935-500f39544b27?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBjb3NtZXRpY3MlMjBicnVzaGVzJTIwYmVhdXR5JTIwcHJvZHVjdHxlbnwwfHx8fDE3ODk3MjQ2ODV8MA&ixlib=rb-4.1.0&q=85",
        category: "Haar & Make-up",
        title: "Der Touch der Künstlerin",
      },
      { src: IMAGES.hero, category: "Besondere Anlässe", title: "Goldene Stunde" },
      { src: IMAGES.serviceBrushes, category: "Hochsteckfrisuren & Styling", title: "Die letzten Details" },
    ],
  },
  book: {
    heroEyebrow: "Kontakt",
    heroTitle: "Termin buchen",
    heroSubtitle:
      "Erzählen Sie uns von Ihrem Anlass und Wunschtermin – wir gestalten das perfekte Erlebnis für Sie.",
    formTitle: "Anfrageformular",
    requiredNote: "Mit * markierte Felder sind Pflichtfelder.",
    fullName: "Vollständiger Name *",
    email: "E-Mail-Adresse *",
    phone: "Telefonnummer *",
    datetime: "Wunschdatum & -zeit *",
    service: "Leistung *",
    message: "Anlass / besondere Wünsche",
    phName: "Ihr Name",
    phEmail: "sie@email.com",
    phPhone: "Ihre Telefonnummer",
    phDatetime: "z. B. Sa 14. Juni, vormittags",
    phMessage: "Erzählen Sie uns von Ihrem Anlass…",
    servicePlaceholder: "Leistung auswählen…",
    submit: "Anfrage senden",
    sending: "Wird gesendet…",
    successToast: "Ihre Anfrage wurde gesendet – wir melden uns bald bei Ihnen!",
    errorToast: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
    validationToast: "Bitte füllen Sie alle Pflichtfelder aus.",
    thankYouPre: "Vielen Dank, ",
    confirmPre: "Ihre Anfrage für",
    confirmMid: "am",
    confirmPost: "ist bei uns eingegangen. Wir kontaktieren Sie unter",
    confirmSuffix: ", um Ihren Termin zu bestätigen.",
    anotherBtn: "Weitere Anfrage senden",
    studioDetails: "Studio-Details",
    openingHours: "Öffnungszeiten",
    hoursNote: "Öffnungszeiten noch zu bestätigen – kontaktieren Sie uns für einen Termin.",
  },
  footer: {
    explore: "Entdecken",
    openingHours: "Öffnungszeiten",
    followUs: "Folgen Sie uns",
    copyright: "© Coiffeur Denise • Alle Rechte vorbehalten",
    links: [
      ["Start", "/"],
      ["Über uns", "/about"],
      ["Leistungen", "/services"],
      ["Galerie", "/gallery"],
      ["Buchen / Kontakt", "/book"],
    ],
  },
  cta: {
    script: "bereit zu strahlen?",
    title: "Buchen Sie Ihr Beauty-Erlebnis",
    body:
      "Reservieren Sie Ihren Termin und lassen Sie unsere Stylistinnen einen Look kreieren, der einzigartig zu Ihnen passt.",
    button: "Termin buchen",
  },
  hours: [
    { day: "Montag", time: "Nach Vereinbarung", closed: false },
    { day: "Dienstag", time: "Nach Vereinbarung", closed: false },
    { day: "Mittwoch", time: "09:00 – 19:00", closed: false },
    { day: "Donnerstag", time: "Nach Vereinbarung", closed: false },
    { day: "Freitag", time: "09:00 – 19:00", closed: false },
    { day: "Samstag", time: "09:00 – 14:00", closed: false },
    { day: "Sonntag", time: "Geschlossen", closed: true },
  ],
};

// ---------- ENGLISH ----------
const en = {
  langLabel: "EN",
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    gallery: "Gallery",
    contact: "Contact",
    book: "Book Appointment",
  },
  hero: {
    eyebrow: "For the Bride",
    script: "Coiffeur",
    title: "DENISE",
    tagline: "Bridal Hair & Beauty",
    kicker: "Bridal Styling & Beauty in Switzerland",
    title1: "Radiant elegance",
    title2: "for your unforgettable day.",
    subtitle:
      "The perfect harmony of makeup and hair – with the calm, precision, and dedication your big moment deserves.",
    quote1: "What makes a beautiful bride isn't the dress, the makeup, or the hair …",
    quote2: "but the harmony between all the elements.",
    intro:
      "Your wedding-day beauty destination — bridal hair styling, trials, and glamour for the whole bridal party, with everyday styling too.",
    book: "Book Appointment",
    explore: "Explore Services",
  },
  home: {
    experience: "Years of Experience",
    essenceEyebrow: "The Essence",
    essenceTitle: "Where your wedding vision comes to life",
    essenceBody:
      "With masterful precision, deep attention to detail, and the calm you deserve, I accompany you on your special day. From a relaxed trial to the flawless finish at your chosen venue – together we create a timeless look that lets your natural beauty shine.",
    discover: "Discover our story",
    servicesEyebrow: "What We Offer",
    servicesTitle: "Our Services",
    service: "service",
    services: "services",
    from: "from",
    viewDetails: "View details",
    viewAll: "View All Services",
    portfolioEyebrow: "Portfolio",
    portfolioTitle: "A Glimpse of Our Work",
    fullGallery: "Full gallery",
    hoursTitle: "Studio Hours",
    hoursSub: "We look forward to welcoming you.",
  },
  about: {
    heroEyebrow: "Our Story",
    heroTitle: "About Coiffeur Denise",
    heroSubtitle:
      "Bridal hair & beauty in Romanshorn — where your wedding-day vision comes beautifully to life.",
    bookNow: "Book Now",
    whyEyebrow: "The Difference",
    whyTitle: "Why Choose Coiffeur Denise",
    sections: [
      {
        id: "essence",
        title: "The Essence of Coiffeur Denise",
        body:
          "Coiffeur Denise is where your wedding-day vision comes to life. It's a fusion of artistry and inspiration that transforms you into the most radiant version of yourself — capturing timeless bridal elegance and infusing it with a modern touch, creating a look that's uniquely yours.",
        image: IMAGES.bridal,
      },
      {
        id: "occasion",
        title: "Made for Your Big Day",
        body:
          "From the first trial to the final veil, we're by your side. Whether it's an intimate ceremony or a grand celebration, our bridal hair and beauty treatments ensure you — and your whole bridal party — look and feel exceptional on the moments that matter most.",
        image: IMAGES.serviceGlam,
      },
      {
        id: "red-carpet",
        title: "Aisle-Ready Glamour",
        body:
          "Imagine walking down the aisle exuding confidence and grace. Our styling is your ticket to that unforgettable entrance. From weddings and engagement parties to special occasions, we'll ensure you shine under every spotlight.",
        image: IMAGES.redCarpet,
      },
      {
        id: "signature",
        title: "Unveil Your Signature Look",
        body:
          "Our stylists are artists in their own right, skilled in crafting personalized bridal looks that reflect your individual style and enhance your features. Whether you dream of soft romantic waves, an elegant updo, or a flawless finish, we're here to bring your vision to life.",
        image: IMAGES.essence,
      },
    ],
    whyChoose: [
      {
        title: "Bridal Expertise",
        body:
          "Our specialists are seasoned professionals who combine skill with a passion for creating head-turning bridal looks that embody elegance and last all day long.",
      },
      {
        title: "Tailored to You",
        body:
          "Every bride is unique, and so is your experience. We collaborate closely with you — from trial to wedding day — to ensure your look is tailored to perfection.",
      },
      {
        title: "Calm, Luxurious Setting",
        body:
          "Relax and be pampered in a warm, welcoming studio in the heart of Romanshorn as you prepare for your special day.",
      },
      {
        title: "Flawless, Lasting Results",
        body:
          "Using premium products and refined techniques, we deliver beautiful, long-lasting styling that stays picture-perfect from first look to last dance.",
      },
      {
        title: "Confidence for Your Moment",
        body:
          "Great hair and beauty isn't just about appearance; it's about feeling radiant and confident as you step into the biggest moments of your life.",
      },
    ],
  },
  services: {
    heroEyebrow: "Hair & Beauty",
    heroTitle: "Our Services",
    heroSubtitle:
      "Bridal hair & beauty, special-occasion styling, and everyday hairdressing — crafted just for you.",
    note:
      "Prices are indicative and to be confirmed — please contact us for a personalised bridal consultation.",
    book: "Book",
    categories: [
      {
        name: "Bridal Hair & Beauty",
        image: IMAGES.bridal,
        items: [
          { name: "Bridal Hair Trial", desc: "Pre-wedding consultation & trial styling.", price: "CHF 95" },
          { name: "Wedding Day — Bride", desc: "Complete bridal hair styling for your day.", price: "CHF 250" },
          { name: "Bridesmaid Styling", desc: "Elegant styling to match your bridal party.", price: "CHF 125" },
          { name: "Flower Girl Styling", desc: "Sweet styling for your littlest guests.", price: "CHF 40" },
          { name: "Wedding Package", desc: "Full bridal party package.", price: "On request", note: "Travel fees may apply" },
        ],
      },
      {
        name: "Special Occasion Hair",
        image: IMAGES.serviceGlam,
        items: [
          { name: "Makeup + Hair (Ball / Event)", desc: "Hair styling & makeup for balls and events.", price: "CHF 120" },
          { name: "Occasion Updo", desc: "Elegant updo for special occasions.", price: "On request" },
          { name: "Blow-dry & Styling", desc: "Polished blow-dry finish.", price: "On request" },
        ],
      },
      {
        name: "Hairdressing",
        image: IMAGES.serviceEditorial,
        items: [
          { name: "Cut & Finish", desc: "Precision cut and style.", price: "On request" },
          { name: "Colour", desc: "Full colour or highlights.", price: "On request" },
          { name: "Treatment", desc: "Nourishing hair treatment.", price: "On request" },
        ],
      },
    ],
  },
  gallery: {
    heroEyebrow: "Portfolio",
    heroTitle: "The Gallery",
    heroSubtitle:
      "A curated collection of our signature looks — from bridal glam to red-carpet ready.",
    filters: ["All Works", "Bridal Hair", "Updos & Styling", "Hair & Makeup", "Special Occasions"],
    items: [
      { src: IMAGES.bridal, category: "Bridal Hair", title: "The Bride" },
      { src: IMAGES.essence, category: "Updos & Styling", title: "Timeless Updo" },
      { src: IMAGES.redCarpet, category: "Bridal Hair", title: "Veiled Elegance" },
      { src: IMAGES.serviceEditorial, category: "Special Occasions", title: "Evening Glamour" },
      { src: IMAGES.serviceGlam, category: "Hair & Makeup", title: "Bridal Party" },
      {
        src: "https://images.unsplash.com/photo-1590156351935-500f39544b27?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBjb3NtZXRpY3MlMjBicnVzaGVzJTIwYmVhdXR5JTIwcHJvZHVjdHxlbnwwfHx8fDE3ODk3MjQ2ODV8MA&ixlib=rb-4.1.0&q=85",
        category: "Hair & Makeup",
        title: "The Artist's Touch",
      },
      { src: IMAGES.hero, category: "Special Occasions", title: "Golden Hour" },
      { src: IMAGES.serviceBrushes, category: "Updos & Styling", title: "Finishing Details" },
    ],
  },
  book: {
    heroEyebrow: "Get in Touch",
    heroTitle: "Book Your Appointment",
    heroSubtitle:
      "Tell us about your occasion and preferred time — we'll craft the perfect experience for you.",
    formTitle: "Enquiry Form",
    requiredNote: "Fields marked * are required.",
    fullName: "Full Name *",
    email: "Email Address *",
    phone: "Phone Number *",
    datetime: "Preferred Date & Time *",
    service: "Service *",
    message: "Event Type / Special Requests",
    phName: "Your name",
    phEmail: "you@email.com",
    phPhone: "Your phone",
    phDatetime: "e.g. Sat 14 June, morning",
    phMessage: "Tell us about your occasion…",
    servicePlaceholder: "Select a service…",
    submit: "Send Enquiry",
    sending: "Sending…",
    successToast: "Your enquiry has been sent — we'll be in touch soon!",
    errorToast: "Something went wrong. Please try again.",
    validationToast: "Please fill in all required fields.",
    thankYouPre: "Thank You, ",
    confirmPre: "Your enquiry for",
    confirmMid: "on",
    confirmPost: "has been received. We'll contact you at",
    confirmSuffix: "to confirm your appointment.",
    anotherBtn: "Make Another Enquiry",
    studioDetails: "Studio Details",
    openingHours: "Opening Hours",
    hoursNote: "Hours to be confirmed — please contact us to arrange your appointment.",
  },
  footer: {
    explore: "Explore",
    openingHours: "Opening Hours",
    followUs: "Follow Us",
    copyright: "© Coiffeur Denise • All Rights Reserved",
    links: [
      ["Home", "/"],
      ["About", "/about"],
      ["Services", "/services"],
      ["Gallery", "/gallery"],
      ["Book / Contact", "/book"],
    ],
  },
  cta: {
    script: "ready to glow?",
    title: "Book Your Beauty Experience",
    body:
      "Reserve your appointment and let our stylists craft a look that's uniquely you.",
    button: "Book Appointment",
  },
  hours: [
    { day: "Monday", time: "By Appointment", closed: false },
    { day: "Tuesday", time: "By Appointment", closed: false },
    { day: "Wednesday", time: "09:00 – 19:00", closed: false },
    { day: "Thursday", time: "By Appointment", closed: false },
    { day: "Friday", time: "09:00 – 19:00", closed: false },
    { day: "Saturday", time: "09:00 – 14:00", closed: false },
    { day: "Sunday", time: "Closed", closed: true },
  ],
};

export const CONTENT = { de, en };
export const DEFAULT_LANG = "de";
