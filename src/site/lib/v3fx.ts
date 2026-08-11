import { useEffect } from "react";

/**
 * v3 motion utilities. Content is fully visible in the prerendered HTML;
 * these hooks only add motion client-side, and no-op under reduced motion.
 */

/** Reveal-on-scroll for [data-rv] elements (value = delay in ms). */
export function useRevealV3() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-rv]"));
    if (!els.length) return;
    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity .75s cubic-bezier(.22,.61,.36,1), transform .75s cubic-bezier(.22,.61,.36,1)";
    });
    const show = (el: HTMLElement) => { el.style.opacity = "1"; el.style.transform = "none"; };
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            const d = Number((e.target as HTMLElement).dataset.rv || 0);
            window.setTimeout(() => show(e.target as HTMLElement), d);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    const failOpen = window.setTimeout(() => els.forEach(show), 1600);
    return () => { io.disconnect(); window.clearTimeout(failOpen); };
  }, []);
}

/** Magnetic pull on [data-magnet] elements. Desktop pointers only. */
export function useMagnet() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-magnet]"));
    const offs: Array<() => void> = [];
    els.forEach((el) => {
      const mv = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `translate(${x * 8}px, ${y * 6}px)`;
      };
      const lv = () => { el.style.transform = "translate(0,0)"; };
      el.addEventListener("mousemove", mv);
      el.addEventListener("mouseleave", lv);
      offs.push(() => { el.removeEventListener("mousemove", mv); el.removeEventListener("mouseleave", lv); });
    });
    return () => offs.forEach((f) => f());
  }, []);
}
