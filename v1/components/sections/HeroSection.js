"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { useConsultation } from "@/components/ConsultationProvider";

const CABIN_BOTTOM = { 1: "16px", 2: "135px", 3: "230px" };

export default function HeroSection() {
  const { open } = useConsultation();
  const [cabinFloor, setCabinFloor] = useState(2);
  const [isAutoGliding, setIsAutoGliding] = useState(true);

  useEffect(() => {
    if (!isAutoGliding) return;
    const id = setInterval(() => setCabinFloor((p) => (p === 3 ? 1 : p + 1)), 4000);
    return () => clearInterval(id);
  }, [isAutoGliding]);

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-champagne-100/60 via-alabaster to-alabaster">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-champagne-300/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-stone-300/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#CDB692_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-7 text-left">
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-champagne-200/50 border border-champagne-300/60 text-champagne-900 text-xs tracking-widest uppercase font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
            <span>Self-Supporting • Zero Pit Required • 100% Glass Panoramic</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-mineral leading-[1.08]">
            Elevating Luxury Living, <br />
            <span className="italic font-normal font-serif text-champagne-700">Artfully Engineered.</span>
          </h1>

          <p className="text-stone-600 text-base md:text-lg max-w-xl font-light leading-relaxed">
            Step into the future of vertical sanctuary. Aurelia redefines the modern private estate with zero-excavation
            panoramic elevators—fusing certified aerospace physics with bespoke Italian finishes.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={open}
              className="bg-mineral hover:bg-black text-alabaster px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition shadow-xl hover:-translate-y-0.5 flex items-center space-x-3 group"
            >
              <span>Book Private Consultation</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              href="/studio"
              className="bg-white hover:bg-stone-50 text-mineral border border-champagne-300 px-7 py-4 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition shadow-sm flex items-center space-x-2"
            >
              <Sparkles size={15} className="text-champagne-600" />
              <span>Configure 3D Cabin</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-champagne-200/70 grid grid-cols-3 gap-6 max-w-lg">
            {[
              ["0 mm", "Pit Depth Required"],
              ["48 Hrs", "Clean Installation"],
              ["EN 81-41", "CE Certified Safety"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="font-serif text-2xl md:text-3xl font-medium text-mineral">{v}</div>
                <div className="text-[11px] uppercase tracking-wider text-stone-500 font-medium">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md bg-gradient-to-b from-stone-50/90 to-white/90 p-6 md:p-8 rounded-3xl border border-champagne-300/60 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-champagne-700 font-bold block">Live Vertical Simulator</span>
                <h3 className="font-serif text-lg font-medium text-mineral">Aurelia Air™ Cylindrical</h3>
              </div>
              <div className="flex items-center space-x-1.5 bg-champagne-100 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-mono uppercase text-champagne-900 tracking-wider">Level 0{cabinFloor}</span>
              </div>
            </div>

            <div className="relative my-6 h-80 bg-stone-100/80 rounded-2xl border-2 border-dashed border-champagne-300/70 overflow-hidden flex flex-col justify-between p-3">
              <div className="absolute left-3 top-4 text-[10px] font-mono text-stone-400">FL 03 • PENTHOUSE</div>
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-stone-400">FL 02 • SALON SUITE</div>
              <div className="absolute left-3 bottom-4 text-[10px] font-mono text-stone-400">FL 01 • FOYER & GARDEN</div>

              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-40 border-x border-champagne-300/40 bg-gradient-to-r from-champagne-50/30 via-transparent to-champagne-50/30 pointer-events-none" />

              <div
                className="absolute left-1/2 -translate-x-1/2 w-32 h-20 rounded-2xl bg-white/95 shadow-xl border border-champagne-400/80 p-2 flex flex-col justify-between transition-all duration-1000 ease-out z-10"
                style={{ bottom: CABIN_BOTTOM[cabinFloor] }}
              >
                <div className="flex items-center justify-between">
                  <div className="w-2 h-2 rounded-full bg-champagne-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-stone-500 uppercase tracking-wider">Smooth Pneumatic</span>
                  <ShieldCheck size={12} className="text-emerald-600" />
                </div>
                <div className="h-7 w-full bg-gradient-to-b from-champagne-100/50 to-champagne-200/40 rounded flex items-center justify-center border border-champagne-300/40">
                  <span className="text-[10px] font-serif text-mineral font-medium">360° Vision Glass</span>
                </div>
                <div className="text-[8px] text-center font-mono text-champagne-700">0.15 m/s • 0 dB Idle</div>
              </div>
            </div>

            <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 flex items-center justify-between">
              <span className="text-xs text-stone-600 font-medium">Select Floor:</span>
              <div className="flex space-x-2">
                {[1, 2, 3].map((fl) => (
                  <button
                    key={fl}
                    onClick={() => {
                      setIsAutoGliding(false);
                      setCabinFloor(fl);
                    }}
                    className={`w-9 h-9 rounded-full text-xs font-semibold tracking-wider transition ${
                      cabinFloor === fl
                        ? "bg-mineral text-white shadow-md"
                        : "bg-white text-stone-700 border border-stone-300 hover:border-champagne-500"
                    }`}
                  >
                    0{fl}
                  </button>
                ))}
              </div>
              <button onClick={() => setIsAutoGliding(!isAutoGliding)} className="text-[11px] text-champagne-700 font-medium underline">
                {isAutoGliding ? "Pause Auto" : "Auto Loop"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
