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
          <figure className="story-visual" data-reveal data-reveal-delay="1" style={{ overflow: "hidden" }}>
            <img src="/case-studies/ignify/studio-piano-room.jpg" width={1280} height={800} loading="lazy" alt="The Music Academy of Kansas City, which runs on IGNIFY, the platform Garagol built and operates" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </figure>
        </div>
      </section>

      {/* TEAM */}
      <section className="section--tight">
        <div className="wrap">
          <div className="section-head" data-reveal><span className="kicker">WHO YOU WORK WITH</span><h2 className="h2">Founder-led, deliberately small.</h2></div>
          <div className="team-grid" style={{ marginTop: "var(--s5)" }}>
            <div data-reveal><div className="member__photo">A</div><div className="member__name">Allamyrat Tuyliyev</div><div className="member__role">Founder</div><div className="member__exp">The engineer-founder behind IGNIFY: strategy, product design, iOS and Android, the AWS backend, AI pipeline, and payments. He leads every Garagol engagement personally.</div></div>
          </div>
          <p className="muted-3" style={{ fontSize: 13, marginTop: "var(--s3)" }} data-reveal>Garagol stays deliberately small: senior work, no handoffs, and you always talk to the people doing the work.</p>
        </div>
      </section>

      {/* VALUES */}
      <section className="section--tight">
        <div className="wrap">
          <div className="section-head" data-reveal><span className="kicker">HOW WE WORK</span><h2 className="h2">What we value.</h2></div>
          <div className="values-grid" style={{ marginTop: "var(--s5)" }}>
            <div className="card card--hover commit-card" data-reveal><div className="card__icon"><Award /></div><div className="commit-card__title">Quality</div><div className="commit-card__desc">Production-grade by default. Every deliverable reviewed.</div></div>
            <div className="card card--hover commit-card" data-reveal data-reveal-delay="1"><div className="card__icon"><Zap /></div><div className="commit-card__title">Speed</div><div className="commit-card__desc">Momentum from week one, with working drafts early and often.</div></div>
            <div className="card card--hover commit-card" data-reveal data-reveal-delay="2"><div className="card__icon"><ShieldCheck /></div><div className="commit-card__title">Strategy first</div><div className="commit-card__desc">We earn the build with the right plan behind it.</div></div>
            <div className="card card--hover commit-card" data-reveal data-reveal-delay="3"><div className="card__icon"><BadgeDollarSign /></div><div className="commit-card__title">Transparency</div><div className="commit-card__desc">Scope and pricing agreed in writing before work begins.</div></div>
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
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section--tight">
        <div className="wrap">
          <div className="metrics card" style={{ padding: "var(--s5) var(--s4)" }} data-reveal>
            <div className="metric"><div className="metric__v">2025</div><div className="metric__l">IGNIFY live in production</div></div>
            <div className="metric"><div className="metric__v">99.99<span className="suf">%</span></div><div className="metric__l">Uptime across IGNIFY, the platform we operate</div></div>
            <div className="metric"><div className="metric__v"><span className="pre">&lt;</span>2<span className="suf">&nbsp;hr</span></div><div className="metric__l">Avg reply during business hours</div></div>
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
