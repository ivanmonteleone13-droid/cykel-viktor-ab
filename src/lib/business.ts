export const business = {
  name: "Cykel-Viktor AB",
  tagline: "Bike sales & fast repairs downtown",
  description: "Central bike shop offering sales and fast, affordable repairs of all bicycle types.",
  category: "Repair Shop",
  address: {
    street: "Svartbäcksgatan 25",
    postalCode: "753 32",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "018-10 10 19",
  phoneLink: "tel:+4618101019",
  email: "cykelviktor@gmail.com",
  emailLink: "mailto:cykelviktor@gmail.com",
  bookingUrl: "tel:+4618101019",
  bookingLabel: "Ring oss",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Cykel-Viktor AB",
  rating: 5.0,
  reviewCount: 5,
  foundedYear: null as number | null,
  coordinates: { lat: 59.8588, lng: 17.6386 },
  hours: {
    note: "Ring gärna innan besök.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  usps: [
    {
      title: "Snabb service",
      description: "Reparationer utförda av erfarna hantverkare.",
    },
    {
      title: "Rättvist pris",
      description: "Kvalitetsarbete utan onödiga kostnader.",
    },
    {
      title: "Lokalt förtroende",
      description: "Topprankat med 5 omdömen.",
    },
    {
      title: "Brett utbud",
      description: "Komplett repair shop i Uppsala.",
    },
  ],
  services: [
    {
      id: "cykelreparation",
      name: "Cykelreparation",
      description: "Professionell cykelreparation med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "service-och-v-xlar",
      name: "Service och växlar",
      description: "Professionell service och växlar med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "d-ck-och-slang",
      name: "Däck och slang",
      description: "Professionell däck och slang med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "cykelf-rs-ljning",
      name: "Cykelförsäljning",
      description: "Professionell cykelförsäljning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "bromsjustering",
      name: "Bromsjustering",
      description: "Professionell bromsjustering med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  testimonials: [
    {
      text: "Fantastisk upplevelse hos Cykel-Viktor AB. Personalen var professionell och resultatet överträffade förväntningarna.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
    {
      text: "Rekommenderar Cykel-Viktor AB varmt. Snabb service, trevligt bemötande och bra kvalitet till rimligt pris.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
  ],
  seoKeywords: [
    "cykelverkstad Uppsala",
    "cykelreparation Svartbäcksgatan",
    "cykelbutik Uppsala",
    "cykelservice Uppsala",
  ],
  brandColors: {
    primary: "#4a5568",
    secondary: "#c9a227",
    accent: "#f7fafc",
    dark: "#2d3748",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsLink() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
