import { images } from '@/data/images';

export const stats = [
  { value: 1, suffix: ' : 1', label: 'A conversation shaped around you' },
  { value: 4, suffix: ' steps', label: 'From first thought to handover' },
  { value: 360, suffix: '°', label: 'A view of the whole home' },
  { value: 1, suffix: ' home', label: 'A design that belongs there' }
];

export const benefits = [
  { icon: 'Accessibility', title: 'Effortless access', text: 'Move between levels with more ease, in a way that supports the rhythms of everyday life.', tone: 'bg-[#e9ede7]' },
  { icon: 'House', title: 'Future-ready living', text: 'Plan for changing needs while keeping the home connected, comfortable and familiar.', tone: 'bg-[#f1ece3]' },
  { icon: 'Ruler', title: 'Space considered', text: 'Start with the plan you have. Every placement begins with a measured look at the home.', tone: 'bg-[#eef0ef]' },
  { icon: 'VolumeX', title: 'Quiet by nature', text: 'The experience is considered as part of the interior, with sound and movement discussed at design stage.', tone: 'bg-[#f3f0e8]' },
  { icon: 'Leaf', title: 'Thoughtful operation', text: 'Energy use is reviewed against the chosen system and expected pattern of use—not a generic promise.', tone: 'bg-[#e8ece6]' },
  { icon: 'Sparkles', title: 'Made to belong', text: 'Finishes, proportions and details are selected to feel at home in your architecture.', tone: 'bg-[#f0eee9]' }
];

export const safetyFeatures = [
  { icon: 'ArrowDownToLine', title: 'Emergency lowering', text: 'Where included in the final specification, a defined procedure helps bring the cabin to a landing during a power interruption.' },
  { icon: 'ScanLine', title: 'Door sensing', text: 'The selected door protection is explained during design review and demonstrated during handover.' },
  { icon: 'BatteryCharging', title: 'Backup provision', text: 'Any backup power or battery-assisted function is confirmed for the exact model and project.' },
  { icon: 'BellRing', title: 'Emergency communication', text: 'The agreed alarm or assistance method is made clear to every intended user.' },
  { icon: 'MoveDown', title: 'Obstruction awareness', text: 'Protection at thresholds and landing areas is specified to suit the selected equipment.' },
  { icon: 'Gauge', title: 'Motion protection', text: 'Applicable speed and movement safeguards are documented for the commissioned system.' },
  { icon: 'Hand', title: 'Manual procedures', text: 'A trained, authorised person receives the correct emergency instructions for the installation.' },
  { icon: 'ShieldCheck', title: 'Interlocked access', text: 'Door and landing access arrangements are reviewed as part of the complete safety design.' }
];

export const technologyFeatures = [
  { icon: 'Cog', title: 'Drive system', text: 'We explain the available drive approaches in the context of your travel, home layout, acoustic expectations and maintenance plan.' },
  { icon: 'Waves', title: 'Smooth movement', text: 'Starting, stopping and ride feel are considered as part of the user experience and confirmed against the selected configuration.' },
  { icon: 'PanelsTopLeft', title: 'Intuitive controls', text: 'Call controls, cabin interfaces and landing positions are arranged to be legible and comfortable for intended users.' },
  { icon: 'Zap', title: 'Energy use', text: 'Operating characteristics vary by product and use. We provide project-specific information rather than generalised savings claims.' }
];

export const customization = [
  { title: 'Glass finish', detail: 'Clear, tinted or patterned options, subject to design and system requirements.', swatch: 'bg-[#e7ebe8]' },
  { title: 'Cabin finish', detail: 'Warm timber, tactile laminates or a restrained metal palette.', swatch: 'bg-[#d9c7aa]' },
  { title: 'Handrails', detail: 'A considered form, finish and position for everyday comfort.', swatch: 'bg-[#b6a58e]' },
  { title: 'Lighting', detail: 'Layered illumination reviewed alongside the surrounding interior.', swatch: 'bg-[#eee2c7]' },
  { title: 'Flooring', detail: 'A practical surface that complements the floors at each landing.', swatch: 'bg-[#b5b6a3]' },
  { title: 'Controls', detail: 'Clear, well-placed interfaces selected for the final model.', swatch: 'bg-[#858a83]' }
];

export const applications = [
  { title: 'For villas', text: 'Bring several levels into one easy, considered daily routine.', image: images.interiors.villaExterior.src, alt: 'Contemporary villa among mature trees' },
  { title: 'For duplex homes', text: 'Explore a more direct connection between the spaces you use most.', image: images.staircaseLift.src, alt: 'Double-height duplex foyer with a floating oak staircase' },
  { title: 'For senior-friendly homes', text: 'Plan for confidence, comfort and changing mobility needs at home.', image: images.interiors.softLiving.src, alt: 'Comfortable sunlit sitting room with soft natural finishes' },
  { title: 'For multi-level living', text: 'Make movement between floors feel like part of the architecture.', image: images.interiors.foyer.src, alt: 'Open multi-level interior with a sculptural staircase' },
  { title: 'For luxury apartments', text: 'Consider the lift as a carefully integrated interior detail.', image: images.interiors.kitchen.src, alt: 'Bright open-plan residence with oak details' },
  { title: 'For new construction', text: 'Bring the lift conversation into the early planning stages.', image: images.interiors.dining.src, alt: 'Contemporary residential interior with warm material palette' }
];

export const testimonials = [
  {
    quote: 'We wanted the lift to feel as though it had always belonged in the house. The design conversation helped us think about the whole space, not just the equipment.',
    name: 'Sample homeowner story',
    city: 'City to be confirmed',
    home: 'Duplex residence',
    image: images.interiors.softLiving.src,
    alt: 'Warm and welcoming residence interior',
    label: 'Illustrative placeholder — replace with a verified customer testimonial before launch.'
  },
  {
    quote: 'What mattered was being able to ask practical questions early. We could look at placement, finishes and how the lift might work with our day-to-day routine.',
    name: 'Sample homeowner story',
    city: 'City to be confirmed',
    home: 'Contemporary villa',
    image: images.interiors.villaLiving.src,
    alt: 'Light-filled contemporary villa interior',
    label: 'Illustrative placeholder — replace with a verified customer testimonial before launch.'
  }
];

export const processSteps = [
  { number: '01', title: 'Consultation', text: 'A conversation about your home, the people who use it and what better movement would mean.' },
  { number: '02', title: 'Site assessment', text: 'A closer look at structure, access, travel, landing positions and the practical details.' },
  { number: '03', title: 'Design & installation', text: 'A project-specific proposal, coordinated planning and an installation programme agreed in advance.' },
  { number: '04', title: 'Handover & care', text: 'Clear operating guidance, safety information and an agreed path for ongoing service.' }
];
