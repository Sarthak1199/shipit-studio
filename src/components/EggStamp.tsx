"use client";
export default function EggStamp() {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event("shipit:egg"))}
      className="group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-dashed border-moss/40 bg-white/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-moss transition hover:-rotate-2 hover:bg-white">
      <span className="h-1.5 w-1.5 rounded-full bg-sage transition group-hover:scale-150" />
      Built in under 3 hours · tap to see how
    </button>
  );
}
