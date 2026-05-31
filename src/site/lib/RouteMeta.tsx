import { Head } from "vite-react-ssg";
import { useLocation } from "react-router-dom";

// Per-route <head> emitted at BUILD time (vite-react-ssg <Head>) so crawlers —
// including JS-less AI crawlers — get correct title/meta/canonical/OG + JSON-LD
// in the prerendered HTML. Also updates on client navigation.
const SITE = "https://garagol.com";

function breadcrumb(items: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: SITE + path,
    })),
  };
}

const WEBSITE_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Garagol",
  url: SITE + "/",
  publisher: { "@type": "Organization", name: "Garagol" },
};

const IGNIFY_LD = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "IGNIFY",
  creator: { "@type": "Organization", name: "Garagol" },
  about: "Full-stack SaaS platform — mobile, cloud, real-time, payments, security.",
};

const PRICING_FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: (
    [
      ["How do you price?", "We scope each engagement to your goals and give you a clear, fixed plan up front. Fixed-scope projects are priced per milestone; ongoing work is a monthly rate for a dedicated senior team."],
      ["How fast can we start?", "Usually within days. After a short discovery call we confirm scope, and you'll have a first working draft within a week of kick-off."],
      ["Who owns the IP?", "You do. Everything we design and build is yours — code, designs, and infrastructure — with full handover and documentation."],
      ["Are there any hidden fees?", "No. Pricing is transparent and agreed before work begins. If scope changes, we discuss it with you first — never a surprise invoice."],
    ] as [string, string][]
  ).map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

type Meta = { title: string; desc: string; ld?: object[] };

const META: Record<string, Meta> = {
  "/": {
    title: "Garagol — Full-stack product studio. We design, build & secure software you can bet on.",
    desc: "Garagol is a full-stack studio for web, mobile, and cloud. Senior engineers and designers who take ambitious ideas from concept to launch — secure by default, ready to scale.",
    ld: [WEBSITE_LD],
  },
  "/work": {
    title: "Work — Garagol | Selected products across fintech, health, logistics & consumer",
    desc: "Selected work from Garagol — production-grade web, mobile, and cloud products. Filter by industry and discipline.",
    ld: [breadcrumb([["Home", "/"], ["Work", "/work"]])],
  },
  "/work/ignify": {
    title: "IGNIFY — Case Study | Garagol",
    desc: "IGNIFY: a full-stack SaaS platform built from zero by Garagol — native mobile apps, real-time messaging & calling, a secure cloud backend, payments, and an admin console.",
    ld: [IGNIFY_LD, breadcrumb([["Home", "/"], ["Work", "/work"], ["IGNIFY", "/work/ignify"]])],
  },
  "/services": {
    title: "Services — Garagol | Build, optimize, data & strategy",
    desc: "Four ways Garagol helps: Build & Launch, Optimize & Secure, Data & Insights, Strategy & Support. Senior engineers across web, mobile, and cloud.",
    ld: [breadcrumb([["Home", "/"], ["Services", "/services"]])],
  },
  "/about": {
    title: "About — Garagol | Senior engineers who ship real software",
    desc: "Garagol is a small team of senior engineers and designers who ship production-grade software — and run their own SaaS platform, IGNIFY.",
    ld: [breadcrumb([["Home", "/"], ["About", "/about"]])],
  },
  "/pricing": {
    title: "Pricing — Garagol | Simple, transparent engagements",
    desc: "Pick the way of working that fits — Launch, Scale, Secure & Optimize, or Enterprise. No hidden fees, ever. Price on request.",
    ld: [PRICING_FAQ_LD, breadcrumb([["Home", "/"], ["Pricing", "/pricing"]])],
  },
  "/contact": {
    title: "Contact & Estimate — Garagol",
    desc: "Start a project with Garagol. Get a tailored estimate in 5 questions, or send a quick inquiry. We reply within ~2 hours during business hours.",
    ld: [breadcrumb([["Home", "/"], ["Contact", "/contact"]])],
  },
};

export default function RouteMeta() {
  const { pathname } = useLocation();
  const m = META[pathname] || META["/"];
  const url = SITE + pathname;
  return (
    <Head>
      <title>{m.title}</title>
      <meta name="description" content={m.desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={m.title} />
      <meta property="og:description" content={m.desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Garagol" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={m.title} />
      <meta name="twitter:description" content={m.desc} />
      {(m.ld || []).map((obj, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(obj)}</script>
      ))}
    </Head>
  );
}
