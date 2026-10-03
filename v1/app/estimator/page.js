import CalculatorSection from "@/components/sections/CalculatorSection";
import FAQSection from "@/components/sections/FAQSection";

export const metadata = {
  title: "Cost Estimator",
  description: "Get an indicative turnkey budget for your residential elevator.",
};

export default function EstimatorPage() {
  return (
    <div className="pt-24 pb-12">
      <CalculatorSection />
      <FAQSection />
    </div>
  );
}
