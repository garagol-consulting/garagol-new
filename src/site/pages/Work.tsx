import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useRevealV3, useMagnet } from "../lib/v3fx";

// All six quotes approved by the founder on their behalf, 2026-08-11.
const PEOPLE: Array<{ k: string; text: string; name: string; role: string; img?: string }> = [
  { k: "kevin", text: "Easy to work with, quick to deliver, and the new site looks sharp everywhere. Exactly what we needed.", name: "Kevin Vincent", role: "Midtec Associates · midtec.com", img: "/work/kevin.png" },
  { k: "ayna", text: "The Matchstick found customers we never reached before. turkmen.biz is the first place I send any Turkmen business getting started.", name: "Ayna Pirkuliyeva", role: "Owner, The Matchstick · thematchstick.co", img: "/work/people/ayna.jpg" },
  { k: "maya", text: "The new site captures who we are, and working with Garagol was effortless. They knew our world before we said a word.", name: "Dr. Maya Tuylieva", role: "Music Academy of Kansas City", img: "/work/people/maya.jpg" },
  { k: "kelsey", text: "They ran our marketing like owners: a clear plan, honest reporting, and numbers that actually moved.", name: "Kelsey Crockett", role: "Growth marketing client", img: "/work/people/kelsey.jpg" },
  { k: "sultan", text: "One working session saved me months. I left with a scope, a stack, and a budget I could act on.", name: "Sultan Amangeldiyev", role: "Owner, Five Eight Bloom · fiveeightbloom.com", img: "/work/people/sultan.jpg" },
  { k: "ata", text: "Thorough and practical. Clear findings, clear fixes, no scare tactics. We closed real gaps fast.", name: "Ata Kakajanow", role: "Cybersecurity client" },
];

/** One voice at a time: crossfading testimonial with dot navigation. */
function QuoteRotator() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (paused) return;
    const t = window.setInterval(() => setI((v) => (v + 1) % PEOPLE.length), 7000);
    return () => window.clearInterval(t);
  }, [paused]);
  return (
    <div className="g3-rotator" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {PEOPLE.map((p, k) => (
        <figure key={p.k} className={"g3-rotator__item" + (k === i ? " is-on" : "")} style={{ margin: 0 }} aria-hidden={k !== i}>
          <blockquote>"{p.text}"</blockquote>
          <figcaption className="g3-rotator__by">
            {p.img ? (
              <img src={p.img} alt="" width={44} height={44} />
            ) : (
              <span className="g3-person__init">{p.name.split(" ").map((w) => w[0]).join("")}</span>
            )}
            <div>
              <span className="g3-rotator__name">{p.name}</span>
              <span className="g3-rotator__role">{p.role}</span>
            </div>
          </figcaption>
        </figure>
      ))}
      <div className="g3-rotator__dots">
        {PEOPLE.map((p, k) => (
          <button key={p.k} className={"g3-rotator__dot" + (k === i ? " is-on" : "")} aria-label={"Show quote from " + p.name} onClick={() => setI(k)} />
        ))}
      </div>
    </div>
  );
}

type ShowLink = { to?: string; href?: string; label: string };
type ShowItem = { k: string; kicker: string; name: string; desc: string; img: string; chrome?: string; link?: ShowLink };

const MOBILE_APPS: ShowItem[] = [
  {
    k: "ignify", kicker: "Client build · IGNIFY Incorporated · iOS & Android · Live", name: "IGNIFY apps",
    desc: "Teacher, family, and owner apps: scheduling, messaging, AI lesson reports, payments.",
    img: "/case-studies/ignify/owner-dashboard.png", link: { to: "/work/ignify", label: "Case study →" },
  },
  {
    k: "mesele", kicker: "Tehnika Dünýäsi · In build", name: "Mesele Ýok",
    desc: "A two-sided home-services marketplace: one app for customers, one for specialists.",
    img: "/work/phone-meseleyok.jpg",
  },
  {
    k: "bilet", kicker: "Designed · 2026", name: "Bilet Daýza",
    desc: "Ticketing for cinemas and events: browse, book, and an offline QR ticket at the gate.",
    img: "/work/phone-biletdayza.jpg",
  },
  {
    k: "sauto", kicker: "Field service · In build", name: "Service Auto",
    desc: "Routes, verified visits, and invoicing for lawn-care crews.",
    img: "/work/phone-serviceauto.jpg",
  },
];

const WEB_APPS: ShowItem[] = [
  {
    k: "admin", kicker: "Client build · IGNIFY Incorporated · Live", name: "IGNIFY admin console",
    desc: "Staff operations console: triage, tickets, platform health, and billing oversight.",
    img: "/work/web-ignifyadmin.jpg", chrome: "admin.ignify.us · design preview",
  },
  {
    k: "operator", kicker: "Tehnika Dünýäsi · Designed · 2026", name: "Mesele Ýok Operator",
    desc: "The marketplace back office: live dispatch board, roster, and order flows.",
    img: "/work/web-operator.jpg", chrome: "operator · design preview",
  },
  {
    k: "tb", kicker: "turkmen.biz · Live", name: "turkmen.biz",
    desc: "The signed-in network: member catalog, profiles, and search, in three languages.",
    img: "/work/web-turkmenbiz.jpg", chrome: "turkmen.biz", link: { href: "https://turkmen.biz", label: "turkmen.biz ↗" },
  },
];

/** Hover/tap-driven device rail: the list switches the screen inside a fixed device mock.
    Auto-advances every 5s until the visitor deliberately picks an item. */
function DeviceShowcase({ items, kind }: { items: ShowItem[]; kind: "phone" | "browser" }) {
  const [active, setActive] = useState(0);
  const [engaged, setEngaged] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const hoverT = useRef(0);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (engaged || hovered || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setActive((v) => (v + 1) % items.length), 5000);
    return () => window.clearInterval(t);
  }, [engaged, hovered, inView, items.length]);

  // 120ms hover intent so cursor travel doesn't strobe through every screen
  const hoverPick = (i: number) => {
    window.clearTimeout(hoverT.current);
    hoverT.current = window.setTimeout(() => setActive(i), 120);
  };
  const pick = (i: number) => {
    window.clearTimeout(hoverT.current);
    setActive(i);
    setEngaged(true);
  };

  return (
    <div
      ref={rootRef}
      className={`g3-devshow g3-devshow--${kind}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); window.clearTimeout(hoverT.current); }}
    >
      <div className="g3-devshow__list">
        {items.map((it, i) => (
          <div key={it.k} className={"g3-devshow__row" + (i === active ? " is-on" : "")} onMouseEnter={() => hoverPick(i)}>
            <button type="button" className="g3-devshow__hit" aria-pressed={i === active} onClick={() => pick(i)} onFocus={() => pick(i)}>
              <span className="g3-devshow__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="g3-devshow__meta">
                <span className="g3-card__kicker">{it.kicker}</span>
                <span className="g3-devshow__name">{it.name}</span>
                <span className="g3-devshow__desc">{it.desc}</span>
              </span>
            </button>
            {it.link && (
              <span className="g3-devshow__link">
                {it.link.to ? (
                  <Link className="g3-action" to={it.link.to}>{it.link.label}</Link>
                ) : (
                  <a className="g3-action" href={it.link.href} target="_blank" rel="noreferrer">{it.link.label}</a>
                )}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="g3-devshow__stage" aria-hidden="true">
        <div className="g3-devshow__device">
          {kind === "browser" && (
            <div className="g3-devshow__bar">
              <i /><i /><i />
              <span>{items[active].chrome}</span>
            </div>
          )}
          <div className="g3-devshow__screen">
            {items.map((it, i) => (
              <img
                key={it.k} src={it.img} alt="" className={i === active ? "is-on" : ""}
                decoding="async" width={kind === "phone" ? 720 : 1600} height={kind === "phone" ? 1600 : 1000}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Card(props: {
  href?: string; to?: string; media?: string; mediaClass?: string; mediaLabel?: string;
  kicker: string; title?: string; titleLogo?: { src: string; h: number; chip?: boolean };
  desc: string; rv?: number; alt?: string;
}) {
  const body = (
    <>
      <span className={"g3-card__media g3-card__media--tall " + (props.mediaClass || "") + (props.media ? "" : " g3-card__media--label")} aria-hidden="true">
        {props.media ? (
          <img src={props.media} alt="" loading="lazy" width={1600} height={1000} />
        ) : (
          <span className="g3-label" style={{ color: "var(--g3-mist-deep)" }}>{props.mediaLabel}</span>
        )}
      </span>
      <span className="g3-card__caption">
        <span className="g3-card__kicker">{props.kicker}</span>
        <span className="g3-card__title">
          {props.titleLogo && (
            <img
              src={props.titleLogo.src}
              alt={props.title || ""}
              style={props.titleLogo.chip ? { height: props.titleLogo.h } : { height: props.titleLogo.h, background: "none", padding: 0, width: "auto" }}
            />
          )}
          {props.title}
        </span>
        <span className="g3-card__desc">{props.desc}</span>
      </span>
    </>
  );
  const cls = "g3-card g3-card--split";
  if (props.to) return <Link to={props.to} className={cls} data-rv={props.rv ?? 0}>{body}</Link>;
  if (props.href) return <a href={props.href} target="_blank" rel="noreferrer" className={cls} data-rv={props.rv ?? 0}>{body}</a>;
  return <div className={cls} data-rv={props.rv ?? 0}>{body}</div>;
}

export default function Work() {
  useRevealV3();
  useMagnet();
  return (
    <main className="g3" id="main">
      <header style={{ padding: "calc(68px + clamp(48px,9vh,110px)) var(--g3-gutter) clamp(24px,4vh,44px)" }}>
        <h1 className="g3-wp-h1" data-rv="0">Work<span className="g3-dot">.</span></h1>
        <p data-rv="80" style={{ margin: "24px 0 0", fontSize: "clamp(16px,1.5vw,20px)", color: "var(--g3-mist)", maxWidth: "54ch", lineHeight: 1.5 }}>
          Client work and our own products, by build. Everything here is real: live, in build, or shown on request.
        </p>
      </header>

      {/* ===== WEBSITES ===== */}
      <section className="g3-section g3-section--line" style={{ paddingTop: "clamp(36px,5vh,56px)", paddingBottom: "clamp(36px,5vh,56px)" }}>
        <div className="g3-label g3-section-label" data-rv="0" style={{ marginBottom: 0 }}>Websites</div>
        <div className="g3-catgrid g3-catgrid--2">
          <Card rv={0} href="https://ignify.us" media="/work/ignifyus-shot.jpg"
            kicker="Client build · IGNIFY Incorporated · Live" title="IGNIFY"
            desc="The platform's public site: positioning, copy, design, and build, with an in-browser product demo." />
          <Card rv={60} href="https://midtec.com" media="/work/midtec-shot.jpg"
            kicker="Client redesign · Live at midtec.com ↗" title="Midtec Associates"
            desc="Complete redesign for a manufacturers' rep serving Mid-America since 1977." />
          <Card rv={120} href="https://turkmen.biz" media="/work/turkmenbiz-shot.jpg"
            kicker="Live at turkmen.biz ↗" title="turkmen.biz" titleLogo={{ src: "/work/turkmenbiz-logo.png", h: 26, chip: true }}
            desc="A multilingual business directory and marketplace we design, build, and operate." />
          <Card rv={180} media="/work/makc-shot.jpg"
            kicker="Client build · In build · 2026" title="Music Academy of Kansas City"
            desc="A new public site for the academy: designed, approved, and in build now." />
        </div>
      </section>

      {/* ===== MOBILE APPS: phone peeking from the right, list switches its screen ===== */}
      <section className="g3-section g3-section--line g3-showsec" style={{ paddingTop: "clamp(36px,5vh,56px)", paddingBottom: "clamp(36px,5vh,56px)" }}>
        <div className="g3-label g3-section-label" data-rv="0">Mobile apps</div>
        <DeviceShowcase kind="phone" items={MOBILE_APPS} />
      </section>

      {/* ===== WEB APPS: mirrored — browser peeking from the left ===== */}
      <section className="g3-section g3-section--line g3-showsec" style={{ paddingTop: "clamp(36px,5vh,56px)", paddingBottom: "clamp(36px,5vh,56px)" }}>
        <div className="g3-label g3-section-label" data-rv="0">Web apps</div>
        <DeviceShowcase kind="browser" items={WEB_APPS} />
      </section>

      {/* ===== PRACTICES ===== */}
      <section className="g3-section g3-section--line" style={{ paddingTop: "clamp(36px,5vh,56px)", paddingBottom: "clamp(36px,5vh,56px)" }}>
        <div className="g3-label g3-section-label" data-rv="0">Ongoing practices</div>
        <div>
          <div className="g3-practice" data-rv="0">
            <h3>Cybersecurity consulting</h3>
            <p>Assessments, hardening, MFA and SSO baselines, and practical fixes for client teams, led by a working security engineer.</p>
          </div>
          <div className="g3-practice" data-rv="0">
            <h3>Growth marketing</h3>
            <p>Social and search growth for local businesses: content, campaigns, and the analytics to know what worked.</p>
          </div>
          <div className="g3-practice" data-rv="0" style={{ borderBottom: "1px solid var(--g3-line)" }}>
            <h3>Startup advisory</h3>
            <p>Working sessions for founders shaping an idea into a plan: scope, stack, cost, and the honest version of what it takes.</p>
          </div>
        </div>
      </section>

      {/* ===== IN THEIR WORDS ===== */}
      <section className="g3-section" style={{ paddingTop: "clamp(36px,5vh,56px)" }}>
        <div className="g3-label g3-section-label" data-rv="0">In their words</div>
        <QuoteRotator />
      </section>

      {/* ===== CLOSE ===== */}
      <section className="g3-ctagrid" style={{ borderTop: "1px solid var(--g3-line)" }}>
        <a href="https://calendly.com/allamyrat/30min" target="_blank" rel="noreferrer">
          <span className="g3-label">Talk</span>
          <strong>Book a 30-min call <span>↗</span></strong>
          <p>Thirty minutes with the founder, not a sales team.</p>
        </a>
        <Link to="/contact#estimate">
          <span className="g3-label">Scope</span>
          <strong>Request an estimate <span>→</span></strong>
          <p>Tell us the situation; you get a floor, not a surprise.</p>
        </Link>
      </section>
    </main>
  );
}
