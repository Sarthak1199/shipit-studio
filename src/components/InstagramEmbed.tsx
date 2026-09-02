"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window { instgrm?: { Embeds: { process: () => void } } }
}

let loading: Promise<void> | null = null;
function loadEmbedJs() {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.instgrm) return Promise.resolve();
  if (loading) return loading;
  loading = new Promise<void>((resolve) => {
    const s = document.createElement("script");
    s.src = "https://www.instagram.com/embed.js";
    s.async = true;
    s.onload = () => resolve();
    document.body.appendChild(s);
  });
  return loading;
}

/** Real Instagram blockquote embed; re-processes on SPA route change. */
export default function InstagramEmbed({ permalink }: { permalink: string }) {
  const pathname = usePathname();
  useEffect(() => {
    let alive = true;
    loadEmbedJs().then(() => { if (alive) window.instgrm?.Embeds.process(); });
    return () => { alive = false; };
  }, [pathname, permalink]);

  return (
    <blockquote
      className="instagram-media !m-0 !min-w-0 !max-w-none !rounded-2xl !border-line !bg-surface"
      data-instgrm-permalink={permalink}
      data-instgrm-version="14"
      style={{ width: "100%" }}
    >
      <a href={permalink} target="_blank" rel="noopener noreferrer" className="block p-6 text-sm text-muted">View this reel on Instagram</a>
    </blockquote>
  );
}
