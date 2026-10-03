"use client";
import { useState } from "react";
import { Check, Download } from "lucide-react";
import { useConsultation } from "@/components/ConsultationProvider";

const FINISHES = [
  { id: "champagne", name: "Champagne Pearl", color: "#CDB692" },
  { id: "slate", name: "Brushed Titanium", color: "#686D76" },
  { id: "brass", name: "Satin Vintage Brass", color: "#B89B6C" },
  { id: "obsidian", name: "Obsidian Nero Matt", color: "#1E1E24" },
];

const TINTS = [
  { id: "clear", name: "Starphire™ Ultra Clear", bg: "rgba(255,255,255,0.25)" },
  { id: "smoked", name: "Venetian Smoked Shadow", bg: "rgba(40,40,40,0.55)" },
  { id: "bronze", name: "Warm Amber Lustre", bg: "rgba(184,155,108,0.3)" },
];

const FLOORS = [
  { id: "marble", name: "Calacatta Gold Quartz" },
  { id: "oak", name: "Quarter-Sawn European Oak" },
  { id: "terrazzo", name: "Milano Grigio Terrazzo" },
];

const GLOWS = [
  { id: "warm", label: "2700K Warm Sunset", halo: "#FFD494", led: "#F59E0B" },
  { id: "neutral", label: "3500K Gallery Neutral", halo: "#F7F2EA", led: "#E5E7EB" },
  { id: "daylight", label: "5000K Pure Daylight", halo: "#CFE3FF", led: "#60A5FA" },
];

const labelCls = "text-xs uppercase tracking-widest font-semibold text-stone-700 block";

export default function CustomizerStudio() {
  const { open } = useConsultation();
  const [frameId, setFrameId] = useState("champagne");
  const [tintId, setTintId] = useState("clear");
  const [floorId, setFloorId] = useState("marble");
  const [glowId, setGlowId] = useState("warm");

  const frame = FINISHES.find((f) => f.id === frameId);
  const tint = TINTS.find((t) => t.id === tintId);
  const floor = FLOORS.find((f) => f.id === floorId);
  const glow = GLOWS.find((g) => g.id === glowId);

  return (
    <section className="py-20 bg-alabaster">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne-700 font-semibold block mb-2">Aurelia Bespoke Configurator</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-mineral">Curate Your Vertical Sanctuary</h2>
          <p className="mt-3 text-stone-600 text-sm md:text-base">
            Customize column structural metals, architectural glass treatments, ambient LED halos, and bespoke floor slabs in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-lg aspect-[4/5] bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 rounded-3xl p-8 relative shadow-2xl flex flex-col items-center justify-center overflow-hidden border border-stone-700">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

              <div
                className="absolute top-12 w-64 h-6 rounded-full blur-xl transition-all duration-500"
                style={{ backgroundColor: glow.halo, opacity: 0.85 }}
              />

              <div
                className="relative w-64 sm:w-72 h-[420px] max-h-[75%] rounded-full border-4 flex flex-col justify-between p-4 transition-all duration-500 shadow-2xl"
                style={{ borderColor: frame.color, background: tint.bg }}
              >
                <div
                  className="h-10 rounded-full w-full flex items-center justify-center text-[10px] uppercase font-mono tracking-widest text-white shadow-inner"
                  style={{ backgroundColor: frame.color }}
                >
                  Aurelia Precision Drive
                </div>

                <div className="absolute inset-y-12 left-4 w-6 bg-gradient-to-r from-white/30 to-transparent rounded-full pointer-events-none" />
                <div className="absolute inset-y-12 right-6 w-2 bg-white/20 rounded-full pointer-events-none" />

                <div className="my-auto w-full h-56 rounded-3xl border border-white/40 bg-white/10 backdrop-blur-sm p-3 flex flex-col justify-between relative shadow-lg">
                  <div className="h-1.5 w-16 mx-auto rounded-full transition-all duration-300 shadow" style={{ backgroundColor: glow.led }} />
                  <div className="text-center space-y-1">
                    <span className="text-[10px] uppercase font-serif tracking-widest text-white/90">Aurelia Penthouse</span>
                    <div className="w-12 h-[1px] bg-champagne-400 mx-auto" />
                    <span className="text-[9px] font-mono text-champagne-300 block">360° Unobstructed Vistas</span>
                  </div>
                  <div className="w-full py-2 px-3 rounded-lg text-center text-[9px] uppercase font-medium tracking-wider text-stone-800 bg-white/90 shadow-md">
                    Floor: {floor.name}
                  </div>
                </div>

                <div
                  className="h-8 rounded-full w-full flex items-center justify-center text-[9px] uppercase font-mono text-white/90 shadow-lg"
                  style={{ backgroundColor: frame.color }}
                >
                  Zero Pit Flush Base
                </div>
              </div>

              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-stone-300 bg-stone-900/80 px-4 py-2 rounded-full border border-stone-700">
                <span>Frame: <strong className="text-champagne-400 capitalize">{frameId}</strong></span>
                <span>Glass: <strong className="text-champagne-400 capitalize">{tintId}</strong></span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8 bg-white p-8 rounded-3xl border border-champagne-200 shadow-sm">
            <div>
              <h3 className="font-serif text-2xl font-medium text-mineral mb-1">Tailor Every Nuance</h3>
              <p className="text-stone-500 text-xs">Architectural grade alloys, acoustic linings, and circadian lighting systems.</p>
            </div>

            <div className="space-y-3">
              <span className={labelCls}>1. Structural Column & Profile Finish</span>
              <div className="grid grid-cols-2 gap-2.5">
                {FINISHES.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFrameId(f.id)}
                    className={`p-3 rounded-xl border text-left flex items-center space-x-3 transition ${
                      frameId === f.id ? "border-mineral ring-1 ring-mineral bg-stone-50" : "border-stone-200 hover:border-stone-400"
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full border border-black/20 shrink-0" style={{ backgroundColor: f.color }} />
                    <span className="text-xs font-medium text-stone-800">{f.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <span className={labelCls}>2. Panoramic Glass Tint</span>
              <div className="flex flex-col space-y-2">
                {TINTS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTintId(t.id)}
                    className={`p-3 rounded-xl border text-left flex items-center justify-between text-xs font-medium transition ${
                      tintId === t.id
                        ? "border-mineral ring-1 ring-mineral bg-stone-50 text-mineral font-semibold"
                        : "border-stone-200 text-stone-600 hover:border-stone-400"
                    }`}
                  >
                    <span>{t.name}</span>
                    {tintId === t.id && <Check size={14} className="text-mineral" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <span className={labelCls}>3. Cabin Flooring Slab</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {FLOORS.map((fl) => (
                  <button
                    key={fl.id}
                    onClick={() => setFloorId(fl.id)}
                    className={`p-2.5 rounded-lg border text-center text-xs transition ${
                      floorId === fl.id ? "border-mineral bg-stone-900 text-white font-medium" : "border-stone-200 text-stone-700 hover:bg-stone-50"
                    }`}
                  >
                    {fl.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <span className={labelCls}>4. Circadian Interior Ambiance</span>
              <div className="flex space-x-3">
                {GLOWS.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setGlowId(g.id)}
                    className={`flex-1 py-2 rounded-lg text-xs border text-center transition ${
                      glowId === g.id
                        ? "border-champagne-600 bg-champagne-100 text-champagne-900 font-semibold"
                        : "border-stone-200 text-stone-600"
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={open}
                className="w-full bg-mineral hover:bg-black text-white py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition shadow-lg flex items-center justify-center space-x-2"
              >
                <Download size={15} />
                <span>Save Configuration & Request Architectural CAD</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
