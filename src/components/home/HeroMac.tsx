"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/data/site";
import Magnetic from "@/components/Magnetic";
import WhatsAppIcon from "@/components/WhatsAppIcon";

gsap.registerPlugin(ScrollTrigger);

const logos = [
  { name: "DotPe", src: "/logos/dotpe.jpg" },
  { name: "Lexi's", src: "/logos/lexis.jpg" },
  { name: "Zomato", src: "/logos/zomato.png" },
  { name: "MyMuse", src: "/logos/mymuse.jpg" },
];

/**
 * On load: the Mac is the centrepiece with the subline (+ CTAs) below it — no headline yet.
 * Scroll: the Mac settles small near the top, and the headline reveals BELOW it (never above/overlapping),
 * followed by the logo row. The whole thing lives in one short, tightly-timed scrub — no dead scroll space.
 */
export default function HeroMac() {
  const outer = useRef<HTMLDivElement>(null);
  const mac = useRef<HTMLDivElement>(null);
  const macInner = useRef<HTMLDivElement>(null);
  const sub = useRef<HTMLDivElement>(null);
  const head = useRef<HTMLDivElement>(null);
  const logosEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        { desktop: "(min-width: 768px)", mobile: "(max-width: 767px)", reduce: "(prefers-reduced-motion: reduce)" },
        (c) => {
          const { mobile, reduce } = c.conditions as { mobile: boolean; reduce: boolean };
          if (reduce) { gsap.set([head.current, logosEl.current], { opacity: 1 }); return; }

          gsap.fromTo(macInner.current, { y: 40, opacity: 0, scale: 0.94 }, { y: 0, opacity: 1, scale: 1, duration: 1.1, ease: "power3.out", delay: 0.15 });
          gsap.fromTo(sub.current, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.45 });

          const tl = gsap.timeline({ scrollTrigger: { trigger: outer.current, start: "top top", end: "bottom bottom", scrub: 0.7 } });
          tl.to(sub.current, { y: -16, opacity: 0, duration: 0.28, ease: "power1.in" }, 0)
            .to(mac.current, { top: mobile ? "20%" : "22%", duration: 0.5, ease: "power2.inOut" }, 0)
            .to(macInner.current, { scale: mobile ? 0.5 : 0.46, duration: 0.5, ease: "power2.inOut" }, 0)
            .fromTo(head.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }, 0.5)
            .fromTo(logosEl.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, 0.78);
        }
      );
    }, outer);
    const t = setTimeout(() => ScrollTrigger.refresh(), 800);
    return () => { clearTimeout(t); ctx.revert(); };
  }, []);

  return (
    <section ref={outer} className="relative h-[130vh] md:h-[150vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <Image src="/media/header-desktop.jpg" alt="" fill priority sizes="100vw" className="hidden object-cover object-bottom md:block" />
        <Image src="/media/header-mobile.jpg" alt="" fill priority sizes="100vw" className="object-cover object-bottom md:hidden" />
        <div aria-hidden className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(245,245,240,.85),rgba(245,245,240,0))]" />

        {/* Mac centrepiece — starts big and centred, ends small near the top */}
        <div ref={mac} className="absolute inset-x-0 top-[38%] flex -translate-y-1/2 justify-center md:top-[42%]">
          <div ref={macInner} className="w-[min(78vw,520px)] will-change-transform sm:w-[min(60vw,460px)]">
            <Image src="/media/mac.png" alt="A classic Macintosh whose screen reads: We make your enterprise AI-native"
              width={1374} height={1145} priority sizes="(max-width: 768px) 78vw, 460px"
              className="h-auto w-full drop-shadow-[0_30px_50px_rgba(31,36,22,.28)]" />
          </div>
        </div>

        {/* subline + CTAs (fold 1 only) — legible via a soft glow, not a boxed blur */}
        <div ref={sub} className="absolute inset-x-0 top-[66%] px-5 text-center md:top-[70%]">
          <div className="relative">
            <div aria-hidden className="pointer-events-none absolute inset-x-8 -inset-y-6 mx-auto max-w-lg rounded-full bg-bg/55 blur-2xl" />
            <p className="relative h-display text-[clamp(1.3rem,2.8vw,2rem)] text-moss [text-shadow:0_2px_18px_rgba(250,250,249,.95),0_1px_3px_rgba(250,250,249,1)]">
              {site.tagline}
            </p>
          </div>
          <div className="mt-4 flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:gap-3">
            <Magnetic><a href={site.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-primary h-12 w-[min(78vw,240px)] px-8 sm:w-auto">Contact us</a></Magnetic>
            <Magnetic><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost h-12 w-[min(78vw,240px)] gap-2 px-6 sm:w-auto"><WhatsAppIcon size={20} />WhatsApp</a></Magnetic>
          </div>
        </div>

        {/* headline — only exists once scroll reveals it, sitting BELOW the now-small Mac */}
        <div ref={head} className="absolute inset-x-0 top-[46%] px-5 text-center opacity-0 md:top-[50%]">
          <div className="relative">
            <div aria-hidden className="pointer-events-none absolute inset-x-0 -inset-y-8 mx-auto max-w-2xl rounded-full bg-bg/55 blur-2xl" />
            <h1 className="h-display relative mx-auto max-w-4xl text-[clamp(1.9rem,6vw,4.2rem)] text-ink [text-shadow:0_2px_18px_rgba(250,250,249,.9)]">
              We ship <span className="text-ink/45 line-through decoration-moss decoration-[0.06em]">pilots</span> <em className="text-moss">production grade.</em>
            </h1>
          </div>
        </div>

        {/* logo row — revealed last, same slot the subline vacated */}
        <div ref={logosEl} className="absolute inset-x-0 top-[68%] px-5 text-center opacity-0 md:top-[72%]">
          <div className="relative">
            <div aria-hidden className="pointer-events-none absolute inset-x-8 -inset-y-6 mx-auto max-w-lg rounded-full bg-bg/55 blur-2xl" />
            <p className="relative font-brand text-[13px] font-semibold uppercase tracking-[0.22em] text-ink [text-shadow:0_2px_14px_rgba(250,250,249,1)] sm:text-sm">Built by. Built for.</p>
            <div className="relative mt-3 flex items-center justify-center gap-4 sm:gap-8">
              {logos.map((l) => (
                <Image key={l.name} src={l.src} alt={l.name} width={160} height={80} className="h-10 w-auto rounded-xl object-contain shadow-soft sm:h-14" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
