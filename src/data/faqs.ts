export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  { q: "What does it cost?", a: "Fixed price per build, quoted after the scope call. No hourly billing, no retainer you forget to cancel. If the scope changes, we requote before we build." },
  { q: "We've tried AI before and it went nowhere. Why is this different?", a: "Most AI projects die because someone bought a platform and then looked for a problem. We start from your actual workflow and ship something you use in week one. If it's not useful, you find out in days, not after a quarter." },
  { q: "We don't know what to automate. Where do we start?", a: "That's the scope call. Tell us what your team does manually every week. We'll tell you which one is worth fixing first, and which ones aren't worth paying us for." },
  { q: "What will this take from our team?", a: "One 20-minute scope call, access to the tools we're connecting, and one person who answers questions during the build. That's it. You don't staff a project team." },
  { q: "Do we need a tech team?", a: "No. We build it, connect it, and hand it over working. Your team needs to know how to use it, not maintain it." },
  { q: "Does our data leave our environment?", a: "It stays in your systems wherever possible. We connect to what you already use instead of copying your data somewhere new. Where something has to move, we write down exactly what and where before we build." },
  { q: "Do you train our team?", a: "Yes. Handover includes a walkthrough with the people who'll actually use it, plus a short doc they can refer back to. If a tool needs a training program, we built it wrong." },
  { q: "What if it breaks after handover?", a: "We fix it. Builds come with a support window, and most clients stay on a light iteration plan because businesses change and tools should too." },
  { q: "Can you work with our existing tools?", a: "Usually yes: Slack, Sheets, your POS, your CRM, your inbox. If something has no API, we'll say so on the scope call instead of discovering it three weeks in." },
  { q: "What kinds of businesses do you work with?", a: "Restaurants, D2C, healthcare, pharma, finance. The industry matters less than whether the workflow is repetitive and currently done by hand." },
];
