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

/**
 * One sticky stage for the first two folds.
 * Fold 1: headline + tagline + CTAs, Mac small and tilted.
 * Scroll: "pilots" gets struck through while the Mac straightens, scales up and glides into fold 2,
 * where "Built by. Built for." + a plain logo row sit under it.
 */
export default function HeroMac() {
  const outer = useRef<HTMLDivElement>(null);
  const mac = useRef<HTMLDivElement>(null);
  const macInner = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const strike = useRef<HTMLSpanElement>(null);
  const pilots = useRef<HTMLSpanElement>(null);
  const grade = useRef<HTMLSpanElement>(null);
  const fold2 = useRef<HTMLDivElement>(null);
  const logoEls = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        { desktop: "(min-width: 768px)", mobile: "(max-width: 767px)", reduce: "(prefers-reduced-motion: reduce)" },
        (c) => {
          const { mobile, reduce } = c.conditions as { mobile: boolean; reduce: boolean };
          gsap.set(mac.current, { xPercent: -50, yPercent: -50 });
          if (reduce) { gsap.set(strike.current, { scaleX: 1 }); gsap.set(fold2.current, { opacity: 1 }); return; }

          gsap.set(macInner.current, { scale: 0.82, rotateZ: -7, rotateX: 14, transformPerspective: 1200 });
          gsap.fromTo(macInner.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: "power3.out", delay: 0.2 });
          gsap.fromTo(copy.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.35 });

          const tl = gsap.timeline({ scrollTrigger: { trigger: outer.current, start: "top top", end: "bottom bottom", scrub: 0.6 } });
          // headline: strike "pilots", emphasise "production grade" — synced with the Mac straightening
          tl.fromTo(strike.current, { scaleX: 0 }, { scaleX: 1, duration: 0.3, ease: "none" }, 0)
            .to(pilots.current, { opacity: 0.4, duration: 0.3, ease: "none" }, 0)
            .to(grade.current, { color: "#2E3A1F", scale: 1.04, duration: 0.3, ease: "none" }, 0.08)
            .to(macInner.current, { scale: 1, rotateZ: 0, rotateX: 0, duration: 0.5, ease: "none" }, 0)
            // carry the Mac into fold 2
            .to(copy.current, { y: -40, opacity: 0, duration: 0.25, ease: "none" }, 0.35)
            .to(mac.current, { top: mobile ? "38%" : "42%", duration: 0.5, ease: "none" }, 0.3)
            .fromTo(fold2.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.25, ease: "none" }, 0.6)
            .fromTo(logoEls.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, stagger: 0.05, duration: 0.2, ease: "none" }, 0.68);
        }
      );
    }, outer);
    const t = setTimeout(() => ScrollTrigger.refresh(), 800);
    return () => { clearTimeout(t); ctx.revert(); };
  }, []);

  return (
    <section ref={outer} className="relative h-[220vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* header background (desktop + mobile crops) */}
        <Image src="/media/header-desktop.jpg" alt="" fill priority sizes="100vw" className="hidden object-cover object-bottom md:block" />
        <Image src="/media/header-mobile.jpg" alt="" fill priority sizes="100vw" className="object-cover object-bottom md:hidden" />
        <div aria-hidden className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(245,245,240,.85),rgba(245,245,240,0))]" />

        {/* fold 1 copy */}
        <div ref={copy} className="absolute inset-x-0 top-[13%] px-5 text-center md:top-[15%]">
          <h1 className="h-display mx-auto max-w-4xl text-[clamp(2.3rem,6.5vw,4.9rem)] text-ink">
            We ship{" "}
            <span ref={pilots} className="relative inline-block">
              pilots
              <span ref={strike} aria-hidden className="absolute left-0 top-[54%] h-[0.08em] w-full origin-left rounded-full bg-moss" style={{ transform: "scaleX(0)" }} />
            </span>{" "}
            <span ref={grade} className="inline-block italic">production grade.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-display text-[clamp(1.05rem,1.8vw,1.3rem)] italic text-muted">{site.tagline}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Magnetic><a href={site.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-primary h-[52px] w-[min(80vw,260px)] px-8 text-base sm:w-auto">Book a call</a></Magnetic>
            <Magnetic><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost h-[52px] w-[min(80vw,260px)] px-8 text-base sm:w-auto">WhatsApp</a></Magnetic>
          </div>
        </div>

        {/* Mac (carried between folds) */}
        <div ref={mac} className="absolute left-1/2 top-[74%] w-[min(60vw,440px)] will-change-transform md:top-[76%]">
          <div ref={macInner} className="will-change-transform">
            <Image src="/media/mac.png" alt="A classic Macintosh whose screen reads: We make your enterprise AI-native"
              width={1374} height={1145} priority sizes="(max-width: 768px) 60vw, 440px"
              className="h-auto w-full drop-shadow-[0_30px_50px_rgba(31,36,22,.28)]" />
          </div>
        </div>

        {/* fold 2: Built by. Built for. (plain row, no boxes) */}
        <div ref={fold2} className="absolute inset-x-0 bottom-[7%] px-5 text-center opacity-0 md:bottom-[9%]">
          <p className="font-display text-lg italic text-ink/80">Built by. Built for.</p>
          <div className="mx-auto mt-4 flex max-w-2xl items-center justify-center gap-6 sm:gap-10">
            {logos.map((l, i) => (
              <div key={l.name} ref={(el) => { if (el) logoEls.current[i] = el; }} className="group">
                <Image src={l.src} alt={l.name} width={160} height={80}
                  className="h-11 w-auto rounded-xl object-contain grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0 sm:h-14" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
