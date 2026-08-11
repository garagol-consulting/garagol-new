import { Head } from "vite-react-ssg";
import { useLocation } from "react-router-dom";

// Per-route <head> emitted at BUILD time (vite-react-ssg <Head>) so crawlers,
// including JS-less AI crawlers, get correct title/meta/canonical/OG + JSON-LD
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
  about: "Full-stack SaaS platform: mobile, cloud, real-time, payments, security.",
};

const PRICING_FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: (
    [
      ["How do you price?", "We scope each engagement to your goals and give you a clear, fixed plan up front. Fixed-scope projects are priced per milestone; ongoing work is a monthly rate for a dedicated senior team."],
      ["How fast can we start?", "Usually within days. After a short discovery call we confirm scope in writing, and you'll see working drafts early in the engagement."],
      ["Who owns the IP?", "You do. Everything we create is yours: strategy, designs, content, code, and infrastructure, with full handover and documentation."],
      ["Are there any hidden fees?", "No. Pricing is agreed in writing before work begins. If scope changes, we discuss it with you first, never a surprise invoice."],
    ] as [string, string][]
  ).map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

type Meta = { title: string; desc: string; ld?: object[] };

const META: Record<string, Meta> = {
  "/": {
    title: "Garagol Consulting & Solutions | We build, secure, and grow what your business runs on.",
    desc: "Garagol is a digital consultancy and studio. We advise and we build across strategy, brand, marketing, and engineering, taking ideas from plan to launch to growth. For local businesses, startup founders, and growing companies.",
    ld: [WEBSITE_LD],
  },
  "/work": {
    title: "Work | Garagol Consulting & Solutions",
    desc: "Client work and our own products, by build: websites, mobile apps, and web apps. IGNIFY, midtec.com, turkmen.biz, Mesele Yok, Bilet Dayza, and more.",
    ld: [breadcrumb([["Home", "/"], ["Work", "/work"]])],
  },
  "/work/ignify": {
    title: "IGNIFY case study | Garagol Consulting & Solutions",
    desc: "IGNIFY Incorporated hired Garagol to take their studio platform from zero to live: apps, website, admin console, cloud, AI pipeline, and payments. Live since 2025.",
    ld: [IGNIFY_LD, breadcrumb([["Home", "/"], ["Work", "/work"], ["IGNIFY", "/work/ignify"]])],
  },
  "/services": {
    title: "Services & pricing | Garagol Consulting & Solutions",
    desc: "Three ways in: start from zero (from $12,000), launch your platform (from $7,500), or fix what you have (from $5,000). Plus cybersecurity, growth, and advisory.",
    ld: [PRICING_FAQ_LD, breadcrumb([["Home", "/"], ["Services", "/services"]])],
  },
  "/about": {
    title: "About | Garagol Consulting & Solutions",
    desc: "A small senior team in Dallas / Fort Worth, led on every engagement by a working security engineer. We design, build, and operate software end to end.",
    ld: [breadcrumb([["Home", "/"], ["About", "/about"]])],
  },
  "/pricing": {
    title: "Services & pricing | Garagol Consulting & Solutions",
    desc: "Three ways in: start from zero (from $12,000), launch your platform (from $7,500), or fix what you have (from $5,000). Plus cybersecurity, growth, and advisory.",
    ld: [PRICING_FAQ_LD, breadcrumb([["Home", "/"], ["Services", "/services"]])],
  },
  "/contact": {
    title: "Contact | Garagol Consulting & Solutions",
    desc: "Book a 30-minute call with the founder, request a tailored estimate, or send a note. Replies within about 2 hours during business hours.",
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
