import { Phone } from "lucide-react";
import ConsultButton from "@/components/ConsultButton";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-stone-900 via-mineral to-stone-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#CDB692_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-6">
        <span className="text-xs uppercase tracking-[0.3em] text-champagne-400 font-semibold">Reserve Your Private Consultation</span>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight">Begin Your Home Elevation Journey Today</h2>
        <p className="text-stone-300 max-w-xl mx-auto text-sm sm:text-base font-light">
          Receive complimentary CAD planning files, structural feasibility reviews, and a bespoke sample finish box directly to your estate.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <ConsultButton className="bg-champagne-500 hover:bg-champagne-400 text-stone-950 font-semibold px-9 py-4 rounded-full text-xs uppercase tracking-[0.2em] transition shadow-xl hover:scale-105 duration-200">
            Schedule Site Feasibility Study
          </ConsultButton>
          <a
            href="tel:+18005550199"
            className="border border-stone-600 hover:border-champagne-400 text-stone-200 px-8 py-4 rounded-full text-xs uppercase tracking-[0.18em] transition flex items-center space-x-2"
          >
            <Phone size={14} />
            <span>Concierge Desk: +1 (800) 555-0199</span>
          </a>
        </div>
      </div>
    </section>
  );
}
