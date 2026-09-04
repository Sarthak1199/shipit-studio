export type Metric = { value: string; label: string };
export type Tech = { stack: string[]; integrations: string[]; deliverables: string[] };
export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  headline: string;
  summary: string;
  metrics: Metric[];
  build: string;
  industryShort: string;
  cover: string;
  gallery: string[];
  logo?: string;
  accent: string;
  problem: string;
  solution: string;
  process: string;
  tech: Tech;
  architecture: { text: string; image?: string };
  testimonial?: { quote: string; name: string; role: string };
};

// Content from ~/Documents/case studies/*.md (Sarthak, 2026-09-03).
export const caseStudies: CaseStudy[] = [
  {
    slug: "lexis-sandwich-shop",
    client: "Lexie Ops Tool",
    industry: "F&B · Internal tools",
    headline: "Invoices out of WhatsApp. A structured system in.",
    summary: "Replaced manual invoice reconciliation with a structured GRN and PO system. Fewer errors, zero manual hassle.",
    metrics: [{ value: "80%", label: "reduced errors" }, { value: "10 hrs", label: "/month saved" }, { value: "₹1.5L", label: "/month saved" }],
    build: "#Build01",
    industryShort: "F&B",
    cover: "/media/cases/lexis-1.jpg",
    gallery: ["/media/cases/lexis-1.jpg"],
    logo: "/logos/lexis.jpg",
    accent: "#1F55D6",
    problem: "Lexie's tracked purchase orders and goods receipts manually — invoices photographed on WhatsApp, reconciled by hand once a week. No single source of truth for what was ordered vs. what arrived, no price-variance visibility, payables reconstructed manually.",
    solution: "We built a web app to create POs (manual or CSV) and send them to vendors over WhatsApp. On arrival, staff photograph the invoice — Claude Vision OCR extracts line items, staff review/edit, and the system matches it to the original PO (exact → fuzzy → manual), flagging off-PO items separately. A GRN-first dashboard shows items received, price trends, and payables.",
    process: "Started with PO creation and WhatsApp send, then added OCR-based GRN capture once the PO flow was trusted. The dashboard was reworked mid-build — the original PO-vs-GRN KPI cards compared against the wrong baseline, so it was rebuilt GRN-first. Branch management (multi-branch, reassign-or-purge on delete) was added last.",
    tech: {
      stack: ["TypeScript", "React 19", "Vite", "Tailwind CSS", "Node.js", "Express 5", "PostgreSQL (Neon)", "Vercel Blob", "Claude Vision OCR"],
      integrations: ["WhatsApp (wa.me) for PO delivery", "Claude Vision API for OCR"],
      deliverables: [
        "PO creation (manual + CSV) with fuzzy item matching",
        "WhatsApp PO delivery to vendors",
        "Photo-based GRN capture with Claude Vision OCR",
        "PO-to-GRN matching, off-PO items tracked separately",
        "GRN-first dashboard: items received, price trend, payables",
        "Multi-branch support with safe branch deletion",
      ],
    },
    architecture: {
      text: "GRN photo → stored in Vercel Blob → Claude Vision OCR extracts line items → human review/edit → matched to PO (exact/fuzzy/manual) → stored in Postgres → GRN-first dashboard.",
      image: "/media/cases/lexis-sandwich-shop-architecture.svg",
    },
    testimonial: { quote: "We used to reconcile invoices by hand every week. Sarthak built us a tool that put inwarding, GRNs and POs in one flow. Saved us hours, and we finally trust our numbers.", name: "Ayush Melwani", role: "Cofounder Lexi's" },
  },
  {
    slug: "dotpe-crm-internal-brain",
    client: "DotPe CRM internal brain",
    industry: "Fintech · Internal platform",
    headline: "Screenshots out. A synced merchant profile in.",
    summary: "An internal platform with analytics dashboards, automated vendor onboarding and auto-generated templates.",
    metrics: [{ value: "120 hrs", label: "/month saved" }, { value: "₹6L", label: "sales recovered" }],
    build: "#Build02",
    industryShort: "Fintech",
    cover: "/media/cases/dotpe-1.jpg",
    gallery: ["/media/cases/dotpe-1.jpg", "/media/cases/dotpe-2.jpg"],
    logo: "/logos/dotpe.jpg",
    accent: "#E63A2E",
    problem: "CRM sales, onboarding, and adoption data for merchants lived across scattered Redash queries and manually-updated Google Sheets. There was no single merchant profile — sales, ops, and leadership each pieced together their own view, and weekly reporting meant screenshotting dashboards into emails that often broke on size limits.",
    solution: "We built a merchant-centric dashboard and database: Redash queries and the CRM/Loyalty closures Google Sheet sync in automatically via cron, landing in a generic time-series snapshot table per merchant. Sales, ops, and leadership (read-only) all see the same account-level view, with a hand-built HTML email report sent out automatically instead of screenshots.",
    process: "Started with the data model — one merchant record, with a generic snapshot table so any new Redash or Sheets metric could be added without a schema change. Sync jobs were split into single-purpose cron routes after Vercel's function execution ceiling forced slow Redash syncs apart. The email report was rebuilt from scratch after discovering Gmail clips HTML over ~102KB, ruling out screenshot-based reporting.",
    tech: {
      stack: ["Next.js 16 (App Router)", "TypeScript", "React 19", "PostgreSQL via Prisma", "Supabase", "Auth.js (JWT, role-based)", "Tailwind CSS", "shadcn/ui + Radix", "Recharts", "Resend", "Vercel (serverless + cron)"],
      integrations: ["Redash — CRM activation, credit consumption, customer reach, MX-grain metrics", "Google Sheets — CRM/Loyalty closures, payments, branch counts, rates", "Resend — automated HTML email reports"],
      deliverables: [
        "Merchant-centric dashboard + database view",
        "Automated Redash + Google Sheets sync with run tracking",
        "Role-based access (sales/ops write, leadership read-only)",
        "Onboarding, roadmap, and support-request tracking",
        "Automated weekly HTML email report (inline SVG charts, no screenshots)",
      ],
    },
    architecture: {
      text: "Redash queries and the closures Google Sheet sync into Postgres via scheduled cron jobs, landing in a generic per-merchant snapshot table. Server Components read this via Prisma; a pure computation layer handles funnel/KPI/ARPU math separately from data fetching. A weekly cron renders a dependency-free HTML email report and sends it via Resend.",
      image: "/media/cases/dotpe-crm-internal-brain-architecture.svg",
    },
    testimonial: { quote: "They turned our scattered CRM data and ops work into one live dashboard. Recovered 40% revenue by spotting gaps, saved hundreds of hours of manual work.", name: "Ram", role: "Dotpe CRM Lead" },
  },
  {
    slug: "arranged-marriage-platform",
    client: "Arranged marriage platform (Rishtabook)",
    industry: "Matrimony · Internal platform",
    headline: "Diaries out. A structured database in.",
    summary: "Replaced a manual partner-tracking diaries with a structured database. Fewer errors, zero manual hassle.",
    metrics: [{ value: "8 hrs", label: "/week saved" }, { value: "40%", label: "more callbacks" }, { value: "Zero", label: "hassle" }],
    build: "#Build03",
    industryShort: "Matrimony",
    cover: "/media/cases/rishta-1.jpg",
    gallery: ["/media/cases/rishta-1.jpg", "/media/cases/rishta-2.jpg"],
    accent: "#C2185B",
    problem: "Groom profiles, photos, and astrology details were tracked in physical diaries and bio-data PDFs read by hand. There was no searchable database, no compatibility scoring, and every match meant re-typing details from a PDF into a diary.",
    solution: "We replaced the diaries with a structured groom database, Cloudinary photo storage, and one-click PDF bio-data extraction. Astrology compatibility (guna milan) runs automatically through the Prokerala API, with a local fallback and caching so repeat matches are instant.",
    process: "We digitised the existing groom records first so nothing was lost, then added PDF extraction to cut manual entry. Astrology matching came last — live kundli matching via Prokerala, with a local Ashtakoot fallback and server-side cache to avoid repeat API calls on the same pair.",
    tech: {
      stack: ["Next.js 14 (App Router)", "TypeScript", "Tailwind CSS", "lucide-react", "react-hot-toast"],
      integrations: ["Google Sheets API (service account) as the database", "Cloudinary for photo storage", "Prokerala API for kundli matching"],
      deliverables: [
        "Searchable groom database (Google Sheets–backed)",
        "PDF bio-data extraction",
        "Photo upload via Cloudinary",
        "Astrology compatibility scoring (Prokerala + local fallback)",
        "Password-gated access, 72hr sessions",
      ],
    },
    architecture: {
      text: "Groom bio-data (PDF or manual) is parsed and stored in Google Sheets, photos go to Cloudinary. DOB is converted to a nakshatra, then matched against the bride's profile via Prokerala (cached) or a local Ashtakoot fallback — the score shows against each groom in the list.",
      image: "/media/cases/arranged-marriage-platform-architecture.svg",
    },
  },
  {
    slug: "qcom-spy-agents",
    client: "QCom Spy Agents",
    industry: "Quick commerce · AI agents",
    headline: "Manual checks out. A daily competitor report in.",
    summary: "AI agents that track competitor pricing and availability by pin code, delivered as a daily email report.",
    metrics: [{ value: "₹2L", label: "additional revenue" }, { value: "35%", label: "higher availability" }, { value: "Daily", label: "tracking" }],
    build: "#Build04",
    industryShort: "Quick commerce",
    cover: "/media/cases/blinkit-1.jpg",
    gallery: ["/media/cases/blinkit-1.jpg", "/media/cases/blinkit-2.jpg"],
    accent: "#2E3A1F",
    problem: "D2C brands had no visibility into what competitors were doing on quick-commerce — pricing, stock, and category positioning across Blinkit, Amazon, and social chatter had to be checked manually, if at all.",
    solution: "The brand owner submits a form — product website link, product name, category. An AI agent scrapes Reddit, Amazon, Blinkit, and other platform scrapers for competitor data, transforms and stores it, then Claude Haiku formats a report which is emailed straight to the owner via Resend.",
    process: "Built on Gumloop. Started with the intake form and scraping layer, then added transformation and storage once raw data was reliable, and closed the loop with an automated report generation + email step so no manual pull was needed.",
    tech: {
      stack: ["Gumloop (build platform)", "Supabase (database)", "Claude Haiku (report generation)", "Resend (email delivery)"],
      integrations: ["Reddit scraper", "Amazon scraper", "Blinkit scraper", "Resend for email delivery"],
      deliverables: [
        "Intake form (product link, name, category)",
        "Multi-platform competitor scraping agent",
        "Data transformation + storage",
        "Claude Haiku–generated report",
        "Automated email delivery to brand owner",
      ],
    },
    architecture: {
      text: "Brand owner submits a form → scraping agent pulls competitor data from Reddit, Amazon, and Blinkit → data is transformed and stored in Supabase → Claude Haiku formats a report → Resend emails it to the owner.",
      image: "/media/cases/qcom-spy-agents-architecture.svg",
    },
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
