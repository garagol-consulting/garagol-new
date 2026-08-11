import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavV3 from "./site/NavV3";
import FooterV3 from "./site/FooterV3";
import RouteMeta from "./site/lib/RouteMeta";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

/** Lenis smooth scroll, sitewide. Skipped under reduced motion; SSR-safe. */
function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let raf = 0;
    let cancelled = false;
    (async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;
      lenis = new Lenis({ lerp: 0.1 });
      (window as unknown as { __lenis?: unknown }).__lenis = lenis;
      const loop = (t: number) => { lenis!.raf(t); raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);
    })();
    return () => { cancelled = true; cancelAnimationFrame(raf); lenis?.destroy(); };
  }, []);
  return null;
}

// Shared chrome wrapping every route. vite-react-ssg provides the router,
// so this renders inside it (no BrowserRouter here). <Outlet/> is the page.
export default function Layout() {
  return (
    <div className="g3">
      <a href="#main" className="g3-skip">Skip to content</a>
      <SmoothScroll />
      <ScrollToTop />
      <RouteMeta />
      <NavV3 />
      <Outlet />
      <FooterV3 />
    </div>
  );
}
