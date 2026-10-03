"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { GALLERY_FILTERS, GALLERY_ITEMS } from "@/data/gallery";
import { useConsultation } from "@/components/ConsultationProvider";

function CaseStudyModal({ item, onClose }) {
  const { open } = useConsultation();

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md" role="dialog" aria-modal="true">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-champagne-300">
        <button onClick={onClose} aria-label="Close" className="absolute top-6 right-6 p-2 rounded-full text-stone-400 hover:text-mineral hover:bg-stone-100 transition">
          <X size={20} />
        </button>

        <span className="text-[10px] uppercase tracking-widest text-champagne-700 font-semibold block mb-1">Architectural Case Study</span>
        <h2 className="font-serif text-3xl font-light text-mineral mb-1 pr-10">{item.title}</h2>
        <div className="flex items-center space-x-3 text-xs text-stone-500 mb-4">
          <span>{item.location}</span>
          <span>•</span>
          <span className="text-champagne-800 font-medium">{item.model}</span>
        </div>

        <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-6">
          <Image src={item.img} alt={item.title} fill sizes="(min-width:768px) 640px, 100vw" className="object-cover" />
        </div>

        <p className="text-stone-600 text-sm leading-relaxed mb-6">
          {item.desc} Completed with custom concealed wiring, acoustic dampening mounts, and personalized crystal glass cladding matching the property’s historical masonry.
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => {
              onClose();
              open();
            }}
            className="flex-1 bg-mineral text-white py-3.5 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-black transition"
          >
            Request Similar Design
          </button>
          <button onClick={onClose} className="px-6 py-3.5 rounded-full border border-stone-300 text-stone-700 text-xs uppercase tracking-widest hover:bg-stone-50">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const items = useMemo(
    () => (filter === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category.toLowerCase().includes(filter))),
    [filter]
  );

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-champagne-700 font-semibold block mb-2">Global Architecture</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-mineral tracking-tight">Featured Installations Worldwide</h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
            {GALLERY_FILTERS.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition ${
                  filter === btn.id ? "bg-mineral text-alabaster shadow-sm" : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className="group text-left rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(min-width:1024px) 400px, (min-width:768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-mineral/70 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                  {item.location}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between w-full">
                <div>
                  <div className="text-[11px] font-mono text-champagne-700 uppercase tracking-widest mb-1">{item.model}</div>
                  <h3 className="font-serif text-xl font-medium text-mineral group-hover:text-champagne-700 transition">{item.title}</h3>
                  <p className="text-stone-500 text-xs mt-2 line-clamp-2 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-mineral font-medium">
                  <span>Explore Case Study</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && <CaseStudyModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
