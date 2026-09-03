"use client";
export default function EggStamp() {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event("shipit:egg"))}
      className="inline-flex min-h-[44px] items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60 transition hover:text-moss">
      <span className="h-1.5 w-1.5 rounded-full bg-sage" />Website built by AI
    </button>
  );
}
