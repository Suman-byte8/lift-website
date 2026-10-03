import { products } from '@/data/products';
import { projects } from '@/data/projects';
import { siteConfig } from '@/data/site';

const base = siteConfig.origin;
const pages = ['', '/home-lifts', '/models', '/technology', '/safety', '/about', '/projects', '/contact', '/faq', '/brochure', '/privacy', '/terms'];

export default function sitemap() {
  const staticUrls = pages.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === '' ? 'weekly' : 'monthly', priority: path === '' ? 1 : 0.7 }));
  const productUrls = products.map((product) => ({ url: `${base}/models/${product.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 }));
  const projectUrls = projects.map((project) => ({ url: `${base}/projects/${project.slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 }));
  return [...staticUrls, ...productUrls, ...projectUrls];
}
