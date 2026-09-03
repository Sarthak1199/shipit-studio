import Image from "next/image";

type Brand = { match: RegExp; logo?: string; label?: string; bg?: string; fg?: string; glyph?: React.ReactNode };

/** Real logos from /public/logos/tools where we have them; brand-coloured monograms otherwise. */
const brands: Brand[] = [
  { match: /next\.?js/i, logo: "/logos/tools/nextjs.webp" },
  { match: /react/i, logo: "/logos/tools/react.png" },
  { match: /postgres|prisma|neon/i, logo: "/logos/tools/postgress.png" },
  { match: /supabase/i, logo: "/logos/tools/supabase.webp" },
  { match: /tailwind/i, logo: "/logos/tools/tailwind.png" },
  { match: /resend/i, logo: "/logos/tools/resend.png" },
  { match: /google sheets|sheets/i, logo: "/logos/tools/gsheet.png" },
  { match: /claude/i, logo: "/logos/tools/claude.png" },
  { match: /openai|gpt/i, logo: "/logos/tools/openai.svg" },
  { match: /redash/i, logo: "/logos/tools/redash.png" },
  { match: /slack/i, logo: "/logos/tools/slack.webp" },
  { match: /gmail/i, logo: "/logos/tools/gmail.webp" },
  { match: /bigquery/i, logo: "/logos/tools/bigquery.webp" },
  { match: /airtable/i, logo: "/logos/tools/airtable.webp" },
  { match: /python/i, logo: "/logos/tools/py.webp" },
  { match: /calendar/i, logo: "/logos/tools/gcal.png" },
  { match: /whatsapp/i, bg: "#25D366", glyph: <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Zm4.6 12.7c-.2.6-1.2 1.1-1.7 1.1-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.7s.7-1.9.9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4.2.5.7 1.8.8 1.9.1.1.1.3 0 .4l-.3.5-.4.4c-.1.1-.3.3-.1.5.2.3.8 1.3 1.6 2 1.1.9 2 1.2 2.3 1.4.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.9.9c.2.1.4.2.5.3.1.2.1.7-.1 1.3Z" fill="#fff" /> },
  { match: /vercel/i, bg: "#000", glyph: <path d="M12 4 21 20H3z" fill="#fff" /> },
  { match: /typescript/i, label: "TS", bg: "#3178C6" },
  { match: /node/i, label: "N", bg: "#339933" },
  { match: /express/i, label: "ex", bg: "#3C3C3C" },
  { match: /vite/i, label: "V", bg: "#646CFF" },
  { match: /auth\.?js/i, label: "A", bg: "#5B21B6" },
  { match: /shadcn|radix/i, label: "ui", bg: "#111" },
  { match: /recharts/i, label: "R", bg: "#22B5BF" },
  { match: /gumloop/i, label: "G", bg: "#7C3AED" },
  { match: /cloudinary/i, label: "C", bg: "#3448C5" },
  { match: /prokerala/i, label: "P", bg: "#F59E0B", fg: "#111" },
  { match: /reddit/i, label: "r", bg: "#FF4500" },
  { match: /amazon/i, label: "a", bg: "#FF9900", fg: "#111" },
  { match: /blinkit|zepto|instamart/i, label: "b", bg: "#F8CB46", fg: "#111" },
  { match: /lucide/i, label: "L", bg: "#F56565" },
  { match: /toast/i, label: "T", bg: "#0EA5E9" },
];

export default function ToolChip({ name }: { name: string }) {
  const b = brands.find((x) => x.match.test(name));
  return (
    <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-white py-1 pl-1 pr-3 text-[13px] text-ink shadow-soft">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full font-mono text-[10px] font-medium" style={{ background: b?.logo ? "#fff" : b?.bg ?? "#ECEEE6", color: b?.fg ?? (b?.bg ? "#fff" : "#1F2416") }} aria-hidden>
        {b?.logo ? <Image src={b.logo} alt="" width={24} height={24} unoptimized className="h-5 w-5 object-contain" />
          : b?.glyph ? <svg width="16" height="16" viewBox="0 0 24 24">{b.glyph}</svg>
          : (b?.label ?? name.slice(0, 1).toUpperCase())}
      </span>
      <span className="whitespace-normal leading-snug">{name}</span>
    </span>
  );
}
