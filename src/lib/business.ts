export const business = {
  name: "Cykel-Viktor AB",
  tagline: "Cykelbutik & verkstad på Svartbäcksgatan",
  description:
    "Vi säljer inga billiga cyklar. Vi säljer cyklar billigt. Snabb service till bra priser — utför alla typer av reparationer.",
  category: "Cykelverkstad",
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
  websiteUrl: null as string | null,
  facebookUrl: "https://www.facebook.com/cykelviktoruppsala" as string | null,
  instagramUrl: "https://www.instagram.com/cykelviktor/" as string | null,
  owner: "Cykel-Viktor AB",
  rating: 5.0,
  reviewCount: 4,
  foundedYear: null as number | null,
  coordinates: { lat: 59.8614, lng: 17.6339 },
  hours: {
    note: "Öppettider enligt Shimano Service Center — ring gärna innan besök.",
    regular: [
      { day: "Måndag", hours: "08:00 – 17:00" },
      { day: "Tisdag", hours: "08:00 – 17:00" },
      { day: "Onsdag", hours: "08:00 – 17:00" },
      { day: "Torsdag", hours: "08:00 – 17:00" },
      { day: "Fredag", hours: "08:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  usps: [
    {
      title: "Cyklar billigt",
      description: "«Vi säljer inga billiga cyklar. Vi säljer cyklar billigt.» — Hitta.se",
    },
    {
      title: "5,0 på Hitta",
      description: "4 omdömen med perfekt betyg.",
    },
    {
      title: "Shimano Service Center",
      description: "Auktoriserad serviceverkstad enligt shimanoservicecenter.com.",
    },
    {
      title: "Centralt läge",
      description: "Svartbäcksgatan 25 i Uppsala.",
    },
  ],
  services: [
    {
      id: "cykelreparation",
      name: "Cykelreparation",
      description: "Utför alla typer av reparationer — enligt Hitta.se.",
      duration: "—",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "service-och-vaxlar",
      name: "Service och växlar",
      description: "Proffsig service av växlar — enligt kundomdöme på Hitta.se.",
      duration: "—",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "cykelforsaljning",
      name: "Cykelförsäljning",
      description: "Cyklar till bra priser.",
      duration: "—",
      priceFrom: null,
      note: "Besök butiken eller ring för tillgänglighet.",
    },
    {
      id: "dack-och-slang",
      name: "Däck och slang",
      description: "Byte och reparation av däck och slang.",
      duration: "—",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "bromsjustering",
      name: "Bromsjustering",
      description: "Justering och service av cykelbromsar.",
      duration: "—",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  logoImage: null as string | null,
  heroImage: "/images/hero.jpg",
  aboutImage: "/images/gallery-1.png",
  gallery: [
    { id: 1, label: "Cykel-Viktor AB", image: "/images/hero.jpg" },
    { id: 2, label: "Butiken", image: "/images/gallery-1.png" },
    { id: 3, label: "Verkstad", image: "/images/gallery-2.jpg" },
    { id: 4, label: "Cyklar", image: "/images/gallery-3.jpg" },
    { id: 5, label: "Service", image: "/images/gallery-4.jpg" },
    { id: 6, label: "Svartbäcksgatan 25", image: "/images/gallery-5.jpg" },
  ],
  about: {
    headline: "Cykelverkstad i Uppsala",
    paragraphs: [
      "Cykel-Viktor AB på Svartbäcksgatan 25 säljer cyklar billigt och erbjuder snabb service till bra priser.",
      "Vi utför alla typer av cykelreparationer och är Shimano Service Center — auktoriserad verkstad enligt shimanoservicecenter.com.",
      "Ring 018-10 10 19 eller besök oss på Facebook och Instagram för nyheter från butiken.",
    ],
  },
  testimonials: [
    {
      text: "Mycket bra service och bemötande.",
      author: "Tryggve M.",
      source: "Hitta.se",
      sourceUrl: "https://www.hitta.se/verksamhet/cykel-viktor-ab-muyyhgub",
      rating: 5,
      date: "2021-12-14",
    },
    {
      text: "Bra och trevliga <3",
      author: "Anita M.",
      source: "Hitta.se",
      sourceUrl: "https://www.hitta.se/verksamhet/cykel-viktor-ab-muyyhgub",
      rating: 5,
      date: "2021-06-30",
    },
    {
      text: "Proffsigt, snabbt och bra pris på service av växlar",
      author: "Annika",
      source: "Hitta.se",
      sourceUrl: "https://www.hitta.se/verksamhet/cykel-viktor-ab-muyyhgub",
      rating: 5,
      date: "2020-07-16",
    },
    {
      text: "Alltid vänlig och hjälpsam personal.",
      author: "Annika S.",
      source: "Hitta.se",
      sourceUrl: "https://www.hitta.se/verksamhet/cykel-viktor-ab-muyyhgub",
      rating: 5,
      date: "2020-03-25",
    },
  ],
  seoKeywords: [
    "cykelverkstad Uppsala",
    "cykelreparation Svartbäcksgatan",
    "cykelbutik Uppsala",
    "Cykel-Viktor AB",
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
