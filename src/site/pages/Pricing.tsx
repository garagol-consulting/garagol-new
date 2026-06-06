import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronDown, ArrowRight } from "lucide-react";
import { useReveal } from "../lib/useReveal";

const FAQS = [
  { q: "How do you price?", a: "We scope each engagement to your goals and give you a clear, fixed plan up front. Fixed-scope work across strategy, brand, marketing, and build is priced per milestone; ongoing work is a monthly rate for a dedicated senior team. Run the estimate for a tailored number." },
  { q: "How fast can we start?", a: "Usually within days. After a short discovery call we confirm scope, and you'll have a first working draft within a week of kick-off." },
  { q: "Who owns the IP?", a: "You do. Everything we create is yours (strategy, brand, designs, code, and infrastructure) with full handover and documentation." },
  { q: "Are there any hidden fees?", a: "No. Pricing is transparent and agreed before work begins. If scope changes, we discuss it with you first, never a surprise invoice." },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className={"acc__item" + (open ? " is-open" : "")}>
      <button className="acc__q" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        {q}
        <ChevronDown size={18} />
      </button>
      <div className="acc__a" ref={ref} style={{ maxHeight: open ? ref.current?.scrollHeight ?? 600 : 0 }}>
        <div className="acc__a-inner">{a}</div>
      </div>
    </div>
  );
}

export default function Pricing() {
  useReveal();
  return (
    <main>
      <section className="page-hero">
        <div className="glow glow--purple" />
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="kicker" data-reveal style={{ justifyContent: "center" }}><span className="num">●</span> PRICING</span>
          <h1 data-reveal style={{ marginInline: "auto" }}>Simple, transparent engagements.</h1>
          <p className="lead" data-reveal data-reveal-delay="1" style={{ marginInline: "auto" }}>
            Pick the way of working that fits, across strategy, brand, marketing, and build, with no hidden fees, ever. Want a number? Run the estimate and we'll tailor it.
          </p>
        </div>
      </section>

      <section className="section--tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="tiers">
            <div className="card tier" data-reveal>
              <div className="tier__name">Launch</div>
              <div className="tier__who">For new products, brands &amp; MVPs</div>
              <div className="tier__price">Price on request</div>
              <ul className="tier__list">
                <li><Check size={16} /> Strategy, discovery &amp; scoping</li>
                <li><Check size={16} /> Brand, product &amp; UI/UX design</li>
                <li><Check size={16} /> Full build (web / mobile)</li>
                <li><Check size={16} /> Launch, go-to-market &amp; handover</li>
              </ul>
              <Link to="/contact#estimate" className="btn btn--ghost btn--block">Request pricing</Link>
            </div>

            <div className="card tier is-featured" data-reveal data-reveal-delay="1">
              <span className="tier__badge">Most popular</span>
              <div className="tier__name">Scale</div>
              <div className="tier__who">Ongoing growth &amp; development</div>
              <div className="tier__price">Price on request</div>
              <ul className="tier__list">
                <li><Check size={16} /> Dedicated senior team</li>
                <li><Check size={16} /> Sprint-based delivery</li>
                <li><Check size={16} /> Design, marketing &amp; engineering</li>
                <li><Check size={16} /> Roadmap &amp; priority support</li>
              </ul>
              <Link to="/contact#estimate" className="btn btn--primary btn--block">Request pricing</Link>
            </div>

            <div className="card tier" data-reveal data-reveal-delay="2">
              <div className="tier__name">Secure &amp; Optimize</div>
              <div className="tier__who">For existing products</div>
              <div className="tier__price">Price on request</div>
              <ul className="tier__list">
                <li><Check size={16} /> Security &amp; code audits</li>
                <li><Check size={16} /> DevOps &amp; CI/CD</li>
                <li><Check size={16} /> Performance tuning</li>
                <li><Check size={16} /> Automation &amp; hardening</li>
              </ul>
              <Link to="/contact#estimate" className="btn btn--ghost btn--block">Request pricing</Link>
            </div>

            <div className="card tier" data-reveal data-reveal-delay="3">
              <div className="tier__name">Enterprise</div>
              <div className="tier__who">Bespoke &amp; long-term</div>
              <div className="tier__price">Custom</div>
              <ul className="tier__list">
                <li><Check size={16} /> Bespoke scope</li>
                <li><Check size={16} /> Compliance &amp; SLAs</li>
                <li><Check size={16} /> Dedicated team</li>
                <li><Check size={16} /> Long-term partnership</li>
              </ul>
              <Link to="/contact" className="btn btn--ghost btn--block">Talk to us</Link>
            </div>
          </div>

          <div className="reassure" style={{ marginTop: "var(--s4)" }} data-reveal>
            <span><Check size={15} /> Transparent scoping</span>
            <span><Check size={15} /> First draft within a week</span>
            <span><Check size={15} /> No hidden fees</span>
            <span><Check size={15} /> You own everything we build</span>
          </div>
        </div>
      </section>

      {/* PRICING FAQ */}
      <section className="section--tight">
        <div className="wrap" style={{ maxWidth: 840 }}>
          <div className="section-head" data-reveal style={{ marginBottom: "var(--s3)" }}>
            <span className="kicker">PRICING FAQ</span>
            <h2 className="h2">Good questions.</h2>
          </div>
          <div className="acc" data-reveal data-reveal-delay="1">
            {FAQS.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-panel" data-reveal>
            <div className="glow glow--purple" />
            <h2 className="h2">Get a number in minutes.</h2>
            <p className="lead">Answer five quick questions and we'll come back with a tailored estimate and a clear plan.</p>
            <div className="cta-panel__btns">
              <Link to="/contact#estimate" className="btn btn--primary btn--lg">Get an estimate <ArrowRight className="arrow" /></Link>
              <Link to="/contact" className="btn btn--ghost btn--lg">Talk to us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
