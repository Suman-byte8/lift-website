import CustomizerStudio from "@/components/sections/CustomizerStudio";
import CalculatorSection from "@/components/sections/CalculatorSection";

export const metadata = {
  title: "Interactive 3D Studio",
  description: "Configure frame finish, glass tint, flooring and lighting for your Aurelia elevator.",
};

export default function StudioPage() {
  return (
    <div className="pt-24 pb-12">
      <CustomizerStudio />
      <CalculatorSection />
    </div>
  );
}
