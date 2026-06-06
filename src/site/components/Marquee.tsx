const ITEMS = [
  "Strategy-Led",
  "Brand & Design",
  "Growth Marketing",
  "Garagol is built for business.",
  "Secure by Default",
  "Built to Scale",
  "Data-Driven",
  "End-to-End",
  "24/7 Support",
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
