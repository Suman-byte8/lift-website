/**
 * Central image registry.
 * Every photograph on the site is referenced from here, so swapping placeholders for
 * real installation photography is a one-file change. Keep `alt` text descriptive.
 *
 * NOTE: these are interior/architecture placeholders from Unsplash. They do not show
 * this brand's lifts — replace with genuine installation photography before launch.
 * Lift-specific visuals elsewhere on the site are drawn in code (see components/lift).
 */
const u = (id, w = 2000) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  heroInterior: { src: u("1600607687939-ce8a6c25118c"), alt: "Sunlit double-height living room with soft neutral furnishings" },
  introResidence: { src: u("1600566753190-17f0baa2a6c3"), alt: "Contemporary residence interior with warm timber and stone finishes" },
  villaDusk: { src: u("1600585154340-be6161a56a0c"), alt: "Modern villa exterior with pool at dusk" },
  villaWhite: { src: u("1613490493576-7fde63acd811"), alt: "White contemporary villa with clean architectural lines" },
  villaPool: { src: u("1613977257363-707ba9348227"), alt: "Luxury villa terrace overlooking a pool" },
  modernHouse: { src: u("1512917774080-9991f1c4c750"), alt: "Modern multi-level house with large glazing" },
  luxuryHome: { src: u("1600596542815-ffad4c1539a9"), alt: "Luxury home exterior with landscaped garden" },
  duplex: { src: u("1580587771525-78b9dba3b914"), alt: "Two-storey family home with a manicured front lawn" },
  traditional: { src: u("1564013799919-ab600027ffc6"), alt: "Classic residence with traditional proportions" },
  livingSoft: { src: u("1600210492486-724fe5c67fb0"), alt: "Living room in soft ivory and sand tones" },
  livingBeige: { src: u("1616486338812-3dadae4b4ace"), alt: "Minimal beige living space with sculptural furniture" },
  openPlan: { src: u("1600573472550-8090b5e0745e"), alt: "Open-plan living and dining area with natural light" },
  minimal: { src: u("1586023492125-27b2c045efd7"), alt: "Minimalist living room with curated décor" },
  apartment: { src: u("1493809842364-78817add7ffb"), alt: "Luxury apartment living room with city views" },
  apartmentBright: { src: u("1522708323590-d24dbb6b0267"), alt: "Bright apartment interior with open shelving" },
  cozy: { src: u("1502005229762-cf1b2da7c5d6"), alt: "Warm, layered interior with natural textures" },
  kitchenOpen: { src: u("1600585154526-990dced4db0d"), alt: "Open kitchen and living area in a contemporary home" },
  interiorCalm: { src: u("1600566753086-00f18fb6b3ea"), alt: "Calm interior with neutral palette and fine detailing" },
  materialStone: { src: u("1600607687644-c7171b42498f"), alt: "Refined stone and timber material detail" },
  kitchenWarm: { src: u("1600047509807-ba8f99d2cdde"), alt: "Warm kitchen interior with premium finishes" },
  bedroom: { src: u("1505691938895-1758d7feb511"), alt: "Serene bedroom with soft linen tones" },
  kitchenClassic: { src: u("1556912173-3bb406ef7e77"), alt: "Classic kitchen with timber cabinetry" },
  detailChair: { src: u("1618221195710-dd6b41faaea6"), alt: "Designer chair in a softly lit interior" },
  detailTexture: { src: u("1615529182904-14819c35db37"), alt: "Textured upholstery and natural materials" },
};

