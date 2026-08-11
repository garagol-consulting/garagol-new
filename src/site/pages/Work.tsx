import { Link } from "react-router-dom";
import { useRevealV3, useMagnet } from "../lib/v3fx";

const IG = "/case-studies/ignify";

// Truth gates: quotes are drafted for sign-off and render only in dev builds
// (with a DRAFT flag) until the person approves. Flip to true on approval.
const SIGNED = { kevin: false, ayna: false, ata: false, maya: false };
const showQuote = (k: keyof typeof SIGNED) => SIGNED[k] || import.meta.env.DEV;

function Quote({ k, text, by }: { k: keyof typeof SIGNED; text: string; by: string }) {
  if (!showQuote(k)) return null;
  return (
    <blockquote className="g3-miniquote">
      "{text}"
      <cite>
        {by}
        {!SIGNED[k] && <span className="g3-flag" style={{ marginLeft: 10 }}>Draft · pending sign-off</span>}
      </cite>
    </blockquote>
  );
}

export default function Work() {
  useRevealV3();
  useMagnet();
  return (
    <main className="g3" id="main">
      <header style={{ padding: "calc(68px + clamp(48px,9vh,110px)) var(--g3-gutter) clamp(32px,5vh,56px)" }}>
        <h1 className="g3-wp-h1" data-rv="0">Work<span className="g3-dot">.</span></h1>
        <p data-rv="80" style={{ margin: "24px 0 0", fontSize: "clamp(16px,1.5vw,20px)", color: "var(--g3-mist)", maxWidth: "54ch", lineHeight: 1.5 }}>
          Client work and our own products. Everything here is real: live, in build, or shown on request.
        </p>
      </header>

      {/* ===== NAMED CASES ===== */}
      <section style={{ padding: "0 var(--g3-gutter)" }}>

        {/* 01 · IGNIFY (client: IGNIFY Incorporated) */}
        <article className="g3-row" data-rv="0">
          <div className="g3-row__media" style={{ background: "var(--g3-lake-950)" }}>
            <span className="g3-stack" aria-hidden="true">
              <img src={`${IG}/hero-teacher-review.png`} alt="" loading="lazy" width={362} height={787} />
              <img src={`${IG}/owner-dashboard.png`} alt="" loading="lazy" width={340} height={739} />
              <img src={`${IG}/family-report.png`} alt="" loading="lazy" width={340} height={739} />
            </span>
          </div>
          <div>
            <div className="g3-row__num">01</div>
            <h2 className="g3-row__title">
              <img src="/work/ignify-logo-white.png" alt="IGNIFY" />
            </h2>
            <p className="g3-row__body">
              IGNIFY Incorporated hired Garagol to take their studio-management platform from zero to live:
              product design, the apps, the website, an admin web portal, serverless AWS backend, AI
              lesson-report pipeline, and payments. Live at a real academy since 2025, with 99.99% uptime
              on the platform we operate.
            </p>
            <div style={{ marginTop: 18 }}>
              <div className="g3-subrow"><strong>iOS &amp; Android apps</strong><span>Live</span></div>
              <div className="g3-subrow"><strong>ignify.us website</strong><a className="g3-action" href="https://ignify.us" target="_blank" rel="noreferrer">Visit ↗</a></div>
              <div className="g3-subrow"><strong>Admin web portal</strong><span>Live · private</span></div>
            </div>
            <div className="g3-chips">
              <span className="g3-chip">Client work</span><span className="g3-chip">Apps &amp; platforms</span><span className="g3-chip">We operate it</span>
            </div>
            <div style={{ marginTop: 20 }}><Link className="g3-action" to="/work/ignify">Case study →</Link></div>
          </div>
        </article>

        {/* 02 · ignify.us website */}
        <article className="g3-row g3-row--rev" data-rv="0">
          <div className="g3-row__media">
            <img src="/work/ignifyus-shot.jpg" alt="The ignify.us website" loading="lazy" width={1600} height={1000} />
          </div>
          <div>
            <div className="g3-row__num">02</div>
            <h2 className="g3-row__title">ignify.us</h2>
            <p className="g3-row__body">
              IGNIFY's public site: positioning, copy, design, and build, including an interactive
              in-browser product demo. Same engagement, separate craft: this is what our website work
              looks like.
            </p>
            <div className="g3-chips">
              <span className="g3-chip">Client work</span><span className="g3-chip">Websites</span>
            </div>
            <div style={{ marginTop: 20 }}><a className="g3-action" href="https://ignify.us" target="_blank" rel="noreferrer">Visit live ↗</a></div>
          </div>
        </article>

        {/* 03 · Midtec */}
        <article className="g3-row" data-rv="0">
          <div className="g3-row__media">
            <img src="/work/midtec-shot.jpg" alt="The redesigned midtec.com" loading="lazy" width={1600} height={1000} />
          </div>
          <div>
            <div className="g3-row__num">03</div>
            <h2 className="g3-row__title">Midtec Associates</h2>
            <p className="g3-row__body">
              Complete website redesign for an independent manufacturers' representative for electronic
              components, serving Mid-America since 1977. Live at midtec.com.
            </p>
            <Quote k="kevin" text="Easy to work with, quick to deliver, and the new site looks sharp everywhere. Exactly what we needed." by="Kevin Vincent · Midtec Associates" />
            <div className="g3-chips">
              <span className="g3-chip">Client work</span><span className="g3-chip">Websites</span><span className="g3-chip">Brand</span>
            </div>
            <div style={{ marginTop: 20 }}><a className="g3-action" href="https://midtec.com" target="_blank" rel="noreferrer">Visit live ↗</a></div>
          </div>
        </article>

        {/* 04 · turkmen.biz */}
        <article className="g3-row g3-row--rev" data-rv="0">
          <div className="g3-row__media">
            <img src="/work/turkmenbiz-shot.jpg" alt="The turkmen.biz platform" loading="lazy" width={1600} height={1000} />
          </div>
          <div>
            <div className="g3-row__num">04</div>
            <h2 className="g3-row__title">
              <img src="/work/turkmenbiz-logo.png" alt="" style={{ height: 28 }} />
              turkmen.biz
            </h2>
            <p className="g3-row__body">
              Our own venture: a multilingual business directory and marketplace for Turkmen businesses
              at home and abroad. We designed it, built it, and operate it.
            </p>
            <Quote k="ayna" text="Allamyrat took an idea we kept talking about and turned it into a real platform our community actually uses. Design, build, and running it: he handled all of it." by="Ayna Pirkuliyeva · turkmen.biz" />
            <div className="g3-chips">
              <span className="g3-chip">Our venture</span><span className="g3-chip">Platforms</span><span className="g3-chip">Multilingual</span>
            </div>
            <div style={{ marginTop: 20 }}><a className="g3-action" href="https://turkmen.biz" target="_blank" rel="noreferrer">Visit live ↗</a></div>
          </div>
        </article>

        {/* 05 · MAKC website (in progress) */}
        <article className="g3-row" data-rv="0">
          <div className="g3-row__media g3-row__media--empty">
            <span className="g3-label" style={{ color: "var(--g3-mist-deep)" }}>In build · 2026</span>
          </div>
          <div>
            <div className="g3-row__num">05</div>
            <h2 className="g3-row__title">Music Academy of Kansas City</h2>
            <p className="g3-row__body">
              A new public website for the academy, in build now. Related to, but separate from, IGNIFY:
              the academy also runs on the platform we built and operate.
            </p>
            <Quote k="maya" text="The new site captures who we are, and working with Garagol was effortless. They knew our world before we said a word." by="Dr. Maya Tuylieva · Music Academy of Kansas City" />
            <div className="g3-chips">
              <span className="g3-chip">Client work</span><span className="g3-chip">Websites</span><span className="g3-chip">In progress</span>
            </div>
          </div>
        </article>
      </section>

      {/* ===== ALSO BUILT & IN BUILD ===== */}
      <section className="g3-section g3-section--line" style={{ paddingTop: "clamp(40px,6vh,64px)" }}>
        <div className="g3-label g3-section-label" data-rv="0">Also built, and in build</div>
        <div className="g3-shelf">
          <div className="g3-shelfcard" data-rv="0">
            <span className="g3-status">In build · 2026</span>
            <strong>Service Auto</strong>
            <p>Field-service platform for lawn-care crews: routes, verified visits, invoicing, and a live day board.</p>
          </div>
          <div className="g3-shelfcard" data-rv="60">
            <span className="g3-status">In build · 2026</span>
            <strong>Mesele Ýok</strong>
            <p>A two-sided home-services marketplace for Tehnika Dünýäsi, Ashgabat: one app for customers, one for specialists.</p>
          </div>
          <div className="g3-shelfcard" data-rv="120">
            <span className="g3-status">Designed · 2026</span>
            <strong>Mesele Ýok Operator</strong>
            <p>The marketplace's back office: dispatch board, roster, order flows, and reporting console.</p>
          </div>
          <div className="g3-shelfcard" data-rv="180">
            <span className="g3-status">Designed · 2026</span>
            <strong>Bilet Daýza</strong>
            <p>Mobile ticketing for cinemas and events: browse, book, and an offline QR ticket at the gate.</p>
          </div>
        </div>
        <p data-rv="200" style={{ margin: "18px 0 0", fontSize: 13, color: "var(--g3-mist-deep)" }}>Screens for these land here as each ships. Walkthroughs on request.</p>
      </section>

      {/* ===== PRACTICES ===== */}
      <section className="g3-section" style={{ paddingTop: 0 }}>
        <div className="g3-label g3-section-label" data-rv="0">Ongoing practices</div>
        <div>
          <div className="g3-practice" data-rv="0">
            <h3>Cybersecurity consulting</h3>
            <div>
              <p>Assessments, hardening, MFA and SSO baselines, and practical fixes for client teams, led by a working security engineer.</p>
              <Quote k="ata" text="Thorough and practical. Clear findings, clear fixes, no scare tactics. We closed real gaps fast." by="Ata Kakajanow · Cybersecurity client" />
            </div>
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
