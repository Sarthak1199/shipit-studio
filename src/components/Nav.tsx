"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navLinks, site } from "@/data/site";
import { getLenis, scrollToTarget } from "@/lib/lenis";
import { cn } from "@/lib/cn";
import Magnetic from "./Magnetic";

export default function Nav() {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    if (Math.abs(y - prev) < 3) return;
    setCompact(y > 120 && y > prev);
  });

  useEffect(() => {
    const l = getLenis();
    if (open) { l?.stop(); document.body.style.overflow = "hidden"; }
    else { l?.start(); document.body.style.overflow = ""; }
    return () => { l?.start(); document.body.style.overflow = ""; };
  }, [open]);
  useEffect(() => { setOpen(false); }, [pathname]);

  const onNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault(); setOpen(false);
      setTimeout(() => scrollToTarget(href.slice(1)), open ? 350 : 0);
    } else if (href === "/" && pathname === "/") {
      e.preventDefault(); setOpen(false);
      setTimeout(() => scrollToTarget(document.body, 0), open ? 350 : 0);
    } else setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between">
          <Link href="/" onClick={(e) => onNav(e, "/")} className="font-display text-[22px] font-medium tracking-tight text-ink">
            ShipIt Studio
          </Link>

          <div className={cn("hidden items-center gap-1 rounded-full border p-1.5 transition-all duration-500 lg:flex", scrolled ? "glass border-line shadow-soft" : "border-transparent bg-white/50", compact && "scale-[0.96]")}>
            <nav className="flex items-center" aria-label="Primary">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} onClick={(e) => onNav(e, l.href)}
                  className={cn("rounded-full px-4 py-2 text-[14px] text-ink/75 transition-colors hover:bg-ink/5 hover:text-ink", pathname === l.href && l.href !== "/" && "text-ink")}>
                  {l.label}
                </Link>
              ))}
            </nav>
            <Magnetic strength={0.2}><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost h-10 px-4 text-[14px]">Chat on WhatsApp</a></Magnetic>
            <Magnetic strength={0.2}><a href={site.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-primary h-10 px-4 text-[14px]">Book a demo</a></Magnetic>
          </div>

          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}
            className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full bg-white/70 lg:hidden">
            <span className="relative block h-3.5 w-5">
              <motion.span animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="absolute left-0 top-0 h-[1.5px] w-5 bg-ink" />
              <motion.span animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} className="absolute left-0 top-[6px] h-[1.5px] w-5 bg-ink" />
              <motion.span animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="absolute left-0 top-[12px] h-[1.5px] w-5 bg-ink" />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div key="menu"
            initial={{ clipPath: "circle(0% at calc(100% - 42px) 42px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 42px) 42px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 42px) 42px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-bg px-6 pb-10 pt-24 lg:hidden">
            <motion.div initial="hidden" animate="show" exit="hidden" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } } }} className="flex h-full flex-col">
              <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="flex flex-col gap-3">
                <a href={site.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-primary h-14 text-base">Book a demo</a>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost h-14 text-base">Chat on WhatsApp</a>
              </motion.div>
              <nav className="mt-8 flex flex-col" aria-label="Mobile">
                {navLinks.map((l, i) => (
                  <motion.div key={l.href} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                    <Link href={l.href} onClick={(e) => onNav(e, l.href)} className="flex items-baseline gap-4 border-b border-line py-4 font-display text-[2rem] font-medium leading-none tracking-tight">
                      <span className="font-mono text-xs text-muted">0{i + 1}</span>{l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.p variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="mt-auto pt-8 font-display text-lg italic text-muted">{site.tagline}</motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
