import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ConsultationProvider from "@/components/ConsultationProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: {
    default: "AURELIA | Luxury Residential Elevators & Architectural Home Lifts",
    template: "%s | AURELIA",
  },
  description:
    "Aurelia crafts zero-pit, panoramic pneumatic and precision gearless architectural elevators designed for private villas, modern penthouses, and heritage residences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-alabaster text-mineral font-sans antialiased selection:bg-champagne-400 selection:text-white">
        <ConsultationProvider>
          <div className="min-h-screen flex flex-col bg-alabaster">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ConsultationProvider>
      </body>
    </html>
  );
}
