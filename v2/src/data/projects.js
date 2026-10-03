/**
 * PLACEHOLDER case studies — swap for real projects (with client consent).
 * `tags` drive the filters on /projects.
 */
export const projectFilters = ["All", "Villa", "Duplex", "Apartment", "Modern", "Classic"];

export const projects = [
  {
    slug: "garden-villa-kolkata", title: "The Garden Villa", location: "Kolkata, West Bengal", homeType: "Villa", tags: ["Villa", "Modern"], model: "aura", stops: 3, year: "2025",
    cover: "villaWhite", gallery: ["villaWhite", "livingSoft", "openPlan", "materialStone"],
    summary: "A light-filled glass lift threading through a three-level family villa.",
    brief: "The owners wanted their parents to enjoy all three floors without the lift dominating a carefully designed stair hall.",
    design: "A clear low-iron glass enclosure with a champagne frame aligns with the stair's handrail. Warm ceiling light matches the hall's pendant.",
    installation: "The structure was installed within an existing stair void with a shallow pit; landing doors were fitted after the stone flooring was complete.",
  },
  {
    slug: "skyline-duplex-bengaluru", title: "Skyline Duplex", location: "Bengaluru, Karnataka", homeType: "Duplex", tags: ["Duplex", "Apartment", "Modern"], model: "nova", stops: 2, year: "2025",
    cover: "apartment", gallery: ["apartment", "apartmentBright", "minimal", "interiorCalm"],
    summary: "A compact retrofit lift inside a 22nd-floor duplex apartment.",
    brief: "Retrofit a lift into a finished duplex with no access to the building's structure below.",
    design: "A self-supporting frame in graphite with frosted lower panels gives privacy without closing off the living room.",
    installation: "Ramp entry removed the need for a pit; the lift was assembled from components carried in the service elevator.",
  },
  {
    slug: "courtyard-residence-pune", title: "Courtyard Residence", location: "Pune, Maharashtra", homeType: "Villa", tags: ["Villa", "Classic"], model: "lumina", stops: 3, year: "2024",
    cover: "traditional", gallery: ["traditional", "cozy", "kitchenClassic", "detailTexture"],
    summary: "A panoramic lift that respects a classic courtyard home.",
    brief: "Add vertical access without disturbing the home's traditional proportions.",
    design: "Curved glass with bronze trim and timber-effect cabin panels echo the existing joinery.",
    installation: "Coordinated with the restoration contractor so the pit and power were prepared during the floor renewal.",
  },
  {
    slug: "hillside-house-hyderabad", title: "Hillside House", location: "Hyderabad, Telangana", homeType: "Villa", tags: ["Villa", "Modern"], model: "elite", stops: 5, year: "2024",
    cover: "villaDusk", gallery: ["villaDusk", "villaPool", "kitchenOpen", "livingBeige"],
    summary: "Five stops from garage to roof terrace in a sloping-site villa.",
    brief: "Connect five levels on a sloped plot, with wheelchair access for an elderly family member.",
    design: "A generous cabin with a fold-down seat, stone flooring and full-height telescopic doors.",
    installation: "Shaft planned with the architect during construction; commissioned alongside the home's automation system.",
  },
  {
    slug: "heritage-townhouse-chennai", title: "Heritage Townhouse", location: "Chennai, Tamil Nadu", homeType: "Duplex", tags: ["Duplex", "Classic"], model: "nova", stops: 3, year: "2023",
    cover: "duplex", gallery: ["duplex", "kitchenWarm", "bedroom", "cozy"],
    summary: "A discreet compact lift in a renovated family townhouse.",
    brief: "Keep the character of a family townhouse while making the upper floors accessible.",
    design: "Panelled landing doors painted to match the walls make the lift nearly invisible when closed.",
    installation: "Installed in a former storage room stack with minimal structural change.",
  },
  {
    slug: "penthouse-mumbai", title: "Sea-Facing Penthouse", location: "Mumbai, Maharashtra", homeType: "Apartment", tags: ["Apartment", "Modern"], model: "lumina", stops: 2, year: "2023",
    cover: "livingSoft", gallery: ["livingSoft", "livingBeige", "detailChair", "materialStone"],
    summary: "A sculptural glass lift as the centrepiece of a double-height penthouse.",
    brief: "Create a private lift that feels like a design object in a double-height living room.",
    design: "Curved glass and a warm-lit ceiling, with handrail lighting that doubles as a night guide.",
    installation: "Coordinated with the building society for working hours and structural approvals.",
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
