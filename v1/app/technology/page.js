import TechnologySection from "@/components/sections/TechnologySection";
import InstallationProcess from "@/components/sections/InstallationProcess";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Engineering & Safety",
  description: "Pneumatic vacuum and gearless traction technology, safety systems and installation process.",
};

export default function TechnologyPage() {
  return (
    <div className="pt-24">
      <TechnologySection />
      <InstallationProcess />
      <FinalCTA />
    </div>
  );
}
