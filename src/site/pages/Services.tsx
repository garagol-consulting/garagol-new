import { Link } from "react-router-dom";
import { useRevealV3, useMagnet } from "../lib/v3fx";

const FAQS: Array<[string, string]> = [
  ["How do you price?", "Every engagement is scoped and priced in writing before work begins. Fixed-scope work is priced per milestone; ongoing work is a monthly rate. The floors above are real starting points, not teasers."],
  ["How fast can we start?", "Usually within days. After a short call we confirm scope in writing, and you see working drafts early in the engagement."],
  ["Who owns the IP?", "You do. Strategy, designs, content, code, and infrastructure: everything we create is yours, with full handover and documentation."],
  ["Are there hidden fees?", "No. If scope changes, we discuss it with you first, never a surprise invoice."],
];

export default function Services() {
  useRevealV3();
  useMagnet();
  return (
    <main className="g3" id="main">
      <header style={{ padding: "calc(68px + clamp(48px,9vh,110px)) var(--g3-gutter) clamp(32px,5vh,56px)" }}>
        <h1 className="g3-wp-h1" data-rv="0">Services<span className="g3-dot">.</span></h1>
        <p data-rv="80" style={{ margin: "24px 0 0", fontSize: "clamp(16px,1.5vw,20px)", color: "var(--g3-mist)", maxWidth: "56ch", lineHeight: 1.5 }}>
          Three ways in, each priced with a real floor and backed by live proof. Scope and price agreed in writing before work begins.
        </p>
      </header>

      {/* ===== THREE WAYS IN (bone) ===== */}
      <section className="g3-bone g3-section">
        <div className="g3-bone__head">
          <div className="g3-label" data-rv="0">Three ways in</div>
          <div className="g3-label" data-rv="0">Floors, not surprises</div>
        </div>
        <div style={{ marginTop: 28 }}>
          <div className="g3-offer" data-rv="0" style={{ cursor: "default" }}>
            <span className="g3-offer__name">Start from zero</span>
            <div className="g3-offer__desc">
              A website and an app for your business, designed, built, and shipped end to end.
              <ul className="g3-offer__ul">
                <li>Strategy, scoping, and a written plan</li>
                <li>Brand, UI, and product design</li>
                <li>The build: web, iOS and Android, cloud</li>
                <li>Launch, handover, and the option to have us operate it</li>
              </ul>
              <span className="g3-evidence">Live · IGNIFY, built for IGNIFY Inc.</span>
            </div>
            <span className="g3-price">from $12,000</span>
          </div>
          <div className="g3-offer" data-rv="60" style={{ cursor: "default" }}>
            <span className="g3-offer__name">Launch your platform</span>
            <div className="g3-offer__desc">
              You bring the idea. We design and build the web platform around it.
              <ul className="g3-offer__ul">
                <li>Product definition and honest scoping</li>
                <li>Design that fits the audience, not a template</li>
                <li>The web app, built and shipped</li>
                <li>Operate and iterate after launch</li>
              </ul>
              <span className="g3-evidence">Live · turkmen.biz</span>
            </div>
            <span className="g3-price">from $7,500</span>
          </div>
          <div className="g3-offer" data-rv="120" style={{ cursor: "default" }}>
            <span className="g3-offer__name">Fix what you have</span>
            <div className="g3-offer__desc">
              A site you're not proud of, redesigned and modernized without losing what works.
              <ul className="g3-offer__ul">
                <li>Audit of what you run today</li>
                <li>Redesign and rebuild</li>
                <li>Speed, SEO, and security baked in</li>
                <li>Ongoing care from $3,000/mo</li>
              </ul>
              <span className="g3-evidence">Live · midtec.com</span>
            </div>
            <span className="g3-price">from $5,000</span>
          </div>
        </div>
      </section>

      {/* ===== PRACTICES ===== */}
      <section className="g3-section" style={{ paddingBottom: "clamp(40px,6vh,64px)" }}>
        <div className="g3-label g3-section-label" data-rv="0">Also on the bench</div>
        <div>
          <div className="g3-practice" data-rv="0">
            <h3>Cybersecurity consulting</h3>
            <p>Assessments, hardening, MFA and SSO baselines, and practical fixes, led by a working security engineer. Scoped per engagement.</p>
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

      {/* ===== FAQ ===== */}
      <section className="g3-section" style={{ paddingTop: 0 }}>
        <div className="g3-label g3-section-label" data-rv="0">Good questions</div>
        <div>
          {FAQS.map(([q, a]) => (
            <div className="g3-faq" data-rv="0" key={q}>
              <strong>{q}</strong>
              <p>{a}</p>
            </div>
          ))}
        </div>
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
