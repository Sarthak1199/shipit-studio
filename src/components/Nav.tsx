"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navLinks, site } from "@/data/site";
import { getLenis, scrollToTarget } from "@/lib/lenis";
import { cn } from "@/lib/cn";
import Magnetic from "./Magnetic";

export default function Nav() {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setCompact(y > 80));

  useEffect(() => {
    const l = getLenis();
    if (open) { l?.stop(); document.body.style.overflow = "hidden"; }
    else { l?.start(); document.body.style.overflow = ""; }
    return () => { l?.start(); document.body.style.overflow = ""; };
  }, [open]);
  useEffect(() => { setOpen(false); }, [pathname]);

  const clicks = useRef<number[]>([]);
  const onLogo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const now = Date.now();
    clicks.current = [...clicks.current.filter((t) => now - t < 3000), now];
    if (clicks.current.length >= 5) { clicks.current = []; window.dispatchEvent(new Event("shipit:egg")); }
    onNav(e, "/");
  };
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
      <motion.header initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={cn("fixed inset-x-0 top-0 z-50 px-3 transition-[padding] duration-300 sm:px-5", compact ? "pt-2" : "pt-3 sm:pt-4")}>
        <div className={cn("glass mx-auto flex max-w-[1240px] items-center justify-between rounded-full border border-line pl-4 pr-1.5 shadow-soft transition-[height,box-shadow] duration-300 sm:pl-5", compact ? "h-11 sm:h-12" : "h-[52px] sm:h-14")}>
          <Link href="/" onClick={onLogo} aria-label="ShipIt Studio home" className={cn("flex items-center font-display font-medium tracking-tight text-ink transition-[font-size] duration-300", compact ? "text-[18px]" : "text-[20px]")}>
            ShipIt Studio
          </Link>

          <nav className="hidden items-center lg:flex" aria-label="Primary">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={(e) => onNav(e, l.href)}
                className={cn("rounded-full px-3.5 py-2 text-[14px] text-ink/75 transition-colors hover:bg-ink/5 hover:text-ink", pathname === l.href && l.href !== "/" && "text-ink")}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-1.5 lg:flex">
            <Magnetic strength={0.2}><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={cn("btn btn-ghost px-4 text-[14px] transition-[height]", compact ? "h-8" : "h-10")}>WhatsApp</a></Magnetic>
            <Magnetic strength={0.2}><a href={site.calendly} target="_blank" rel="noopener noreferrer" className={cn("btn btn-primary px-4 text-[14px] transition-[height]", compact ? "h-8" : "h-10")}>Contact us</a></Magnetic>
          </div>

          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}
            className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-full lg:hidden">
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
            initial={{ clipPath: "circle(0% at calc(100% - 42px) 42px)" }} animate={{ clipPath: "circle(150% at calc(100% - 42px) 42px)" }} exit={{ clipPath: "circle(0% at calc(100% - 42px) 42px)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-bg px-6 pb-8 pt-20 lg:hidden">
            <motion.div initial="hidden" animate="show" exit="hidden" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } }} className="flex h-full flex-col">
              <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="flex gap-2">
                <a href={site.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-primary h-12 flex-1 text-[15px]">Contact us</a>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost h-12 flex-1 text-[15px]">WhatsApp</a>
              </motion.div>
              <nav className="mt-6 flex flex-col" aria-label="Mobile">
                {navLinks.map((l, i) => (
                  <motion.div key={l.href} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
                    <Link href={l.href} onClick={(e) => onNav(e, l.href)} className="flex items-baseline gap-4 border-b border-line py-3.5 font-display text-[1.7rem] font-medium leading-none tracking-tight">
                      <span className="font-mono text-xs text-muted">0{i + 1}</span>{l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.p variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="mt-auto pt-6 font-display text-base italic text-muted">{site.tagline}</motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
