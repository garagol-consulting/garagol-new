import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "https://garagol.com";

const META: Record<string, { title: string; desc: string }> = {
  "/": {
    title: "Garagol — Full-stack product studio. We design, build & secure software you can bet on.",
    desc: "Garagol is a full-stack studio for web, mobile, and cloud. Senior engineers and designers who take ambitious ideas from concept to launch — secure by default, ready to scale.",
  },
  "/work": {
    title: "Work — Garagol | Selected products across fintech, health, logistics & consumer",
    desc: "Selected work from Garagol — production-grade web, mobile, and cloud products. Filter by industry and discipline.",
  },
  "/work/ignify": {
    title: "IGNIFY — Case Study | Garagol",
    desc: "IGNIFY: a full-stack SaaS platform built from zero by Garagol — native mobile apps, real-time messaging & calling, a secure cloud backend, payments, and an admin console.",
  },
  "/services": {
    title: "Services — Garagol | Build, optimize, data & strategy",
    desc: "Four ways Garagol helps: Build & Launch, Optimize & Secure, Data & Insights, Strategy & Support. Senior engineers across web, mobile, and cloud.",
  },
  "/about": {
    title: "About — Garagol | Senior engineers who ship real software",
    desc: "Garagol is a small team of senior engineers and designers who ship production-grade software — and run their own SaaS platform, IGNIFY.",
  },
  "/pricing": {
    title: "Pricing — Garagol | Simple, transparent engagements",
    desc: "Pick the way of working that fits — Launch, Scale, Secure & Optimize, or Enterprise. No hidden fees, ever. Price on request.",
  },
  "/contact": {
    title: "Contact & Estimate — Garagol",
    desc: "Start a project with Garagol. Get a tailored estimate in 5 questions, or send a quick inquiry. We reply within ~2 hours during business hours.",
  },
};

const IGNIFY_LD = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "IGNIFY",
  creator: { "@type": "Organization", name: "Garagol" },
  about: "Full-stack SaaS platform — mobile, cloud, real-time, payments, security.",
};

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

// Lightweight SPA head management. (Full pre-render/SSG is a future enhancement.)
export default function RouteMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const m = META[pathname] || META["/"];
    document.title = m.title;
    setMeta("name", "description", m.desc);
    setMeta("property", "og:title", m.title);
    setMeta("property", "og:description", m.desc);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", SITE + pathname);

    // Per-route JSON-LD for the case study (Organization LD is static in index.html).
    const existing = document.getElementById("route-jsonld");
    if (pathname === "/work/ignify") {
      const s = existing ?? Object.assign(document.createElement("script"), { id: "route-jsonld", type: "application/ld+json" });
      s.textContent = JSON.stringify(IGNIFY_LD);
      if (!existing) document.head.appendChild(s);
    } else if (existing) {
      existing.remove();
    }
  }, [pathname]);
  return null;
}
