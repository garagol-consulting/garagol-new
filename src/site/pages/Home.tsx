import { Link } from "react-router-dom";
import {
  ArrowRight, Compass, Palette, Megaphone, Code2, Zap, LifeBuoy, ShieldCheck,
  TrendingUp, BadgeDollarSign, Users,
} from "lucide-react";
import { useReveal } from "../lib/useReveal";
import Rotor from "../components/Rotor";
import Marquee from "../components/Marquee";

export default function Home() {
  useReveal();
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="glow hero__glow-1" />
        <div className="hero__glyph" aria-hidden="true">G</div>
        <div className="wrap hero__inner">
          <span className="kicker" data-hero><span className="num">●</span> STRATEGY · BRAND · MARKETING · BUILD</span>
          <h1 data-hero>We advise and we build, across <span className="grad">everything digital.</span></h1>
          <Rotor />
          <p className="hero__sub" data-hero>
            Garagol is a digital consultancy and studio. We help you plan, brand, market, and build,
            taking ideas from strategy to launch to growth. For local businesses, startup founders, and growing companies.
          </p>
          <div className="hero__cta" data-hero>
            <Link to="/contact" className="btn btn--primary btn--lg">Start a project <ArrowRight className="arrow" /></Link>
            <Link to="/work" className="btn btn--ghost btn--lg">See our work</Link>
          </div>
        </div>
      </section>

      {/* ===== PROOF LINE ===== */}
      <section className="trust">
        <div className="wrap">
          <div className="trust__label kicker" data-reveal>OUR PROOF</div>
          <p className="lead" data-reveal data-reveal-delay="1" style={{ maxWidth: "64ch" }}>
            IGNIFY, the platform we designed, built, and operate, runs the Music Academy of Kansas City every day.
            Everything we claim on this site is held to that standard: real, checkable work.
          </p>
        </div>
      </section>

      {/* ===== FEATURED WORK ===== */}
      <section className="section" id="work">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="kicker"><span className="num">01</span> · SELECTED WORK</span>
            <h2 className="h2">Selected work.</h2>
            <p className="lead">Real outcomes across strategy, design, marketing, and engineering. A look at what end-to-end ownership delivers.</p>
          </div>
          <div className="bento bento--work" style={{ marginTop: "var(--s5)" }}>
            <Link to="/work/ignify" className="card card--hover work-card work-card--flag" data-reveal>
              <div className="work-card__media">
                <img className="work-card__img" loading="lazy" width={1280} height={720} src="/case-studies/ignify/studio-cover.jpg" alt="IGNIFY, the platform Garagol built, running at a real music academy" />
                <span className="tag tag--purple mock__tag">Flagship</span>
              </div>
              <div className="work-card__body">
                <div className="work-card__top">
                  <span className="work-card__title">IGNIFY</span>
                  <span className="tag tag--green">Live</span>
                </div>
                <p className="muted" style={{ fontSize: "var(--fs-sm)", marginTop: -4 }}>
                  The one calm system class-based studios run on: scheduling, billing, family messaging, and AI-drafted lesson reports. Designed and built end to end.
                </p>
                <div className="work-card__metric"><span className="v">Live 2025</span><span className="k">at the Music Academy of Kansas City</span></div>
                <div className="work-card__foot">
                  <div className="tags"><span className="tag">Mobile</span><span className="tag">Cloud</span><span className="tag">AI</span><span className="tag">Payments</span></div>
                  <span className="link-arrow">Read case study <ArrowRight className="arrow" /></span>
                </div>
              </div>
            </Link>

            <a href="https://turkmen.biz" target="_blank" rel="noreferrer" className="card card--hover work-card" data-reveal data-reveal-delay="1">
              <div className="work-card__body">
                <div className="work-card__top"><span className="work-card__title">turkmen.biz</span><span className="tag tag--green">Live</span></div>
                <p className="muted" style={{ fontSize: "var(--fs-sm)", marginTop: -4 }}>
                  A business directory and marketplace for Turkmen businesses. Designed, built, and operated by Garagol.
                </p>
                <div className="work-card__foot">
                  <div className="tags"><span className="tag">Web</span><span className="tag">Brand</span><span className="tag">Build</span></div>
                  <span className="link-arrow">Visit live <ArrowRight className="arrow" /></span>
                </div>
              </div>
            </a>

            <a href="https://midtec.com" target="_blank" rel="noreferrer" className="card card--hover work-card" data-reveal data-reveal-delay="2">
              <div className="work-card__body">
                <div className="work-card__top"><span className="work-card__title">Midtec Associates</span><span className="tag tag--green">Live</span></div>
                <p className="muted" style={{ fontSize: "var(--fs-sm)", marginTop: -4 }}>
                  A complete website redesign for an independent manufacturers' representative serving Mid-America since 1977. Live at midtec.com.
                </p>
                <div className="work-card__foot">
                  <div className="tags"><span className="tag">Brand</span><span className="tag">Web</span></div>
                  <span className="link-arrow">Visit midtec.com <ArrowRight className="arrow" /></span>
                </div>
              </div>
            </a>
          </div>
          <div style={{ marginTop: "var(--s4)" }} data-reveal>
            <Link to="/work" className="link-arrow">View all work <ArrowRight className="arrow" /></Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section section--tight" id="services">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="kicker"><span className="num">02</span> · SERVICES</span>
            <h2 className="h2">Everything it takes, from strategy to launch.</h2>
            <p className="lead">Four ways we help. Pick one, or partner with us across all of them.</p>
          </div>
          <div className="bento bento--services" style={{ marginTop: "var(--s5)" }}>
            <div className="card card--hover svc-card" data-reveal>
              <span className="svc-card__num">01</span>
              <div className="card__icon"><Compass /></div>
              <div className="svc-card__title">Strategy &amp; Consulting</div>
              <div className="svc-card__promise">Plan your digital future with confidence.</div>
              <div className="svc-card__list"><span className="tag">Digital Strategy</span><span className="tag">Transformation</span><span className="tag">IT Consulting</span><span className="tag">Roadmapping</span></div>
            </div>
            <div className="card card--hover svc-card" data-reveal data-reveal-delay="1">
              <span className="svc-card__num">02</span>
              <div className="card__icon"><Palette /></div>
              <div className="svc-card__title">Brand &amp; Design</div>
              <div className="svc-card__promise">Look the part, everywhere you show up.</div>
              <div className="svc-card__list"><span className="tag">Brand Identity</span><span className="tag">UI/UX Design</span><span className="tag">Web Design</span><span className="tag">Creative</span></div>
            </div>
            <div className="card card--hover svc-card" data-reveal data-reveal-delay="2">
              <span className="svc-card__num">03</span>
              <div className="card__icon"><Megaphone /></div>
              <div className="svc-card__title">Marketing &amp; Growth</div>
              <div className="svc-card__promise">Get found, and grow.</div>
              <div className="svc-card__list"><span className="tag">SEO</span><span className="tag">Digital Marketing</span><span className="tag">Content</span><span className="tag">Social</span><span className="tag">Analytics</span></div>
            </div>
            <div className="card card--hover svc-card" data-reveal data-reveal-delay="3">
              <span className="svc-card__num">04</span>
              <div className="card__icon"><Code2 /></div>
              <div className="svc-card__title">Build &amp; Engineering</div>
              <div className="svc-card__promise">Ship secure, scalable products.</div>
              <div className="svc-card__list"><span className="tag">Web &amp; Mobile</span><span className="tag">Cloud &amp; DevOps</span><span className="tag">Data &amp; AI</span><span className="tag">Cybersecurity</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section section--tight" id="process">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="kicker"><span className="num">03</span> · HOW WE WORK</span>
            <h2 className="h2">Efficient steps, measurable results.</h2>
          </div>
          <div className="steps" style={{ marginTop: "var(--s5)" }}>
            <div className="step card" data-reveal><div className="step__n">01</div><div className="step__line" /><div className="step__title">Connect</div><div className="step__desc">Define your vision, challenges, and goals.</div></div>
            <div className="step card" data-reveal data-reveal-delay="1"><div className="step__n">02</div><div className="step__line" /><div className="step__title">Collaborate</div><div className="step__desc">Shape the strategy and design the solution.</div></div>
            <div className="step card" data-reveal data-reveal-delay="2"><div className="step__n">03</div><div className="step__line" /><div className="step__title">Create</div><div className="step__desc">Build, test, refine, and launch.</div></div>
            <div className="step card" data-reveal data-reveal-delay="3"><div className="step__n">04</div><div className="step__line" /><div className="step__title">Grow</div><div className="step__desc">Optimize, market, and scale with ongoing support.</div></div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <Marquee />

      {/* ===== COMMITMENT ===== */}
      <section className="section" id="commitment">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="kicker"><span className="num">04</span> · OUR COMMITMENT</span>
            <h2 className="h2">Why teams choose Garagol.</h2>
          </div>
          <div className="bento bento--commit" style={{ marginTop: "var(--s5)" }}>
            <div className="card card--hover commit-card" data-reveal><div className="card__icon"><Zap /></div><div className="commit-card__title">Fast Momentum</div><div className="commit-card__desc">Working drafts early and often, so you see real progress from the first week.</div></div>
            <div className="card card--hover commit-card" data-reveal data-reveal-delay="1"><div className="card__icon"><LifeBuoy /></div><div className="commit-card__title">Ongoing Support</div><div className="commit-card__desc">For urgent issues, we aim to respond within roughly two hours.</div></div>
            <div className="card card--hover commit-card" data-reveal data-reveal-delay="2"><div className="card__icon"><ShieldCheck /></div><div className="commit-card__title">Secure &amp; Compliant</div><div className="commit-card__desc">We build security and compliance in from day one, across everything we deliver.</div></div>
            <div className="card card--hover commit-card" data-reveal><div className="card__icon"><TrendingUp /></div><div className="commit-card__title">Built to Scale</div><div className="commit-card__desc">Strategy and architecture so your solution grows along with your business.</div></div>
            <div className="card card--hover commit-card" data-reveal data-reveal-delay="1"><div className="card__icon"><BadgeDollarSign /></div><div className="commit-card__title">You Own the Work</div><div className="commit-card__desc">Strategy, designs, code, and infrastructure: everything we produce is yours, with full handover.</div></div>
            <div className="card card--hover commit-card" data-reveal data-reveal-delay="2"><div className="card__icon"><Users /></div><div className="commit-card__title">Expert Team</div><div className="commit-card__desc">Senior strategists, designers, marketers, and engineers delivering tailored work.</div></div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="section">
        <div className="wrap">
          <div className="cta-panel" data-reveal>
            <div className="glow glow--purple" />
            <span className="kicker" style={{ justifyContent: "center" }}>LET'S BUILD</span>
            <h2 className="h2" style={{ marginTop: 16 }}>Have a digital challenge? Let's scope it.</h2>
            <p className="lead">Scope agreed in writing, senior people doing the work, and you own everything we make. Tell us what you're working on and we'll come back with a clear plan.</p>
            <div className="cta-panel__btns">
              <Link to="/contact" className="btn btn--primary btn--lg">Start a project <ArrowRight className="arrow" /></Link>
              <a href="https://calendly.com/allamyrat/30min" target="_blank" rel="noreferrer" className="btn btn--ghost btn--lg">Book a 30-min call</a>
            </div>
            <div className="cta-panel__chips">
              <span className="tag">Scoped in writing</span><span className="tag">Senior team, no handoffs</span><span className="tag">You own everything</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
