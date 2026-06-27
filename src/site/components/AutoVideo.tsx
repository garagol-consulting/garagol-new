import { useEffect, useRef } from "react";

// A muted, looping clip that plays only while in view. We drive play() from an
// IntersectionObserver (rather than the `autoplay` attribute) because that is the
// reliable cross-browser trigger, and we always set a `poster` so the frame is
// meaningful (never a black box) on browsers that cannot decode the video.
export default function AutoVideo({
  src,
  poster,
  label,
}: {
  src: string;
  poster?: string;
  label?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true; // set the property, not just the attribute, so muted playback is allowed
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // honor reduced-motion: leave the poster frame in place
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const p = v.play();
            if (p && typeof p.catch === "function") p.catch(() => {});
          } else {
            v.pause();
          }
        }
      },
      { threshold: 0.3 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    />
  );
}
