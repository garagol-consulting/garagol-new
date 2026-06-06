import { Link } from "react-router-dom";
import {
  ArrowRight, Landmark, Activity, Truck, ShoppingBag, Layers, Flame,
  Compass, Palette, Megaphone, Code2, Zap, LifeBuoy, ShieldCheck,
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
            taking ideas from strategy to launch to growth. From startups to enterprise.
          </p>
          <div className="hero__cta" data-hero>
            <Link to="/contact" className="btn btn--primary btn--lg">Start a project <ArrowRight className="arrow" /></Link>
            <Link to="/work" className="btn btn--ghost btn--lg">See our work</Link>
          </div>
          <div className="hero__meta" data-hero>
            <div><span className="n">40+</span><span className="l">Projects delivered</span></div>
            <div><span className="n">4</span><span className="l">Disciplines, one team</span></div>
            <div><span className="n">&lt; 2 hr</span><span className="l">Avg response</span></div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="trust">
        <div className="wrap">
          <div className="trust__label kicker" data-reveal>TRUSTED BY TEAMS ACROSS FINTECH, HEALTH, LOGISTICS &amp; CONSUMER</div>
          <div className="trust__row" data-reveal data-reveal-delay="1">
            <span className="client"><span className="client__dot"><Landmark /></span>NorthVault <span className="sector">fintech</span></span>
            <span className="client"><span className="client__dot"><Activity /></span>Caduceus <span className="sector">health</span></span>
            <span className="client"><span className="client__dot"><Truck /></span>Freightline <span className="sector">logistics</span></span>
            <span className="client"><span className="client__dot"><ShoppingBag /></span>Lumen <span className="sector">consumer</span></span>
            <span className="client"><span className="client__dot"><Layers /></span>Stackline <span className="sector">saas</span></span>
            <span className="client"><span className="client__dot"><Flame /></span>IGNIFY <span className="sector">platform</span></span>
          </div>
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
                <div className="mock">
                  <div className="mock__bar"><i /><i /><i /></div>
                  <div className="mock__screen"><span className="mock__chip c1" /><span className="mock__chip c2" /><span className="mock__chip c3" /></div>
                </div>
                <span className="tag tag--purple mock__tag">Flagship</span>
                <span className="media-note">IGNIFY · platform mockup</span>
              </div>
              <div className="work-card__body">
                <div className="work-card__top">
                  <span className="work-card__title">IGNIFY</span>
                  <span className="tag tag--green">Live</span>
                </div>
                <p className="muted" style={{ fontSize: "var(--fs-sm)", marginTop: -4 }}>
                  A full-stack SaaS platform built from zero: native mobile apps, real-time messaging and calling, a secure cloud backend, payments, and an admin console.
                </p>
                <div className="work-card__metric"><span className="v">6 surfaces</span><span className="k">shipped with a small senior team</span></div>
                <div className="work-card__foot">
                  <div className="tags"><span className="tag">Mobile</span><span className="tag">Cloud</span><span className="tag">Real-time</span><span className="tag">Payments</span></div>
                  <span className="link-arrow">Read case study <ArrowRight className="arrow" /></span>
                </div>
              </div>
            </Link>

            <Link to="/work" className="card card--hover work-card" data-reveal data-reveal-delay="1">
              <div className="work-card__media">
                <div className="mock"><div className="mock__bar"><i /><i /><i /></div><div className="mock__screen"><span className="mock__chip c1" /><span className="mock__chip c2" /><span className="mock__chip c3" /></div></div>
                <span className="media-note">Project · Brand &amp; Web</span>
              </div>
              <div className="work-card__body">
                <div className="work-card__top"><span className="work-card__title">Brand &amp; Web</span></div>
                <div className="work-card__metric"><span className="v">[ result ]</span><span className="k">placeholder, add outcome</span></div>
                <div className="work-card__foot"><div className="tags"><span className="tag">Brand</span><span className="tag">Web</span></div></div>
              </div>
            </Link>

            <Link to="/work" className="card card--hover work-card" data-reveal data-reveal-delay="2">
              <div className="work-card__media">
                <div className="mock"><div className="mock__bar"><i /><i /><i /></div><div className="mock__screen"><span className="mock__chip c1" /><span className="mock__chip c2" /><span className="mock__chip c3" /></div></div>
                <span className="media-note">Project · Growth &amp; SEO</span>
              </div>
              <div className="work-card__body">
                <div className="work-card__top"><span className="work-card__title">Growth &amp; SEO</span></div>
                <div className="work-card__metric"><span className="v">[ result ]</span><span className="k">placeholder, add outcome</span></div>
                <div className="work-card__foot"><div className="tags"><span className="tag">Marketing</span><span className="tag">Strategy</span></div></div>
              </div>
            </Link>
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

      {/* ===== METRICS ===== */}
      <section className="section section--tight">
        <div className="wrap">
          <div className="metrics card" style={{ padding: "var(--s5) var(--s4)" }} data-reveal>
            <div className="metric"><div className="metric__v"><span data-count="40">0</span><span className="suf">+</span></div><div className="metric__l">Projects delivered end-to-end</div></div>
            <div className="metric"><div className="metric__v"><span data-count="4">0</span></div><div className="metric__l">Disciplines under one roof</div></div>
            <div className="metric"><div className="metric__v"><span className="pre">&lt;</span><span data-count="1">0</span><span className="suf">&nbsp;wk</span></div><div className="metric__l">To a first working draft</div></div>
            <div className="metric"><div className="metric__v"><span className="pre">&lt;</span><span data-count="2">0</span><span className="suf">&nbsp;hr</span></div><div className="metric__l">Average response time</div></div>
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
            <div className="step card" data-reveal data-reveal-delay="3"><div className="step__n">04</div><div className="step__line" /><div className="step__title">Grow</div><div className="step__desc">Optimize, market, and scale with 24/7 support.</div></div>
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
            <div className="card card--hover commit-card" data-reveal><div className="card__icon"><Zap /></div><div className="commit-card__title">Fast Delivery</div><div className="commit-card__desc">A first working draft within a week of kick-off, so you see results sooner.</div></div>
            <div className="card card--hover commit-card" data-reveal data-reveal-delay="1"><div className="card__icon"><LifeBuoy /></div><div className="commit-card__title">Ongoing Support</div><div className="commit-card__desc">For urgent issues, we aim to respond within roughly two hours.</div></div>
            <div className="card card--hover commit-card" data-reveal data-reveal-delay="2"><div className="card__icon"><ShieldCheck /></div><div className="commit-card__title">Secure &amp; Compliant</div><div className="commit-card__desc">We build security and compliance in from day one, across everything we deliver.</div></div>
            <div className="card card--hover commit-card" data-reveal><div className="card__icon"><TrendingUp /></div><div className="commit-card__title">Built to Scale</div><div className="commit-card__desc">Strategy and architecture so your solution grows along with your business.</div></div>
            <div className="card card--hover commit-card" data-reveal data-reveal-delay="1"><div className="card__icon"><BadgeDollarSign /></div><div className="commit-card__title">Transparent Pricing</div><div className="commit-card__desc">Competitive global rates with no hidden fees or unexpected charges.</div></div>
            <div className="card card--hover commit-card" data-reveal data-reveal-delay="2"><div className="card__icon"><Users /></div><div className="commit-card__title">Expert Team</div><div className="commit-card__desc">Senior strategists, designers, marketers, and engineers delivering tailored work.</div></div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section section--tight">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="kicker"><span className="num">05</span> · WHAT CLIENTS SAY</span>
            <h2 className="h2">Results, in their words.</h2>
          </div>
          <div className="quotes" style={{ marginTop: "var(--s5)" }}>
            <div className="card quote" data-reveal>
              <p className="quote__text">"They shaped the strategy, designed the brand, and shipped the product faster than teams 3× their size. One team, start to finish."</p>
              <div className="quote__person"><span className="quote__avatar">DK</span><div><div className="quote__name">[ Client name ]</div><div className="quote__role">CTO · [ Company ] · placeholder</div></div></div>
            </div>
            <div className="card quote" data-reveal data-reveal-delay="1">
              <p className="quote__text">"From first call to launch, Garagol owned the hard parts (strategy, brand, build, growth) and kept us in the loop the entire way."</p>
              <div className="quote__person"><span className="quote__avatar">MR</span><div><div className="quote__name">[ Client name ]</div><div className="quote__role">Founder · [ Company ] · placeholder</div></div></div>
            </div>
            <div className="card quote" data-reveal data-reveal-delay="2">
              <p className="quote__text">"Senior people who actually deliver. Our results speak for themselves, and so does our roadmap velocity."</p>
              <div className="quote__person"><span className="quote__avatar">AS</span><div><div className="quote__name">[ Client name ]</div><div className="quote__role">VP Eng · [ Company ] · placeholder</div></div></div>
            </div>
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
            <p className="lead">Transparent scoping, a first draft within a week, and no hidden fees. Tell us what you're working on and we'll come back with a clear plan.</p>
            <div className="cta-panel__btns">
              <Link to="/contact" className="btn btn--primary btn--lg">Start a project <ArrowRight className="arrow" /></Link>
              <Link to="/contact#call" className="btn btn--ghost btn--lg">Book a discovery call</Link>
            </div>
            <div className="cta-panel__chips">
              <span className="tag">Transparent scoping</span><span className="tag">First draft in a week</span><span className="tag">No hidden fees</span><span className="tag">You own everything</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
