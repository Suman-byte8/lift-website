import { Cpu, Hammer, ShieldAlert, Sparkles, VolumeX, Wind } from "lucide-react";

const FEATURES = [
  {
    icon: Wind,
    title: "Atmospheric Air Physics",
    desc: "Our pneumatic vacuum system creates higher and lower pressure differentials, gliding the cab smoothly upwards using atmospheric mechanics. It consumes virtually zero energy on descent.",
  },
  {
    icon: ShieldAlert,
    title: "Multi-Tier Fail-Safe Locks",
    desc: "Equipped with mechanical pneumatic locking pins that engage instantly upon arriving at floor levels. Even in total building power loss, the capsule slowly lands at the bottom landing automatically.",
  },
  {
    icon: Hammer,
    title: "Self-Supporting Architecture",
    desc: "No civil load-bearing walls or deep ground excavation pits needed. Aurelia lifts stand independently on their own reinforced base plate, protecting underfloor heating and foundations.",
  },
  {
    icon: VolumeX,
    title: "Acoustically Dampened Under 42 dB",
    desc: "Engineered with vibration-isolated turbine enclosures and silent brushless PMSM synchronous motors for seamless integration into master bedroom corridors.",
  },
  {
    icon: Sparkles,
    title: "Medical-Grade HEPA & Air Cleanse",
    desc: "Active continuous cabin air circulation refreshing interior oxygen every 14 seconds with medical-grade filtration and optional UV-C sterilization cycles.",
  },
  {
    icon: Cpu,
    title: "Smart Home & IoT Telemetry",
    desc: "Native integration with Savant, Crestron, Lutron, and Control4. 24/7 autonomous remote factory diagnostics alert maintenance teams prior to any wear.",
  },
];

const ROWS = [
  ["Excavation Pit", "0 mm (Zero Pit Required)", "300 mm to 1,200 mm pit", "200 mm to 500 mm pit"],
  ["Machine Room (MR)", "None (Completely Integrated)", "Dedicated Pump Room Needed", "Required Overhead or Closet"],
  ["Installation Timeline", "2 - 3 Days Total", "3 - 5 Weeks Masonry", "2 - 4 Weeks Complex Shaft"],
  ["Hydraulic Oil / Grease", "100% Zero Oils or Chemicals", "50 - 150 Liters Toxic Oil", "Periodic Lubrication Cables"],
  ["Power Consumption", "Zero draw on descent (Eco-Air)", "High Inrush Current Peak", "Moderate Constant Load"],
];

export default function TechnologySection() {
  return (
    <section className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne-400 font-semibold block mb-2">Uncompromising Engineering</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
            Designed for Safety, Silent Grace & Sustainability
          </h2>
          <p className="mt-4 text-stone-400 text-sm md:text-base">
            Meeting and surpassing stringent European Machinery Directive 2006/42/EC and American ASME A17.7 standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map(({ icon: I, title, desc }) => (
            <div key={title} className="bg-stone-800/60 p-8 rounded-2xl border border-stone-700/60 hover:border-champagne-500/60 transition duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-champagne-500/10 border border-champagne-500/30 flex items-center justify-center text-champagne-400 mb-6 group-hover:scale-110 transition-transform">
                <I size={22} />
              </div>
              <h3 className="font-serif text-xl font-normal text-white mb-3">{title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-stone-800/40 rounded-3xl p-6 sm:p-10 border border-stone-700">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-light text-white">Drive Technology Paradigm Comparison</h3>
            <p className="text-xs text-stone-400 uppercase tracking-widest mt-1">Why Modern Estates Choose Aurelia Systems</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm min-w-[640px]">
              <thead>
                <tr className="border-b border-stone-700 text-champagne-300 font-mono tracking-wider uppercase">
                  <th className="py-4 px-4">Metric</th>
                  <th className="py-4 px-4 bg-stone-700/50 rounded-t-lg text-white">Aurelia Panoramic Vacuum</th>
                  <th className="py-4 px-4">Conventional Hydraulic</th>
                  <th className="py-4 px-4">Standard Heavy Traction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800 text-stone-300">
                {ROWS.map(([metric, aurelia, hydraulic, traction]) => (
                  <tr key={metric}>
                    <td className="py-4 px-4 font-medium text-white">{metric}</td>
                    <td className="py-4 px-4 bg-stone-700/20 font-semibold text-emerald-400">{aurelia}</td>
                    <td className={`py-4 px-4 ${metric === "Hydraulic Oil / Grease" ? "text-amber-400" : ""}`}>{hydraulic}</td>
                    <td className="py-4 px-4">{traction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
