import GallerySection from "@/components/sections/GallerySection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Projects",
  description: "Featured Aurelia installations in villas, penthouses and heritage residences worldwide.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-12">
      <GallerySection />
      <FinalCTA />
    </div>
  );
}
