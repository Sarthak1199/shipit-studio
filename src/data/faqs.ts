export type Faq = { q: string; a: string };

// Only the first answer exists in the reference HTML. The rest were written to
// match its tone and the studio's positioning — review before publishing.
export const faqs: Faq[] = [
  {
    q: "What does it cost?",
    a: "Fixed price per build, quoted after the scope call. No hourly billing, no retainer you forget to cancel. If the scope changes, we requote before we build.",
  },
  {
    q: "We’ve tried AI before and it went nowhere. Why is this different?",
    a: "Most AI projects die as demos because nobody owns the boring part: wiring it into how your team actually works. We start from one real headache, ship a working tool in weeks, train the people who use it, and stay on to iterate. Working software, not a slide deck.",
  },
  {
    q: "We don’t know what to automate. Where do we start?",
    a: "A 30-minute call. Tell us where your team loses time, what gets copy-pasted between tools, and which reports someone builds by hand every week. We come back within the week with a scoped plan and a prototype of the highest-leverage fix.",
  },
  {
    q: "What will this take from our team?",
    a: "One point of contact and a couple of hours across the build for access, feedback and a walkthrough. We do the building, testing and documentation. Your team’s job is to tell us what hurts and then use the thing.",
  },
  {
    q: "Do we need a tech team?",
    a: "No. Most of our clients don’t have one. We handle hosting, integrations and maintenance, and hand over clear documentation so anyone on your team can operate the tool day to day.",
  },
  {
    q: "Does our data leave our environment?",
    a: "Only where you say it can. We build inside your accounts and cloud wherever possible, use least-privilege access, and are explicit about which models or third-party services touch which data before anything goes live. If a workflow needs to stay fully in-house, we design for that.",
  },
  {
    q: "Do you train our team?",
    a: "Yes, every build ships with training. Live walkthroughs for the people who’ll use it, short recorded videos they can replay, and written SOPs. Training is part of the fixed price, not an add-on.",
  },
  {
    q: "What if it breaks after handover?",
    a: "We monitor what we ship and fix breakages caused by our build at no extra cost. When an upstream tool changes its API or your process changes, we tell you what it takes to adapt and requote only if the scope genuinely grows.",
  },
  {
    q: "Can you work with our existing tools?",
    a: "That’s the whole point. Google Workspace, Slack, WhatsApp, Notion, Zoho, Tally, your CRM, your POS, spreadsheets that shouldn’t exist. We connect what you already run rather than making you migrate.",
  },
  {
    q: "What kinds of businesses do you work with?",
    a: "Restaurants and F&B, D2C brands, healthcare, banks and manufacturers, from single-founder shops to enterprise teams. If you have a repeated manual process and a person who’s tired of doing it, we can help.",
  },
];
