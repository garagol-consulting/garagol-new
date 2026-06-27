import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Smartphone, Cloud, Sparkles } from "lucide-react";
import { useReveal } from "../lib/useReveal";
import PhoneFrame from "../components/PhoneFrame";
import IgnifyDemo from "../components/IgnifyDemo";
import AutoVideo from "../components/AutoVideo";

const IMG = "/case-studies/ignify";

const OPS: [string, string][] = [
  ["owner-dashboard", "Dashboard"],
  ["owner-calendar", "Scheduling"],
  ["owner-students", "Students"],
  ["owner-team", "Team"],
  ["owner-transactions", "Billing"],
];

export default function CaseIgnify() {
  useReveal();
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="page-hero case-hero">
        <div className="glow glow--purple" />
        <div className="wrap">
          <Link to="/work" className="link-arrow" data-reveal style={{ marginBottom: 18 }}><ArrowLeft className="arrow" /> All work</Link>
          <span className="kicker" data-reveal><span className="num">●</span> CASE STUDY · FLAGSHIP</span>
          <h1 data-reveal>IGNIFY</h1>
          <p className="lead" data-reveal data-reveal-delay="1">
            The operating system for class-based learning businesses (music schools, martial arts, dance) that turns every
            completed lesson into a clear, AI-drafted, teacher-approved report families actually read. Designed and built
            end to end by Garagol.
          </p>
          <div className="tags" style={{ marginTop: 20 }} data-reveal data-reveal-delay="1">
            <span className="tag tag--purple">Strategy</span><span className="tag tag--purple">Product Design</span>
            <span className="tag tag--purple">Mobile</span><span className="tag tag--purple">Cloud</span><span className="tag tag--purple">AI</span>
          </div>
          <div className="meta-row" data-reveal data-reveal-delay="2">
            <div><span className="k">Client</span><span className="v">IGNIFY</span></div>
            <div><span className="k">Year</span><span className="v">2025 to 2026</span></div>
            <div><span className="k">Services</span><span className="v">Product design · iOS &amp; Android · Cloud · AI pipeline</span></div>
          </div>
          <div className="case-media" data-reveal data-reveal-delay="2" style={{ maxWidth: 300, marginInline: "auto" }}>
            <PhoneFrame>
              <img src={`${IMG}/hero-teacher-review.png`} width={720} height={1565}
                alt="A teacher reviewing an AI-drafted lesson report in the IGNIFY app, with a green Send to family button" />
            </PhoneFrame>
          </div>
        </div>
      </section>

      {/* ===== THE WEDGE ===== */}
      <section className="section--tight">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="kicker"><span className="num">01</span> · THE WEDGE</span>
            <h2 className="h2">One lesson becomes one report, in three taps.</h2>
            <p className="lead">Every completed class turns into a report the teacher approves and the family actually reads.</p>
          </div>
          <div className="ig-wedge">
            <div className="ig-beat" data-reveal>
              <PhoneFrame><img loading="lazy" width={720} height={1565} src={`${IMG}/hero-teacher-review.png`} alt="Teacher reviewing the AI-drafted lesson report" /></PhoneFrame>
              <div className="ig-beat__cap"><div className="ig-beat__n">01</div><div className="ig-beat__t">Review</div><div className="ig-beat__d">The teacher opens an AI-drafted report, edits if needed, and approves it.</div></div>
            </div>
            <div className="ig-beat" data-reveal data-reveal-delay="1">
              <PhoneFrame><AutoVideo src={`${IMG}/teacher-send.mp4`} poster={`${IMG}/teacher-send-poster.jpg`} label="A teacher sending a lesson report to a family in the IGNIFY app" /></PhoneFrame>
              <div className="ig-beat__cap"><div className="ig-beat__n">02</div><div className="ig-beat__t">Send</div><div className="ig-beat__d">One tap sends it to the family. No copy-paste, no chasing.</div></div>
            </div>
            <div className="ig-beat" data-reveal data-reveal-delay="2">
              <PhoneFrame><img loading="lazy" width={720} height={1565} src={`${IMG}/family-report.png`} alt="The finished lesson report a family receives" /></PhoneFrame>
              <div className="ig-beat__cap"><div className="ig-beat__n">03</div><div className="ig-beat__t">Receive</div><div className="ig-beat__d">The family gets a clear, friendly report, and a history that builds over time.</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LIVE DEMO ===== */}
      <section className="section--tight">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="kicker"><span className="num">02</span> · TRY IT LIVE</span>
            <h2 className="h2">The real app, running in your browser.</h2>
            <p className="lead">Not a video, not a mockup. This is the actual IGNIFY mobile app. Launch it and explore.</p>
          </div>
          <div data-reveal style={{ marginTop: "var(--s4)" }}><IgnifyDemo /></div>
        </div>
      </section>

      {/* ===== THE BREADTH ===== */}
      <section className="section--tight">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="kicker"><span className="num">03</span> · THE BREADTH</span>
            <h2 className="h2">One connected operating loop, not five tools.</h2>
            <p className="lead">Scheduling, roster, team, and billing all run in the same place the reports come from.</p>
          </div>
          <div className="ig-gallery">
            {OPS.map(([f, label], i) => (
              <figure data-reveal data-reveal-delay={String(i % 3)} key={f}>
                <PhoneFrame><img loading="lazy" width={720} height={1565} src={`${IMG}/${f}.png`} alt={`IGNIFY owner ${label} screen`} /></PhoneFrame>
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REAL-WORLD PROOF ===== */}
      <section className="section--tight">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="kicker"><span className="num">04</span> · IN THE REAL WORLD</span>
            <h2 className="h2">A real academy runs on it today.</h2>
            <p className="lead">The Music Academy of Kansas City, IGNIFY's first live studio, runs day-to-day operations on the platform.</p>
          </div>
          <div className="ig-studio">
            <figure data-reveal><img loading="lazy" width={1280} height={720} src={`${IMG}/studio-cover.jpg`} alt="The Music Academy of Kansas City" /><figcaption>Music Academy of Kansas City</figcaption></figure>
            <figure data-reveal data-reveal-delay="1"><img loading="lazy" width={1280} height={720} src={`${IMG}/studio-piano-room.jpg`} alt="A piano room at the Music Academy of Kansas City" /><figcaption>Live on IGNIFY today</figcaption></figure>
          </div>
        </div>
      </section>

      {/* ===== BUILT END TO END ===== */}
      <section className="section--tight">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="kicker"><span className="num">05</span> · BUILT END TO END</span>
            <h2 className="h2">Garagol designed and built all of it.</h2>
            <p className="lead">Strategy, product design, the native apps, the cloud backend, and the AI pipeline. One team, start to finish.</p>
          </div>
          <div className="ig-build">
            <div className="card svc-card" data-reveal><div className="card__icon"><Smartphone /></div><div className="svc-card__title">Native mobile app</div><div className="svc-card__promise">iOS and Android for teachers, families, and owners, with real-time messaging, calling, and notifications.</div></div>
            <div className="card svc-card" data-reveal data-reveal-delay="1"><div className="card__icon"><Cloud /></div><div className="svc-card__title">Serverless AWS backend</div><div className="svc-card__promise">Event-driven, multi-environment with strict production isolation, payments, and security reviewed at every layer.</div></div>
            <div className="card svc-card" data-reveal data-reveal-delay="2"><div className="card__icon"><Sparkles /></div><div className="svc-card__title">AI lesson-report pipeline</div><div className="svc-card__promise">Audio to transcript to a teacher-approved draft, so every class becomes a report in seconds.</div></div>
          </div>
        </div>
      </section>

      {/* ===== NEXT STEP ===== */}
      <section className="section--tight" style={{ paddingBottom: "var(--section-y)" }}>
        <div className="wrap">
          <div className="case-next" data-reveal>
            <div>
              <div className="kicker" style={{ marginBottom: 8 }}>NEXT STEP</div>
              <div className="h3">Want something like IGNIFY?</div>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link to="/contact" className="btn btn--primary">Start a project</Link>
              <Link to="/work" className="btn btn--ghost">Back to work <ArrowRight className="arrow" /></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
