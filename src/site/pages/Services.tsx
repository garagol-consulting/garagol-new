import { Link } from "react-router-dom";
import {
  ArrowRight, Rocket, Code, Palette, Cloud, ShieldCheck, GitBranch,
  Gauge, Lock, Settings, BarChart3, Database, Sparkles, Compass,
  Target, Globe,
} from "lucide-react";
import { useReveal } from "../lib/useReveal";

export default function Services() {
  useReveal();
  return (
    <main>
      <section className="page-hero">
        <div className="glow glow--purple" />
        <div className="wrap">
          <span className="kicker" data-reveal><span className="num">02</span> — SERVICES</span>
          <h1 data-reveal>Everything it takes to build and run great software.</h1>
          <p className="lead" data-reveal data-reveal-delay="1">Four pillars, one senior team. Engage one or all — from first concept to a scaled, secure product in production.</p>
          <div className="hero__cta" style={{ marginTop: 28 }} data-reveal data-reveal-delay="2">
            <Link to="/contact" className="btn btn--primary btn--lg">Start a project <ArrowRight className="arrow" /></Link>
            <Link to="/pricing" className="btn btn--ghost btn--lg">See pricing</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          {/* BUILD */}
          <div className="pillar" id="build">
            <div className="pillar__head" data-reveal>
              <div className="pillar__icon"><Rocket /></div>
              <span className="kicker"><span className="num">01</span></span>
              <h2 className="pillar__title">Build &amp; Launch</h2>
              <p className="pillar__promise">Design and develop web, mobile, and cloud-based products — from zero to launched.</p>
              <Link to="/work" className="link-arrow" style={{ marginTop: 18 }}>Relevant work <ArrowRight className="arrow" /></Link>
            </div>
            <div className="pillar__cols" data-reveal data-reveal-delay="1">
              <div className="pillar__block">
                <h4>What we do</h4>
                <ul className="svc-list">
                  <li><Code /> Web &amp; Mobile Development</li>
                  <li><Palette /> UI/UX Design</li>
                  <li><Cloud /> Cloud Solutions</li>
                </ul>
              </div>
              <div className="pillar__block">
                <h4>Typical deliverables</h4>
                <div className="deliverables"><span className="tag">Design system</span><span className="tag">iOS &amp; Android apps</span><span className="tag">Web app</span><span className="tag">API &amp; backend</span><span className="tag">Launch plan</span></div>
              </div>
            </div>
          </div>
          {/* OPTIMIZE */}
          <div className="pillar" id="optimize">
            <div className="pillar__head" data-reveal>
              <div className="pillar__icon"><ShieldCheck /></div>
              <span className="kicker"><span className="num">02</span></span>
              <h2 className="pillar__title">Optimize &amp; Secure</h2>
              <p className="pillar__promise">Improve speed, performance, and security — and keep it that way.</p>
              <Link to="/work" className="link-arrow" style={{ marginTop: 18 }}>Relevant work <ArrowRight className="arrow" /></Link>
            </div>
            <div className="pillar__cols" data-reveal data-reveal-delay="1">
              <div className="pillar__block">
                <h4>What we do</h4>
                <ul className="svc-list">
                  <li><GitBranch /> DevOps</li>
                  <li><Gauge /> Performance Tuning</li>
                  <li><Lock /> Cybersecurity</li>
                  <li><Settings /> Automation</li>
                </ul>
              </div>
              <div className="pillar__block">
                <h4>Typical deliverables</h4>
                <div className="deliverables"><span className="tag">CI/CD pipelines</span><span className="tag">Security audit</span><span className="tag">Perf report</span><span className="tag">Infra-as-code</span><span className="tag">Monitoring</span></div>
              </div>
            </div>
          </div>
          {/* DATA */}
          <div className="pillar" id="data">
            <div className="pillar__head" data-reveal>
              <div className="pillar__icon"><BarChart3 /></div>
              <span className="kicker"><span className="num">03</span></span>
              <h2 className="pillar__title">Data &amp; Insights</h2>
              <p className="pillar__promise">Make data work for you — from pipelines to predictions.</p>
              <Link to="/work" className="link-arrow" style={{ marginTop: 18 }}>Relevant work <ArrowRight className="arrow" /></Link>
            </div>
            <div className="pillar__cols" data-reveal data-reveal-delay="1">
              <div className="pillar__block">
                <h4>What we do</h4>
                <ul className="svc-list">
                  <li><Database /> Data Science</li>
                  <li><BarChart3 /> Analytics</li>
                  <li><Sparkles /> Machine Learning</li>
                </ul>
              </div>
              <div className="pillar__block">
                <h4>Typical deliverables</h4>
                <div className="deliverables"><span className="tag">Data pipeline</span><span className="tag">Dashboards</span><span className="tag">ML model</span><span className="tag">Reporting</span></div>
              </div>
            </div>
          </div>
          {/* STRATEGY */}
          <div className="pillar" id="strategy">
            <div className="pillar__head" data-reveal>
              <div className="pillar__icon"><Compass /></div>
              <span className="kicker"><span className="num">04</span></span>
              <h2 className="pillar__title">Strategy &amp; Support</h2>
              <p className="pillar__promise">Plan for growth and scale confidently — with a partner that sticks around.</p>
              <Link to="/work" className="link-arrow" style={{ marginTop: 18 }}>Relevant work <ArrowRight className="arrow" /></Link>
            </div>
            <div className="pillar__cols" data-reveal data-reveal-delay="1">
              <div className="pillar__block">
                <h4>What we do</h4>
                <ul className="svc-list">
                  <li><Target /> IT Consulting</li>
                  <li><Palette /> Branding</li>
                  <li><Globe /> Remote Work</li>
                  <li><Compass /> Digital Strategy</li>
                </ul>
              </div>
              <div className="pillar__block">
                <h4>Typical deliverables</h4>
                <div className="deliverables"><span className="tag">Roadmap</span><span className="tag">Brand kit</span><span className="tag">Tech strategy</span><span className="tag">Ongoing support</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" id="process">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="kicker"><span className="num">03</span> — HOW WE WORK</span>
            <h2 className="h2">Efficient steps, measurable results.</h2>
          </div>
          <div className="steps" style={{ marginTop: "var(--s5)" }}>
            <div className="step card" data-reveal><div className="step__n">01</div><div className="step__line" /><div className="step__title">Connect</div><div className="step__desc">Define your vision, challenges, and goals.</div></div>
            <div className="step card" data-reveal data-reveal-delay="1"><div className="step__n">02</div><div className="step__line" /><div className="step__title">Collaborate</div><div className="step__desc">Design and develop custom solutions.</div></div>
            <div className="step card" data-reveal data-reveal-delay="2"><div className="step__n">03</div><div className="step__line" /><div className="step__title">Create</div><div className="step__desc">Test, refine, and launch seamlessly.</div></div>
            <div className="step card" data-reveal data-reveal-delay="3"><div className="step__n">04</div><div className="step__line" /><div className="step__title">Support</div><div className="step__desc">Ongoing optimization and 24/7 support.</div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-panel" data-reveal>
            <div className="glow glow--purple" />
            <h2 className="h2">Not sure which you need?</h2>
            <p className="lead">Run the 5-question estimate and we'll map the right mix of services to your goals — free, no commitment.</p>
            <div className="cta-panel__btns"><Link to="/contact#estimate" className="btn btn--primary btn--lg">Get an estimate <ArrowRight className="arrow" /></Link><Link to="/contact" className="btn btn--ghost btn--lg">Talk to us</Link></div>
          </div>
        </div>
      </section>
    </main>
  );
}
