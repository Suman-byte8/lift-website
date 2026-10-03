"use client";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { mainNav } from "@/data/site";
import { cn } from "@/lib/cn";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-[60] transition-[background-color,box-shadow,border-color] duration-700 ease-luxe",
          scrolled ? "border-b border-white/60 bg-ivory/70 shadow-[0_10px_40px_-24px_rgba(32,33,31,0.35)] backdrop-blur-xl" : "border-b border-transparent bg-transparent"
        )}
      >
        <div className={cn("mx-auto flex max-w-[1320px] items-center justify-between px-5 transition-[height] duration-700 ease-luxe sm:px-8 lg:px-12", scrolled ? "h-[70px]" : "h-20 lg:h-24")}>
          <Logo />
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1 xl:gap-2">
              {mainNav.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <li key={item.href} className="relative">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative block rounded-full px-3 py-2 text-[13px] tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 xl:px-3.5",
                        active ? "text-ink" : "text-ink-500 hover:text-ink"
                      )}
                    >
                      {item.label}
                      {active && (
                        <motion.span layoutId="nav-dot" className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-champagne-500" transition={{ type: "spring", stiffness: 260, damping: 30 }} />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <Button href="/contact" variant="primary" arrow={false} className="hidden px-6 py-3 sm:inline-flex">
              Book a Consultation
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white/60 text-ink backdrop-blur transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={close} pathname={pathname} />
    </>
  );
}
