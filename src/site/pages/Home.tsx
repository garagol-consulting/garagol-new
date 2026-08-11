import { Link } from "react-router-dom";
import LakeHero from "../components/LakeHero";
import { useRevealV3, useMagnet } from "../lib/v3fx";

const IG = "/case-studies/ignify";

// Truth gate: unsigned quotes never render in production builds.
const KEVIN_SIGNED = false;

export default function Home() {
  useRevealV3();
  useMagnet();
  return (
    <main className="g3" id="main">
      {/* ===== HERO: the black lake ===== */}
      <LakeHero>
        <div className="g3-hero__inner">
          <h1 data-rv="0">
            We design and build the software your business{" "}
            <em className="g3-serif-em">runs on</em><span className="g3-dot">.</span>
          </h1>
          <div className="g3-hero__row" data-rv="120">
            <p>Garagol Consulting &amp; Solutions is a Dallas / Fort Worth studio working with local businesses, startup founders, and growing companies everywhere.</p>
            <div className="g3-hero__ctas">
              <a href="https://calendly.com/allamyrat/30min" target="_blank" rel="noreferrer" className="g3-btn" data-magnet>
                Book a 30-min call
              </a>
              <Link to="/work" className="g3-btn g3-btn--ghost" data-magnet>
                See the work
              </Link>
            </div>
          </div>
        </div>
        <div className="g3-hero__scroll" aria-hidden="true" />
      </LakeHero>

      {/* ===== PROOF, FIRST ===== */}
      <section className="g3-section g3-section--line" style={{ paddingBottom: "clamp(48px,7vh,80px)" }}>
        <div className="g3-label g3-section-label" data-rv="0">Proof, first</div>
        <div className="g3-proofwrap">
          <div className="g3-prooflist">
            <div data-rv="0">
              <p>IGNIFY Incorporated hired us to design, build, and operate their studio platform end to end: apps, website, cloud, AI, and payments.</p>
              <a className="g3-evidence g3-evidence--lead" href="https://ignify.us" target="_blank" rel="noreferrer">Live · ignify.us ↗</a>
            </div>
            <div data-rv="80">
              <p>15+ projects shipped across 6 industries since 2024.</p>
              <a className="g3-evidence" href="https://www.linkedin.com/company/garagol/" target="_blank" rel="noreferrer">Source · LinkedIn ↗</a>
            </div>
            <div data-rv="160">
              <p>Founded and led by a working security engineer: Security Engineer IV at a Fortune-500 retailer. Security is built in, not bolted on.</p>
              <Link className="g3-evidence" to="/about">Meet the founder →</Link>
            </div>
          </div>
          <figure className="g3-prooffig" data-rv="120">
            <img src={`${IG}/studio-music-class.jpg`} alt="A class in session at the Music Academy of Kansas City" loading="lazy" width={1280} height={720} />
            <figcaption>A class at the Music Academy of Kansas City, running day to day on the platform we built and operate.</figcaption>
          </figure>
        </div>
      </section>

      {/* ===== SELECTED WORK ===== */}
      <section className="g3-section" style={{ paddingTop: "clamp(48px,7vh,80px)" }}>
        <div className="g3-workhead" data-rv="0">
          <h2>Selected work<span className="g3-dot">.</span></h2>
          <Link to="/work" className="g3-action">All work →</Link>
        </div>
        <div className="g3-workgrid">
          <Link to="/work/ignify" className="g3-card g3-card--split" data-rv="0">
            <span className="g3-card__media g3-card__media--tall g3-card__media--croptl" aria-hidden="true">
              <img src="/work/ignifyus-shot.jpg" alt="" loading="lazy" width={1600} height={1000} />
            </span>
            <span className="g3-card__caption">
              <span className="g3-card__kicker">Client build · IGNIFY Incorporated · Live 2025</span>
              <span className="g3-card__title">
                <img src="/work/ignify-logo-white.png" alt="IGNIFY" style={{ height: 20, width: "auto", background: "none", padding: 0 }} />
              </span>
              <span className="g3-card__desc">The studio platform and its public site, designed, built, and operated end to end for IGNIFY Incorporated.</span>
            </span>
          </Link>
          <a href="https://midtec.com" target="_blank" rel="noreferrer" className="g3-card g3-card--split" data-rv="80">
            <span className="g3-card__media g3-card__media--tall" aria-hidden="true">
              <img src="/work/midtec-shot.jpg" alt="" loading="lazy" width={1600} height={1000} />
            </span>
            <span className="g3-card__caption">
              <span className="g3-card__kicker">Client redesign · Live at midtec.com ↗</span>
              <span className="g3-card__title">Midtec Associates</span>
              <span className="g3-card__desc">Complete website redesign for a manufacturers' rep serving Mid-America since 1977.</span>
            </span>
          </a>
          <a href="https://turkmen.biz" target="_blank" rel="noreferrer" className="g3-card g3-card--split" data-rv="160">
            <span className="g3-card__media g3-card__media--tall" aria-hidden="true">
              <img src="/work/turkmenbiz-shot.jpg" alt="" loading="lazy" width={1600} height={1000} />
            </span>
            <span className="g3-card__caption">
              <span className="g3-card__kicker">Our venture · Live ↗</span>
              <span className="g3-card__title">
                <img src="/work/turkmenbiz-logo.png" alt="" width={26} height={26} />
                turkmen.biz
              </span>
              <span className="g3-card__desc">A multilingual directory and marketplace we design, build, and operate.</span>
            </span>
          </a>
        </div>
      </section>

      {/* ===== THREE WAYS IN (bone) ===== */}
      <section className="g3-bone g3-section">
        <div className="g3-bone__head">
          <div className="g3-label" data-rv="0">Three ways in</div>
          <div className="g3-label" data-rv="0">Floors, not surprises</div>
        </div>
        <div style={{ marginTop: 28 }}>
          <Link to="/services" className="g3-offer" data-rv="0">
            <span className="g3-offer__name">Start from zero</span>
            <span className="g3-offer__desc">
              A website and an app, designed, built, and shipped end to end.
              <br />
              <span className="g3-evidence">Live · IGNIFY, built for IGNIFY Inc.</span>
            </span>
            <span className="g3-price">from $12,000 →</span>
          </Link>
          <Link to="/services" className="g3-offer" data-rv="60">
            <span className="g3-offer__name">Launch your platform</span>
            <span className="g3-offer__desc">
              You bring the idea. We design and build the web platform around it.
              <br />
              <span className="g3-evidence">Live · turkmen.biz</span>
            </span>
            <span className="g3-price">from $7,500 →</span>
          </Link>
          <Link to="/services" className="g3-offer" data-rv="120">
            <span className="g3-offer__name">Fix what you have</span>
            <span className="g3-offer__desc">
              A site you're not proud of, redesigned and modernized, with ongoing care from $3,000/mo.
              <br />
              <span className="g3-evidence">Live · midtec.com</span>
            </span>
            <span className="g3-price">from $5,000 →</span>
          </Link>
          <Link to="/services" className="g3-offer g3-offer--also" data-rv="160">
            <span>Also: cybersecurity consulting, growth marketing, and startup advisory.</span>
            <span className="g3-price">Services →</span>
          </Link>
        </div>
      </section>

      {/* ===== TESTIMONY (gated: unsigned quotes never ship to production) ===== */}
      {(KEVIN_SIGNED || import.meta.env.DEV) && (
        <section className="g3-section" style={{ borderBottom: "1px solid var(--g3-line)" }}>
          <div className="g3-quote">
            <blockquote data-rv="0">
              "Easy to work with, quick to deliver, and the new site looks sharp everywhere. Exactly what we needed."
            </blockquote>
            <div className="g3-quote__by" data-rv="80">
              <img src="/work/kevin.png" alt="Kevin Vincent" width={44} height={44} />
              <div>
                <div className="g3-quote__name">Kevin Vincent</div>
                <div className="g3-quote__role">Midtec Associates · midtec.com</div>
              </div>
              {!KEVIN_SIGNED && <span className="g3-flag">Draft · pending sign-off</span>}
            </div>
          </div>
        </section>
      )}

      {/* ===== TWO DOORS OUT ===== */}
      <section className="g3-ctagrid">
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
