"use client";
import { useEffect, useRef } from "react";

/** Muted looping video that only loads + plays while near the viewport. */
export default function LazyVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (!v.getAttribute("src")) { v.setAttribute("src", src); v.load(); }
          if (!reduced) v.play().catch(() => {});
        } else v.pause();
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [src]);
  return <video ref={ref} muted playsInline loop preload="none" className={className} aria-hidden />;
}
