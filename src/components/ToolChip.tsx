/** Chip with a small brand-coloured icon. Matches on tool-name keywords; falls back to a monogram. */
const brands: { match: RegExp; label: string; bg: string; fg?: string; glyph?: React.ReactNode }[] = [
  { match: /next\.?js/i, label: "N", bg: "#111" },
  { match: /google sheets|sheets/i, label: "S", bg: "#188038" },
  { match: /whatsapp/i, label: "W", bg: "#25D366", glyph: <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Zm4.6 12.7c-.2.6-1.2 1.1-1.7 1.1-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.7s.7-1.9.9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4.2.5.7 1.8.8 1.9.1.1.1.3 0 .4l-.3.5-.4.4c-.1.1-.3.3-.1.5.2.3.8 1.3 1.6 2 1.1.9 2 1.2 2.3 1.4.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.9.9c.2.1.4.2.5.3.1.2.1.7-.1 1.3Z" fill="#fff" /> },
  { match: /slack/i, label: "#", bg: "#4A154B" },
  { match: /supabase|postgres/i, label: "P", bg: "#336791" },
  { match: /bigquery|cloud run|google calendar|gmail/i, label: "G", bg: "#4285F4" },
  { match: /openai|gpt/i, label: "AI", bg: "#10A37F" },
  { match: /claude|llm/i, label: "C", bg: "#D97757" },
  { match: /python/i, label: "Py", bg: "#3776AB" },
  { match: /vercel/i, label: "▲", bg: "#000" },
  { match: /airtable/i, label: "A", bg: "#FCB400", fg: "#111" },
  { match: /blinkit|zepto|instamart|storefront/i, label: "Q", bg: "#F8CB46", fg: "#111" },
  { match: /email/i, label: "@", bg: "#6A7160" },
];

export default function ToolChip({ name }: { name: string }) {
  const b = brands.find((x) => x.match.test(name));
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-bg py-1 pl-1 pr-3 text-sm text-ink">
      <span className="flex h-6 w-6 items-center justify-center rounded-full font-mono text-[10px] font-medium" style={{ background: b?.bg ?? "#ECEEE6", color: b?.fg ?? (b ? "#fff" : "#1F2416") }} aria-hidden>
        {b?.glyph ? <svg width="16" height="16" viewBox="0 0 24 24">{b.glyph}</svg> : (b?.label ?? name.slice(0, 1).toUpperCase())}
      </span>
      {name}
    </span>
  );
}
