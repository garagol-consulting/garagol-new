import { useEffect } from "react";

/**
 * Ports reference main.js scroll-reveal + animated counters, with a 1200ms
 * fail-open so content is never stuck hidden if IO/animations don't fire.
 * Call once near the top of each page component (after its DOM mounts).
 */
export function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const timers: number[] = [];
    let io: IntersectionObserver | null = null;
    let co: IntersectionObserver | null = null;
    let onSweep: (() => void) | null = null;

    const reveal = (el: HTMLElement) => { el.classList.add("is-in"); io?.unobserve(el); };

    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach(reveal);
    } else {
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) reveal(e.target as HTMLElement); }),
        { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
      );
      reveals.forEach((el) => io!.observe(el));
      const sweep = () => {
        const vh = window.innerHeight || 800;
        reveals.forEach((el) => {
          if (!el.classList.contains("is-in") && el.getBoundingClientRect().top < vh * 0.98) reveal(el);
        });
      };
      onSweep = sweep;
      requestAnimationFrame(sweep);
      window.addEventListener("scroll", sweep, { passive: true });
      timers.push(window.setTimeout(sweep, 500));
    }

    // Animated counters
    const animateCount = (el: HTMLElement) => {
      const raw = el.dataset.count || "0";
      const target = parseFloat(raw);
      const dec = (raw.split(".")[1] || "").length;
      if (reduce) { el.textContent = target.toFixed(dec); return; }
      let start: number | null = null;
      const step = (ts: number) => {
        if (start == null) start = ts;
        const p = Math.min((ts - start) / 1400, 1);
        el.textContent = (target * (1 - Math.pow(1 - p, 3))).toFixed(dec);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toFixed(dec);
      };
      requestAnimationFrame(step);
    };
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    if (counters.length) {
      co = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { animateCount(e.target as HTMLElement); co!.unobserve(e.target); }
        });
      }, { threshold: 0.6 });
      counters.forEach((el) => co!.observe(el));
    }

    // Ultimate fail-open: pin everything visible after 1.2s.
    timers.push(window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>("[data-reveal], [data-hero]").forEach((el) => {
        el.classList.add("is-in");
        el.style.transition = "none";
        el.style.animation = "none";
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    }, 1200));

    return () => {
      io?.disconnect();
      co?.disconnect();
      if (onSweep) window.removeEventListener("scroll", onSweep);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);
}
