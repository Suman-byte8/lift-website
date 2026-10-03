import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-24 bg-alabaster">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-champagne-300">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Aurelia Craftsmanship Atelier"
                fill
                sizes="(min-width:1024px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-stone-900/30" />
            </div>
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-white p-6 rounded-2xl shadow-xl border border-champagne-300 max-w-xs">
              <p className="font-serif italic text-sm text-mineral">
                &ldquo;Vertical movement inside a private residence should be an inspiring visual transition, not an enclosed metallic box.&rdquo;
              </p>
              <span className="text-[10px] font-mono uppercase text-champagne-700 font-semibold block mt-2">— Aurelia Design Direction</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-champagne-700 font-semibold block">The Maison Aurelia</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-mineral tracking-tight">
              Where Precision Physics Meets Pure Architectural Artistry
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Founded by a cohort of aerospace aerodynamicists and luxury architectural preservationists, Aurelia was born out of a single dissatisfaction: traditional elevators destroy residential character with ugly shafts, loud hydraulic pumps, and deep concrete excavations.
            </p>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Today, we manufacture panoramic pneumatic and whisper-silent gearless residential lifts across three private ateliers in Europe and North America, offering clients complete architectural freedom.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-champagne-200">
              <div>
                <span className="font-serif text-3xl font-medium text-mineral">1,850+</span>
                <span className="text-xs text-stone-500 block uppercase tracking-wider mt-1">Estates Elevated Worldwide</span>
              </div>
              <div>
                <span className="font-serif text-3xl font-medium text-mineral">28</span>
                <span className="text-xs text-stone-500 block uppercase tracking-wider mt-1">Countries with Concierge Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
