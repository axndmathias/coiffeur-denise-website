// Shared, non-translatable data for Coiffeur Denise (contact, images, social).
// All translatable copy lives in src/i18n/translations.js

export const BRAND = {
  name: "Coiffeur Denise",
  logoTop: "COIFFEUR",
  logoScript: "denise",
  instagram: "@coiffeurdenise",
  instagramUrl: "https://www.instagram.com/coiffeurdenise/",
  facebookUrl: "https://www.facebook.com/Www.coiffeur.denise.ch/",
  phone: "+41 79 866 67 07",
  phoneHref: "tel:+41798666707",
  email: "", // not provided yet — leave empty to hide the email line
  address: "Alleestrasse 58, 8590 Romanshorn, Switzerland",
  mapQuery: "Alleestrasse 58, 8590 Romanshorn, Switzerland",
};

export const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYWtldXAlMjBhcnRpc3QlMjBlZGl0b3JpYWwlMjBiZWF1dHklMjBwb3J0cmFpdHxlbnwwfHx8fDE3ODk3MjQ2Nzl8MA&ixlib=rb-4.1.0&q=85",
  essence:
    "https://images.pexels.com/photos/39142948/pexels-photo-39142948.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  redCarpet:
    "https://images.unsplash.com/photo-1779763320302-767ad149e77b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBtYWtldXAlMjBhcnRpc3QlMjBlZGl0b3JpYWwlMjBiZWF1dHklMjBwb3J0cmFpdHxlbnwwfHx8fDE3ODk3MjQ2Nzl8MA&ixlib=rb-4.1.0&q=85",
  bridal:
    "https://images.unsplash.com/photo-1780540631334-84960e9b1f58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBtYWtldXAlMjBhcnRpc3QlMjBlZGl0b3JpYWwlMjBiZWF1dHklMjBwb3J0cmFpdHxlbnwwfHx8fDE3ODk3MjQ2Nzl8MA&ixlib=rb-4.1.0&q=85",
  serviceGlam:
    "https://images.pexels.com/photos/26850950/pexels-photo-26850950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  serviceEditorial:
    "https://images.pexels.com/photos/10464307/pexels-photo-10464307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  serviceBrushes:
    "https://images.pexels.com/photos/13599849/pexels-photo-13599849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

export const INSTAGRAM_FEED = [
  IMAGES.bridal,
  "https://images.pexels.com/photos/29512614/pexels-photo-29512614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  IMAGES.redCarpet,
  "https://images.pexels.com/photos/13599849/pexels-photo-13599849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  IMAGES.essence,
  IMAGES.serviceGlam,
];

export const BRIDE_EXPERIENCE = [
  {
    image: `${process.env.PUBLIC_URL}/foto_56.jpg`,
    alt: "Eleganter Braut-Coiffure Probetermin im Salon",
    href:
      "https://wa.me/41798666707?text=Hallo%20Denise%2C%20ich%20m%C3%B6chte%20einen%20Probetermin%20anfragen",
  },
  {
    image: `${process.env.PUBLIC_URL}/foto_39.jpg`,
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
    image: `${process.env.PUBLIC_URL}/foto_73.jpg`,
    alt: "Hochsteckfrisur mit Zöpfen und rosa Blumen",
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
