import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRevealV3, useMagnet } from "../lib/v3fx";

const IG = "/case-studies/ignify";

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

      {/* ===== MOBILE APPS ===== */}
      <section className="g3-section g3-section--line" style={{ paddingTop: "clamp(36px,5vh,56px)", paddingBottom: "clamp(36px,5vh,56px)" }}>
        <div className="g3-label g3-section-label" data-rv="0" style={{ marginBottom: 0 }}>Mobile apps</div>
        <div className="g3-catgrid">
          <Card rv={0} to="/work/ignify" media={`${IG}/owner-dashboard.png`} mediaClass="g3-card__media--top"
            kicker="Client build · iOS & Android · Live" title="IGNIFY apps"
            desc="Teacher, family, and owner apps: scheduling, messaging, AI lesson reports, payments." />
          <Card rv={60} media="/work/app-meseleyok.jpg" mediaClass="g3-card__media--top"
            kicker="Tehnika Dünýäsi · In build" title="Mesele Ýok"
            desc="A two-sided home-services marketplace: one app for customers, one for specialists." />
          <Card rv={120} media="/work/app-biletdayza.jpg" mediaClass="g3-card__media--top"
            kicker="Designed · 2026" title="Bilet Daýza"
            desc="Ticketing for cinemas and events: browse, book, and an offline QR ticket at the gate." />
          <Card rv={180} media="/work/app-serviceauto.jpg" mediaClass="g3-card__media--top"
            kicker="Field service · In build" title="Service Auto"
            desc="Routes, verified visits, and invoicing for lawn-care crews." />
        </div>
      </section>

      {/* ===== WEB APPS ===== */}
      <section className="g3-section g3-section--line" style={{ paddingTop: "clamp(36px,5vh,56px)", paddingBottom: "clamp(36px,5vh,56px)" }}>
        <div className="g3-label g3-section-label" data-rv="0" style={{ marginBottom: 0 }}>Web apps</div>
        <div className="g3-catgrid">
          <Card rv={0} media="/work/webapp-ignifyadmin.jpg"
            kicker="Client build · IGNIFY Incorporated · Live" title="IGNIFY admin console"
            desc="Staff operations console: roster, tickets, billing oversight, and support tooling." />
          <Card rv={60} media="/work/meseleyok-operator-shot.jpg" mediaClass="g3-card__media--croptr"
            kicker="Tehnika Dünýäsi · Designed · 2026" title="Mesele Ýok Operator"
            desc="The marketplace back office: dispatch board, roster, and order flows." />
          <Card rv={120} mediaLabel="Private · Live"
            kicker="turkmen.biz · Live" title="turkmen.biz Studio"
            desc="The publishing console behind turkmen.biz: listings, content, and translations." />
        </div>
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
