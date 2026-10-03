import Link from "next/link";
import ConsultButton from "@/components/ConsultButton";

const linkCls = "hover:text-white transition";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full border border-champagne-500/40 flex items-center justify-center bg-stone-900">
              <span className="font-serif text-lg font-bold text-champagne-400">A</span>
            </div>
            <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-white uppercase">AURELIA</span>
          </div>
          <p className="text-stone-400 leading-relaxed max-w-sm">
            Architectural vacuum & precision residential elevators. Built for zero-footprint disruption, panoramic clarity,
            and lifetime peace of mind.
          </p>
          <div className="text-[11px] font-mono text-champagne-500">
            Member of ASME (American Society of Mechanical Engineers) & CE Certified.
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-white font-mono uppercase tracking-widest text-xs font-semibold">Elevator Models</h4>
          <ul className="space-y-2">
            <li><Link href="/collection" className={linkCls}>Aurelia Air™ (Pneumatic)</Link></li>
            <li><Link href="/collection" className={linkCls}>Aurelia Strata™ (Traction)</Link></li>
            <li><Link href="/collection" className={linkCls}>Aurelia Grandeur™ Bespoke</Link></li>
            <li><Link href="/studio" className={linkCls}>3D Interactive Studio</Link></li>
            <li><Link href="/estimator" className={linkCls}>Budget Calculator</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-white font-mono uppercase tracking-widest text-xs font-semibold">The Maison</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className={linkCls}>Philosophy & Atelier</Link></li>
            <li><Link href="/technology" className={linkCls}>Safety Certifications</Link></li>
            <li><Link href="/projects" className={linkCls}>Project Gallery</Link></li>
            <li><ConsultButton className={linkCls}>Architectural CAD Portal</ConsultButton></li>
            <li><Link href="/estimator#faq" className={linkCls}>FAQ & Support</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-white font-mono uppercase tracking-widest text-xs font-semibold">Showrooms</h4>
          <p className="text-stone-300">
            <strong>New York:</strong> 432 Park Ave, Fl 18<br />
            <strong>Milan:</strong> Via Montenapoleone 12<br />
            <strong>Dubai:</strong> DIFC Gate District 04<br />
            <strong>London:</strong> Mayfair, Berkeley Square
          </p>
          <div className="pt-2">
            <span className="text-[11px] text-stone-500 block">Direct Concierge:</span>
            <span className="text-white font-mono font-medium">concierge@aureliaelevators.com</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8 flex flex-col sm:flex-row items-center justify-between text-stone-500 text-[11px]">
        <div>© {new Date().getFullYear()} AURELIA RESIDENTIAL ELEVATORS INC. All Rights Reserved.</div>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Commission</span>
          <span>Architect Specs (DWG/BIM)</span>
        </div>
      </div>
    </footer>
  );
}
