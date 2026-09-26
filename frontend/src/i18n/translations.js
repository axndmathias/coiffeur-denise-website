// Bilingual content for Coiffeur Denise. German (de) is the default.
// Shared, non-translatable data (contact, images, social) lives in content.js.
import { IMAGES } from "../data/content";

// ---------- GERMAN (default) ----------
const de = {
  langLabel: "DE",
  nav: {
    home: "Start",
    about: "Über mich",
    services: "Leistungen",
    gallery: "Galerie",
    book: "Termin buchen",
  },
  wa: {
    label: "WhatsApp",
    message: "Hallo Denise, ich möchte gerne einen Termin buchen.",
    service: {
      info: "Hallo Denise, ich möchte gerne mehr Informationen zu {service} und einen Termin vereinbaren.",
      book: "Hallo Denise, ich möchte {service} für meinen grossen Tag buchen.",
      availability: "Hallo Denise, ich möchte gerne die Verfügbarkeit für {service} erfragen.",
    },
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
    discover: "Meine Geschichte entdecken",
    brideKicker: "Die Braut-Erfahrung",
    brideTitle: "In wenigen Schritten zu deinem perfekten Look",
    brideCards: [
      {
        title: "Beratungs- & Probetermin",
        body:
          "Unverbindliche Anfrage für dein Wunschdatum, gefolgt von einem entspannten Probetermin in meinem Salon. Ich kreiere deinen Look perfekt abgestimmt auf dein Kleid und deinen Stil.",
        cta: "Termin anfragen",
      },
      {
        title: "Der Hochzeitstag (On-Location)",
        body:
          "An deinem grossen Tag komme ich direkt an deinen Wunschort – für deinen makellosen Komplettlook aus Hairstyling und Make-up. Pünktlich, ruhig und hochprofessionell, damit du deine Vorbereitung in voller Gelassenheit geniessen kannst.",
        cta: "Jetzt anfragen",
      },
      {
        title: "Deine Hochzeitsgesellschaft",
        body:
          "Exklusiver Styling-Service auch für deine Mutter, Trauzeuginnen und liebsten Gästinnen. Ein harmonisches Gesamtbild für euren besonderen Tag.",
        cta: "Mehr erfahren",
      },
    ],
    stressEyebrow: "Dein grosser Tag",
    stressTitle: "Stressfrei & entspannt in den Tag starten",
    stressBody:
      "Kein Zeitdruck, keine Hektik: Mit einem persönlich auf dich abgestimmten Zeitplan sorge ich dafür, dass am Hochzeitstag alles reibungslos läuft. Während dein Look mit Ruhe und Präzision entsteht, kannst du entspannt deinen Kaffee geniessen und dich ganz auf den schönsten Moment deines Lebens freuen.",
    stressPoints: [
      { title: "Persönlicher Zeitplan", body: "Massgeschneidert auf deinen Hochzeitstag." },
      { title: "Pünktlich & zuverlässig", body: "Damit du dich um nichts kümmern musst." },
      { title: "Langanhaltender Look", body: "Vom ersten Foto bis zum letzten Tanz." },
    ],
    servicesEyebrow: "Mein Angebot",
    servicesTitle: "Meine Leistungen",
    service: "Leistung",
    services: "Leistungen",
    from: "ab",
    viewDetails: "Details ansehen",
    viewAll: "Alle Leistungen ansehen",
    portfolioEyebrow: "Portfolio",
    portfolioTitle: "Momente für die Ewigkeit",
    fullGallery: "Ganze Galerie",
    kundenEyebrow: "Kundenstimmen",
    kundenTitle: "Was meine Kundinnen über mich sagen",
    testimonials: [
      {
        name: "Anita Studer",
        detail: "Coiffure & Styling",
        rating: 5,
        source: "Google",
        text: "Denise ist eine talentierte Coiffeuse, die ihr Handwerk wirklich versteht. Sie arbeitet präzise, legt großen Wert auf Qualität und findet immer genau den Stil.",
      },
      {
        name: "Daphne Sangiorgio",
        detail: "Braut-Styling & Hochzeitsgesellschaft",
        rating: 5,
        source: "Google",
        text: "Denise hat mir, meinen Trauzeuginnen und einigen Gästen für unsere Hochzeit vor Ort die Frisuren gemacht. Sie ist super unkompliziert und sehr schnell. Die Frisuren waren alle unterschiedlich, sehr schön und haben lange gehalten. Sehr feines Preis-Leistungs-Verhältnis. Ich kann sie wärmstens empfehlen. Vielen Dank Denise!",
      },
      {
        name: "Blerta Redjepi",
        detail: "Haarfarben & Coloration",
        rating: 5,
        source: "Google",
        text: "Ich bin absolut begeistert von Denise! Sie hat ein außergewöhnliches Gespür für Haarfarben und findet immer genau den Ton, der perfekt zu mir passt...",
      },
      {
        name: "Özlem Cekic",
        detail: "Blondierung & Coloration",
        rating: 5,
        source: "Google",
        text: "Ich bin seit vielen Jahren bei ihr und würde meine Haare niemand anderem anvertrauen! Besonders beim Blondieren ist sie für mich einfach eine absolute Meisterin...",
      },
      {
        name: "Nicole Serafino",
        detail: "Haarfarbe & Schnitt",
        rating: 5,
        source: "Google",
        text: "Für mich die beste Coiffeuse! Ich hatte noch nie so eine schöne Haarfarbe, auch mein Schnitt modern, pfiffig und einfach genau auf mich abgestimmt...",
      },
      {
        name: "Love Familie",
        detail: "Schnitt & Ausstrahlung",
        rating: 5,
        source: "Google",
        text: "Perfekter Schnitt & tolle Ausstrahlung! Wer auf der Suche nach einer Friseurin ist, die ihr Handwerk wirklich versteht und ein Auge für den passenden Typ hat, muss zu Denise.",
      },
      {
        name: "Alicia Johnson",
        detail: "Stammkundin & Styling",
        rating: 5,
        source: "Google",
        text: "Die beste Coiffeuse weit und breit! Ich bin seit Langem Kundin bei Denise und jedes Mal aufs Neue absolut begeistert...",
      },
    ],
    ctaEyebrow: "Dein unvergesslicher Moment",
    ctaTitle: "Bereit für deine Traumfrisur? Lass mich deinen großen Tag planen.",
    ctaButton: "Probetermin anfragen",
  },
  about: {
    heroEyebrow: "Meine Geschichte",
    heroTitle: "Über mich",
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
          "Hinter Coiffeur Denise steht weit mehr als Handwerk – es ist gelebte Leidenschaft aus erster Hand. Ich weiß aus eigener Erfahrung, wie sich der Tag der Hochzeit anfühlt, welche Träume mitschwingen und wie wichtig jedes Detail ist. Mit diesem persönlichen Feingefühl, kompromissloser Präzision und einem Auge für Ästhetik begleite ich Sie in einer exklusiven Atmosphäre auf dem Weg zu Ihrem unvergesslichen Auftritt.",
        image: `${process.env.PUBLIC_URL}/foto_39.jpg`,
      },
      {
        id: "occasion",
        title: "Für Ihren grossen Tag gemacht",
        body:
          "Weil ich diesen Weg als Braut selbst gegangen bin und ihn als erfahrene Coiffeuse perfekt beherrsche, weiss ich genau, was Sie jetzt brauchen. Von der ersten Beratung und dem Probestyling bis zum letzten Handgriff am grossen Tag nehme ich Ihnen jede Sorge ab. Mit handwerklichem Feingefühl und tiefem Verständnis begleite ich Sie Schritt für Schritt – damit Sie sich einfach nur zurücklehnen, strahlen und Ihren Moment geniessen können.",
        image: `${process.env.PUBLIC_URL}/foto_4.jpg`,
      },
      {
        id: "red-carpet",
        title: "Bereit für den Gang zum Altar",
        body:
          "Der Moment, in dem Sie den Raum betreten und alle Blicke auf Sie gerichtet sind, ist unvergesslich. Mit meiner Erfahrung als Coiffeuse und dem tiefen Mitgefühl einer ehemaligen Noiva sorge ich dafür, dass Sie diesen Gang voller Stolz, makelloser Schönheit und innerer Ruhe antreten. Von der Traumhochzeit bis zur exklusiven Abendveranstaltung – ich bringe Sie zum Strahlen.",
        image: `${process.env.PUBLIC_URL}/foto_107.jpg`,
      },
      {
        id: "signature",
        title: "Entdecken Sie Ihren Signature-Look",
        body:
          "Jede Braut ist einzigartig – genau wie ihr Styling. Ich helfe Ihnen dabei, den Look zu finden und zu kreieren, der Ihren persönlichen Stil perfekt widerspiegelt und Ihre Vorzüge unterstreicht. Ob sanfte, romantische Wellen, eine elegante Hochsteckfrisur oder ein makelloses Finish: Ich verwirkliche Ihre Vision mit ganz viel Herz und Präzision.",
        image: `${process.env.PUBLIC_URL}/foto_102.jpg`,
      },
    ],
    whyChoose: [
      {
        title: "Braut-Expertise",
        body:
          "Als erfahrene Profi-Coiffeuse verbinde ich handwerkliche Leidenschaft mit dem tiefen Verständnis einer ehemaligen Braut, um Looks zu kreieren, die den ganzen Tag halten und begeistern.",
      },
      {
        title: "Ganz auf Sie abgestimmt",
        body:
          "Jede Braut ist einzigartig – und so auch Ihr Erlebnis. Vom Probetermin bis zum Hochzeitstag arbeite ich eng mit Ihnen zusammen, damit Ihr Look perfekt wird.",
      },
      {
        title: "Ruhiges, edles Ambiente",
        body:
          "Ob direkt in meinem gemütlichen Studio im Herzen von Romanshorn oder bequem bei Ihnen zu Hause oder im Hotel am Hochzeitstag – ich richte mich ganz nach Ihren Wünschen, damit Ihr grosser Tag stressfrei beginnt.",
      },
      {
        title: "Makelloses, langanhaltendes Ergebnis",
        body:
          "Mit hochwertigen Produkten und feinen Techniken schaffe ich ein wunderschönes, langanhaltendes Styling – vom ersten Blick bis zum letzten Tanz.",
      },
      {
        title: "Selbstbewusst in Ihrem Moment",
        body:
          "Schönes Haar und Beauty bedeuten für mich nicht nur Aussehen, sondern das Gefühl, in den grössten Momenten Ihres Lebens zu strahlen.",
      },
    ],
  },
  services: {
    heroEyebrow: "Haar & Beauty",
    heroTitle: "Meine Leistungen",
    heroSubtitle:
      "Brautstyling & Beauty, Anlass-Frisuren und alltägliche Coiffure – ganz für Sie gemacht.",
    note:
      "Alle Leistungen auf Anfrage – persönliche Beratung gerne via WhatsApp.",
    book: "Buchen",
    categories: [
      {
        name: "Brautstyling & Beauty",
        image: `${process.env.PUBLIC_URL}/foto_95.jpg`,
        items: [
          { name: "Braut-Probetermin", desc: "Beratung und Probestyling vor der Hochzeit.", price: "Auf Anfrage", waIntent: "info" },
          { name: "Hochzeitstag – Braut", desc: "Komplettes Brautstyling für Ihren Tag.", price: "Auf Anfrage", waIntent: "book" },
          { name: "Styling Brautjungfer", desc: "Elegantes Styling passend zur Hochzeitsgesellschaft.", price: "Auf Anfrage", waIntent: "book" },
          { name: "Styling Blumenmädchen", desc: "Süsses Styling für Ihre kleinsten Gäste.", price: "Auf Anfrage", waIntent: "book" },
          { name: "Hochzeitspaket", desc: "Komplettpaket für die Hochzeitsgesellschaft.", price: "Auf Anfrage", note: "Anfahrtskosten können anfallen", waIntent: "book" },
        ],
      },
      {
        name: "Anlass-Frisuren",
        image: `${process.env.PUBLIC_URL}/foto_801.jpg`,
        items: [
          { name: "Make-up + Haar (Ball / Event)", desc: "Haarstyling & Make-up für Bälle und Events.", price: "Auf Anfrage", waIntent: "book" },
          { name: "Hochsteckfrisur für Anlässe", desc: "Elegante Hochsteckfrisur für besondere Anlässe.", price: "Auf Anfrage", waIntent: "availability" },
          { name: "Föhnen & Styling", desc: "Gepflegtes Föhn-Finish.", price: "Auf Anfrage", waIntent: "availability" },
        ],
      },
      {
        name: "Coiffure",
        image: `${process.env.PUBLIC_URL}/foto_921.jpg`,
        items: [
          { name: "Schnitt & Finish", desc: "Präziser Schnitt und Styling.", price: "Auf Anfrage", waIntent: "availability" },
          { name: "Farbe", desc: "Volle Farbe oder Strähnen.", price: "Auf Anfrage", waIntent: "availability" },
          { name: "Pflegebehandlung", desc: "Pflegende Haarbehandlung.", price: "Auf Anfrage", waIntent: "availability" },
        ],
      },
    ],
  },
  gallery: {
    heroEyebrow: "Portfolio",
    heroTitle: "Die Galerie",
    heroSubtitle:
      "Eine kuratierte Auswahl meiner schönsten Looks – von Brautfrisuren bis bereit für den grossen Auftritt.",
    filters: ["Alle Arbeiten", "Brautfrisuren", "Hochsteckfrisuren & Styling", "Haar & Make-up", "Besondere Anlässe"],
    items: [
      { src: `${process.env.PUBLIC_URL}/foto_56.jpg`, category: "Brautfrisuren", title: "Die Braut" },
      { src: `${process.env.PUBLIC_URL}/foto_71.jpg`, category: "Hochsteckfrisuren & Styling", title: "Zeitlose Hochsteckfrisur", objectPosition: "35% 50%" },
      { src: `${process.env.PUBLIC_URL}/foto_126.jpg`, category: "Brautfrisuren", title: "Eleganz mit Schleier" },
      { src: `${process.env.PUBLIC_URL}/foto_86h.jpg`, category: "Besondere Anlässe", title: "Abend-Glamour", objectPosition: "30% 50%" },
      { src: `${process.env.PUBLIC_URL}/foto_132.jpg`, category: "Haar & Make-up", title: "Hochzeitsgesellschaft" },
      {
        src: `${process.env.PUBLIC_URL}/foto_70.jpg`,
        category: "Haar & Make-up",
        title: "Der Touch der Künstlerin",
        className: "object-center",
      },
      { src: `${process.env.PUBLIC_URL}/foto_129.jpg`, category: "Besondere Anlässe", title: "Goldene Stunde" },
      { src: `${process.env.PUBLIC_URL}/foto_55.jpg`, category: "Hochsteckfrisuren & Styling", title: "Die letzten Details" },
    ],
  },
  footer: {
    explore: "Entdecken",
    openingHours: "Öffnungszeiten",
    mapTitle: "Studio",
    followUs: "Folgen Sie uns",
    copyright: "© Coiffeur Denise • Alle Rechte vorbehalten",
    developedBy: "Entwickelt von axnd",
    links: [
      ["Start", "/"],
      ["Über mich", "/about"],
      ["Leistungen", "/services"],
      ["Galerie", "/gallery"],
    ],
  },
  cta: {
    script: "bereit zu strahlen?",
    title: "Buchen Sie Ihr Beauty-Erlebnis",
    body:
      "Reservieren Sie Ihren Termin und lassen Sie mich einen Look kreieren, der einzigartig zu Ihnen passt.",
    button: "Termin buchen",
  },
  hours: "Nach Vereinbarung – bitte kontaktieren Sie uns, um einen Termin zu planen.",
};

// ---------- ENGLISH ----------
const en = {
  langLabel: "EN",
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    gallery: "Gallery",
    book: "Book Appointment",
  },
  wa: {
    label: "WhatsApp",
    message: "Hello Denise, I would like to book an appointment.",
    service: {
      info: "Hello Denise, I would like more information about {service} and to arrange an appointment.",
      book: "Hello Denise, I would like to book {service} for my big day.",
      availability: "Hello Denise, I would like to ask about availability for {service}.",
    },
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
    discover: "Discover my story",
    brideKicker: "The Bride Experience",
    brideTitle: "A few simple steps to your perfect look",
    brideCards: [
      {
        title: "Consultation & Trial Appointment",
        body:
          "A no-obligation request for your preferred date, followed by a relaxed trial in my salon. I craft your look perfectly matched to your dress and style.",
        cta: "Request Appointment",
      },
      {
        title: "The Wedding Day (On-Location)",
        body:
          "On your big day I come directly to your chosen venue – for your flawless complete look of hairstyling and make-up. Punctual, calm, and highly professional, so you can enjoy your preparations in complete serenity.",
        cta: "Enquire Now",
      },
      {
        title: "Your Bridal Party",
        body:
          "Exclusive styling service for your mother, bridesmaids, and dearest guests. A harmonious overall look for your special day.",
        cta: "Learn More",
      },
    ],
    stressEyebrow: "Your Big Day",
    stressTitle: "Start the day stress-free and relaxed",
    stressBody:
      "No time pressure, no rush: with a schedule tailored personally to you, I make sure everything runs smoothly on your wedding day. While your look comes together with calm and precision, you can enjoy your coffee and look forward to the most beautiful moment of your life.",
    stressPoints: [
      { title: "Personal Schedule", body: "Tailored to your wedding day." },
      { title: "Punctual & Reliable", body: "So you don't have to worry about a thing." },
      { title: "Long-Lasting Look", body: "From the first photo to the last dance." },
    ],
    servicesEyebrow: "What I Offer",
    servicesTitle: "My Services",
    service: "service",
    services: "services",
    from: "from",
    viewDetails: "View details",
    viewAll: "View All Services",
    portfolioEyebrow: "Portfolio",
    portfolioTitle: "Moments for Eternity",
    fullGallery: "Full gallery",
    kundenEyebrow: "Testimonials",
    kundenTitle: "What my clients say about me",
    testimonials: [
      {
        name: "Anita Studer",
        detail: "Hair & Styling",
        rating: 5,
        source: "Google",
        text: "Denise ist eine talentierte Coiffeuse, die ihr Handwerk wirklich versteht. Sie arbeitet präzise, legt großen Wert auf Qualität und findet immer genau den Stil.",
      },
      {
        name: "Daphne Sangiorgio",
        detail: "Bridal Styling & Wedding Party",
        rating: 5,
        source: "Google",
        text: "Denise hat mir, meinen Trauzeuginnen und einigen Gästen für unsere Hochzeit vor Ort die Frisuren gemacht. Sie ist super unkompliziert und sehr schnell. Die Frisuren waren alle unterschiedlich, sehr schön und haben lange gehalten. Sehr feines Preis-Leistungs-Verhältnis. Ich kann sie wärmstens empfehlen. Vielen Dank Denise!",
      },
      {
        name: "Blerta Redjepi",
        detail: "Hair Colour & Colouring",
        rating: 5,
        source: "Google",
        text: "Ich bin absolut begeistert von Denise! Sie hat ein außergewöhnliches Gespür für Haarfarben und findet immer genau den Ton, der perfekt zu mir passt...",
      },
      {
        name: "Özlem Cekic",
        detail: "Blonding & Colouring",
        rating: 5,
        source: "Google",
        text: "Ich bin seit vielen Jahren bei ihr und würde meine Haare niemand anderem anvertrauen! Besonders beim Blondieren ist sie für mich einfach eine absolute Meisterin...",
      },
      {
        name: "Nicole Serafino",
        detail: "Hair Colour & Cut",
        rating: 5,
        source: "Google",
        text: "Für mich die beste Coiffeuse! Ich hatte noch nie so eine schöne Haarfarbe, auch mein Schnitt modern, pfiffig und einfach genau auf mich abgestimmt...",
      },
      {
        name: "Love Familie",
        detail: "Cut & Style",
        rating: 5,
        source: "Google",
        text: "Perfekter Schnitt & tolle Ausstrahlung! Wer auf der Suche nach einer Friseurin ist, die ihr Handwerk wirklich versteht und ein Auge für den passenden Typ hat, muss zu Denise.",
      },
      {
        name: "Alicia Johnson",
        detail: "Regular Client & Styling",
        rating: 5,
        source: "Google",
        text: "Die beste Coiffeuse weit und breit! Ich bin seit Langem Kundin bei Denise und jedes Mal aufs Neue absolut begeistert...",
      },
    ],
    ctaEyebrow: "Your Unforgettable Moment",
    ctaTitle: "Ready for your dream hairstyle? Let's plan your big day.",
    ctaButton: "Request a Trial Appointment",
  },
  about: {
    heroEyebrow: "My Story",
    heroTitle: "About Me",
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
          "Coiffeur Denise is far more than craftsmanship — it's lived passion from first-hand experience. I know from my own experience what a wedding day feels like, what dreams come with it, and how important every detail is. With this personal sensitivity, uncompromising precision, and an eye for aesthetics, I accompany you in an exclusive atmosphere on your way to an unforgettable appearance.",
        image: IMAGES.bridal,
      },
      {
        id: "occasion",
        title: "Made for Your Big Day",
        body:
          "Because I have walked this path as a bride myself and mastered it as an experienced hairdresser, I know exactly what you need. From the first consultation and trial styling to the final touch on your big day, I take all the worries off your shoulders. With craftsmanship sensitivity and deep understanding, I guide you step by step — so you can simply lean back, glow, and enjoy your moment.",
        image: IMAGES.serviceGlam,
      },
      {
        id: "red-carpet",
        title: "Aisle-Ready Glamour",
        body:
          "The moment you enter the room and all eyes turn to you is unforgettable. With my experience as a hairdresser and the deep empathy of a former bride, I make sure you walk that aisle full of pride, flawless beauty, and inner calm. From dream weddings to exclusive evening events — I make you shine.",
        image: IMAGES.redCarpet,
      },
      {
        id: "signature",
        title: "Unveil Your Signature Look",
        body:
          "Every bride is unique — and so is her styling. I help you find and create the look that perfectly reflects your personal style and highlights your best features. Whether soft romantic waves, an elegant updo, or a flawless finish: I bring your vision to life with all my heart and precision.",
        image: IMAGES.essence,
      },
    ],
    whyChoose: [
      {
        title: "Bridal Expertise",
        body:
          "As an experienced professional hairdresser, I combine craftsmanship passion with the deep understanding of a former bride to create looks that last all day and delight.",
      },
      {
        title: "Tailored to You",
        body:
          "Every bride is unique, and so is your experience. I work closely with you — from trial to wedding day — so your look turns out perfect.",
      },
      {
        title: "Calm, Luxurious Setting",
        body:
          "Relax and let me pamper you — either directly in my cozy studio in the heart of Romanshorn or comfortably at your home or hotel on your wedding day. I adapt entirely to your wishes so your big day starts stress-free.",
      },
      {
        title: "Flawless, Lasting Results",
        body:
          "With premium products and refined techniques, I create a beautiful, long-lasting styling — from the first look to the last dance.",
      },
      {
        title: "Confidence for Your Moment",
        body:
          "To me, beautiful hair and beauty aren't just about appearance, but the feeling of radiating in the biggest moments of your life.",
      },
    ],
  },
  services: {
    heroEyebrow: "Hair & Beauty",
    heroTitle: "My Services",
    heroSubtitle:
      "Bridal hair & beauty, special-occasion styling, and everyday hairdressing — crafted just for you.",
    note:
      "All services on request – happy to advise you personally via WhatsApp.",
    book: "Book",
    categories: [
      {
        name: "Bridal Hair & Beauty",
        image: IMAGES.bridal,
        items: [
          { name: "Bridal Hair Trial", desc: "Pre-wedding consultation & trial styling.", price: "Auf Anfrage", waIntent: "info" },
          { name: "Wedding Day - Bride", desc: "Complete bridal hair styling for your day.", price: "Auf Anfrage", waIntent: "book" },
          { name: "Bridesmaid Styling", desc: "Elegant styling to match your bridal party.", price: "Auf Anfrage", waIntent: "book" },
          { name: "Flower Girl Styling", desc: "Sweet styling for your littlest guests.", price: "Auf Anfrage", waIntent: "book" },
          { name: "Wedding Package", desc: "Full bridal party package.", price: "Auf Anfrage", note: "Travel fees may apply", waIntent: "book" },
        ],
      },
      {
        name: "Special Occasion Hair",
        image: IMAGES.serviceGlam,
        items: [
          { name: "Makeup + Hair (Ball / Event)", desc: "Hair styling & makeup for balls and events.", price: "Auf Anfrage", waIntent: "book" },
          { name: "Occasion Updo", desc: "Elegant updo for special occasions.", price: "Auf Anfrage", waIntent: "availability" },
          { name: "Blow-dry & Styling", desc: "Polished blow-dry finish.", price: "Auf Anfrage", waIntent: "availability" },
        ],
      },
      {
        name: "Hairdressing",
        image: IMAGES.serviceEditorial,
        items: [
          { name: "Cut & Finish", desc: "Precision cut and style.", price: "Auf Anfrage", waIntent: "availability" },
          { name: "Colour", desc: "Full colour or highlights.", price: "Auf Anfrage", waIntent: "availability" },
          { name: "Treatment", desc: "Nourishing hair treatment.", price: "Auf Anfrage", waIntent: "availability" },
        ],
      },
    ],
  },
  gallery: {
    heroEyebrow: "Portfolio",
    heroTitle: "The Gallery",
    heroSubtitle:
      "A curated collection of my signature looks — from bridal glam to red-carpet ready.",
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
  footer: {
    explore: "Explore",
    openingHours: "Opening Hours",
    mapTitle: "Studio",
    followUs: "Follow Us",
    copyright: "© Coiffeur Denise • All Rights Reserved",
    developedBy: "Developed by axnd",
    links: [
      ["Home", "/"],
      ["About", "/about"],
      ["Services", "/services"],
      ["Gallery", "/gallery"],
    ],
  },
  cta: {
    script: "ready to glow?",
    title: "Book Your Beauty Experience",
    body:
      "Reserve your appointment and let me craft a look that's uniquely you.",
    button: "Book Appointment",
  },
  hours: "By appointment – please contact us to plan your visit.",
};

export const CONTENT = { de, en };
export const DEFAULT_LANG = "de";
