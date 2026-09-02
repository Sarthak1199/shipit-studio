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
      e.preventDefault();
      setOpen(false);
      setTimeout(() => scrollToTarget(href.slice(1)), open ? 350 : 0);
    } else if (href === "/" && pathname === "/") {
      e.preventDefault();
      setOpen(false);
      setTimeout(() => scrollToTarget(document.body, 0), open ? 350 : 0);
    } else setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <div
          className={cn(
            "container-x flex items-center justify-between rounded-full border transition-all duration-500",
            scrolled ? "glass border-line shadow-[0_10px_40px_-15px_rgba(0,0,0,.7)]" : "border-transparent",
            compact ? "h-12 sm:h-14" : "h-14 sm:h-16"
          )}
        >
          <Link href="/" onClick={(e) => onNav(e, "/")} className="font-display text-[17px] font-extrabold tracking-tight sm:text-lg">
            ShipIt<span className="text-pop">.</span>Studio
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={(e) => onNav(e, l.href)}
                className={cn(
                  "rounded-full px-3.5 py-2 text-[14px] text-muted transition-colors hover:bg-white/5 hover:text-ink",
                  pathname === l.href && l.href !== "/" && "text-ink"
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Magnetic strength={0.25}>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={cn("btn btn-ghost", compact ? "h-10 px-4 text-[14px]" : "h-11")}>Chat on WhatsApp</a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a href={site.calendly} target="_blank" rel="noopener noreferrer" className={cn("btn btn-primary", compact ? "h-10 px-4 text-[14px]" : "h-11")}>Book a demo</a>
            </Magnetic>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
          >
            <span className="relative block h-3.5 w-6">
              <motion.span animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="absolute left-0 top-0 h-[2px] w-6 origin-center bg-ink" />
              <motion.span animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} className="absolute left-0 top-[6px] h-[2px] w-6 bg-ink" />
              <motion.span animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="absolute left-0 top-[12px] h-[2px] w-6 origin-center bg-ink" />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-bg px-6 pb-10 pt-24 lg:hidden"
          >
            <motion.div
              initial="hidden" animate="show" exit="hidden"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } } }}
              className="flex h-full flex-col"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="flex flex-col gap-3">
                <a href={site.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-primary h-14 text-base">Book a demo</a>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost h-14 text-base">Chat on WhatsApp</a>
              </motion.div>
              <nav className="mt-10 flex flex-col" aria-label="Mobile">
                {navLinks.map((l, i) => (
                  <motion.div key={l.href} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}>
                    <Link
                      href={l.href}
                      onClick={(e) => onNav(e, l.href)}
                      className="flex items-baseline gap-4 border-b border-line py-4 font-display text-[2.4rem] font-extrabold leading-none tracking-tight"
                    >
                      <span className="font-mono text-xs text-muted">0{i + 1}</span>
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.p variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="mt-auto pt-8 font-mono text-xs text-muted">
                {site.tagline}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
