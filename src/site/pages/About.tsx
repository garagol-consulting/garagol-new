import { useRevealV3, useMagnet } from "../lib/v3fx";

const VALUES: Array<[string, string]> = [
  ["Quality.", "Production-grade by default. Every deliverable reviewed before you see it."],
  ["Momentum.", "Working drafts early and often. You see real progress from the first week."],
  ["Strategy first.", "We earn the build with the right plan behind it, never the other way around."],
  ["Straight talk.", "Scope and pricing in writing before work begins. No surprise invoices, ever."],
];

export default function About() {
  useRevealV3();
  useMagnet();
  return (
    <main className="g3" id="main">
      <header style={{ padding: "calc(68px + clamp(48px,9vh,110px)) var(--g3-gutter) clamp(40px,7vh,72px)" }}>
        <h1 data-rv="0" style={{ margin: 0, fontSize: "clamp(44px,6.8vw,108px)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 0.98, maxWidth: "16ch" }}>
          You talk to the people <em className="g3-serif-em">doing the work</em><span className="g3-dot">.</span>
        </h1>
      </header>

      {/* ===== A TEAM, FOUNDER-LED ===== */}
      <section style={{ padding: "0 var(--g3-gutter) var(--g3-section)" }}>
        <div className="g3-founder">
          <figure data-rv="0">
            <img src="/team/allamyrat.jpg" alt="Allamyrat Tuyliyev" width={480} height={480} />
            <figcaption>Allamyrat Tuyliyev · Founder &amp; Principal Consultant</figcaption>
          </figure>
          <div>
            <h2 data-rv="0">A small senior team, led by the founder on every engagement.</h2>
            <p data-rv="50">
              Garagol Consulting &amp; Solutions is deliberately small: a founder who leads every project
              personally, with senior collaborators across design, engineering, and growth brought in per
              engagement. No sales layer, no junior bench, no handoffs. The person who scopes your work
              is the person who ships it.
            </p>
            <p data-rv="80">
              Allamyrat is a security engineer by trade: Security Engineer IV at a Fortune-500 retailer,
              with an MSc in Cyber Intelligence and a decade across financial services, retail, and
              education. That day job is why security is built into Garagol's work, not bolted on.
            </p>
            <p data-rv="110">
              He built the Music Academy of Kansas City's original secure systems, founded Garagol in
              2024, and led the end-to-end build of IGNIFY for IGNIFY Incorporated: the apps, the site,
              the cloud, the AI pipeline, and the payments, all still operated by this team today.
            </p>
            <div className="g3-chips" data-rv="140">
              <span className="g3-chip">Turkmen</span><span className="g3-chip">Russian</span><span className="g3-chip">English</span><span className="g3-chip">German</span>
            </div>
            <div style={{ marginTop: 24 }} data-rv="170">
              <a className="g3-evidence" href="https://www.linkedin.com/in/allamyrat/" target="_blank" rel="noreferrer">Source · LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NUMBERS THAT SURVIVE "SHOW ME" ===== */}
      <section style={{ padding: "0 var(--g3-gutter)" }}>
        <div className="g3-stats" data-rv="0">
          <div className="g3-stat"><strong>15+</strong><span>projects across 6 industries</span></div>
          <div className="g3-stat"><strong>2025</strong><span>IGNIFY live at a real academy since</span></div>
          <div className="g3-stat"><strong>99.99%</strong><span>uptime on the platform we operate</span></div>
          <div className="g3-stat"><strong>&lt;2hr</strong><span>replies during business hours</span></div>
        </div>
      </section>

      {/* ===== WHAT WE VALUE, AT SCALE ===== */}
      <section className="g3-section">
        <div className="g3-label g3-section-label" data-rv="0">What we value</div>
        <div className="g3-vals">
          {VALUES.map(([word, line], i) => (
            <div className="g3-val" data-rv={i * 60} key={word}>
              <strong>{word}</strong>
              <span>{line}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CLOSE ===== */}
      <section style={{ padding: "0 var(--g3-gutter) var(--g3-section)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap", borderTop: "1px solid var(--g3-line)", paddingTop: "clamp(32px,5vh,48px)" }} data-rv="0">
          <h2 style={{ margin: 0, fontSize: "clamp(26px,3vw,44px)", fontWeight: 800, letterSpacing: "-0.015em", maxWidth: "24ch" }}>
            Thirty minutes with the founder, not a sales team<span className="g3-dot">.</span>
          </h2>
          <a href="https://calendly.com/allamyrat/30min" target="_blank" rel="noreferrer" className="g3-btn" data-magnet>Book a 30-min call</a>
        </div>
      </section>
    </main>
  );
}
