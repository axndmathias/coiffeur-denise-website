// Shared, non-translatable data for Coiffeur Denise (contact, images, social).
// All translatable copy lives in src/i18n/translations.js

const WHATSAPP_NUMBER = "41798666707";

export function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const BRAND = {
  name: "Coiffeur Denise",
  logoTop: "COIFFEUR",
  logoScript: "denise",
  instagram: "@coiffeurdenise",
  instagramUrl: "https://www.instagram.com/coiffeurdenise/",
  githubUrl: "https://github.com/axndmathias",
  facebookUrl: "https://www.facebook.com/Www.coiffeur.denise.ch/",
  phone: "+41 79 866 67 07",
  phoneHref: "tel:+41798666707",
  email: "", // not provided yet — leave empty to hide the email line
  address: "Alleestrasse 58, 8590 Romanshorn, Switzerland",
  mapQuery: "Alleestrasse 58, 8590 Romanshorn, Switzerland",
};

export const INSTAGRAM_FEED = [
  `${process.env.PUBLIC_URL}/foto_61.jpg`,
  `${process.env.PUBLIC_URL}/foto_132.jpg`,
  `${process.env.PUBLIC_URL}/foto_128.jpg`,
  `${process.env.PUBLIC_URL}/foto_129.jpg`,
  `${process.env.PUBLIC_URL}/foto_89.jpg`,
  `${process.env.PUBLIC_URL}/foto_90.jpg`,
];

export const BRIDE_EXPERIENCE = [
  {
    image: `${process.env.PUBLIC_URL}/foto_56.jpg`,
    alt: "Eleganter Braut-Coiffure Probetermin im Salon",
    href:
      "https://wa.me/41798666707?text=Hallo%20Denise%2C%20ich%20m%C3%B6chte%20einen%20Probetermin%20anfragen",
  },
  {
    image: `${process.env.PUBLIC_URL}/foto_89.jpg`,
    alt: "Denise beim Styling einer Braut am Hochzeitstag",
    href:
      "https://wa.me/41798666707?text=Hallo%20Denise%2C%20ich%20m%C3%B6chte%20die%20Verf%C3%BCgbarkeit%20f%C3%BCr%20meinen%20Hochzeitstag%20anfragen",
  },
  {
    image: `${process.env.PUBLIC_URL}/foto_41.jpg`,
    alt: "Styling-Service für Brautjungfern und Gäste",
    href:
      "https://wa.me/41798666707?text=Hallo%20Denise%2C%20ich%20habe%20eine%20Frage%20zum%20Styling%20f%C3%BCr%20meine%20G%C3%A4ste",
  },
];

export const PORTFOLIO = [
  {
    image: `${process.env.PUBLIC_URL}/foto_79.jpg`,
    alt: "Elegantes Apanhado mit Perlen- und Kristall-Accessoire",
  },
  {
    image: `${process.env.PUBLIC_URL}/foto_70.jpg`,
    alt: "Hochsteckfrisur mit Zöpfen und rosa Blumen",
    objectPosition: "62% bottom",
  },
  {
    image: `${process.env.PUBLIC_URL}/foto_72.jpg`,
    alt: "Apanhado mit texturierten Wellen",
  },
  {
    image: `${process.env.PUBLIC_URL}/foto_85.jpg`,
    alt: "Semi-preso Hochsteckfrisur mit Tiara und elegantem Accessoire",
  },
];
