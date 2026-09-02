"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    document.body.classList.add("has-cursor");

    let x = -100, y = -100, rx = -100, ry = -100, raf = 0, hovering = false, visible = false;
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (!visible) { visible = true; dot.current!.style.opacity = "1"; ring.current!.style.opacity = "1"; }
      dot.current!.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
    };
    const loop = () => {
      rx += (x - rx) * 0.16; ry += (y - ry) * 0.16;
      ring.current!.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%) scale(${hovering ? 2.2 : 1})`;
      raf = requestAnimationFrame(loop);
    };
    const over = (e: MouseEvent) => {
      hovering = !!(e.target as HTMLElement).closest("a,button,[data-cursor]");
      ring.current!.style.borderColor = hovering ? "rgba(255,90,45,.9)" : "rgba(243,239,230,.55)";
    };
    const leave = () => { visible = false; dot.current!.style.opacity = "0"; ring.current!.style.opacity = "0"; };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", leave);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.body.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div ref={dot} aria-hidden className="cursor-el pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-pop opacity-0 transition-opacity" />
      <div ref={ring} aria-hidden className="cursor-el pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border border-ink/50 opacity-0 transition-[opacity,border-color] duration-300" />
    </>
  );
}
