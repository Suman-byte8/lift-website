import AboutSection from "@/components/sections/AboutSection";
import InstallationProcess from "@/components/sections/InstallationProcess";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "The Maison",
  description: "The story, philosophy and atelier behind Aurelia residential elevators.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-12">
      <AboutSection />
      <InstallationProcess />
      <FinalCTA />
    </div>
  );
}
