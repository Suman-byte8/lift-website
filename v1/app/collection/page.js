import ProductShowcase from "@/components/sections/ProductShowcase";
import TechnologySection from "@/components/sections/TechnologySection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "The Collection",
  description: "Explore the Aurelia Air, Strata and Grandeur residential elevator models.",
};

export default function CollectionPage() {
  return (
    <div className="pt-24 pb-12">
      <ProductShowcase />
      <TechnologySection />
      <FinalCTA />
    </div>
  );
}
