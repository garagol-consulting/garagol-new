const ITEMS = [
  "24/7 Support",
  "Custom Solutions",
  "Faster Delivery",
  "Garagol is built for business.",
  "Secure Infrastructure",
  "Scalable Performance",
  "Data-Driven",
  "Future-Proof Tech",
  "End-to-End Service",
];
const KEY = "Garagol is built for business.";

// Infinite value-prop marquee (CSS-animated, pauses on hover via .marquee:hover).
export default function Marquee() {
  const row = ITEMS.map((t, i) => (
    <span className={"marquee__item" + (t === KEY ? " is-key" : "")} key={i}>
      {t}
      <span className="marquee__dot" />
    </span>
  ));
  return (
    <section className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row}
        {row}
      </div>
    </section>
  );
}
