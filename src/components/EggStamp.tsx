"use client";
export default function EggStamp() {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event("shipit:egg"))}
      className="group inline-flex min-h-[36px] items-center gap-2 rounded-full border border-moss/30 bg-white/80 px-3.5 py-1.5 font-brand text-[11px] font-semibold uppercase tracking-[0.16em] text-moss shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift">
      <span className="h-1.5 w-1.5 rounded-full bg-sage transition group-hover:scale-150" />Built by AI
    </button>
  );
}
