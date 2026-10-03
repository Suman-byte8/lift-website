"use client";
import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import { useConsultation } from "@/components/ConsultationProvider";

const BASE = { air: 32000, strata: 39000 };
const PER_EXTRA_FLOOR = 5500;
const CURVED_GLASS = 3500;
const UPGRADES = [
  { key: "smartPass", label: "Smart Biometric & RFID Touchless Dispatch", price: 1200 },
  { key: "leatherPanels", label: "Hand-Stitched Italian Leather Rear Alcove", price: 2800 },
  { key: "solarInverter", label: "Integrated Solar UPS & Clean Energy Sync", price: 1800 },
];

const money = (n) => `$${n.toLocaleString("en-US")}`;
const labelCls = "text-xs uppercase tracking-widest font-semibold text-stone-700";
const choiceCls = (on) => `p-3 rounded-xl border text-left transition ${on ? "border-mineral bg-champagne-50 ring-1 ring-mineral" : "border-stone-200"}`;

export default function CalculatorSection() {
  const { open } = useConsultation();
  const [floors, setFloors] = useState(2);
  const [techType, setTechType] = useState("air");
  const [glassStyle, setGlassStyle] = useState("curved");
  const [options, setOptions] = useState({ smartPass: true, leatherPanels: false, solarInverter: true });

  const { extraFloors, extras, total } = useMemo(() => {
    const extraFloors = (floors - 2) * PER_EXTRA_FLOOR;
    const extras =
      (glassStyle === "curved" ? CURVED_GLASS : 0) +
      UPGRADES.reduce((sum, u) => sum + (options[u.key] ? u.price : 0), 0);
    return { extraFloors, extras, total: BASE[techType] + extraFloors + extras };
  }, [floors, techType, glassStyle, options]);

  return (
    <section className="py-24 bg-champagne-50/70 border-t border-champagne-200">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne-700 font-semibold block mb-2">Transparent Planning</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-mineral">Instant Residential Budget Estimator</h2>
          <p className="mt-3 text-stone-600 text-sm">
            Get an indicative turnkey manufacturing & installation estimate tailored to your estate&apos;s floor levels and aesthetic choices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white rounded-3xl p-8 md:p-12 border border-champagne-200 shadow-xl">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="floors" className={labelCls}>Total Travel Landings / Floors:</label>
                <span className="text-sm font-bold font-mono text-champagne-800">{floors} Stops (G + {floors - 1})</span>
              </div>
              <input
                id="floors"
                type="range"
                min="2"
                max="6"
                value={floors}
                onChange={(e) => setFloors(parseInt(e.target.value, 10))}
                className="w-full accent-champagne-600 cursor-pointer h-2 bg-stone-200 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-1">
                <span>2 Floors (Duplex)</span>
                <span className="hidden sm:inline">3 Floors</span>
                <span className="hidden sm:inline">4 Floors</span>
                <span className="hidden sm:inline">5 Floors</span>
                <span>6 Floors (Max)</span>
              </div>
            </div>

            <div>
              <span className={`${labelCls} block mb-2`}>Drive Architecture:</span>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => setTechType("air")} className={choiceCls(techType === "air")}>
                  <div className="text-xs font-semibold text-mineral">Aurelia Air™ (Pneumatic)</div>
                  <div className="text-[11px] text-stone-500">Zero pit, 360° circular view</div>
                </button>
                <button onClick={() => setTechType("strata")} className={choiceCls(techType === "strata")}>
                  <div className="text-xs font-semibold text-mineral">Aurelia Strata™ (Traction)</div>
                  <div className="text-[11px] text-stone-500">Rectangular, up to 6 passengers</div>
                </button>
              </div>
            </div>

            <div>
              <span className={`${labelCls} block mb-2`}>Glass Column Enclosure:</span>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["curved", "Curved Panoramic Polycarbonate / Glass"],
                  ["flat", "Flat Low-Iron Triple Laminated Glass"],
                ].map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => setGlassStyle(id)}
                    className={`p-3 rounded-xl border text-left text-xs font-medium transition ${glassStyle === id ? "border-mineral bg-stone-50 font-bold" : "border-stone-200"}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className={`${labelCls} block mb-2`}>Architectural Upgrades:</span>
              <div className="space-y-2">
                {UPGRADES.map((u) => (
                  <label key={u.key} className="flex items-center space-x-3 p-2.5 rounded-lg border border-stone-200 cursor-pointer hover:bg-stone-50">
                    <input
                      type="checkbox"
                      checked={options[u.key]}
                      onChange={(e) => setOptions({ ...options, [u.key]: e.target.checked })}
                      className="rounded accent-champagne-600"
                    />
                    <span className="text-xs text-stone-700 font-medium">{u.label} (+{money(u.price)})</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-stone-900 text-white p-8 rounded-2xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-champagne-400 text-xs uppercase tracking-widest font-mono">
                <Calculator size={14} />
                <span>Estimated Turnkey Cost</span>
              </div>
              <div className="mt-3">
                <span className="text-stone-400 text-xs">Estimated Range (USD / Fully Installed):</span>
                <div className="font-serif text-4xl sm:text-5xl font-light text-white mt-1">
                  {money(total)}
                  <span className="text-xs text-stone-400 font-sans tracking-normal block mt-1">*Turnkey estimate includes shipping & certified installation</span>
                </div>
              </div>
            </div>

            <div className="border-t border-stone-800 pt-4 space-y-2 text-xs text-stone-300">
              <div className="flex justify-between"><span>Base Elevator Unit:</span><span>{money(BASE[techType])}</span></div>
              <div className="flex justify-between"><span>Additional Floors ({floors - 2}):</span><span>{money(extraFloors)}</span></div>
              <div className="flex justify-between"><span>Enclosure & Accessories:</span><span>{money(extras)}</span></div>
              <div className="flex justify-between text-emerald-400 font-semibold pt-1 border-t border-stone-800">
                <span>Civil Pit Preparation Required:</span>
                <span>$0 (Zero Pit)</span>
              </div>
            </div>

            <button
              onClick={open}
              className="w-full bg-champagne-500 hover:bg-champagne-600 text-mineral font-semibold py-3.5 rounded-full text-xs uppercase tracking-[0.18em] transition shadow-lg text-center"
            >
              Request Official Written Quotation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
