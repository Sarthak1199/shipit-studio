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
 * On load: the Mac is the centrepiece with the subline under it — no headline.
 * Scroll: the Mac settles lower and smaller, revealing the headline above it; the logo row fades in at the bottom.
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

          const tl = gsap.timeline({ scrollTrigger: { trigger: outer.current, start: "top top", end: "bottom bottom", scrub: 1.1 } });
          tl.to(sub.current, { y: 24, opacity: 0, duration: 0.3, ease: "power1.in" }, 0)
            .to(mac.current, { top: mobile ? "50%" : "63%", duration: 0.6, ease: "power2.inOut" }, 0)
            .to(macInner.current, { scale: mobile ? 0.78 : 0.78, rotateZ: 0, duration: 0.6, ease: "power2.inOut" }, 0)
            .fromTo(head.current, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, 0.18)
            .fromTo(logosEl.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, 0.6);
        }
      );
    }, outer);
    const t = setTimeout(() => ScrollTrigger.refresh(), 800);
    return () => { clearTimeout(t); ctx.revert(); };
  }, []);

  return (
    <section ref={outer} className="relative h-[160vh] md:h-[200vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <Image src="/media/header-desktop.jpg" alt="" fill priority sizes="100vw" className="hidden object-cover object-bottom md:block" />
        <Image src="/media/header-mobile.jpg" alt="" fill priority sizes="100vw" className="object-cover object-bottom md:hidden" />
        <div aria-hidden className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(245,245,240,.85),rgba(245,245,240,0))]" />

        {/* headline — only exists once scroll reveals it */}
        <div ref={head} className="absolute inset-x-0 top-[12%] px-5 text-center opacity-0 md:top-[14%]">
          <h1 className="h-display mx-auto max-w-4xl text-[clamp(2.3rem,6.5vw,4.9rem)] text-ink">
            We ship <span className="text-ink/45 line-through decoration-moss decoration-[0.06em]">pilots</span> <em className="text-moss">production grade.</em>
          </h1>
        </div>

        {/* Mac centrepiece */}
        <div ref={mac} className="absolute inset-x-0 top-[37%] flex -translate-y-1/2 justify-center md:top-[45%]">
          <div ref={macInner} className="w-[min(80vw,560px)] will-change-transform sm:w-[min(74vw,560px)]">
            <Image src="/media/mac.png" alt="A classic Macintosh whose screen reads: We make your enterprise AI-native"
              width={1374} height={1145} priority sizes="(max-width: 768px) 74vw, 560px"
              className="h-auto w-full drop-shadow-[0_30px_50px_rgba(31,36,22,.28)]" />
          </div>
        </div>

        {/* subline (fold 1 only) */}
        <div ref={sub} className="absolute inset-x-0 top-[60%] px-5 text-center md:top-[72%]">
          <div className="mx-auto inline-block max-w-2xl rounded-3xl bg-bg/70 px-5 py-3 shadow-soft backdrop-blur-md sm:px-7 sm:py-4">
            <p className="h-display text-[clamp(1.3rem,2.8vw,2rem)] text-moss">{site.tagline}</p>
          </div>
          <div className="mt-4 flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:gap-3">
            <Magnetic><a href={site.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-primary h-12 w-[min(78vw,240px)] px-8 sm:w-auto">Contact us</a></Magnetic>
            <Magnetic><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost h-12 w-[min(78vw,240px)] gap-2 px-6 sm:w-auto"><WhatsAppIcon size={20} className="text-[#25D366]" />WhatsApp</a></Magnetic>
          </div>
        </div>

        {/* logo row (revealed late) */}
        <div ref={logosEl} className="absolute inset-x-0 bottom-[4%] px-5 text-center opacity-0 md:bottom-[6%]">
          <div className="mx-auto inline-flex max-w-full flex-col items-center rounded-3xl bg-bg/75 px-5 py-3 shadow-soft backdrop-blur-md sm:px-8 sm:py-4">
            <p className="font-brand text-[13px] font-semibold uppercase tracking-[0.22em] text-ink sm:text-sm">Built by. Built for.</p>
            <div className="mt-3 flex items-center justify-center gap-4 sm:gap-8">
              {logos.map((l) => (
                <Image key={l.name} src={l.src} alt={l.name} width={160} height={80} className="h-10 w-auto rounded-xl object-contain sm:h-14" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
