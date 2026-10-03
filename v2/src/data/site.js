// Brand, contact and navigation configuration — edit here, used site-wide.
export const site = {
  name: "Velora Home Lifts",
  shortName: "Velora",
  tagline: "Elevate the way you live.",
  description:
    "Velora designs and installs premium residential home lifts for villas, duplexes and apartments — quiet, compact and engineered around safety.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.velorahomelifts.com",
  locale: "en_IN",
  contact: {
    phone: "+91 98000 00000", // placeholder
    phoneHref: "tel:+919800000000",
    whatsapp: "https://wa.me/919800000000",
    email: "hello@velorahomelifts.com", // placeholder
    address: { line1: "Experience Studio, 12 Park Street", city: "Kolkata", region: "West Bengal", postal: "700016", country: "IN" },
    hours: [
      { days: "Monday – Saturday", time: "10:00 – 19:00" },
      { days: "Sunday", time: "By appointment" },
    ],
  },
  social: [
    { name: "Instagram", href: "https://instagram.com/" },
    { name: "LinkedIn", href: "https://linkedin.com/" },
    { name: "YouTube", href: "https://youtube.com/" },
    { name: "Facebook", href: "https://facebook.com/" },
  ],
  announcement: "Complimentary site assessment in 25+ cities",
};

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Home Lifts", href: "/home-lifts" },
  { label: "Models", href: "/models" },
  { label: "Technology", href: "/technology" },
  { label: "Safety", href: "/safety" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Home Lifts", href: "/home-lifts" },
      { label: "Models", href: "/models" },
      { label: "Projects", href: "/projects" },
    ],
  },
  {
    title: "Engineering",
    links: [
      { label: "Technology", href: "/technology" },
      { label: "Safety", href: "/safety" },
      { label: "FAQ", href: "/faq" },
      { label: "Brochure", href: "/brochure" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];

export const stats = [
  { value: 15, suffix: "+", label: "Years of engineering" },
  { value: 5000, suffix: "+", label: "Homes elevated" },
  { value: 25, suffix: "+", label: "Cities served" },
  { value: 24, suffix: "/7", label: "Service support" },
];
