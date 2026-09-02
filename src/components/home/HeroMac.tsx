"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/data/site";
import Magnetic from "@/components/Magnetic";

gsap.registerPlugin(ScrollTrigger);

const logos = [
  { name: "DotPe", src: "/logos/dotpe.jpg" },
  { name: "Lexi's", src: "/logos/lexis.jpg" },
  { name: "Zomato", src: "/logos/zomato.png" },
  { name: "MyMuse", src: "/logos/mymuse.jpg" },
];

/** Fold 1 (hero) + fold 2 (Built by. Built for.) share one sticky stage; the Mac is carried between them on scroll. */
export default function HeroMac() {
  const outer = useRef<HTMLDivElement>(null);
  const mac = useRef<HTMLDivElement>(null);
  const hills = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const fold2 = useRef<HTMLDivElement>(null);
  const tiles = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        { desktop: "(min-width: 768px)", mobile: "(max-width: 767px)", reduce: "(prefers-reduced-motion: reduce)" },
        (c) => {
          const { mobile, reduce } = c.conditions as { mobile: boolean; reduce: boolean };
          gsap.set(mac.current, { xPercent: -50, yPercent: -50 });
          if (reduce) return;
          // intro
          gsap.fromTo(mac.current, { y: 40, opacity: 0, scale: 0.92 }, { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.15 });
          gsap.fromTo(copy.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.5 });

          const tl = gsap.timeline({ scrollTrigger: { trigger: outer.current, start: "top top", end: "bottom bottom", scrub: 0.7 } });
          tl.to(copy.current, { y: 60, opacity: 0, duration: 0.3, ease: "none" }, 0)
            .to(hills.current, { yPercent: 18, opacity: 0.22, duration: 0.7, ease: "none" }, 0)
            .to(mac.current, mobile
              ? { top: "24%", scale: 0.58, duration: 0.7, ease: "none" }
              : { left: "27%", top: "50%", scale: 0.82, duration: 0.7, ease: "none" }, 0.1)
            .fromTo(fold2.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.35, ease: "none" }, 0.5)
            .fromTo(tiles.current, { opacity: 0, y: 24, scale: 0.94 }, { opacity: 1, y: 0, scale: 1, stagger: 0.06, duration: 0.3, ease: "none" }, 0.62);
        }
      );
    }, outer);
    const t = setTimeout(() => ScrollTrigger.refresh(), 800);
    return () => { clearTimeout(t); ctx.revert(); };
  }, []);

  return (
    <section ref={outer} className="relative h-[210vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* sky */}
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,#D9E2E8_0%,#E9EDEA_45%,#F5F5F0_100%)]" />
        {/* hills */}
        <div ref={hills} aria-hidden className="absolute inset-x-0 bottom-0 h-[58%] will-change-transform">
          <Image src="/media/hills-soft.jpg" alt="" fill priority sizes="100vw" className="object-cover object-top" />
          <div className="absolute inset-x-0 top-0 h-1/2 bg-[linear-gradient(180deg,#E9EDEA_0%,rgba(233,237,234,0)_100%)]" />
        </div>

        {/* Mac (carried between folds) */}
        <div ref={mac} className="absolute left-1/2 top-[42%] w-[min(66vw,460px)] will-change-transform md:top-[41%]">
          <Image src="/media/mac.png" alt="A classic Macintosh whose screen reads: We make your enterprise AI-native"
            width={1374} height={1145} priority sizes="(max-width: 768px) 66vw, 500px"
            className="h-auto w-full drop-shadow-[0_30px_50px_rgba(31,36,22,.28)]" />
        </div>

        {/* fold 1 copy */}
        <div ref={copy} className="absolute inset-x-0 top-[68%] px-5 text-center md:top-[71%]">
          <h1 className="h-display mx-auto max-w-2xl text-[clamp(1.5rem,3.2vw,2.3rem)] text-moss">{site.tagline}</h1>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Magnetic><a href={site.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-primary h-[52px] w-[min(80vw,280px)] px-8 text-base sm:w-auto">Book a call</a></Magnetic>
            <Magnetic><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary h-[52px] w-[min(80vw,280px)] px-8 text-base sm:w-auto">Chat on WhatsApp</a></Magnetic>
          </div>
        </div>

        {/* fold 2: Built by. Built for. */}
        <div ref={fold2} className="absolute inset-0 flex items-end pb-10 opacity-0 md:items-center md:pb-0">
          <div className="container-x grid gap-8 md:grid-cols-2 md:items-center">
            <div aria-hidden className="hidden md:block" />
            <div>
              <p className="eyebrow">Built by. Built for.</p>
              <h2 className="h-display mt-3 text-[clamp(1.9rem,4vw,3.2rem)]">Teams we&apos;ve <em>shipped</em> with.</h2>
              <div className="mt-6 grid grid-cols-4 gap-3 md:grid-cols-2 md:gap-4">
                {logos.map((l, i) => (
                  <div key={l.name} ref={(el) => { if (el) tiles.current[i] = el; }}
                    className="group flex aspect-square items-center justify-center rounded-2xl border border-line bg-white/80 p-3 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift md:aspect-[5/3] md:p-6">
                    <Image src={l.src} alt={l.name} width={160} height={80} className="h-12 w-auto max-w-full rounded-xl object-contain transition duration-500 group-hover:scale-105 md:h-[72px]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
