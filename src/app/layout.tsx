import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import EasterEgg from "@/components/EasterEgg";
import MobileCTABar from "@/components/MobileCTABar";
import { site } from "@/data/site";

const fraunces = Fraunces({ subsets: ["latin"], weight: "variable", style: ["normal", "italic"], axes: ["opsz", "SOFT"], variable: "--font-fraunces", display: "swap" });
const dm = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-dm", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-manrope", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: { default: `${site.name} — Pick your headache. We'll automate it.`, template: `%s — ${site.name}` },
  description: site.tagline,
  openGraph: { title: site.name, description: site.tagline, type: "website" },
};
export const viewport: Viewport = { themeColor: "#F5F5F0", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dm.variable} ${mono.variable} ${manrope.variable}`}>
      <body>
        <Providers>
          <SmoothScroll />
          <Cursor />
          <ScrollProgress />
          <Nav />
          <main className="relative">{children}</main>
          <Footer />
          <EasterEgg />
          <MobileCTABar />
        </Providers>
      </body>
    </html>
  );
}
