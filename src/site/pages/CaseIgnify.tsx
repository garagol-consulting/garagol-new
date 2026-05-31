import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useReveal } from "../lib/useReveal";

export default function CaseIgnify() {
  useReveal();
  return (
    <main>
      <section className="page-hero case-hero">
        <div className="glow glow--purple" />
        <div className="wrap">
          <Link to="/work" className="link-arrow" data-reveal style={{ marginBottom: 18 }}><ArrowLeft className="arrow" /> All work</Link>
          <span className="kicker" data-reveal><span className="num">●</span> CASE STUDY</span>
          <h1 data-reveal>IGNIFY</h1>
          <p className="lead" data-reveal data-reveal-delay="1">A full-stack SaaS platform, built from zero — native mobile apps, real-time messaging &amp; calling, a secure cloud backend, payments, and an admin console.</p>
          <div className="tags" style={{ marginTop: 20 }} data-reveal data-reveal-delay="1"><span className="tag tag--purple">Mobile</span><span className="tag tag--purple">Cloud</span><span className="tag tag--purple">Real-time</span><span className="tag tag--purple">Payments</span><span className="tag tag--purple">Security</span><span className="tag tag--purple">Design</span></div>
          <div className="meta-row" data-reveal data-reveal-delay="2">
            <div><span className="k">Client</span><span className="v">IGNIFY</span></div>
            <div><span className="k">Year</span><span className="v">2025–2026</span></div>
            <div><span className="k">Services</span><span className="v">Product design · iOS &amp; Android · Cloud · DevOps · Security</span></div>
          </div>
          <div className="case-media" data-reveal data-reveal-delay="2">
            <div className="mock" style={{ padding: 26 }}><div className="mock__bar"><i /><i /><i /></div><div className="mock__screen"><span className="mock__chip c1" /><span className="mock__chip c2" /><span className="mock__chip c3" /></div></div>
            <span className="media-note">Hero mockup — drop in platform screens</span>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap">
          <div className="case-section">
            <div className="case-section__label">Context</div>
            <div className="case-section__body"><p>IGNIFY needed to launch a modern, multi-sided platform spanning consumer mobile apps, an admin console, and a secure, scalable cloud backend — a product their business would run on from day one.</p></div>
          </div>
          <div className="case-section">
            <div className="case-section__label">Challenge</div>
            <div className="case-section__body"><p>Ship a production-grade, secure, real-time platform — messaging, calling, payments, and notifications — fast, with a tiny team, and architected to scale from the first user to the millionth.</p></div>
          </div>
          <div className="case-section">
            <div className="case-section__label">Approach</div>
            <div className="case-section__body">
              <p>End-to-end ownership. We led product and UI/UX design, built the native mobile apps, and stood up a serverless AWS backend — event-driven, multi-environment with strict production isolation.</p>
              <p>Real-time messaging and VoIP calling, payments integration, and push notifications were delivered alongside a custom admin SPA — and security-reviewed at every layer, not bolted on at the end.</p>
            </div>
          </div>
          <div className="case-section">
            <div className="case-section__label">Selected work</div>
            <div className="case-section__body" style={{ maxWidth: "none" }}>
              <div className="case-gallery">
                <div className="gframe wide"><div className="mock" style={{ padding: 22 }}><div className="mock__bar"><i /><i /><i /></div><div className="mock__screen"><span className="mock__chip c1" /><span className="mock__chip c2" /><span className="mock__chip c3" /></div></div><span className="media-note">Architecture diagram</span></div>
                <div className="gframe"><span className="media-note">Mobile · messaging</span></div>
                <div className="gframe"><span className="media-note">Mobile · calling</span></div>
                <div className="gframe"><span className="media-note">Admin console</span></div>
                <div className="gframe"><span className="media-note">Payments flow</span></div>
              </div>
            </div>
          </div>
          <div className="case-section">
            <div className="case-section__label">Outcome</div>
            <div className="case-section__body" style={{ maxWidth: "none" }}>
              <div className="outcome-metrics">
                <div className="card metric"><div className="metric__v">99.99<span className="suf">%</span></div><div className="metric__l">Uptime <span className="muted-3">[confirm]</span></div></div>
                <div className="card metric"><div className="metric__v">6</div><div className="metric__l">Surfaces shipped <span className="muted-3">[confirm]</span></div></div>
                <div className="card metric"><div className="metric__v">3</div><div className="metric__l">Isolated environments <span className="muted-3">[confirm]</span></div></div>
              </div>
              <div className="card quote" style={{ maxWidth: "none" }}>
                <p className="quote__text">"[ Attributed client quote placeholder ] — Garagol owned the hard parts end-to-end and shipped a secure, real-time platform faster than we thought possible."</p>
                <div className="quote__person"><span className="quote__avatar">IG</span><div><div className="quote__name">[ Client name ]</div><div className="quote__role">[ Role ] · IGNIFY · placeholder</div></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section--tight" style={{ paddingBottom: "var(--section-y)" }}>
        <div className="wrap">
          <div className="case-next" data-reveal>
            <div>
              <div className="kicker" style={{ marginBottom: 8 }}>NEXT STEP</div>
              <div className="h3">Start a project like this →</div>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link to="/contact" className="btn btn--primary">Start a project</Link>
              <Link to="/work" className="btn btn--ghost">Next case study <ArrowRight className="arrow" /></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
