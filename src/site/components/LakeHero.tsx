import { useEffect, useRef, type ReactNode } from "react";

/**
 * The one WebGL scene on the site: the black-lake hero surface.
 * LCP is the static poster div; the canvas mounts after first paint and fades
 * in. Pauses off-screen and in background tabs; reduced motion gets a single
 * still frame; no WebGL = poster only, nothing breaks.
 */
export default function LakeHero({ children }: { children: ReactNode }) {
  const hostRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) return;
    let lake: any = null;
    let detach: (() => void) | null = null;
    let io: IntersectionObserver | null = null;
    const onVis = () => { if (lake) { document.hidden ? lake.stop() : lake.start(); } };
    let cancelled = false;

    (async () => {
      try {
        const { createLake, attachPointer } = await import("./../lib/lake-shader.js");
        if (cancelled) return;
        const mobile = window.matchMedia("(max-width: 880px)").matches || !window.matchMedia("(pointer: fine)").matches;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        lake = createLake(canvas, { ambient: mobile ? 0.6 : 1, dprCap: mobile ? 1 : 1.5 });
        if (!lake) return;
        if (reduced) {
          lake.still(6, [[0.62, 0.42, 1.1, 0.02], [0.34, 0.58, 2.4, 0.014], [0.5, 0.5, 3.8, 0.01]]);
          canvas.style.opacity = "1";
          return;
        }
        lake.start();
        requestAnimationFrame(() => { canvas.style.opacity = "1"; });
        if (!mobile) detach = attachPointer(lake, host);
        io = new IntersectionObserver(
          (es) => es.forEach((e) => { e.isIntersecting && !document.hidden ? lake.start() : lake.stop(); }),
          { threshold: 0.02 }
        );
        io.observe(canvas);
        document.addEventListener("visibilitychange", onVis);
      } catch {
        /* poster stays; the site loses nothing */
      }
    })();

    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVis);
      io?.disconnect();
      detach?.();
      lake?.destroy();
    };
  }, []);

  return (
    <header className="g3-hero" ref={hostRef}>
      <div className="g3-hero__poster" aria-hidden="true" />
      <canvas className="g3-hero__canvas" ref={canvasRef} aria-hidden="true" />
      <div className="g3-hero__horizon" aria-hidden="true" />
      {children}
    </header>
  );
}
