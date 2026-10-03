/**
 * Product catalogue.
 *
 * IMPORTANT: every value inside `specifications` is an INDICATIVE PLACEHOLDER written to
 * look realistic for the residential lift category. Replace each one with certified figures
 * from engineering before publishing. `specsArePlaceholder: true` makes the UI show a notice.
 */
export const specLabels = {
  capacity: "Capacity",
  travel: "Max. travel height",
  stops: "Stops",
  speed: "Rated speed",
  footprint: "Approx. footprint",
  drive: "Drive technology",
  pit: "Pit requirement",
  power: "Power supply",
  doors: "Door options",
};

export const products = [
  {
    slug: "aura",
    name: "Aura",
    line: "Premium Glass Home Lift",
    category: "Glass",
    bestFor: ["Villa", "Duplex"],
    accent: "from-champagne-100 via-ivory to-sage-50",
    image: "livingSoft",
    gallery: ["livingSoft", "openPlan", "materialStone", "detailChair"],
    summary:
      "A fully glazed cabin and slender frame that lets light travel through the home. Aura is our signature — quiet, sculptural and made to be seen.",
    description:
      "Aura pairs a panoramic laminated-glass enclosure with a minimal frame, so the lift reads as a piece of architecture rather than equipment. Its compact drive sits within the structure, leaving the shaft clean from every angle.",
    specsArePlaceholder: true,
    specifications: {
      capacity: "Up to 3 persons · 240 kg",
      travel: "Up to 12 m",
      stops: "2 – 5",
      speed: "0.15 m/s",
      footprint: "From 1.2 × 1.2 m",
      drive: "Machine-room-less traction",
      pit: "Shallow pit · ~100 mm",
      power: "Single-phase 230 V",
      doors: "Automatic glass swing / sliding",
    },
    highlights: ["Panoramic laminated glass", "Concealed drive", "Ambient LED ceiling", "Whisper-quiet ride"],
    features: [
      { title: "Light-filled enclosure", text: "Laminated safety glass on all visible faces keeps sightlines open through the home." },
      { title: "Concealed machinery", text: "The drive unit is integrated into the frame — no separate machine room required." },
      { title: "Soft-start motion", text: "Variable-frequency control eases into and out of every journey." },
      { title: "Tailored finishes", text: "Frame colours, cabin floors and lighting are specified to match your interiors." },
    ],
  },
  {
    slug: "nova",
    name: "Nova",
    line: "Compact Residential Lift",
    category: "Compact",
    bestFor: ["Apartment", "Duplex"],
    accent: "from-mist-50 via-ivory to-champagne-100",
    image: "apartment",
    gallery: ["apartment", "apartmentBright", "minimal", "interiorCalm"],
    summary:
      "Engineered for tight footprints and existing homes. Nova fits where a staircase once seemed like the only option.",
    description:
      "Nova is designed for retrofit. A self-supporting structure and very shallow pit mean it can often be installed with minimal civil work, making it ideal for duplex apartments and established homes.",
    specsArePlaceholder: true,
    specifications: {
      capacity: "Up to 2 persons · 160 kg",
      travel: "Up to 9 m",
      stops: "2 – 4",
      speed: "0.15 m/s",
      footprint: "From 0.9 × 0.9 m",
      drive: "Screw-and-nut / compact electric drive",
      pit: "Minimal · ~50 mm or ramp",
      power: "Single-phase 230 V",
      doors: "Manual or automatic swing",
    },
    highlights: ["Smallest footprint", "Retrofit friendly", "Self-supporting frame", "Low-energy drive"],
    features: [
      { title: "Retrofit by design", text: "Self-supporting structure reduces the need for load-bearing walls." },
      { title: "Minimal civil work", text: "Very shallow pit or ramp entry keeps installation clean and fast." },
      { title: "Plug-in power", text: "Runs on a standard single-phase domestic supply." },
      { title: "Quiet presence", text: "A compact drive keeps operating sound low in living spaces." },
    ],
  },
  {
    slug: "lumina",
    name: "Lumina",
    line: "Luxury Panoramic Lift",
    category: "Panoramic",
    bestFor: ["Villa", "Apartment"],
    accent: "from-sage-50 via-ivory to-mist-50",
    image: "villaPool",
    gallery: ["villaPool", "villaWhite", "livingBeige", "detailTexture"],
    summary:
      "Curved glazing and a gallery-like cabin for homes with a view. Lumina turns the journey between floors into a moment.",
    description:
      "Lumina features a rounded panoramic profile and a premium cabin with integrated handrail lighting. It is designed for atriums, double-height spaces and homes where the lift becomes a centrepiece.",
    specsArePlaceholder: true,
    specifications: {
      capacity: "Up to 4 persons · 320 kg",
      travel: "Up to 15 m",
      stops: "2 – 6",
      speed: "0.3 m/s",
      footprint: "From 1.4 × 1.4 m",
      drive: "Gearless traction",
      pit: "~150 mm",
      power: "Single / three-phase",
      doors: "Automatic curved glass sliding",
    },
    highlights: ["Curved panoramic glass", "Gallery cabin", "Integrated handrail light", "Atrium-ready"],
    features: [
      { title: "Curved profile", text: "Rounded glazing softens the lift's presence in open, double-height spaces." },
      { title: "Gallery cabin", text: "Premium wall panels, stone-effect flooring and indirect lighting." },
      { title: "Smart destination panel", text: "Touch-sensitive controls with clear tactile and visual feedback." },
      { title: "Gearless drive", text: "Smooth, efficient motion with reduced mechanical noise." },
    ],
  },
  {
    slug: "elite",
    name: "Elite",
    line: "Advanced Villa Elevator",
    category: "Villa",
    bestFor: ["Villa"],
    accent: "from-champagne-100 via-ivory to-taupe-100",
    image: "villaDusk",
    gallery: ["villaDusk", "luxuryHome", "kitchenOpen", "materialStone"],
    summary:
      "Our most capable residence lift — larger cabin, more stops and the full suite of smart and safety features.",
    description:
      "Elite is built for multi-level villas and new construction where capacity, wheelchair access and travel height matter. It supports more stops and the widest range of bespoke cabin designs.",
    specsArePlaceholder: true,
    specifications: {
      capacity: "Up to 6 persons · 480 kg",
      travel: "Up to 20 m",
      stops: "2 – 7",
      speed: "0.4 m/s",
      footprint: "From 1.6 × 1.6 m",
      drive: "Gearless traction with regenerative option",
      pit: "~300 mm",
      power: "Three-phase",
      doors: "Automatic telescopic sliding",
    },
    highlights: ["Wheelchair-ready cabin", "Up to 7 stops", "Smart home integration", "Bespoke interiors"],
    features: [
      { title: "Generous cabin", text: "Space for a wheelchair and companion, or furniture between floors." },
      { title: "Multi-level reach", text: "Serves basements, roof terraces and every floor between." },
      { title: "Smart integration", text: "Optional app control and home-automation hooks (to be confirmed per project)." },
      { title: "Full bespoke design", text: "Architect-led cabin, door and landing finishes." },
    ],
  },
];

export const productCategories = ["All", ...new Set(products.map((p) => p.category))];
export const productUses = ["All homes", "Villa", "Duplex", "Apartment"];

export const getProduct = (slug) => products.find((p) => p.slug === slug);
