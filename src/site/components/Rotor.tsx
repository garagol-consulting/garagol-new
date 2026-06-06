import { useEffect, useState } from "react";

const WORDS = ["Strategized.", "Designed.", "Marketed.", "Built."];

// Hero rotating keyword: "EVERY PROJECT: <typed word>" + purple caret.
// Fixed-height line (via .rotor CSS) so the paragraph below never shifts.
export default function Rotor() {
  const [word, setWord] = useState(WORDS[0]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setWord(WORDS[0]); return; }
    let i = 0, j = 0, deleting = false;
    let timer = 0;
    const tick = () => {
      const w = WORDS[i % WORDS.length];
      j = deleting ? j - 1 : j + 1;
      setWord(w.substring(0, j));
      let delay = deleting ? 55 : 110;
      if (!deleting && j === w.length) { delay = 1300; deleting = true; }
      else if (deleting && j === 0) { deleting = false; i++; delay = 280; }
      timer = window.setTimeout(tick, delay);
    };
    timer = window.setTimeout(tick, 600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="rotor" data-hero>
      <span className="rotor__label">Every project:</span>
      <span className="rotor__word">{word}</span>
      <span className="rotor__caret" aria-hidden="true" />
    </div>
  );
}
