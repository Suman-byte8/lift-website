import { images } from '@/data/images';

export const projects = [
  {
    slug: 'the-courtyard-villa',
    title: 'The Courtyard Villa',
    location: 'Bengaluru, Karnataka',
    type: 'Villa',
    style: 'Modern',
    model: 'AURA · Design brief',
    image: images.hero.src,
    alt: 'Glass home lift beside a pale oak staircase in a courtyard-style villa',
    summary: 'A light-filled vertical connection, brought into a new home from the earliest planning conversations.',
    story: 'The brief called for comfortable movement between floors without interrupting a generous stair hall. The lift was considered alongside the daylight, oak detailing and garden view so that its presence feels intentional from every level.',
    design: ['A clear visual connection between floors', 'Warm timber selected to sit alongside the stair', 'A simple, legible control location'],
    gallery: [images.hero.src, images.staircaseLift.src, images.interiors.villaLiving.src]
  },
  {
    slug: 'the-stair-hall-duplex',
    title: 'The Stair Hall Duplex',
    location: 'Pune, Maharashtra',
    type: 'Duplex',
    style: 'Modern',
    model: 'NOVA · Design brief',
    image: images.staircaseLift.src,
    alt: 'Glass lift integrated beside a floating staircase in a duplex home',
    summary: 'A compact planning study that finds a quieter route through a well-loved family home.',
    story: 'The project began with a careful look at existing circulation and structure. The design team explored a lift position beside the stair, balancing a clear approach at each landing with the natural material palette of the home.',
    design: ['Existing circulation reviewed before layout', 'Material choices tuned to oak and limestone', 'Landing approach planned with the family'],
    gallery: [images.staircaseLift.src, images.interiors.foyer.src, images.interiors.kitchen.src]
  },
  {
    slug: 'garden-light-residence',
    title: 'The Garden Light Residence',
    location: 'Hyderabad, Telangana',
    type: 'Villa',
    style: 'Classic',
    model: 'LUMINA · Design brief',
    image: images.interiors.villaLiving.src,
    alt: 'Sunlit living room opening to the garden in a contemporary home',
    summary: 'A calm material story that keeps a strong garden connection at the heart of the home.',
    story: 'For this residence, the lift brief was part of a wider interior conversation about light, timber and outdoor views. A restrained glass expression was explored to keep the centre of the home open and connected.',
    design: ['Glass and warm timber as a visual language', 'Sightlines to the garden considered from both levels', 'Lighting discussed with the interior designer'],
    gallery: [images.interiors.villaLiving.src, images.liftDetail.src, images.interiors.villaExterior.src]
  },
  {
    slug: 'the-urban-penthouse',
    title: 'The Urban Penthouse',
    location: 'Mumbai, Maharashtra',
    type: 'Apartment',
    style: 'Modern',
    model: 'AURA · Design brief',
    image: images.interiors.foyer.src,
    alt: 'Minimalist apartment interior with a sculptural stair and pale stone finishes',
    summary: 'A refined vertical connection planned within an existing multi-level city residence.',
    story: 'The team considered access, landing clearances and the character of the shared interior before shaping an early concept. The project highlights the value of an on-site assessment before any specification is confirmed.',
    design: ['Existing conditions documented first', 'Finishes reviewed against stone and dark metal', 'Installation planning coordinated with the building'],
    gallery: [images.interiors.foyer.src, images.interiors.softLiving.src, images.liftDetail.src]
  },
  {
    slug: 'the-heritage-house',
    title: 'The Heritage House',
    location: 'Kolkata, West Bengal',
    type: 'Duplex',
    style: 'Classic',
    model: 'ELITE · Design brief',
    image: images.interiors.dining.src,
    alt: 'Warm modern residence with a restrained natural-material palette',
    summary: 'A sensitive early study into how new mobility can sit alongside established character.',
    story: 'A heritage-minded home asks for patience. Structural context, existing features and planning constraints are reviewed before the lift concept is drawn. Material samples and placement options help preserve the atmosphere of the original home.',
    design: ['Conservation context discussed at assessment', 'Finish samples compared with existing details', 'No installation proposal before structural review'],
    gallery: [images.interiors.dining.src, images.interiors.quietRoom.src, images.staircaseLift.src]
  },
  {
    slug: 'the-minimalist-retreat',
    title: 'The Minimalist Retreat',
    location: 'Chennai, Tamil Nadu',
    type: 'Villa',
    style: 'Modern',
    model: 'NOVA · Design brief',
    image: images.interiors.quietRoom.src,
    alt: 'A minimal, softly lit contemporary interior with quiet neutral finishes',
    summary: 'A less-is-more approach to a lift brief in a carefully edited home.',
    story: 'The interior is intentionally quiet, so the lift conversation centred on visual simplicity, practical access and a considered balance of glass, metal and soft-toned surfaces.',
    design: ['Simple visual language', 'Layout reviewed against everyday routes', 'Lighting and finishes planned as part of the room'],
    gallery: [images.interiors.quietRoom.src, images.hero.src, images.interiors.kitchen.src]
  }
];

export const projectFilters = ['All', 'Villa', 'Duplex', 'Apartment', 'Modern', 'Classic'];
