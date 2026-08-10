import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useReveal } from "../lib/useReveal";

// Real projects only. No placeholders: every card here is checkable.
export default function Work() {
  useReveal();
  return (
    <main>
      <section className="page-hero">
        <div className="glow glow--purple" />
        <div className="wrap">
          <span className="kicker" data-reveal><span className="num">01</span> SELECTED WORK</span>
          <div className="page-hero__row">
            <h1 data-reveal>Real work, all of it checkable.</h1>
          </div>
          <p className="lead" data-reveal data-reveal-delay="1">
            We only show work you can verify: platforms we operate, sites that are live, drafts you can open.
            More case studies land here as we publish them.
          </p>
        </div>
      </section>

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="work-grid" data-reveal data-reveal-delay="1">
            <Link to="/work/ignify" className="card card--hover work-card work-card--flag">
              <div className="work-card__media">
                <img className="work-card__img" loading="lazy" width={1280} height={720} src="/case-studies/ignify/studio-cover.jpg" alt="The Music Academy of Kansas City, running on IGNIFY" />
                <span className="tag tag--purple mock__tag">Flagship</span>
              </div>
              <div className="work-card__body">
                <div className="work-card__top">
                  <span className="work-card__title">IGNIFY</span>
                  <span className="tag tag--green">Live</span>
                </div>
                <p className="muted" style={{ fontSize: "var(--fs-sm)", marginTop: -4 }}>
                  A full SaaS platform for class-based studios: mobile apps, cloud backend, AI reports, payments.
                  Designed, built, and operated by Garagol; live at the Music Academy of Kansas City since 2025.
                </p>
                <div className="work-card__foot">
                  <div className="tags"><span className="tag">Mobile</span><span className="tag">Cloud</span><span className="tag">AI</span><span className="tag">Payments</span></div>
                  <span className="link-arrow">Case study <ArrowRight className="arrow" /></span>
                </div>
              </div>
            </Link>

            <a href="https://turkmen.biz" target="_blank" rel="noreferrer" className="card card--hover work-card">
              <div className="work-card__body">
                <div className="work-card__top">
                  <span className="work-card__title">turkmen.biz</span>
                  <span className="tag tag--green">Live</span>
                </div>
                <p className="muted" style={{ fontSize: "var(--fs-sm)", marginTop: -4 }}>
                  A business directory and marketplace for Turkmen businesses: profiles, content publishing, and
                  multilingual UI. Designed, built, and operated by Garagol.
                </p>
                <div className="work-card__foot">
                  <div className="tags"><span className="tag">Web</span><span className="tag">Brand</span><span className="tag">Build</span></div>
                  <span className="link-arrow">Visit live <ArrowRight className="arrow" /></span>
                </div>
              </div>
            </a>

            <a href="https://www.garagol.com/midtec/" target="_blank" rel="noreferrer" className="card card--hover work-card">
              <div className="work-card__body">
                <div className="work-card__top">
                  <span className="work-card__title">Midtec Associates</span>
                  <span className="tag">Concept</span>
                </div>
                <p className="muted" style={{ fontSize: "var(--fs-sm)", marginTop: -4 }}>
                  A complete website redesign concept for an industrial equipment firm, live as a working draft
                  you can browse today.
                </p>
                <div className="work-card__foot">
                  <div className="tags"><span className="tag">Brand</span><span className="tag">Web</span></div>
                  <span className="link-arrow">View the draft <ArrowRight className="arrow" /></span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-panel" data-reveal>
            <div className="glow glow--purple" />
            <h2 className="h2">Building something?</h2>
            <p className="lead">Tell us what you're working on and we'll come back with a clear, written plan.</p>
            <div className="cta-panel__btns"><Link to="/contact" className="btn btn--primary btn--lg">Start a project <ArrowRight className="arrow" /></Link><Link to="/contact#estimate" className="btn btn--ghost btn--lg">Request an estimate</Link></div>
          </div>
        </div>
      </section>
    </main>
  );
}
