import { Link } from "react-router-dom";
import {
  Award, Zap, ShieldCheck, BadgeDollarSign, Cloud, Smartphone,
  Database, Code, MessageCircle, ArrowRight,
} from "lucide-react";
import { useReveal } from "../lib/useReveal";

export default function About() {
  useReveal();
  return (
    <main>
      <section className="page-hero">
        <div className="glow glow--purple" />
        <div className="wrap">
          <span className="kicker" data-reveal><span className="num">●</span> ABOUT GARAGOL</span>
          <h1 className="about-statement" data-reveal style={{ marginTop: 18 }}>Garagol is a digital consultancy and studio. We <span className="text-purple">advise and we build</span> across everything digital.</h1>
          <p className="lead" data-reveal data-reveal-delay="1" style={{ marginTop: 24 }}>We're a senior team of strategists, designers, marketers, and engineers. We help ambitious brands set direction and then deliver it: strategy, brand and design, marketing and growth, product and engineering. We know it works because we build and run our own SaaS platform, IGNIFY.</p>
        </div>
      </section>

      {/* STORY */}
      <section className="section--tight">
        <div className="wrap story-grid">
          <div data-reveal>
            <span className="kicker" style={{ marginBottom: 14, display: "inline-flex" }}>WHY WE EXIST</span>
            <p>Too many agencies sell decks and hand off templates, and too many studios build without a strategy behind it. We started Garagol to close that gap: one senior team that owns the thinking (positioning, brand, growth) and the making (design, product, engineering).</p>
            <p>Because we operate our own platform, we feel every decision our clients feel: the market, the message, the experience, uptime, cost, and the price of cutting corners. So strategy, craft, and security are built in from day one, not bolted on before launch.</p>
          </div>
          <div className="story-visual" data-reveal data-reveal-delay="1"><span className="media-note">Team / studio photo</span></div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section--tight">
        <div className="wrap">
          <div className="section-head" data-reveal><span className="kicker">THE TEAM</span><h2 className="h2">Senior across four disciplines.</h2></div>
          <div className="team-grid" style={{ marginTop: "var(--s5)" }}>
            <div data-reveal><div className="member__photo">G</div><div className="member__name">[ Founder name ]</div><div className="member__role">Founder &amp; Strategy Lead</div><div className="member__exp">Positioning, product strategy, consulting.</div></div>
            <div data-reveal data-reveal-delay="1"><div className="member__photo">S</div><div className="member__name">[ Name ]</div><div className="member__role">Brand &amp; Design Lead</div><div className="member__exp">Brand identity, product design, UI systems.</div></div>
            <div data-reveal data-reveal-delay="2"><div className="member__photo">M</div><div className="member__name">[ Name ]</div><div className="member__role">Marketing &amp; Growth Lead</div><div className="member__exp">Campaigns, content, SEO, performance.</div></div>
            <div data-reveal data-reveal-delay="3"><div className="member__photo">A</div><div className="member__name">[ Name ]</div><div className="member__role">Engineering Lead</div><div className="member__exp">Web, mobile, cloud, security, automation.</div></div>
          </div>
          <p className="muted-3" style={{ fontSize: 13, marginTop: "var(--s3)" }} data-reveal>Team cards are placeholders: add real names, photos, and bios.</p>
        </div>
      </section>

      {/* VALUES */}
      <section className="section--tight">
        <div className="wrap">
          <div className="section-head" data-reveal><span className="kicker">HOW WE WORK</span><h2 className="h2">What we value.</h2></div>
          <div className="values-grid" style={{ marginTop: "var(--s5)" }}>
            <div className="card card--hover commit-card" data-reveal><div className="card__icon"><Award /></div><div className="commit-card__title">Quality</div><div className="commit-card__desc">Production-grade by default. Every deliverable reviewed.</div></div>
            <div className="card card--hover commit-card" data-reveal data-reveal-delay="1"><div className="card__icon"><Zap /></div><div className="commit-card__title">Speed</div><div className="commit-card__desc">First draft within a week. Momentum from day one.</div></div>
            <div className="card card--hover commit-card" data-reveal data-reveal-delay="2"><div className="card__icon"><ShieldCheck /></div><div className="commit-card__title">Strategy first</div><div className="commit-card__desc">We earn the build with the right plan behind it.</div></div>
            <div className="card card--hover commit-card" data-reveal data-reveal-delay="3"><div className="card__icon"><BadgeDollarSign /></div><div className="commit-card__title">Transparency</div><div className="commit-card__desc">Clear scope, clear pricing, no hidden fees.</div></div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="section--tight">
        <div className="wrap">
          <div className="section-head" data-reveal><span className="kicker">EXPERTISE &amp; CAPABILITIES</span><h2 className="h2">What we do.</h2></div>
          <div className="badges" style={{ marginTop: "var(--s4)" }} data-reveal data-reveal-delay="1">
            <span className="badge"><Award /> Strategy &amp; Consulting</span>
            <span className="badge"><MessageCircle /> Brand &amp; Identity</span>
            <span className="badge"><Smartphone /> Product &amp; UX Design</span>
            <span className="badge"><Zap /> Marketing &amp; Growth</span>
            <span className="badge"><Database /> Content &amp; SEO</span>
            <span className="badge"><Code /> Web &amp; Mobile Engineering</span>
            <span className="badge"><Cloud /> Cloud, Data &amp; AI</span>
            <span className="muted-3" style={{ alignSelf: "center", fontSize: 13 }}>[ swap in real capabilities &amp; case studies ]</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section--tight">
        <div className="wrap">
          <div className="metrics card" style={{ padding: "var(--s5) var(--s4)" }} data-reveal>
            <div className="metric"><div className="metric__v"><span data-count="40">0</span><span className="suf">+</span></div><div className="metric__l">Projects delivered</div></div>
            <div className="metric"><div className="metric__v"><span data-count="99.99">0</span><span className="suf">%</span></div><div className="metric__l">Platform uptime</div></div>
            <div className="metric"><div className="metric__v"><span className="pre">&lt;</span><span data-count="1">0</span><span className="suf">&nbsp;wk</span></div><div className="metric__l">To first draft</div></div>
            <div className="metric"><div className="metric__v"><span className="pre">&lt;</span><span data-count="2">0</span><span className="suf">&nbsp;hr</span></div><div className="metric__l">Avg response time</div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "var(--s5)" }}>
        <div className="wrap">
          <div className="cta-panel" data-reveal>
            <div className="glow glow--purple" />
            <h2 className="h2">Work with a team that advises and builds.</h2>
            <p className="lead">Tell us what you're working on. We'll bring senior strategy, design, marketing, and engineering to the table from the first call.</p>
            <div className="cta-panel__btns"><Link to="/contact" className="btn btn--primary btn--lg">Start a project <ArrowRight className="arrow" /></Link><Link to="/work" className="btn btn--ghost btn--lg">See our work</Link></div>
          </div>
        </div>
      </section>
    </main>
  );
}
