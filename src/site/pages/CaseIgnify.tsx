import { Link } from "react-router-dom";
import { useRevealV3, useMagnet } from "../lib/v3fx";

const IG = "/case-studies/ignify";

export default function CaseIgnify() {
  useRevealV3();
  useMagnet();
  return (
    <main className="g3" id="main">
      {/* ===== HERO ===== */}
      <header style={{ padding: "calc(68px + clamp(48px,9vh,110px)) var(--g3-gutter) clamp(32px,5vh,56px)" }}>
        <div className="g3-label" data-rv="0" style={{ color: "var(--g3-brass-500)" }}>Case study · Client build</div>
        <h1 data-rv="70" style={{ margin: "18px 0 0", fontSize: "clamp(44px,6.8vw,108px)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 0.98, maxWidth: "15ch" }}>
          Zero to a <em className="g3-serif-em">live platform</em><span className="g3-dot">.</span>
        </h1>
        <p data-rv="120" style={{ margin: "26px 0 0", fontSize: "clamp(17px,1.6vw,22px)", color: "var(--g3-mist)", maxWidth: "58ch", lineHeight: 1.5 }}>
          IGNIFY Incorporated hired Garagol to take their studio-management platform from idea to production:
          product design, the apps, the website, an admin console, serverless cloud, an AI lesson-report
          pipeline, and payments. We built all of it, and we still operate it.
        </p>
      </header>

      {/* ===== FACTS ===== */}
      <section style={{ padding: "0 var(--g3-gutter)" }}>
        <div className="g3-stats" data-rv="0">
          <div className="g3-stat"><strong>IGNIFY Inc.</strong><span>the client</span></div>
          <div className="g3-stat"><strong>2025</strong><span>live at a real academy since</span></div>
          <div className="g3-stat"><strong>4</strong><span>surfaces: apps, site, console, cloud</span></div>
          <div className="g3-stat"><strong>99.99%</strong><span>uptime on the platform we operate</span></div>
        </div>
      </section>

      {/* ===== THE SITE ===== */}
      <section className="g3-section" style={{ paddingBottom: "clamp(40px,6vh,64px)" }}>
        <figure className="g3-prooffig" data-rv="0" style={{ minHeight: "clamp(320px,52vh,560px)" }}>
          <img src="/work/ignifyus-shot.jpg" alt="The ignify.us website" loading="lazy" width={1600} height={1000} />
          <figcaption>ignify.us: the platform's public site, with an in-browser product demo.</figcaption>
        </figure>
      </section>

      {/* ===== WHAT WE BUILT ===== */}
      <section className="g3-section g3-section--line" style={{ paddingTop: "clamp(40px,6vh,64px)" }}>
        <div className="g3-label g3-section-label" data-rv="0">What we built</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(24px,3vw,48px)" }}>
          <div data-rv="0">
            <div className="g3-subrow"><strong>iOS &amp; Android apps</strong><span>Live</span></div>
            <div className="g3-subrow"><strong>ignify.us website</strong><a className="g3-action" href="https://ignify.us" target="_blank" rel="noreferrer">Visit ↗</a></div>
            <div className="g3-subrow"><strong>Admin web console</strong><span>Live · private</span></div>
          </div>
          <div data-rv="60">
            <div className="g3-subrow"><strong>Serverless AWS backend</strong><span>We operate it</span></div>
            <div className="g3-subrow"><strong>AI lesson-report pipeline</strong><span>Live</span></div>
            <div className="g3-subrow"><strong>Payments &amp; billing</strong><span>Live</span></div>
          </div>
        </div>
        <p data-rv="100" style={{ margin: "clamp(28px,4vh,44px) 0 0", fontSize: "clamp(16px,1.5vw,19px)", color: "var(--g3-mist)", maxWidth: "60ch", lineHeight: 1.6 }}>
          Scheduling, billing, family messaging, and AI-drafted lesson reports, in one system. Teachers approve
          a report in about a minute; families actually read them. We carry the pager for all of it.
        </p>
      </section>

      {/* ===== REAL-WORLD PROOF ===== */}
      <section className="g3-section" style={{ paddingTop: "clamp(40px,6vh,64px)" }}>
        <figure className="g3-prooffig" data-rv="0" style={{ minHeight: "clamp(280px,44vh,480px)" }}>
          <img src={`${IG}/studio-music-class.jpg`} alt="A class in session at the Music Academy of Kansas City" loading="lazy" width={1280} height={720} />
          <figcaption>The Music Academy of Kansas City runs on the platform every day: IGNIFY's first live studio.</figcaption>
        </figure>
      </section>

      {/* ===== CLOSE ===== */}
      <section className="g3-ctagrid" style={{ borderTop: "1px solid var(--g3-line)" }}>
        <a href="https://calendly.com/allamyrat/30min" target="_blank" rel="noreferrer">
          <span className="g3-label">Talk</span>
          <strong>Book a 30-min call <span>↗</span></strong>
          <p>The team that built this is who you talk to.</p>
        </a>
        <Link to="/work">
          <span className="g3-label">More</span>
          <strong>Back to work <span>→</span></strong>
          <p>Websites, mobile apps, and web apps, all real.</p>
        </Link>
      </section>
    </main>
  );
}
