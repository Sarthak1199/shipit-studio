export type Metric = { value: string; label: string };
export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  headline: string;
  summary: string;
  metrics: Metric[];
  problem: string;
  solution: string;
  process: string;
  testimonial?: { quote: string; name: string; role: string };
  logo?: string;
  accent: string;
};

// Metrics, summaries and testimonials are verbatim from the reference site.
// problem / solution / process paragraphs are extrapolated from those one-liners.
export const caseStudies: CaseStudy[] = [
  {
    slug: "lexis-sandwich-shop",
    client: "Lexi's sandwich shop",
    industry: "F&B · Internal tools",
    headline: "From paper invoices to one flow.",
    summary:
      "Paper invoices, GRNs and POs reconciled by hand. We built one flow to automate it all.",
    metrics: [
      { value: "80%", label: "reduced errors" },
      { value: "10 hrs", label: "/month saved" },
      { value: "₹1.5L", label: "/month saved" },
    ],
    problem:
      "Every week, Lexi's reconciled stock by hand: supplier invoices, goods receipt notes and purchase orders lived on paper and in three different spreadsheets. Numbers rarely matched, and the founders spent Sundays chasing the gaps instead of running the shop.",
    solution:
      "We built a single inwarding flow. Invoices are captured on the phone, line items are read automatically, matched to open POs and turned into GRNs in one tap. Stock levels, spend per supplier and mismatches update live on one dashboard.",
    process:
      "One scope call, a working prototype in the first week, then two weeks of building against real invoices from the kitchen. We trained the team on-site and iterated on edge cases for a month after launch.",
    testimonial: {
      quote:
        "We used to reconcile invoices by hand every week. Sarthak built us a tool that put inwarding, GRNs and POs in one flow. Saved us hours, and we finally trust our numbers.",
      name: "Ayush Melwani",
      role: "Cofounder Lexi's",
    },
    logo: "/logos/lexis.jpg",
    accent: "#2457E6",
  },
  {
    slug: "dotpe-crm-internal-brain",
    client: "DotPe CRM internal brain",
    industry: "Fintech · Internal platform",
    headline: "One live brain for a scattered CRM.",
    summary:
      "An internal platform with analytics dashboards, automated vendor onboarding and auto-generated templates.",
    metrics: [
      { value: "120 hrs", label: "/month saved" },
      { value: "₹6L", label: "sales recovered" },
    ],
    problem:
      "CRM data, vendor onboarding and campaign templates were spread across sheets, tickets and chat threads. The team spent hours every week pulling numbers by hand and still missed follow-ups that were quietly costing revenue.",
    solution:
      "We built an internal platform that sits on top of the CRM: live analytics dashboards for the sales and ops leads, an automated vendor onboarding pipeline, and AI-generated message templates that adapt to each merchant segment.",
    process:
      "We shadowed the CRM team for a week to map the real workflow, shipped the dashboard first so the wins were visible early, then layered onboarding automation and templates in weekly releases with training at each step.",
    testimonial: {
      quote:
        "They turned our scattered CRM data and ops work into one live dashboard. Recovered 40% revenue by spotting gaps, saved hundreds of hours of manual work.",
      name: "Ram",
      role: "Dotpe CRM Lead",
    },
    logo: "/logos/dotpe.jpg",
    accent: "#E63A2E",
  },
  {
    slug: "arranged-marriage-platform",
    client: "Arranged marriage platform",
    industry: "Services · Workflow automation",
    headline: "Diaries out. A structured database in.",
    summary:
      "Replaced a manual partner-tracking diaries with a structured database. Fewer errors, zero manual hassle.",
    metrics: [
      { value: "8 hrs", label: "/week saved" },
      { value: "40%", label: "more callbacks" },
      { value: "Zero", label: "hassle" },
    ],
    problem:
      "Partner profiles, preferences and follow-ups were tracked in physical diaries and memory. Matches were missed, callbacks slipped, and onboarding a new team member meant weeks of reading someone else's handwriting.",
    solution:
      "We replaced the diaries with a structured database and a simple interface for the team: searchable profiles, preference matching, automatic reminders for callbacks and a daily list of who to reach out to next.",
    process:
      "We digitised the existing diaries first so nothing was lost, then built the matching and reminder layer on top. The team was trained in two sessions and were running the platform on their own within the fortnight.",
    accent: "#D4FF4F",
  },
  {
    slug: "qcom-spy-agents",
    client: "QCom Spy Agents",
    industry: "Quick commerce · AI agents",
    headline: "Competitor pricing, every morning, by pin code.",
    summary:
      "AI agents that track competitor pricing and availability by pin code, delivered as a daily email report.",
    metrics: [
      { value: "₹2L", label: "additional revenue" },
      { value: "35%", label: "higher availability" },
      { value: "Daily", label: "tracking" },
    ],
    problem:
      "A quick-commerce brand had no reliable view of how competitors priced and stocked the same SKUs across pin codes. Pricing decisions were made on gut feel and stale screenshots, and stockouts went unnoticed for days.",
    solution:
      "We deployed AI agents that check competitor apps for price and availability by pin code every day, normalise the results, and deliver a clean email report each morning with alerts on price moves and gaps.",
    process:
      "We started with a handful of SKUs and two pin codes to prove the data was trustworthy, then scaled coverage weekly. The report format was iterated with the category team until it was the first thing they opened each day.",
    accent: "#FF5A2D",
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
