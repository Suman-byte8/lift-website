import { site } from "@/data/site";
import { images } from "@/data/images";

const defaultOg = images.heroInterior.src.replace("w=2000", "w=1200");

/** Builds per-page metadata (title, description, canonical, Open Graph, Twitter). */
export function buildMetadata({ title, description, path = "/", image }) {
  const ogImage = image || defaultOg;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description, images: [ogImage] },
  };
}

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

export const organizationLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.contact.email,
  telephone: site.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.address.line1,
    addressLocality: site.contact.address.city,
    addressRegion: site.contact.address.region,
    postalCode: site.contact.address.postal,
    addressCountry: site.contact.address.country,
  },
  sameAs: site.social.map((s) => s.href),
});

export const breadcrumbLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.label, item: absoluteUrl(it.href) })),
});

export const faqLd = (list) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: list.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const productLd = (p, imageUrl) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: `${site.shortName} ${p.name} — ${p.line}`,
  description: p.description,
  image: imageUrl,
  category: "Residential home lift",
  brand: { "@type": "Brand", name: site.name },
  url: absoluteUrl(`/models/${p.slug}`),
});
