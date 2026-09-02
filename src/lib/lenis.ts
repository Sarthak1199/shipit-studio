import type Lenis from "lenis";

let instance: Lenis | null = null;
export const setLenis = (l: Lenis | null) => {
  instance = l;
};
export const getLenis = () => instance;

/** Scroll to a hash/element, using Lenis when available. */
export const scrollToTarget = (target: string | HTMLElement, offset = -80) => {
  const l = getLenis();
  if (l) {
    l.scrollTo(target, { offset, duration: 1.2 });
    return;
  }
  const el = typeof target === "string" ? document.querySelector(target) : target;
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
};
