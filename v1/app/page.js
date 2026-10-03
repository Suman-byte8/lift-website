import HeroSection from "@/components/sections/HeroSection";
import ProductShowcase from "@/components/sections/ProductShowcase";
import CustomizerStudio from "@/components/sections/CustomizerStudio";
import TechnologySection from "@/components/sections/TechnologySection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import InstallationProcess from "@/components/sections/InstallationProcess";
import GallerySection from "@/components/sections/GallerySection";
import AboutSection from "@/components/sections/AboutSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <CustomizerStudio />
      <TechnologySection />
      <CalculatorSection />
      <InstallationProcess />
      <GallerySection />
      <AboutSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
