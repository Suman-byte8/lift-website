import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import HeroSection from "@/components/sections/HeroSection";
import StatsBand from "@/components/sections/StatsBand";
import IntroSection from "@/components/sections/IntroSection";
import ProductGrid from "@/components/sections/ProductGrid";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TechnologySection from "@/components/sections/TechnologySection";
import SafetySection from "@/components/sections/SafetySection";
import CustomizationSection from "@/components/sections/CustomizationSection";
import InspirationSection from "@/components/sections/InspirationSection";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import ComparisonSection from "@/components/sections/ComparisonSection";
import ApplicationsSection from "@/components/sections/ApplicationsSection";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  ...buildMetadata({
    title: "Premium Residential Home Lifts",
    description: site.description,
    path: "/",
  }),
  title: { absolute: `${site.name} — Premium Residential Home Lifts` },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBand />
      <IntroSection />
      <ProductGrid />
      <BenefitsSection />
      <TechnologySection />
      <SafetySection />
      <CustomizationSection />
      <InspirationSection />
      <ProcessTimeline />
      <ComparisonSection />
      <ApplicationsSection />
      <TestimonialCarousel />
      <FAQSection />
      <CTASection />
    </>
  );
}
