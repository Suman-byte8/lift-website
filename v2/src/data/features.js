// Shared content blocks. Icons are lucide-react component names, resolved in components/ui/Icon.js.

export const benefits = [
  { icon: "Accessibility", title: "Effortless Accessibility", text: "Every floor within easy reach — for parents, grandparents, children and guests alike.", tone: "bg-champagne-100/70" },
  { icon: "House", title: "Future-Ready Home", text: "Plan once for every stage of life, so the home you love keeps working for you.", tone: "bg-sage-50" },
  { icon: "Maximize2", title: "Space Efficient", text: "Compact footprints that sit beside a staircase, in a stairwell void or a corner.", tone: "bg-mist-50" },
  { icon: "VolumeX", title: "Quiet Operation", text: "Smooth drives and careful isolation keep the ride calm, even at night.", tone: "bg-ivory-100" },
  { icon: "Leaf", title: "Energy Conscious", text: "Efficient drives and standby modes designed to draw little power at rest.", tone: "bg-sage-100/60" },
  { icon: "Gem", title: "Premium Design", text: "Glass, metal and light composed like furniture — specified to your interiors.", tone: "bg-champagne-200/50" },
];

// Positions are percentages within the lift illustration frame (desktop).
export const techCallouts = [
  { id: "drive", icon: "Cpu", title: "Advanced Drive System", text: "Compact, machine-room-less drive integrated within the structure.", side: "left", y: 14 },
  { id: "smooth", icon: "Waves", title: "Smooth Start & Stop", text: "Variable-frequency control for gentle acceleration and levelling.", side: "right", y: 22 },
  { id: "backup", icon: "BatteryCharging", title: "Emergency Backup", text: "Battery-supported lowering to the nearest floor during an outage.", side: "left", y: 46 },
  { id: "safety", icon: "ShieldCheck", title: "Automatic Safety Systems", text: "Interlocks and sensors continuously monitor doors and motion.", side: "right", y: 52 },
  { id: "controls", icon: "SlidersHorizontal", title: "Smart Controls", text: "Intuitive touch panels with clear tactile and visual feedback.", side: "left", y: 76 },
  { id: "energy", icon: "Leaf", title: "Energy Efficient Operation", text: "Low standby draw with LED lighting that rests when idle.", side: "right", y: 82 },
];

export const safetyFeatures = [
  { icon: "ArrowDownToLine", title: "Emergency lowering", text: "Brings the cabin gently to the nearest landing and opens the door if power is lost." },
  { icon: "ScanEye", title: "Door safety sensors", text: "Light curtains or edge sensors stop and reverse a closing door when something is detected." },
  { icon: "BatteryCharging", title: "Battery backup", text: "A rechargeable battery keeps lighting, alarm and lowering functions available in an outage." },
  { icon: "BellRing", title: "Emergency alarm", text: "In-cabin alarm and optional auto-dialler to alert family or the service team." },
  { icon: "Hand", title: "Obstacle detection", text: "Under-cabin and gap sensors pause travel when an obstruction is detected." },
  { icon: "Gauge", title: "Over-speed protection", text: "A governor and safety gear are designed to arrest the cabin if speed exceeds limits." },
  { icon: "Wrench", title: "Manual emergency operation", text: "A trained person can move the cabin manually to a landing if required." },
  { icon: "Lock", title: "Safety interlocks", text: "The lift cannot move unless every landing door is closed and locked." },
];

export const customizationOptions = [
  { title: "Glass finish", text: "Clear, low-iron, tinted or frosted laminated glass.", image: "openPlan" },
  { title: "Cabin finish", text: "Brushed metals, timber veneers, fabric and stone-effect panels.", image: "detailTexture" },
  { title: "Handrails", text: "Slim round or flat profiles in champagne, bronze or graphite.", image: "detailChair" },
  { title: "Lighting", text: "Warm ambient ceilings, edge-lit panels and handrail light.", image: "livingBeige" },
  { title: "Flooring", text: "Stone, engineered wood or matched to the surrounding floor.", image: "materialStone" },
  { title: "Control panels", text: "Glass touch panels or tactile buttons with fine engraving.", image: "interiorCalm" },
  { title: "Door finish", text: "Glass, metal or full-height panelled landing doors.", image: "kitchenOpen" },
  { title: "Interior details", text: "Mirrors, seats, art panels and bespoke signage.", image: "cozy" },
];

export const inspiration = [
  { title: "Modern villas", image: "villaWhite", span: "tall" },
  { title: "Duplex homes", image: "duplex", span: "short" },
  { title: "Luxury apartments", image: "apartment", span: "short" },
  { title: "Contemporary interiors", image: "livingSoft", span: "tall" },
  { title: "Traditional residences", image: "traditional", span: "short" },
  { title: "Minimalist homes", image: "minimal", span: "tall" },
];

export const applications = [
  { slug: "villas", title: "For Villas", text: "Connect basements, living floors and roof terraces with a lift that matches the architecture.", image: "villaDusk" },
  { slug: "duplex", title: "For Duplex Homes", text: "A compact two-stop lift beside the stair keeps both levels in daily use.", image: "duplex" },
  { slug: "senior", title: "For Senior-Friendly Homes", text: "Step-free movement, seats and easy controls so loved ones stay independent.", image: "bedroom" },
  { slug: "multilevel", title: "For Multi-Level Residences", text: "Up to seven stops for townhouses and homes built on slopes.", image: "modernHouse" },
  { slug: "apartments", title: "For Luxury Apartments", text: "Private lifts for penthouses and duplex apartments within larger buildings.", image: "apartmentBright" },
  { slug: "new-build", title: "For New Construction", text: "Plan the shaft with your architect from day one for a fully integrated result.", image: "luxuryHome" },
];

export const processSteps = [
  { n: "01", title: "Consultation", text: "We listen to how you live, review drawings and recommend the right model.", icon: "MessageCircle" },
  { n: "02", title: "Site Assessment", text: "Our engineers measure, check structure and power, and confirm feasibility.", icon: "Ruler" },
  { n: "03", title: "Design & Installation", text: "Finishes are approved, then a dedicated crew installs and commissions the lift.", icon: "Hammer" },
  { n: "04", title: "After-Sales Support", text: "Scheduled maintenance, remote diagnostics (where fitted) and responsive service.", icon: "HeartHandshake" },
];

/** Comparison table — PLACEHOLDER values, mark for replacement with certified data. */
export const comparison = {
  columns: [
    { key: "compact", name: "Compact Home Lift", model: "nova" },
    { key: "glass", name: "Premium Glass Lift", model: "aura", featured: true },
    { key: "villa", name: "Luxury Villa Lift", model: "elite" },
  ],
  rows: [
    { label: "Capacity", compact: "2 persons", glass: "3 persons", villa: "Up to 6 persons" },
    { label: "Space requirement", compact: "From 0.9 × 0.9 m", glass: "From 1.2 × 1.2 m", villa: "From 1.6 × 1.6 m" },
    { label: "Travel", compact: "Up to 9 m", glass: "Up to 12 m", villa: "Up to 20 m" },
    { label: "Stops", compact: "2 – 4", glass: "2 – 5", villa: "2 – 7" },
    { label: "Design options", compact: "Curated finishes", glass: "Extensive", villa: "Fully bespoke" },
    { label: "Drive technology", compact: "Compact electric", glass: "MRL traction", villa: "Gearless traction" },
    { label: "Ideal application", compact: "Retrofit, duplex apartments", glass: "Villas, design-led homes", villa: "Multi-level villas, new builds" },
  ],
};

export const technologyPillars = [
  { icon: "Cpu", title: "Drive system", text: "Machine-room-less traction and compact electric drives sized to each model, mounted within the structure to save space and reduce noise transfer.", points: ["No separate machine room", "Isolated mounting", "Sized per load and travel"] },
  { icon: "SlidersHorizontal", title: "Controls", text: "A microprocessor controller manages travel, levelling and doors, with touch or tactile panels at each landing and in the cabin.", points: ["Precise floor levelling", "Clear feedback", "Fault logging"] },
  { icon: "ShieldCheck", title: "Safety systems", text: "Layered protection — interlocks, sensors, over-speed safety gear and battery-backed lowering — works independently of the main supply.", points: ["Redundant layers", "Battery-backed", "Self-monitoring"] },
  { icon: "Sparkles", title: "User experience", text: "Soft-start motion, warm lighting and considered acoustics make each journey feel unhurried and calm.", points: ["Soft start & stop", "Ambient lighting", "Low operating sound"] },
];

export const values = [
  { icon: "Compass", title: "Mission", text: "To make every level of the home effortless to reach — without compromising its architecture." },
  { icon: "Cpu", title: "Engineering philosophy", text: "Engineer quietly. The best technology is felt in the ride, not seen in the room." },
  { icon: "Award", title: "Quality", text: "Components are selected for longevity and each lift is tested before handover." },
  { icon: "Hammer", title: "Installation", text: "In-house crews, protected sites and a single coordinator from survey to handover." },
  { icon: "HeartHandshake", title: "Customer support", text: "Planned maintenance and a responsive service line for the life of the lift." },
];
