import './globals.css';
import { images } from '@/data/images';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import StructuredData from '@/components/StructuredData';
import { siteConfig } from '@/data/site';

const editorialFont = localFont({
  src: './fonts/CORMORANT-GARAMOND.woff2',
  variable: '--font-cormorant',
  weight: '400',
  display: 'swap'
});
const bodyFont = localFont({
  src: './fonts/DM-SANS.woff2',
  variable: '--font-dm-sans',
  weight: '400 600',
  display: 'swap'
});

const siteUrl = siteConfig.origin;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AUREL — Home lifts, considered differently',
    template: '%s | AUREL Home Lifts'
  },
  description: 'A considered approach to home mobility. Discover residential lifts designed to feel at home in the architecture around them.',
  applicationName: 'AUREL Home Lifts',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'AUREL Home Lifts',
    title: 'AUREL — Home lifts, considered differently',
    description: 'Residential mobility, thoughtfully integrated into the architecture of home.',
    images: [{ url: images.hero.src, width: 1376, height: 768, alt: 'A glass home lift integrated into a warm contemporary residence' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AUREL — Home lifts, considered differently',
    description: 'Residential mobility, thoughtfully integrated into the architecture of home.',
    images: [images.hero.src]
  },
  robots: { index: true, follow: true }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF8F4'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth motion-reduce:scroll-auto">
      <body className={`${editorialFont.variable} ${bodyFont.variable} min-h-screen bg-ivory font-sans text-ink antialiased selection:bg-[#d9c7a8] selection:text-ink`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:shadow-soft">
          Skip to content
        </a>
        <StructuredData type="organization" />
        <ScrollProgress />
        <div className="border-b border-[#e5e1d7] bg-[#efede6] text-[#66675f]">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-2 text-[9px] uppercase tracking-[0.18em] sm:px-8 md:px-12 lg:px-16">
            <span className="hidden sm:inline">Quietly considered home mobility</span>
            <span className="sm:hidden">AUREL · Home mobility</span>
            <a href={`tel:${siteConfig.phoneLink}`} className="transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne">Speak with a home specialist <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
