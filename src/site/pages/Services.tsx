import { Link } from "react-router-dom";
import {
  ArrowRight, Compass, Palette, Megaphone, Code2,
  Workflow, Lightbulb, Telescope,
  Brush, Layout, Monitor, Sparkles,
  Search, TrendingUp, FileText, Share2, BarChart3,
  Smartphone, Cloud, Database, ShieldCheck,
} from "lucide-react";
import { useReveal } from "../lib/useReveal";

export default function Services() {
  useReveal();
  return (
    <main>
      <section className="page-hero">
        <div className="glow glow--purple" />
        <div className="wrap">
          <span className="kicker" data-reveal><span className="num">02</span> : SERVICES</span>
          <h1 data-reveal>We advise and we build, across everything digital.</h1>
          <p className="lead" data-reveal data-reveal-delay="1">Four pillars, one senior team. A digital consultancy and studio that plans the strategy, shapes the brand, drives the growth, and engineers the product. Engage one pillar or all of them.</p>
          <div className="hero__cta" style={{ marginTop: 28 }} data-reveal data-reveal-delay="2">
            <Link to="/contact" className="btn btn--primary btn--lg">Start a project <ArrowRight className="arrow" /></Link>
            <Link to="/pricing" className="btn btn--ghost btn--lg">See pricing</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          {/* STRATEGY */}
          <div className="pillar" id="strategy">
            <div className="pillar__head" data-reveal>
              <div className="pillar__icon"><Compass /></div>
              <span className="kicker"><span className="num">01</span></span>
              <h2 className="pillar__title">Strategy &amp; Consulting</h2>
              <p className="pillar__promise">Plan your digital future with confidence.</p>
              <Link to="/work" className="link-arrow" style={{ marginTop: 18 }}>Relevant work <ArrowRight className="arrow" /></Link>
            </div>
            <div className="pillar__cols" data-reveal data-reveal-delay="1">
              <div className="pillar__block">
                <h4>What we do</h4>
                <ul className="svc-list">
                  <li><Compass /> Digital Strategy</li>
                  <li><Workflow /> Digital Transformation</li>
                  <li><Lightbulb /> IT Consulting</li>
                  <li><Telescope /> Discovery &amp; Roadmapping</li>
                </ul>
              </div>
              <div className="pillar__block">
                <h4>Typical deliverables</h4>
                <div className="deliverables"><span className="tag">Digital roadmap</span><span className="tag">Tech strategy</span><span className="tag">Discovery report</span><span className="tag">Opportunity audit</span><span className="tag">Transformation plan</span></div>
              </div>
            </div>
          </div>
          {/* BRAND */}
          <div className="pillar" id="brand">
            <div className="pillar__head" data-reveal>
              <div className="pillar__icon"><Palette /></div>
              <span className="kicker"><span className="num">02</span></span>
              <h2 className="pillar__title">Brand &amp; Design</h2>
              <p className="pillar__promise">Look the part, everywhere you show up.</p>
              <Link to="/work" className="link-arrow" style={{ marginTop: 18 }}>Relevant work <ArrowRight className="arrow" /></Link>
            </div>
            <div className="pillar__cols" data-reveal data-reveal-delay="1">
              <div className="pillar__block">
                <h4>What we do</h4>
                <ul className="svc-list">
                  <li><Brush /> Brand Identity</li>
                  <li><Layout /> UI/UX Design</li>
                  <li><Monitor /> Web Design</li>
                  <li><Sparkles /> Creative</li>
                </ul>
              </div>
              <div className="pillar__block">
                <h4>Typical deliverables</h4>
                <div className="deliverables"><span className="tag">Brand kit</span><span className="tag">Design system</span><span className="tag">Website design</span><span className="tag">Product UI</span><span className="tag">Creative assets</span></div>
              </div>
            </div>
          </div>
          {/* MARKETING */}
          <div className="pillar" id="marketing">
            <div className="pillar__head" data-reveal>
              <div className="pillar__icon"><Megaphone /></div>
              <span className="kicker"><span className="num">03</span></span>
              <h2 className="pillar__title">Marketing &amp; Growth</h2>
              <p className="pillar__promise">Get found, and grow.</p>
              <Link to="/work" className="link-arrow" style={{ marginTop: 18 }}>Relevant work <ArrowRight className="arrow" /></Link>
            </div>
            <div className="pillar__cols" data-reveal data-reveal-delay="1">
              <div className="pillar__block">
                <h4>What we do</h4>
                <ul className="svc-list">
                  <li><Search /> SEO</li>
                  <li><TrendingUp /> Digital Marketing</li>
                  <li><FileText /> Content</li>
                  <li><Share2 /> Social</li>
                  <li><BarChart3 /> Analytics</li>
                </ul>
              </div>
              <div className="pillar__block">
                <h4>Typical deliverables</h4>
                <div className="deliverables"><span className="tag">SEO audit</span><span className="tag">Campaign plan</span><span className="tag">Content calendar</span><span className="tag">Social strategy</span><span className="tag">Growth dashboards</span></div>
              </div>
            </div>
          </div>
          {/* BUILD */}
          <div className="pillar" id="build">
            <div className="pillar__head" data-reveal>
              <div className="pillar__icon"><Code2 /></div>
              <span className="kicker"><span className="num">04</span></span>
              <h2 className="pillar__title">Build &amp; Engineering</h2>
              <p className="pillar__promise">Ship secure, scalable products.</p>
              <Link to="/work" className="link-arrow" style={{ marginTop: 18 }}>Relevant work <ArrowRight className="arrow" /></Link>
            </div>
            <div className="pillar__cols" data-reveal data-reveal-delay="1">
              <div className="pillar__block">
                <h4>What we do</h4>
                <ul className="svc-list">
                  <li><Smartphone /> Web &amp; Mobile Development</li>
                  <li><Cloud /> Cloud &amp; DevOps</li>
                  <li><Database /> Data &amp; AI</li>
                  <li><ShieldCheck /> Cybersecurity</li>
                </ul>
              </div>
              <div className="pillar__block">
                <h4>Typical deliverables</h4>
                <div className="deliverables"><span className="tag">Web app</span><span className="tag">iOS &amp; Android apps</span><span className="tag">Cloud infrastructure</span><span className="tag">Data &amp; AI pipeline</span><span className="tag">Security audit</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" id="process">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="kicker"><span className="num">03</span> : HOW WE WORK</span>
            <h2 className="h2">Efficient steps, measurable results.</h2>
          </div>
          <div className="steps" style={{ marginTop: "var(--s5)" }}>
            <div className="step card" data-reveal><div className="step__n">01</div><div className="step__line" /><div className="step__title">Connect</div><div className="step__desc">Define your vision, challenges, and goals.</div></div>
            <div className="step card" data-reveal data-reveal-delay="1"><div className="step__n">02</div><div className="step__line" /><div className="step__title">Collaborate</div><div className="step__desc">Shape the strategy, brand, and solution together.</div></div>
            <div className="step card" data-reveal data-reveal-delay="2"><div className="step__n">03</div><div className="step__line" /><div className="step__title">Create</div><div className="step__desc">Design, build, and launch seamlessly.</div></div>
            <div className="step card" data-reveal data-reveal-delay="3"><div className="step__n">04</div><div className="step__line" /><div className="step__title">Grow</div><div className="step__desc">Measure, optimize, and scale with ongoing support.</div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-panel" data-reveal>
            <div className="glow glow--purple" />
            <h2 className="h2">Not sure which you need?</h2>
            <p className="lead">Run the 5-question estimate and we will map the right mix of strategy, design, marketing, and engineering to your goals. Free, no commitment.</p>
            <div className="cta-panel__btns"><Link to="/contact#estimate" className="btn btn--primary btn--lg">Get an estimate <ArrowRight className="arrow" /></Link><Link to="/contact" className="btn btn--ghost btn--lg">Talk to us</Link></div>
          </div>
        </div>
      </section>
    </main>
  );
}
