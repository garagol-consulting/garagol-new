import { useEffect, useRef } from "react";
import PhoneFrame from "./PhoneFrame";
import AutoVideo from "./AutoVideo";

const IMG = "/case-studies/ignify";

const STEPS = [
  { n: "01", title: "The draft is ready.", body: "Every completed lesson becomes an AI-drafted report, waiting for the teacher.", right: false },
  { n: "02", title: "Approve in a tap.", body: "The teacher edits if needed, then sends. No copy-paste, no chasing.", right: true },
  { n: "03", title: "The family receives it.", body: "A clear, friendly report, and a history that builds lesson over lesson.", right: false },
];

// The signature moment: one phone pinned in the viewport while the reader scrolls,
// its screen advancing through draft -> approve -> family-receives. Driven by a
// throttled scroll handler that writes opacities directly to refs (no re-render).
// Desktop only; mobile and reduced-motion fall back to a static row (CSS-toggled).
function MotionSeq() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const l0 = useRef<HTMLDivElement>(null);
  const l1 = useRef<HTMLDivElement>(null);
  const l2 = useRef<HTMLDivElement>(null);
  const t0 = useRef<HTMLDivElement>(null);
  const t1 = useRef<HTMLDivElement>(null);
  const t2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const layers = [l0.current, l1.current, l2.current];
    const ticks = [t0.current, t1.current, t2.current];
    let raf = 0;
    const cl = (x: number) => Math.max(0, Math.min(1, x));
    const update = () => {
      raf = 0;
      const rect = wrap.getBoundingClientRect();
      if (rect.height === 0) return; // hidden (mobile / reduced-motion)
      const winH = window.innerHeight || 800;
      const total = rect.height - winH;
      const p = total > 0 ? cl(-rect.top / total) : 0;
      const a = cl((p - 0.3) / 0.12);
      const b = cl((p - 0.64) / 0.12);
      const o = [1 - a, Math.max(0, a - b), b];
      layers.forEach((el, i) => { if (el) el.style.opacity = String(o[i]); });
      const active = p < 0.4 ? 0 : p < 0.74 ? 1 : 2;
      ticks.forEach((el, i) => {
        if (!el) return;
        el.style.color = i === active ? "#f4f4f5" : "#3f3f46";
        const bar = el.querySelector<HTMLElement>(".cs-seq__bar");
        if (bar) bar.style.background = i === active ? "#8675f2" : "rgba(255,255,255,.14)";
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="cs-seq" ref={wrapRef}>
      <div className="cs-seq__pin">
        <div className="cs-seq__phone">
          <div className="cs-seq__glow" aria-hidden="true" />
          <div className="pf__bezel">
            <div className="pf__screen">
              <div className="pf__island" aria-hidden="true" />
              <div className="cs-seq__screen" ref={l0} style={{ opacity: 1 }}>
                <img src={`${IMG}/hero-teacher-review.png`} width={720} height={1565} alt="A teacher reviewing the AI-drafted lesson report" />
              </div>
              <div className="cs-seq__screen" ref={l1} style={{ opacity: 0 }}>
                <AutoVideo src={`${IMG}/teacher-send.mp4`} poster={`${IMG}/teacher-send-poster.jpg`} label="A teacher sending a lesson report to a family" />
              </div>
              <div className="cs-seq__screen" ref={l2} style={{ opacity: 0 }}>
                <img src={`${IMG}/family-report.png`} width={720} height={1565} alt="The finished lesson report a family receives" />
              </div>
            </div>
          </div>
        </div>
        <div className="cs-seq__ticks" aria-hidden="true">
          <div className="cs-seq__tick" ref={t0} style={{ color: "#f4f4f5" }}><span className="cs-seq__bar" style={{ background: "#8675f2" }} /><span>01</span></div>
          <div className="cs-seq__tick" ref={t1}><span className="cs-seq__bar" /><span>02</span></div>
          <div className="cs-seq__tick" ref={t2}><span className="cs-seq__bar" /><span>03</span></div>
        </div>
      </div>
      <div className="cs-seq__copylayer">
        {STEPS.map((s, i) => (
          <div key={s.n} className={"cs-seq__copy" + (s.right ? " cs-seq__copy--right" : "")} style={{ top: `${i * 100}vh` }}>
            <div className="cs-seq__card">
              <div className="cs-seq__kn"><span>{s.n}</span><span /></div>
              <h3 className="cs-seq__h3">{s.title}</h3>
              <p className="cs-seq__cp">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Fallback() {
  return (
    <div className="cs-seq__fallback">
      <PhoneFrame caption="01 The draft is ready"><img src={`${IMG}/hero-teacher-review.png`} width={720} height={1565} alt="A teacher reviewing the AI-drafted lesson report" /></PhoneFrame>
      <PhoneFrame caption="02 Approve in a tap"><AutoVideo src={`${IMG}/teacher-send.mp4`} poster={`${IMG}/teacher-send-poster.jpg`} label="A teacher sending a lesson report to a family" /></PhoneFrame>
      <PhoneFrame caption="03 The family receives it"><img src={`${IMG}/family-report.png`} width={720} height={1565} alt="The finished lesson report a family receives" /></PhoneFrame>
    </div>
  );
}

export default function IgnifySequence() {
  // Both render; CSS shows the pinned sequence on desktop and the static row on
  // mobile / reduced-motion. The scroll handler no-ops while its node is hidden.
  return (
    <>
      <MotionSeq />
      <Fallback />
    </>
  );
}
