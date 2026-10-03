import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function ProductGrid({ eyebrow = "The collection", title = "Find Your Perfect Home Lift", intro, items = products, showAll = true }) {
  return (
    <section className="relative bg-ivory py-24 lg:py-36" aria-labelledby="products-title">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading id="products-title" eyebrow={eyebrow} title={title} intro={intro ?? "Four model families, each tuned to a different kind of home — from compact retrofits to multi-level villas."} />
          {showAll && <Button href="/models" variant="outline" className="self-start lg:self-auto">View all models</Button>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-10">
          {items.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} className={i % 2 === 1 ? "md:translate-y-16" : ""} />
          ))}
        </div>
        <p className="mt-24 text-[11.5px] text-ink-300">Specifications shown are indicative placeholders and will be confirmed against certified product data.</p>
      </div>
    </section>
  );
}
