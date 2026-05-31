import { useEffect } from "react";

// Enhancement-only cursor: dot + trailing ring. Disabled on touch and when the
// user prefers reduced motion. Never hides the native cursor globally.
export default function CustomCursor() {
  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduce) return;

    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    const ring = document.createElement("div");
    ring.className = "cursor-ring";
    document.body.append(dot, ring);
    document.body.classList.add("has-cursor");

    let rx = 0, ry = 0, dx = 0, dy = 0, raf = 0;
    const move = (e: MouseEvent) => {
      dx = e.clientX; dy = e.clientY;
      dot.style.left = dx + "px"; dot.style.top = dy + "px";
      const hot = (e.target as Element)?.closest?.("a, button, .card--hover, [data-hot]");
      ring.classList.toggle("is-hot", !!hot);
    };
    const loop = () => {
      rx += (dx - rx) * 0.18; ry += (dy - ry) * 0.18;
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      raf = requestAnimationFrame(loop);
    };
    const leave = () => { dot.style.opacity = "0"; ring.style.opacity = "0"; };
    const enter = () => { dot.style.opacity = "1"; ring.style.opacity = "1"; };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    loop();

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      dot.remove(); ring.remove();
      document.body.classList.remove("has-cursor");
    };
  }, []);
  return null;
}
