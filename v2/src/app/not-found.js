import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="bg-[radial-gradient(100%_80%_at_50%_0%,#F3EBDD_0%,#FAF8F4_60%)] py-32 text-center lg:py-44">
      <div className="mx-auto max-w-xl px-5">
        <Eyebrow className="justify-center">Error 404</Eyebrow>
        <h1 className="mt-6 font-serif text-6xl text-ink sm:text-7xl">This floor doesn’t exist.</h1>
        <p className="mt-5 text-ink-500">The page you were looking for has moved or never existed. Let’s take you somewhere better.</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/">Return home</Button>
          <Button href="/models" variant="outline" arrow={false}>Explore models</Button>
        </div>
      </div>
    </section>
  );
}
