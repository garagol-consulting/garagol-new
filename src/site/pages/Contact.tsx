import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Clock, Mail, Calendar, Briefcase } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useReveal } from "../lib/useReveal";
import { LinkedInIcon } from "../SocialIcons";

const EMAILJS = {
  service: "service_hssl9mg",
  publicKey: "V08MdMTqLq65ILtaE",
  calcTemplate: "template_tawpqaq",
  inquiryTemplate: "template_zljnr4n",
};

const reduceMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const emailOk = (v: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);

/* ---------------- Estimate calculator ---------------- */
type Q = { id: string; step: string; q: string; hint: string; multi: boolean; options: [string, string][] };
const QUESTIONS: Q[] = [
  { id: "business", step: "QUESTION 1 / 5", q: "Which best describes your business?", hint: "Pick one.", multi: false,
    options: [["Startup", "Startup"], ["SMB", "Small / Medium Business (SMB)"], ["Enterprise", "Enterprise"], ["Other", "Not sure / Other"]] },
  { id: "goal", step: "QUESTION 2 / 5", q: "What's the primary goal of your project?", hint: "Pick one.", multi: false,
    options: [["Launch", "Launch a new product or service"], ["Revamp", "Revamp an existing website or app"], ["Security", "Enhance security and compliance"], ["Data", "Improve data analytics and insights"], ["Other", "Other / Not sure"]] },
  { id: "services", step: "QUESTION 3 / 5", q: "Which platforms or services do you need?", hint: "Select all that apply.", multi: true,
    options: [["Web", "Web Development"], ["Mobile", "Mobile App Development (iOS/Android)"], ["Design", "UI/UX Design & Branding"], ["Cloud", "DevOps & Cloud Solutions"], ["Security", "Cybersecurity & Compliance"], ["Data", "Data Science & Analytics"], ["Consulting", "IT Consulting & Strategy"], ["Unsure", "Not sure yet"]] },
  { id: "timeline", step: "QUESTION 4 / 5", q: "What's your ideal timeline?", hint: "Pick one.", multi: false,
    options: [["1mo", "Within 1 month"], ["1-3mo", "1–3 months"], ["3-6mo", "3–6 months"], ["Flexible", "Flexible / Not sure"]] },
  { id: "support", step: "QUESTION 5 / 5", q: "Will you need ongoing support and scalability planning?", hint: "Pick one.", multi: false,
    options: [["Yes", "Yes, definitely"], ["Maybe", "Maybe — let's discuss"], ["No", "No, just a one-time project"]] },
];

function Calculator() {
  const [step, setStep] = useState(0); // 0-4 questions, 5 contact, 6 done
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [err, setErr] = useState(false);
  const [shake, setShake] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [fErr, setFErr] = useState({ name: false, email: false });
  const [sending, setSending] = useState(false);

  const select = (q: Q, v: string) => {
    setErr(false);
    setAnswers((prev) => {
      if (q.multi) {
        const arr = (prev[q.id] as string[]) || [];
        return { ...prev, [q.id]: arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v] };
      }
      return { ...prev, [q.id]: v };
    });
  };
  const isSel = (q: Q, v: string) =>
    q.multi ? ((answers[q.id] as string[]) || []).includes(v) : answers[q.id] === v;

  const next = () => {
    const q = QUESTIONS[step];
    const a = answers[q.id];
    const empty = !a || (Array.isArray(a) && a.length === 0);
    if (empty) {
      setErr(true);
      setShake(true);
      window.setTimeout(() => setShake(false), 500);
      return;
    }
    setStep((s) => s + 1);
    setErr(false);
  };
  const prev = () => { setStep((s) => Math.max(0, s - 1)); setErr(false); };

  const submitCalc = async (e: React.FormEvent) => {
    e.preventDefault();
    const bad = { name: !form.name.trim(), email: !emailOk(form.email) };
    setFErr(bad);
    if (bad.name || bad.email) return;
    setSending(true);
    const calculator_answers = QUESTIONS.map((q) => {
      const a = answers[q.id];
      return `${q.q}: ${Array.isArray(a) ? a.join(", ") : a || "—"}`;
    }).join("\n");
    try {
      await emailjs.send(EMAILJS.service, EMAILJS.calcTemplate,
        { name: form.name, email: form.email, company: form.company, calculator_answers },
        { publicKey: EMAILJS.publicKey });
      setStep(6);
    } catch {
      setStep(6); // still acknowledge; submission is best-effort
    } finally {
      setSending(false);
    }
  };

  const seg = (i: number) => "calc__seg" + (i <= step ? " is-done" : "");

  return (
    <div className="card calc" data-reveal>
      <div className="calc__progress">
        {[0, 1, 2, 3, 4, 5].map((i) => <span key={i} className={seg(i)} />)}
      </div>

      {QUESTIONS.map((q, i) => (
        <div key={q.id} className={"calc__panel" + (step === i ? " is-active" : "") + (shake && step === i ? " shake" : "")} data-q={q.id}>
          <div className="calc__step">{q.step}</div>
          <h2 className="calc__q">{q.q}</h2>
          <div className="calc__hint" style={err && step === i ? { color: "var(--coral)" } : undefined}>{q.hint}</div>
          <div className="calc__options">
            {q.options.map(([v, label]) => (
              <button key={v} type="button" className={"opt" + (isSel(q, v) ? " is-sel" : "")} onClick={() => select(q, v)}>
                <span className="opt__box"><Check /></span>{label}
              </button>
            ))}
          </div>
          <div className="calc__nav">
            {i > 0 ? <button type="button" className="btn btn--ghost" onClick={prev}>Back</button> : <span />}
            <button type="button" className="btn btn--primary" onClick={next}>
              {i === 4 ? "See my estimate" : "Next"} <ArrowRight className="arrow" />
            </button>
          </div>
        </div>
      ))}

      <div className={"calc__panel" + (step === 5 ? " is-active" : "")} data-contact>
        <div className="calc__step">ALMOST THERE</div>
        <h2 className="calc__q">You're one step away.</h2>
        <p className="calc__hint">Fill this out to get complete details and pricing. We reply within ~2 hours.</p>
        <form onSubmit={submitCalc} noValidate>
          <div className={"field" + (fErr.name ? " field-error" : "")}>
            <label>Name</label>
            <input className="input" type="text" placeholder="Your name" value={form.name}
              onChange={(e) => { setForm({ ...form, name: e.target.value }); if (fErr.name) setFErr({ ...fErr, name: false }); }} />
            <span className="err-msg">Please enter your name.</span>
          </div>
          <div className={"field" + (fErr.email ? " field-error" : "")}>
            <label>Email</label>
            <input className="input" type="email" placeholder="you@company.com" value={form.email}
              onChange={(e) => { setForm({ ...form, email: e.target.value }); if (fErr.email) setFErr({ ...fErr, email: false }); }} />
            <span className="err-msg">Please enter a valid email.</span>
          </div>
          <div className="field">
            <label>Company</label>
            <input className="input" type="text" placeholder="Company (optional)" value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })} />
          </div>
          <div className="calc__nav">
            <button type="button" className="btn btn--ghost" onClick={prev}>Back</button>
            <button type="submit" className="btn btn--primary">{sending ? "Sending…" : "Get my estimate"}</button>
          </div>
        </form>
      </div>

      <div className={"calc__panel calc__done" + (step === 6 ? " is-active" : "")}>
        <div className="ok"><Check /></div>
        <h2 className="calc__q" style={{ textAlign: "center" }}>Thank you!</h2>
        <p className="calc__hint" style={{ textAlign: "center" }}>Your submission has been received. We'll review your answers and send a tailored estimate shortly.</p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "var(--s3)" }}>
          <Link to="/" className="btn btn--ghost">Back to home</Link>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Smart inquiry form ---------------- */
const CHIPS: [string, string][] = [
  ["Web & Mobile Development", "What are you building, and which platforms (web, iOS, Android) do you need?"],
  ["Design & Branding", "What's the product, and do you have existing brand or design assets?"],
  ["Data & Cloud Solutions", "What does your current data and cloud setup look like today?"],
  ["Security & IT Consulting", "What are your main security or compliance concerns right now?"],
  ["Discovery Call", "What would you like to cover on a discovery call?"],
  ["Something else", "Tell us what you have in mind — we're all ears."],
];
const BASE_PLACEHOLDER = "Tell us a little about your project…";

function SmartForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [placeholder, setPlaceholder] = useState(BASE_PLACEHOLDER);
  const [form, setForm] = useState({ name: "", email: "", company: "", details: "" });
  const [fErr, setFErr] = useState({ name: false, email: false });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const typer = useRef<number | null>(null);

  const activePrompt = selected.length ? CHIPS.find((c) => c[0] === selected[selected.length - 1])![1] : BASE_PLACEHOLDER;

  useEffect(() => {
    if (typer.current) window.clearInterval(typer.current);
    if (reduceMotion()) { setPlaceholder(activePrompt); return; }
    let i = 0;
    setPlaceholder("");
    typer.current = window.setInterval(() => {
      i++;
      setPlaceholder(activePrompt.slice(0, i));
      if (i >= activePrompt.length && typer.current) window.clearInterval(typer.current);
    }, 18);
    return () => { if (typer.current) window.clearInterval(typer.current); };
  }, [activePrompt]);

  const toggleChip = (label: string) =>
    setSelected((prev) => (prev.includes(label) ? prev.filter((x) => x !== label) : [...prev, label]));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const bad = { name: !form.name.trim(), email: !emailOk(form.email) };
    setFErr(bad);
    if (bad.name || bad.email) return;
    setSending(true);
    try {
      await emailjs.send(EMAILJS.service, EMAILJS.inquiryTemplate,
        { name: form.name, email: form.email, company: form.company, services: selected.join(", "), message: form.details },
        { publicKey: EMAILJS.publicKey });
      setSent(true);
    } catch {
      setSent(true);
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="card panel" style={{ marginTop: "var(--s4)" }} data-reveal data-reveal-delay="1">
        <div className="calc__done">
          <div className="ok"><Check /></div>
          <div className="panel__title" style={{ textAlign: "center" }}>Thanks — message sent.</div>
          <p className="panel__desc" style={{ marginTop: 10, textAlign: "center" }}>We'll get back to you within ~2 hours during business hours.</p>
        </div>
      </div>
    );
  }

  return (
    <form className="card panel" noValidate style={{ marginTop: "var(--s4)" }} data-reveal data-reveal-delay="1" onSubmit={submit}>
      <div className="contact-grid">
        <div>
          <div className="panel__num" style={{ display: "inline-block", marginBottom: 14 }}>I'm interested in…</div>
          <div className="svc-chips">
            {CHIPS.map(([label]) => (
              <button key={label} type="button" className={"svc-chip" + (selected.includes(label) ? " is-on" : "")} onClick={() => toggleChip(label)}>
                <Check />{label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="panel__num" style={{ display: "inline-block", marginBottom: 14 }}>Add more details</div>
          <div className={"field" + (fErr.name ? " field-error" : "")}>
            <label>Name</label>
            <input className="input" type="text" placeholder="Your name" value={form.name}
              onChange={(e) => { setForm({ ...form, name: e.target.value }); if (fErr.name) setFErr({ ...fErr, name: false }); }} />
            <span className="err-msg">Please enter your name.</span>
          </div>
          <div className={"field" + (fErr.email ? " field-error" : "")}>
            <label>Email</label>
            <input className="input" type="email" placeholder="you@company.com" value={form.email}
              onChange={(e) => { setForm({ ...form, email: e.target.value }); if (fErr.email) setFErr({ ...fErr, email: false }); }} />
            <span className="err-msg">Please enter a valid email.</span>
          </div>
          <div className="field">
            <label>Company</label>
            <input className="input" type="text" placeholder="Company (optional)" value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })} />
          </div>
          <div className="field">
            <label>Project details</label>
            <textarea className="textarea" placeholder={placeholder} value={form.details}
              onChange={(e) => setForm({ ...form, details: e.target.value })} />
          </div>
          <button type="submit" className="btn btn--primary btn--block">{sending ? "Sending…" : "Send message"}</button>
        </div>
      </div>
    </form>
  );
}

/* ---------------- Page ---------------- */
export default function Contact() {
  useReveal();
  return (
    <main>
      <section className="page-hero" style={{ paddingBottom: "var(--s4)" }}>
        <div className="glow glow--purple" />
        <div className="wrap">
          <span className="kicker" data-reveal><span className="num">●</span> START A PROJECT</span>
          <h1 data-reveal>Let's scope what you're building.</h1>
          <p className="lead" data-reveal data-reveal-delay="1">
            Two ways in: get a tailored estimate in five quick questions, or send a quick inquiry. Either way, we reply within ~2 hours during business hours.
          </p>
        </div>
      </section>

      <section className="section--tight" id="estimate" style={{ paddingTop: "var(--s4)" }}>
        <div className="wrap"><Calculator /></div>
      </section>

      <section className="section--tight" id="inquiry">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="kicker">OR — QUICK INQUIRY</span>
            <h2 className="h2">How can we help?</h2>
            <p className="lead">Tell us what you're interested in and we'll tailor the conversation.</p>
          </div>
          <SmartForm />
        </div>
      </section>

      <section className="section--tight" id="call" style={{ paddingBottom: "var(--section-y)" }}>
        <div className="wrap">
          <div className="reassure" data-reveal style={{ justifyContent: "flex-start" }}>
            <span><Clock size={15} /> We reply within ~2 hours during business hours.</span>
          </div>
          <div className="alt-contact" data-reveal data-reveal-delay="1">
            <a href="mailto:hello@garagol.com"><Mail size={16} /> hello@garagol.com</a>
            <a href="#call"><Calendar size={16} /> Book a discovery call</a>
            <a href="https://www.linkedin.com/company/garagol/" target="_blank" rel="noreferrer"><LinkedInIcon size={16} /> LinkedIn</a>
            <a href="https://www.upwork.com/agencies/1791289820464082944/" target="_blank" rel="noreferrer"><Briefcase size={16} /> Upwork</a>
          </div>
        </div>
      </section>
    </main>
  );
}
