import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useReveal } from "../lib/useReveal";

type FilterState = { industry: string; discipline: string };

const INDUSTRY_CHIPS = [
  { value: "all", label: "All" },
  { value: "fintech", label: "Fintech" },
  { value: "health", label: "Health" },
  { value: "logistics", label: "Logistics" },
  { value: "consumer", label: "Consumer" },
  { value: "saas", label: "SaaS" },
];

const DISCIPLINE_CHIPS = [
  { value: "all", label: "All" },
  { value: "strategy", label: "Strategy" },
  { value: "brand", label: "Brand" },
  { value: "marketing", label: "Marketing" },
  { value: "build", label: "Build" },
];

type WorkCardData = {
  to: string;
  industry: string;
  discipline: string;
  flagship?: boolean;
  mediaNote: string;
  title: string;
  liveTag?: boolean;
  metricValue: string;
  metricKey: string;
  tags: string[];
  caseStudy?: boolean;
};

const CARDS: WorkCardData[] = [
  {
    to: "/work/ignify",
    industry: "saas",
    discipline: "build strategy",
    flagship: true,
    mediaNote: "IGNIFY (platform)",
    title: "IGNIFY",
    liveTag: true,
    metricValue: "6 surfaces",
    metricKey: "strategy, build, launch",
    tags: ["SaaS", "Real-time"],
    caseStudy: true,
  },
  {
    to: "/contact",
    industry: "fintech",
    discipline: "brand build",
    mediaNote: "Project (Fintech)",
    title: "Brand & Web (Fintech)",
    metricValue: "[ metric ]",
    metricKey: "add result",
    tags: ["Brand", "Build"],
  },
  {
    to: "/contact",
    industry: "consumer",
    discipline: "marketing",
    mediaNote: "Project (Consumer)",
    title: "Growth & SEO (Consumer)",
    metricValue: "[ metric ]",
    metricKey: "add result",
    tags: ["Marketing", "SEO"],
  },
  {
    to: "/contact",
    industry: "health",
    discipline: "strategy",
    mediaNote: "Project (Health)",
    title: "Strategy Engagement (Health)",
    metricValue: "[ metric ]",
    metricKey: "add result",
    tags: ["Strategy", "Research"],
  },
  {
    to: "/contact",
    industry: "logistics",
    discipline: "strategy build",
    mediaNote: "Project (Logistics)",
    title: "Strategy & Build (Logistics)",
    metricValue: "[ metric ]",
    metricKey: "add result",
    tags: ["Strategy", "Build"],
  },
  {
    to: "/contact",
    industry: "saas",
    discipline: "brand marketing",
    mediaNote: "Project (SaaS)",
    title: "Brand & Growth (SaaS)",
    metricValue: "[ metric ]",
    metricKey: "add result",
    tags: ["Brand", "Marketing"],
  },
  {
    to: "/contact",
    industry: "fintech",
    discipline: "marketing build",
    mediaNote: "Project (Fintech)",
    title: "Campaign & Build (Fintech)",
    metricValue: "[ metric ]",
    metricKey: "add result",
    tags: ["Marketing", "Build"],
  },
  {
    to: "/contact",
    industry: "consumer",
    discipline: "brand build",
    mediaNote: "Project (Consumer)",
    title: "Brand & Build (Consumer)",
    metricValue: "[ metric ]",
    metricKey: "add result",
    tags: ["Brand", "Build"],
  },
];

export default function Work() {
  useReveal();
  const [filters, setFilters] = useState<FilterState>({ industry: "all", discipline: "all" });

  const selectChip = (group: keyof FilterState, value: string) =>
    setFilters((prev) => ({ ...prev, [group]: value }));

  const isHidden = (card: WorkCardData) => {
    const ind = card.industry.split(" ");
    const dis = card.discipline.split(" ");
    const okI = filters.industry === "all" || ind.indexOf(filters.industry) > -1;
    const okD = filters.discipline === "all" || dis.indexOf(filters.discipline) > -1;
    return !(okI && okD);
  };

  return (
    <main>
      <section className="page-hero">
        <div className="glow glow--purple" />
        <div className="wrap">
          <span className="kicker" data-reveal><span className="num">01</span> SELECTED WORK</span>
          <div className="page-hero__row">
            <h1 data-reveal>Selected work.</h1>
          </div>
          <p className="lead" data-reveal data-reveal-delay="1">Outcomes across industries and disciplines: strategy, brand, marketing, and build. Filter by what matters to you.</p>
        </div>
      </section>

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="filters" data-reveal>
            <div className="filter-group">
              <span className="filter-group__label">Industry</span>
              {INDUSTRY_CHIPS.map((chip) => (
                <button
                  key={chip.value}
                  className={`fchip${filters.industry === chip.value ? " is-active" : ""}`}
                  data-group="industry"
                  data-value={chip.value}
                  onClick={() => selectChip("industry", chip.value)}
                >
                  {chip.label}
                </button>
              ))}
            </div>
            <div className="filter-group">
              <span className="filter-group__label">Discipline</span>
              {DISCIPLINE_CHIPS.map((chip) => (
                <button
                  key={chip.value}
                  className={`fchip${filters.discipline === chip.value ? " is-active" : ""}`}
                  data-group="discipline"
                  data-value={chip.value}
                  onClick={() => selectChip("discipline", chip.value)}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>

          <div className="work-grid" data-reveal data-reveal-delay="1">
            {CARDS.map((card, i) => (
              <Link
                key={i}
                to={card.to}
                className={`card card--hover work-card${isHidden(card) ? " is-hidden" : ""}`}
                data-industry={card.industry}
                data-discipline={card.discipline}
              >
                <div className="work-card__media">
                  <div className="mock"><div className="mock__bar"><i /><i /><i /></div><div className="mock__screen"><span className="mock__chip c1" /><span className="mock__chip c2" /><span className="mock__chip c3" /></div></div>
                  {card.flagship && <span className="tag tag--purple mock__tag">Flagship</span>}
                  <span className="media-note">{card.mediaNote}</span>
                </div>
                <div className="work-card__body">
                  <div className="work-card__top">
                    <span className="work-card__title">{card.title}</span>
                    {card.liveTag && <span className="tag tag--green">Live</span>}
                  </div>
                  <div className="work-card__metric"><span className="v">{card.metricValue}</span><span className="k">{card.metricKey}</span></div>
                  <div className="work-card__foot">
                    <div className="tags">{card.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                    {card.caseStudy && <span className="link-arrow">Case study <ArrowRight className="arrow" /></span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p className="muted-3" style={{ fontSize: 13, marginTop: "var(--s3)" }} data-reveal>Placeholder projects shown (swap in real case studies, imagery, and metrics). The IGNIFY card links to a full case-study template.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-panel" data-reveal>
            <div className="glow glow--purple" />
            <h2 className="h2">Want results like these?</h2>
            <p className="lead">Tell us what you're building and we'll come back with a clear plan and a first draft within a week.</p>
            <div className="cta-panel__btns"><Link to="/contact" className="btn btn--primary btn--lg">Start a project <ArrowRight className="arrow" /></Link><Link to="/contact#estimate" className="btn btn--ghost btn--lg">Get an estimate</Link></div>
          </div>
        </div>
      </section>
    </main>
  );
}
