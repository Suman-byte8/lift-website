"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { LIFT_MODELS } from "@/data/models";
import { useConsultation } from "@/components/ConsultationProvider";

function DossierModal({ model, onClose }) {
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
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md" role="dialog" aria-modal="true">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-8 md:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-champagne-300">
        <button onClick={onClose} aria-label="Close" className="absolute top-6 right-6 p-2 rounded-full text-stone-400 hover:text-mineral hover:bg-stone-100 transition">
          <X size={20} />
        </button>

        <span className="text-[10px] uppercase tracking-widest text-champagne-700 font-semibold block mb-1">Technical Dossier</span>
        <h2 className="font-serif text-3xl font-normal text-mineral">{model.name}</h2>
        <p className="text-champagne-700 font-serif italic text-base mb-4">{model.tagline}</p>

        <div className="relative rounded-2xl overflow-hidden aspect-video mb-6">
          <Image src={model.heroImg} alt={model.name} fill sizes="(min-width:768px) 700px, 100vw" className="object-cover" />
        </div>

        <p className="text-stone-600 text-sm leading-relaxed mb-6">{model.description}</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200 mb-6">
          {[
            ["Capacity", model.capacity, "text-mineral"],
            ["Headroom", model.headroom, "text-mineral"],
            ["Pit Requirement", model.pitRequirement, "text-emerald-600"],
            ["Max Travel", model.stops, "text-mineral"],
          ].map(([l, v, c]) => (
            <div key={l}>
              <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-mono">{l}</span>
              <span className={`text-xs font-semibold ${c}`}>{v}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2 mb-6">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-mineral">Engineered Specifications</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
            {model.specs.map((sp) => (
              <div key={sp.label} className="p-2.5 rounded-lg border border-stone-100 bg-stone-50 flex justify-between gap-3">
                <span className="text-stone-400">{sp.label}:</span>
                <span className="font-medium text-mineral text-right">{sp.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => {
              onClose();
              open();
            }}
            className="flex-1 bg-mineral text-white py-3.5 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-black transition shadow"
          >
            Inquire For This Model
          </button>
          <button onClick={onClose} className="px-6 py-3.5 rounded-full border border-stone-300 text-stone-700 text-xs uppercase tracking-widest hover:bg-stone-50">
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(LIFT_MODELS[0].id);
  const [dossier, setDossier] = useState(null);
  const current = LIFT_MODELS.find((m) => m.id === activeTab);

  return (
    <section className="py-24 bg-white border-t border-champagne-200/60 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-champagne-700 font-semibold block mb-2">The Collection</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-mineral tracking-tight">
              Architectural Forms Crafted for Pure Serenity
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-stone-500 text-sm max-w-sm">
            Each model is tailored to your structural interior, requiring zero heavy construction or unsightly machine enclosures.
          </p>
        </div>

        <div className="flex overflow-x-auto space-x-2 border-b border-stone-200 pb-4 mb-10 no-scrollbar" role="tablist">
          {LIFT_MODELS.map((model) => (
            <button
              key={model.id}
              role="tab"
              aria-selected={activeTab === model.id}
              onClick={() => setActiveTab(model.id)}
              className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.16em] font-medium whitespace-nowrap transition-all duration-200 ${
                activeTab === model.id ? "bg-mineral text-alabaster shadow-md" : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {model.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-alabaster rounded-3xl p-8 md:p-12 border border-champagne-200 shadow-sm">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 bg-champagne-200 text-champagne-900 text-[11px] font-semibold tracking-widest uppercase rounded">
              {current.badge}
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-mineral font-normal">{current.name}</h3>
            <p className="text-champagne-700 font-serif italic text-lg -mt-3">{current.tagline}</p>
            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">{current.description}</p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-200">
              {[
                ["Drive System", current.driveType],
                ["Civil Work", current.pitRequirement],
                ["Passengers / Load", current.passengers],
                ["Power Standard", current.power],
              ].map(([l, v]) => (
                <div key={l}>
                  <span className="text-[11px] uppercase tracking-wider text-stone-400 block">{l}</span>
                  <span className="text-sm font-semibold text-mineral">{v}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => setDossier(current)}
                className="bg-mineral hover:bg-stone-900 text-white px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-medium transition shadow"
              >
                View Comprehensive Dossier
              </button>
              <Link
                href="/studio"
                className="border border-stone-300 hover:border-mineral px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-medium text-stone-800 transition"
              >
                Personalize Finishes
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[4/3]">
              <Image
                src={current.heroImg}
                alt={current.name}
                fill
                sizes="(min-width:1024px) 540px, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center text-white">
                <span className="text-xs tracking-widest uppercase font-mono bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md">
                  {current.stops}
                </span>
                <span className="text-xs tracking-wider uppercase font-medium text-champagne-300">CE / ASME A17.1 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {dossier && <DossierModal model={dossier} onClose={() => setDossier(null)} />}
    </section>
  );
}
