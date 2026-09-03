"use client";
export default function EggStamp() {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event("shipit:egg"))}
      className="inline-flex min-h-[36px] items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/60 transition hover:text-moss md:text-[11px]">
      <span className="h-1.5 w-1.5 rounded-full bg-sage" />Website built by AI
    </button>
  );
}
