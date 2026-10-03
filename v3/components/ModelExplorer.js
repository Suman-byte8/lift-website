'use client';

import { useMemo, useState } from 'react';
import ProductCard from '@/components/ProductCard';

export default function ModelExplorer({ products, categories }) {
  const [active, setActive] = useState('All');
  const filtered = useMemo(() => active === 'All' ? products : products.filter((product) => product.category === active), [active, products]);
  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter models by category">
        {categories.map((category) => (
          <button key={category} type="button" onClick={() => setActive(category)} aria-pressed={active === category} className={`min-h-10 rounded-full border px-4 text-[9px] uppercase tracking-[0.13em] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne ${active === category ? 'border-ink bg-ink text-ivory' : 'border-[#d5d0c6] bg-transparent text-[#63645d] hover:border-ink hover:text-ink'}`}>
            {category}
          </button>
        ))}
        <p className="ml-auto self-center text-[10px] uppercase tracking-[0.1em] text-muted" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'model' : 'models'}</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product, index) => <ProductCard key={product.slug} product={product} index={index} compact />)}
      </div>
      {filtered.length === 0 && <p className="rounded-2xl border border-[#e1ddd4] p-10 text-center text-sm text-muted">No models in this category yet.</p>}
    </div>
  );
}
