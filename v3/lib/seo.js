import { siteConfig } from '@/data/site';
import { images } from '@/data/images';

export function createPageMetadata({ title, description, path, image = images.hero.src, imageAlt = images.hero.alt, robots }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      siteName: siteConfig.name,
      url: path,
      title: `${title} | AUREL Home Lifts`,
      description,
      images: [{ url: image, width: 1376, height: 768, alt: imageAlt }]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | AUREL Home Lifts`,
      description,
      images: [image]
    },
    ...(robots ? { robots } : {})
  };
}
