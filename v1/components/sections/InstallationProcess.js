const STEPS = [
  {
    num: "01",
    title: "Architectural Laser Feasibility",
    desc: "Our engineers conduct a sub-millimeter 3D spatial scan of your staircase, floor slabs, or double-height foyer to confirm zero structural alteration requirements.",
  },
  {
    num: "02",
    title: "Precision European Fabrication",
    desc: "Each Aurelia capsule is tailor-manufactured with modular aerospace alloys, certified polycarbonate panoramic sections, and custom cabin finishes.",
  },
  {
    num: "03",
    title: "Pitless 48-Hour Assembly",
    desc: "Delivered in modular pre-tested assemblies. Since no pit digging or concrete shaft construction is needed, our certified team completes installation within 2 to 3 days.",
  },
  {
    num: "04",
    title: "Concierge Handover & TUV Sign-off",
    desc: "Rigorous 42-point safety commissioning, dynamic weight certification, smart home integration, and 10-year concierge maintenance onboarding.",
  },
];

export default function InstallationProcess() {
  return (
    <section className="py-24 bg-alabaster border-t border-champagne-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne-700 font-semibold block mb-2">Seamless Transformation</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-mineral tracking-tight">
            From Concept to Vertical Flight in 4 Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((st) => (
            <div key={st.num} className="bg-white p-7 rounded-2xl border border-champagne-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="font-serif text-4xl text-champagne-400 font-light mb-4">{st.num}</div>
                <h3 className="font-serif text-lg font-medium text-mineral mb-2">{st.title}</h3>
                <p className="text-stone-600 text-xs leading-relaxed">{st.desc}</p>
              </div>
              <div className="mt-6 pt-3 border-t border-stone-100 flex items-center text-[10px] font-mono text-champagne-700 uppercase tracking-widest">
                <span>Phase Guaranteed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
