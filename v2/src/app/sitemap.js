import { site } from "@/data/site";
import { products } from "@/data/products";
import { projects } from "@/data/projects";

export default function sitemap() {
  const now = new Date();
  const staticRoutes = ["", "/home-lifts", "/models", "/technology", "/safety", "/about", "/projects", "/contact", "/faq", "/brochure", "/privacy", "/terms"];
  return [
    ...staticRoutes.map((r) => ({ url: `${site.url}${r}`, lastModified: now, changeFrequency: "monthly", priority: r === "" ? 1 : 0.8 })),
    ...products.map((p) => ({ url: `${site.url}/models/${p.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.9 })),
    ...projects.map((p) => ({ url: `${site.url}/projects/${p.slug}`, lastModified: now, changeFrequency: "yearly", priority: 0.6 })),
  ];
}
