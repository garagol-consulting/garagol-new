import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

// The real IGNIFY mobile app, embedded as a self-contained iframe so its own
// styles/fonts/runtime stay fully isolated from this site. Click-to-load so the
// ~6 MB demo only fetches on intent. Scaled from its native 402x874 to fit.
const NATIVE_W = 402;
const NATIVE_H = 874;

export default function IgnifyDemo() {
  const [live, setLive] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const update = () => setScale(Math.min(1, el.clientWidth / NATIVE_W));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [live]);

  return (
    <div className="demo">
      {live ? (
        <div className="demo__stage" ref={stageRef} style={{ height: Math.round(NATIVE_H * scale) }}>
          <iframe
            src="/hero/mobile-app.html"
            title="IGNIFY live mobile app demo"
            className="demo__frame"
            style={{ width: NATIVE_W, height: NATIVE_H, transform: `scale(${scale})` }}
          />
        </div>
      ) : (
        <button className="demo__poster" onClick={() => setLive(true)} aria-label="Launch the live IGNIFY demo">
          <span className="demo__glyph" aria-hidden="true">IGNIFY</span>
          <span className="demo__play"><Play /> Launch live demo</span>
          <span className="demo__sub">The real app, running in your browser</span>
        </button>
      )}
      <p className="demo__hint">
        {live ? "Live: tap, scroll, and explore the real IGNIFY app." : "Loads the real app on demand (about 6 MB)."}
      </p>
    </div>
  );
}
