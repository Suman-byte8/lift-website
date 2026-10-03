// General FAQs. Answers avoid hard specifications; confirm details per project.
export const faqs = [
  { q: "What is a home lift?", a: "A home lift is a compact passenger lift designed for private residences. It is smaller and quieter than a commercial elevator, runs on a domestic power supply in most cases, and is built to move people comfortably between floors of a house or duplex." },
  { q: "Does a home lift require a lift shaft?", a: "Not always. Many of our models are self-supporting, with their own frame and glass or panel enclosure, so they don't need a masonry shaft. Where a shaft already exists or is planned, we can install within it." },
  { q: "How much space is required?", a: "Compact models can start at roughly a one-metre-square footprint, while larger villa lifts need more. Exact dimensions depend on the model, capacity and door arrangement — our site assessment confirms what fits." },
  { q: "How many floors can it serve?", a: "Depending on the model, our lifts serve from two up to seven stops, including basements and roof terraces. Travel height limits vary by model." },
  { q: "How long does installation take?", a: "Typical on-site installation takes from several days for a compact lift to a few weeks for larger villa systems, after civil preparation and finish approvals. We share a clear schedule after survey." },
  { q: "Is a home lift safe?", a: "Our lifts include multiple layers of protection such as door interlocks, door sensors, over-speed safety gear, emergency alarm and battery-backed lowering. Every installation is tested before handover and should be maintained on schedule." },
  { q: "Can the lift be customized?", a: "Yes. Glass type, frame colour, cabin panels, flooring, handrails, lighting, control panels and landing doors can all be specified to suit your interiors." },
  { q: "What happens during a power failure?", a: "A battery backup supports emergency lighting and alarm, and automatic emergency lowering brings the cabin to the nearest landing so passengers can step out safely." },
  { q: "What maintenance is required?", a: "We recommend planned preventive maintenance at regular intervals, plus an annual safety inspection where required locally. An annual maintenance contract covers scheduled visits and priority call-outs." },
  { q: "Can it be installed in an existing home?", a: "In most cases, yes. Retrofit-friendly models need minimal pit depth and can be placed in a stairwell void, beside a staircase or through a new floor opening. A site visit confirms structure and access." },
];

export const faqGroups = [
  { title: "Getting started", items: faqs.slice(0, 4) },
  { title: "Installation & safety", items: faqs.slice(4, 8) },
  { title: "Ownership", items: [
    ...faqs.slice(8),
    { q: "Do you offer a warranty?", a: "Yes — each lift comes with a manufacturer's warranty. Terms vary by model and are confirmed in your proposal." },
    { q: "How much does a home lift cost?", a: "Pricing depends on model, travel height, stops and finishes. After a short consultation we share a detailed, transparent proposal." },
  ] },
];
