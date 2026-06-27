import { Link } from "react-router-dom";
import { useReveal } from "../lib/useReveal";
import PhoneFrame from "../components/PhoneFrame";
import IgnifySequence from "../components/IgnifySequence";

const IMG = "/case-studies/ignify";

const ROLES = [
  "Strategy and product definition",
  "Product and brand design",
  "iOS and Android apps",
  "Web console",
  "Serverless AWS backend",
  "AI lesson-report pipeline",
  "Payments",
  "Security",
];

export default function CaseIgnify() {
  useReveal();
  return (
    <main className="cs">
      {/* ===== HERO ===== */}
      <section className="cs-hero">
        <div className="cs-wrap">
          <div className="cs-eyebrow" data-reveal>Case study</div>
          <h1 className="cs-title" data-reveal>IGNIFY</h1>
          <p className="cs-standfirst" data-reveal data-reveal-delay="1">
            The operating system for class-based learning businesses. We designed and built all of it.
          </p>
          <div className="cs-hero__row" data-reveal data-reveal-delay="2">
            <div className="cs-hero__meta">
              <div className="cs-meta">
                <div className="cs-meta__cell"><span className="cs-meta__k">Client</span><span className="cs-meta__v">IGNIFY</span></div>
                <div className="cs-meta__cell"><span className="cs-meta__k">Year</span><span className="cs-meta__v">2025 to 2026</span></div>
                <div className="cs-meta__cell cs-meta__cell--full"><span className="cs-meta__k">Role</span><span className="cs-meta__v">Strategy, Product design, Engineering</span></div>
                <div className="cs-meta__cell cs-meta__cell--full"><span className="cs-meta__k">Build</span><span className="cs-meta__v">iOS and Android, Web console, Cloud (AWS), AI pipeline, Payments</span></div>
                <div className="cs-meta__cell cs-meta__cell--full"><span className="cs-meta__k">Stage</span><span className="cs-meta__v">Zero to live</span></div>
              </div>
            </div>
            <div className="cs-hero__phone">
              <PhoneFrame glow>
                <img src={`${IMG}/hero-teacher-review.png`} width={720} height={1565} alt="A teacher reviewing an AI-drafted lesson report in the IGNIFY app" />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="cs-sec">
        <div className="cs-wrap">
          <div className="cs-rule" data-reveal style={{ marginBottom: "clamp(26px,4vw,40px)" }}><span className="cs-rule__n">01</span><span className="cs-rule__line" /></div>
          <h2 className="cs-h2" data-reveal style={{ maxWidth: "18ch" }}>Class-based studios run on a patchwork.</h2>
          <p className="cs-p" data-reveal>
            Music schools, dance studios, and martial arts academies stitch together paper, spreadsheets, group chats, and a separate billing tool. Teachers write parent updates late at night, or skip them. Families feel out of the loop. Owners run the whole business across five disconnected apps.
          </p>
        </div>
      </section>

      {/* ===== INSIGHT ===== */}
      <section className="cs-sec cs-sec--alt">
        <div className="cs-wrap">
          <div className="cs-rule" data-reveal style={{ marginBottom: "clamp(26px,4vw,40px)" }}><span className="cs-rule__n">02</span><span className="cs-rule__line" /></div>
          <h2 className="cs-h2" data-reveal style={{ maxWidth: "20ch" }}>Start with the one moment that happens every day.</h2>
          <p className="cs-p" data-reveal>
            The lesson report is the daily emotional touchpoint between a studio and a family. Make that effortless and you earn the right to run everything else. IGNIFY drafts each report with AI, the teacher approves it in a tap, and the family receives something clear and warm. Scheduling, roster, team, and billing then live in the same place.
          </p>
        </div>
      </section>

      {/* ===== SIGNATURE SEQUENCE ===== */}
      <section>
        <div className="cs-wrap" style={{ padding: "clamp(80px,11vw,150px) clamp(24px,6vw,120px) 0" }}>
          <div className="cs-rule" data-reveal><span className="cs-rule__n">03</span><span className="cs-rule__line" /><span className="cs-rule__label">The daily loop</span></div>
        </div>
        <IgnifySequence />
      </section>

      {/* ===== THE CONNECTED LOOP ===== */}
      <section className="cs-sec">
        <div className="cs-wrap">
          <div className="cs-rule" data-reveal style={{ marginBottom: "clamp(26px,4vw,40px)" }}><span className="cs-rule__n">04</span><span className="cs-rule__line" /></div>
          <h2 className="cs-h2" data-reveal style={{ maxWidth: "18ch" }}>One connected loop, not five tools.</h2>
          <p className="cs-p" data-reveal style={{ maxWidth: "56ch", margin: "clamp(24px,3vw,32px) 0 0" }}>
            Scheduling, roster, staff, and billing run in the same place the reports come from.
          </p>

          <div className="cs-row" data-reveal>
            <div className="cs-row__media"><PhoneFrame caption="Dashboard"><img src={`${IMG}/owner-dashboard.png`} width={720} height={1565} alt="The IGNIFY owner dashboard" /></PhoneFrame></div>
            <p className="cs-lead-lg">The whole studio at a glance, the moment you open it.</p>
          </div>

          <div className="cs-row cs-row--rev" data-reveal>
            <p className="cs-lead-lg cs-lead-lg--right">Scheduling everyone can see, in one shared place.</p>
            <div className="cs-row__media"><PhoneFrame caption="Scheduling"><img src={`${IMG}/owner-calendar.png`} width={720} height={1565} alt="The IGNIFY scheduling calendar" /></PhoneFrame></div>
          </div>

          <div className="cs-montage" data-reveal>
            <PhoneFrame caption="Roster"><img src={`${IMG}/owner-students.png`} width={720} height={1565} alt="The IGNIFY student roster" /></PhoneFrame>
            <PhoneFrame caption="Team"><img src={`${IMG}/owner-team.png`} width={720} height={1565} alt="IGNIFY team management" /></PhoneFrame>
            <PhoneFrame caption="Billing"><img src={`${IMG}/owner-transactions.png`} width={720} height={1565} alt="IGNIFY billing and transactions" /></PhoneFrame>
            <PhoneFrame caption="Family"><img src={`${IMG}/family-reports-list.png`} width={720} height={1565} alt="A family's lesson-report history" /></PhoneFrame>
            <PhoneFrame caption="Account"><img src={`${IMG}/family-account.png`} width={720} height={1565} alt="The family account screen" /></PhoneFrame>
          </div>
        </div>
      </section>

      {/* ===== PROOF ===== */}
      <section className="cs-proof">
        <div className="cs-proof__pad" style={{ paddingBottom: "clamp(48px,7vw,90px)" }}>
          <div className="cs-rule" data-reveal><span className="cs-rule__n">05</span><span className="cs-rule__line" /></div>
        </div>
        <div className="cs-proof__media" data-reveal>
          <img src={`${IMG}/studio-cover.jpg`} width={1280} height={720} alt="The Music Academy of Kansas City" />
        </div>
        <div className="cs-proof__pad" style={{ paddingTop: "clamp(56px,8vw,100px)" }}>
          <h2 className="cs-h2" data-reveal style={{ maxWidth: "16ch" }}>Live in a real studio today.</h2>
          <p className="cs-p" data-reveal style={{ maxWidth: "58ch", margin: "clamp(24px,3vw,34px) 0 0" }}>
            The Music Academy of Kansas City, IGNIFY's first studio, runs day to day on the platform.
          </p>
          <div className="cs-proof__photo" data-reveal>
            <img src={`${IMG}/studio-piano-room.jpg`} width={1280} height={800} alt="A piano room at the Music Academy of Kansas City" />
          </div>
          <figure data-reveal style={{ margin: "clamp(72px,10vw,128px) 0 0", maxWidth: "62ch" }}>
            <span className="cs-pill">Placeholder</span>
            <blockquote className="cs-quote">[PLACEHOLDER: one sentence from the studio owner, with name and role]</blockquote>
          </figure>
          <div data-reveal style={{ marginTop: "clamp(48px,6vw,80px)" }}>
            <div style={{ fontFamily: "'Geist Mono',ui-monospace,monospace", fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "#52525b", marginBottom: 16 }}>Optional metric strip</div>
            <div className="cs-metrics">
              <div className="cs-metric"><div className="cs-metric__v">00</div><div className="cs-metric__k">[PLACEHOLDER label]</div></div>
              <div className="cs-metric"><div className="cs-metric__v">00</div><div className="cs-metric__k">[PLACEHOLDER label]</div></div>
              <div className="cs-metric"><div className="cs-metric__v">00</div><div className="cs-metric__k">[PLACEHOLDER label]</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BUILT END TO END ===== */}
      <section className="cs-sec">
        <div className="cs-wrap">
          <div className="cs-rule" data-reveal style={{ marginBottom: "clamp(26px,4vw,40px)" }}><span className="cs-rule__n">06</span><span className="cs-rule__line" /></div>
          <h2 className="cs-h2" data-reveal style={{ maxWidth: "18ch" }}>Garagol designed and built all of it.</h2>
          <div className="cs-roles" data-reveal>
            {ROLES.map((r, i) => (
              <div className="cs-role" key={r}>
                <span className="cs-role__n">{String(i + 1).padStart(2, "0")}</span>
                <span className="cs-role__t">{r}</span>
              </div>
            ))}
          </div>
          <p className="cs-p" data-reveal style={{ maxWidth: "46ch", margin: "clamp(44px,6vw,72px) 0 0", fontSize: "clamp(18px,1.7vw,22px)", lineHeight: 1.5 }}>
            One senior team, from the first sketch to the live platform.
          </p>
        </div>
      </section>

      {/* ===== LIVE LINK + NEXT ===== */}
      <section style={{ padding: "clamp(72px,9vw,120px) clamp(24px,6vw,120px) clamp(96px,12vw,150px)" }}>
        <div className="cs-wrap">
          <a className="cs-applink" href="/hero/mobile-app.html" target="_blank" rel="noopener">
            Open the live app <span className="cs-applink__arrow">&#8599;</span>
          </a>
          <span className="cs-applink-note">the running platform</span>
          <div className="cs-next">
            <Link to="/work" className="cs-next__big">Next project <span className="cs-arrow">&rarr;</span></Link>
            <Link to="/contact" className="cs-next__link">Start a project</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
