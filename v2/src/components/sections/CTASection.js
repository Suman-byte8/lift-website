import SmartImage from "@/components/ui/SmartImage";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export default function CTASection({
  title = <>Your Home Has More <em className="italic text-champagne-200">Levels</em> to Discover.</>,
  text = "Talk to our specialists about the right home lift for your space.",
  image = "villaDusk",
}) {
  return (
    <section className="bg-ivory px-3 py-3 sm:px-5 sm:py-5" aria-labelledby="cta-title">
      <div className="relative isolate overflow-hidden rounded-[32px] sm:rounded-[40px]">
        <SmartImage image={image} sizes="100vw" className="-z-10" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(32,33,31,0.72)_0%,rgba(52,53,50,0.45)_45%,rgba(184,155,106,0.25)_100%)]" />
        <div className="mx-auto max-w-[1320px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-44">
          <Reveal className="max-w-3xl">
            <Eyebrow light>Begin your project</Eyebrow>
            <h2 id="cta-title" className="mt-6 font-serif text-[2.8rem] font-medium leading-[1.02] text-ivory sm:text-6xl lg:text-[5rem]">{title}</h2>
            <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-ivory/80">{text}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="gold">Book a Consultation</Button>
              <Button href="/brochure" variant="light" arrow={false}>Request a Brochure</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
