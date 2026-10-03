import { images } from '@/data/images';

export const products = [
  {
    slug: 'aura-glass',
    name: 'AURA',
    descriptor: 'The open, architectural choice',
    category: 'Glass',
    cardTitle: 'Premium Glass Home Lift',
    description: 'A clear, considered presence that lets the architecture—and the light—lead.',
    image: images.liftDetail.src,
    imageAlt: 'Warm timber cabin and clear glass panels of a residential lift',
    accent: 'from-[#f3eee5] to-[#e9e8df]',
    badge: 'Signature',
    specifications: {
      capacity: 'Confirm for your brief',
      footprint: 'Measured to the available space',
      travel: 'Project-specific',
      stops: 'Set to the home layout',
      drive: 'Final configuration by design review'
    },
    features: ['Framed or minimal-glass expression', 'Choice of cabin materials', 'Controls placed around your routine', 'Designed for new or existing homes'],
    overview: 'AURA puts transparency at the centre of the experience. Its visual lightness makes it a natural fit for stair halls, open-plan rooms and carefully composed interiors.',
    bestFor: 'Homes where daylight, sightlines and material continuity matter.',
    applications: ['Open-plan villas', 'Stair halls', 'Garden-facing interiors'],
    gallery: [images.liftDetail.src, images.hero.src, images.staircaseLift.src]
  },
  {
    slug: 'nova-compact',
    name: 'NOVA',
    descriptor: 'A lighter footprint, by design',
    category: 'Compact',
    cardTitle: 'Compact Residential Lift',
    description: 'A thoughtfully scaled solution for homes where every centimetre has a purpose.',
    image: images.staircaseLift.src,
    imageAlt: 'A glass home lift beside an oak staircase in a double-height residence',
    accent: 'from-[#ecefe9] to-[#e8eceb]',
    badge: 'Space-led',
    specifications: {
      capacity: 'Confirm for your brief',
      footprint: 'Measured to the available space',
      travel: 'Project-specific',
      stops: 'Set to the home layout',
      drive: 'Final configuration by design review'
    },
    features: ['Compact planning options', 'Careful integration with existing circulation', 'A considered set of finish choices', 'Suitable for retrofit assessment'],
    overview: 'NOVA begins with the footprint of the home, not a catalogue dimension. We work with your plan to understand where the lift can sit and how it can move naturally through each level.',
    bestFor: 'Duplex homes, tighter stair halls and considered retrofit projects.',
    applications: ['Duplex homes', 'Existing residences', 'Compact landings'],
    gallery: [images.staircaseLift.src, images.interiors.foyer.src, images.liftDetail.src]
  },
  {
    slug: 'lumina-panoramic',
    name: 'LUMINA',
    descriptor: 'A journey through the home',
    category: 'Panoramic',
    cardTitle: 'Luxury Panoramic Lift',
    description: 'A quiet architectural feature that frames a changing view of your home.',
    image: images.hero.src,
    imageAlt: 'Panoramic glass lift in a sunlit residence with sculptural stairs',
    accent: 'from-[#f1ece5] to-[#e7e6df]',
    badge: 'Light-led',
    specifications: {
      capacity: 'Confirm for your brief',
      footprint: 'Measured to the available space',
      travel: 'Project-specific',
      stops: 'Set to the home layout',
      drive: 'Final configuration by design review'
    },
    features: ['High-clarity glass expression', 'Optional lighting scenes', 'Finishes coordinated with the interior', 'Made to complement open volumes'],
    overview: 'LUMINA is composed around a view. Glass, light and carefully selected interior details come together to make vertical movement feel like a natural part of the home.',
    bestFor: 'Architect-designed homes, atriums and open-plan interiors.',
    applications: ['Double-height foyers', 'Atriums', 'Light-filled interiors'],
    gallery: [images.hero.src, images.liftDetail.src, images.interiors.villaLiving.src]
  },
  {
    slug: 'elite-villa',
    name: 'ELITE',
    descriptor: 'A bespoke expression for the home',
    category: 'Villa',
    cardTitle: 'Advanced Villa Elevator',
    description: 'A made-for-you brief, bringing performance, finish and architecture into balance.',
    image: images.interiors.villaLiving.src,
    imageAlt: 'Contemporary villa living room with warm wood and floor-to-ceiling windows',
    accent: 'from-[#eeebe4] to-[#e4e8e2]',
    badge: 'Bespoke',
    specifications: {
      capacity: 'Confirm for your brief',
      footprint: 'Measured to the available space',
      travel: 'Project-specific',
      stops: 'Set to the home layout',
      drive: 'Final configuration by design review'
    },
    features: ['Design-led project specification', 'Material coordination across levels', 'Thoughtful details for daily use', 'Dedicated installation planning'],
    overview: 'ELITE is a more involved design conversation for larger residences. Every decision—from approach and door expression to materials and controls—is considered against the home as a whole.',
    bestFor: 'Large villas, new construction and highly individual briefs.',
    applications: ['New villa projects', 'Multi-level homes', 'Individual design briefs'],
    gallery: [images.interiors.villaLiving.src, images.staircaseLift.src, images.interiors.villaExterior.src]
  }
];

export const modelCategories = ['All', 'Glass', 'Compact', 'Panoramic', 'Villa'];

export const comparisonRows = [
  { label: 'Capacity', values: ['To be confirmed', 'To be confirmed', 'To be confirmed'] },
  { label: 'Space requirement', values: ['Site measured', 'Site measured', 'Site measured'] },
  { label: 'Travel', values: ['Project-specific', 'Project-specific', 'Project-specific'] },
  { label: 'Stops', values: ['Set to home layout', 'Set to home layout', 'Set to home layout'] },
  { label: 'Design options', values: ['Glass & finish-led', 'Space-led finishes', 'Bespoke palette'] },
  { label: 'Drive technology', values: ['Final design review', 'Final design review', 'Final design review'] },
  { label: 'Ideal application', values: ['Open, light-filled homes', 'Duplex & retrofit briefs', 'Large villas & new build'] }
];
