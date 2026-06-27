(function(){
const PHONE_W = 402;
const PHONE_H = 874;
const LOGO_URL = "assets/images/Ignify_Logo_Color_transparent.png";
const PHOTOS = [
  "assets/images/featured.png",
  // art class
  "assets/images/featured_1.png",
  // ballet — Twinkle Toes
  "assets/images/featured_2.png",
  // piano — Piano Explorers
  "assets/images/featured_3.png",
  "assets/images/featured_4.png"
];
const TWEAK_DEFAULTS = (
  /*EDITMODE-BEGIN*/
  {
    "view": "compare",
    "palette": "hearth",
    "backdrop": "dark",
    "annotate": true
  }
);
const PALETTES = {
  hearth: {
    paper: "#FAF7F1",
    paper2: "#F2EDE2",
    paper3: "#E9E2D2",
    paper4: "#DCD5C3",
    ink: "#0E1623",
    ink2: "#2A3142",
    ink3: "#6A7283",
    ink4: "#9CA2AE",
    accent: "#DA4F1B",
    accent2: "#B23E11",
    accentSoft: "#FDE3D2",
    amber: "#FFD440",
    amberSoft: "#FFF1B8",
    success: "#2F7A5B",
    successSoft: "#DCEAE0",
    danger: "#C8442C",
    dangerSoft: "#F8D7CE",
    info: "#2A6FDB",
    infoSoft: "#D7E4F7",
    hairline: "rgba(14,22,35,.10)",
    hairlineStrong: "rgba(14,22,35,.18)",
    display: '"Newsreader", Georgia, serif',
    ui: '"Geist","Helvetica Neue", Arial, sans-serif',
    mono: 'Outfit, ui-monospace, monospace',
    titleStyle: { letterSpacing: "-.022em", weight: 500, italicEnd: true }
  },
  app: {
    paper: "#FAFAFB",
    paper2: "#F4F4F5",
    paper3: "#E9E9EB",
    paper4: "#D9D9DD",
    ink: "#18181B",
    ink2: "#3F3F46",
    ink3: "#71717A",
    ink4: "#A1A1AA",
    accent: "#6366F1",
    accent2: "#4F46E5",
    accentSoft: "#E0E7FF",
    amber: "#F59E0B",
    amberSoft: "#FEF3C7",
    success: "#10B981",
    successSoft: "#D1FAE5",
    danger: "#EF4444",
    dangerSoft: "#FEE2E2",
    info: "#3B82F6",
    infoSoft: "#DBEAFE",
    hairline: "rgba(24,24,27,.08)",
    hairlineStrong: "rgba(24,24,27,.14)",
    display: '"Plus Jakarta Sans","Helvetica Neue", sans-serif',
    ui: '"Plus Jakarta Sans","Helvetica Neue", sans-serif',
    mono: 'Outfit, ui-monospace, monospace',
    titleStyle: { letterSpacing: "-.018em", weight: 700, italicEnd: false }
  }
};
function useT(name) {
  return React.useMemo(() => PALETTES[name] || PALETTES.hearth, [name]);
}
function Icon({ name, size = 18, color = "currentColor", stroke = 1.5 }) {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  switch (name) {
    case "search":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "11", cy: "11", r: "7" }), /* @__PURE__ */ React.createElement("path", { d: "m20 20-3.5-3.5" }));
    case "pin":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12Z" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "10", r: "2.6" }));
    case "map":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6Z" }), /* @__PURE__ */ React.createElement("path", { d: "M9 4v16M15 6v16" }));
    case "list":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" }));
    case "bell":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" }), /* @__PURE__ */ React.createElement("path", { d: "M10 19a2 2 0 0 0 4 0" }));
    case "message":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 5h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-4 3V6a1 1 0 0 1 0-1Z" }));
    case "chevron-down":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m6 9 6 6 6-6" }));
    case "chevron-right":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m9 6 6 6-6 6" }));
    case "heart":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" }));
    case "heart-fill":
      return /* @__PURE__ */ React.createElement("svg", { ...p, fill: color, stroke: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" }));
    case "star":
      return /* @__PURE__ */ React.createElement("svg", { ...p, fill: color, stroke: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M12 3l2.7 5.5 6 .9-4.4 4.2 1 6L12 16.8 6.7 19.6l1-6L3.3 9.4l6-.9L12 3Z" }));
    case "sliders":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M4 7h11M4 12h6M4 17h13" }), /* @__PURE__ */ React.createElement("circle", { cx: "18", cy: "7", r: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "13", cy: "12", r: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "17", cy: "17", r: "2" }));
    case "note":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M9 4h11v5h-5v11H4V8l5-4Z" }), /* @__PURE__ */ React.createElement("path", { d: "M9 4v5H4" }));
    case "music":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M9 18V5l10-2v13" }), /* @__PURE__ */ React.createElement("circle", { cx: "6", cy: "18", r: "3" }), /* @__PURE__ */ React.createElement("circle", { cx: "16", cy: "16", r: "3" }));
    case "palette":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "7", cy: "11", r: "1.4" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "7", r: "1.4" }), /* @__PURE__ */ React.createElement("circle", { cx: "16", cy: "11", r: "1.4" }), /* @__PURE__ */ React.createElement("path", { d: "M12 3a9 9 0 1 0 7 14.5c1.6-2 0-3.5-2-3.5h-2a2 2 0 1 1 0-4h3a2 2 0 0 0 2-2A9 9 0 0 0 12 3Z" }));
    case "shield":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" }));
    case "flower":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6 9.5 9.5M14.5 14.5l3.9 3.9M5.6 18.4 9.5 14.5M14.5 9.5l3.9-3.9" }));
    case "leaf":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M4 20c0-9 8-15 16-15-1 8-7 15-16 15Z" }), /* @__PURE__ */ React.createElement("path", { d: "M4 20s5-6 10-9" }));
    case "book":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M4 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H4Z" }), /* @__PURE__ */ React.createElement("path", { d: "M20 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7Z" }));
    case "clock":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "8.5" }), /* @__PURE__ */ React.createElement("path", { d: "M12 7.5V12l3 2" }));
    case "arrow-right":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 12h14" }), /* @__PURE__ */ React.createElement("path", { d: "m13 6 6 6-6 6" }));
    case "plus":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 5v14M5 12h14" }));
    case "sparkles":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 4v3M12 17v3M4 12h3M17 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2" }));
    case "close":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M6 6l12 12M18 6 6 18" }));
    case "home":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-9Z" }));
    case "profile":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "8", r: "4" }), /* @__PURE__ */ React.createElement("path", { d: "M4 21a8 8 0 0 1 16 0" }));
    default:
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }));
  }
}
const CAT_ICONS = {
  "All": "sliders",
  "Music": "music",
  "Dance": "flower",
  "Art": "palette",
  "Martial Arts": "shield",
  "Fitness": "sparkles",
  "Yoga": "leaf",
  "Academic": "book"
};
function IGNIFYLogo({ height = 22 }) {
  return /* @__PURE__ */ React.createElement(
    "img",
    {
      src: LOGO_URL,
      alt: "ignify",
      style: { height, width: "auto", display: "block", userSelect: "none" },
      draggable: false
    }
  );
}
function StatusPill({ status, t, blur = false }) {
  const map = {
    OPEN: { bg: "#E7F8EE", fg: "#1E7F3A", label: "Open" },
    CLOSES_SOON: { bg: "#FFF4E5", fg: "#B86A00", label: "Closes soon" },
    CLOSED: { bg: "#FDECEC", fg: "#B42318", label: "Closed" }
  };
  const cfg = map[status];
  if (!cfg) return null;
  return /* @__PURE__ */ React.createElement("span", { style: {
    padding: "3px 9px",
    borderRadius: 6,
    background: blur ? "rgba(255,255,255,.88)" : cfg.bg,
    color: cfg.fg,
    fontFamily: t.ui,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: ".04em",
    backdropFilter: blur ? "blur(8px)" : "none",
    WebkitBackdropFilter: blur ? "blur(8px)" : "none",
    whiteSpace: "nowrap"
  } }, cfg.label);
}
function BadgedIcon({ name, color, count = 0 }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "relative",
    width: 36,
    height: 36,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icon, { name, size: 22, color }), count > 0 && /* @__PURE__ */ React.createElement("span", { style: {
    position: "absolute",
    top: 5,
    right: 5,
    minWidth: 14,
    height: 14,
    padding: "0 4px",
    borderRadius: 999,
    background: "#EF4444",
    color: "#fff",
    fontFamily: '"Geist", sans-serif',
    fontSize: 9,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #fff",
    lineHeight: 1
  } }, count > 99 ? "99+" : count));
}
function TopBar({ t, location, centerLocation = false }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    background: t.paper,
    paddingTop: 50,
    paddingLeft: 16,
    paddingRight: 8,
    paddingBottom: 10,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  } }, /* @__PURE__ */ React.createElement(IGNIFYLogo, { height: 24 }), centerLocation && location && /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, calc(-50% + 20px))",
    // +20 = paddingTop offset/2
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    fontFamily: t.ui,
    fontSize: 11.5,
    fontWeight: 500,
    color: t.ink2,
    padding: "5px 10px",
    borderRadius: 999,
    background: t.paper2,
    border: `1px solid ${t.hairline}`,
    maxWidth: 170,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "pin", size: 11, color: t.accent, stroke: 1.8 }), /* @__PURE__ */ React.createElement("span", { style: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  } }, location), /* @__PURE__ */ React.createElement(Icon, { name: "chevron-down", size: 11, color: t.ink3, stroke: 1.8 })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 2 } }, /* @__PURE__ */ React.createElement(BadgedIcon, { name: "message", color: t.ink2 }), /* @__PURE__ */ React.createElement(BadgedIcon, { name: "bell", color: t.ink2 })));
}
const NAV_ITEMS = [
  { key: "explore", label: "Explore", icon: "map" },
  { key: "community", label: "Community", icon: "users" },
  { key: "home", label: "Home", icon: "home" },
  { key: "calendar", label: "Calendar", icon: "calendar" },
  { key: "account", label: "Account", icon: "profile" }
];
function BottomNav({ t, active = "explore", appLook = false }) {
  const bg = appLook ? "#fff" : t.paper;
  const top = appLook ? "#E5E7EB" : t.hairline;
  const sel = appLook ? "#2196F3" : t.ink;
  const unsel = appLook ? "#9CA3AF" : t.ink3;
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    background: bg,
    borderTop: `1px solid ${top}`,
    display: "flex",
    alignItems: "flex-start",
    paddingTop: 8,
    paddingBottom: 14,
    // home-indicator clearance
    fontFamily: t.ui
  } }, NAV_ITEMS.map((it) => {
    const a = active === it.key;
    const c = a ? sel : unsel;
    return /* @__PURE__ */ React.createElement("div", { key: it.key, style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4
    } }, /* @__PURE__ */ React.createElement(Icon, { name: it.icon, size: 22, color: c, stroke: a ? 2 : 1.6 }), /* @__PURE__ */ React.createElement("span", { style: {
      fontSize: 11,
      fontWeight: a ? 700 : 500,
      color: c,
      letterSpacing: "-.005em"
    } }, it.label));
  }));
}
function ExploreCurrent({ t }) {
  const ALL = [
    { name: "Twinkle Toes Ballet", cat: "Dance", city: "Brookside", img: PHOTOS[1], status: "OPEN", rating: 4.8 },
    { name: "Piano Explorers", cat: "Music", city: "Brookside", img: PHOTOS[2], status: "OPEN", rating: 4.7 },
    { name: "Northbeach Atelier", cat: "Art", city: "Waldo", img: PHOTOS[0], status: "CLOSES_SOON", rating: 4.9 },
    { name: "Waldo Karate", cat: "Martial Arts", city: "Waldo", img: PHOTOS[3], status: "OPEN", rating: 4.6 },
    { name: "Greenwood Strings", cat: "Music", city: "Greenwood", img: PHOTOS[4], status: "CLOSED", rating: 4.5 }
  ];
  const SAVED = [ALL[1], ALL[0]];
  const FEATURED = [ALL[0], ALL[2], ALL[3]];
  const RESULTS = ALL;
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: PHONE_W,
    height: PHONE_H,
    background: "#fff",
    position: "relative",
    fontFamily: t.ui,
    color: t.ink,
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement(TopBar, { t }), /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 16px 4px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    height: 44,
    padding: "0 12px",
    borderRadius: 12,
    background: "#F3F4F6",
    display: "flex",
    alignItems: "center",
    gap: 10
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "search", size: 20, color: "#6B7280" }), /* @__PURE__ */ React.createElement("span", { style: { color: "#9CA3AF", fontSize: 14 } }, "Search studios"))), /* @__PURE__ */ React.createElement("div", { style: {
    height: 44,
    padding: "8px 16px",
    display: "flex",
    gap: 8,
    overflow: "hidden"
  } }, ["All", "Music", "Dance", "Art", "Martial Arts", "Fitness"].map((c, i) => /* @__PURE__ */ React.createElement("span", { key: c, style: {
    padding: "0 14px",
    display: "inline-flex",
    alignItems: "center",
    background: i === 0 ? "#6366F1" : "#F3F4F6",
    color: i === 0 ? "#fff" : "#1F2937",
    borderRadius: 20,
    fontSize: 13,
    fontWeight: 700,
    whiteSpace: "nowrap"
  } }, c))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "auto", maxHeight: PHONE_H - 200 - 70 } }, /* @__PURE__ */ React.createElement("div", { style: {
    padding: "8px 16px 6px",
    display: "flex",
    alignItems: "center",
    gap: 6
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "heart-fill", size: 16, color: "#EF4444" }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 16, fontWeight: 700 } }, "Saved")), /* @__PURE__ */ React.createElement("div", { style: {
    height: 196,
    display: "flex",
    gap: 12,
    overflow: "hidden",
    padding: "0 16px"
  } }, SAVED.map((s, i) => /* @__PURE__ */ React.createElement(CurrentFeaturedCard, { key: i, t, s }))), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "12px 16px 6px",
    fontSize: 16,
    fontWeight: 700
  } }, "Featured"), /* @__PURE__ */ React.createElement("div", { style: {
    height: 196,
    display: "flex",
    gap: 12,
    overflow: "hidden",
    padding: "0 16px"
  } }, FEATURED.map((s, i) => /* @__PURE__ */ React.createElement(CurrentFeaturedCard, { key: i, t, s }))), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "12px 16px 8px",
    fontSize: 16,
    fontWeight: 700
  } }, "All places"), RESULTS.slice(0, 4).map((s, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { padding: "0 16px 10px" } }, /* @__PURE__ */ React.createElement(CurrentResultRow, { t, s })))), /* @__PURE__ */ React.createElement(BottomNav, { t, active: "explore", appLook: true }));
}
function CurrentFeaturedCard({ t, s }) {
  return /* @__PURE__ */ React.createElement("div", { style: { width: 220, flex: "0 0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", height: 130, borderRadius: 14, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("img", { src: s.img, alt: "", style: { width: "100%", height: "100%", objectFit: "cover", display: "block" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 8, left: 8 } }, /* @__PURE__ */ React.createElement(StatusPill, { status: s.status, t }))), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 700,
    color: "#000",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, s.name), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 2,
    fontSize: 12,
    color: "#6B7280",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, s.cat, " \xB7 ", s.city));
}
function CurrentResultRow({ t, s }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    padding: 12,
    borderRadius: 14,
    border: "1px solid #E5E7EB",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    gap: 12
  } }, /* @__PURE__ */ React.createElement("img", { src: s.img, alt: "", style: {
    width: 64,
    height: 64,
    borderRadius: 12,
    objectFit: "cover"
  } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontSize: 15,
    fontWeight: 700,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, s.name), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 2, fontSize: 12, color: "#6B7280" } }, s.cat, " \xB7 ", s.city), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 4, display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(StatusPill, { status: s.status, t }), s.rating && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 2 } }, /* @__PURE__ */ React.createElement(Icon, { name: "star", size: 12, color: "#FFB100" }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 700, color: "#4B5563" } }, s.rating.toFixed(1))))), /* @__PURE__ */ React.createElement(Icon, { name: "chevron-right", size: 20, color: "#9CA3AF", stroke: 2 }));
}
function ExploreEditorial({ t }) {
  const HERO = {
    name: "Piano Explorers",
    cat: "Piano \xB7 Strings \xB7 Theory",
    city: "Brookside",
    quote: '"We teach children the patience of a single note before the speed of a scale."',
    by: "Theo \u2014 Founding Instructor",
    img: PHOTOS[2],
    status: "OPEN",
    distance: "0.6 mi",
    next: "Today \xB7 5 pm"
  };
  const FEATURED = [
    { name: "Twinkle Toes Ballet", cat: "Dance", city: "Brookside", img: PHOTOS[1], status: "OPEN", spots: "2 spots open", distance: "0.4 mi" },
    { name: "Northbeach Atelier", cat: "Art", city: "Waldo", img: PHOTOS[0], status: "CLOSES_SOON", spots: "Waitlist", distance: "1.2 mi" },
    { name: "Waldo Karate", cat: "Karate", city: "Waldo", img: PHOTOS[3], status: "OPEN", spots: "Open", distance: "1.1 mi" }
  ];
  const SAVED = [
    { name: "Piano Explorers", next: "Tue 5 pm", tint: t.accent },
    { name: "Twinkle Toes", next: "Thu 4 pm", tint: t.success }
  ];
  const RESULTS = [
    { name: "Greenwood Strings", cat: "Music", city: "Greenwood", img: PHOTOS[4], status: "OPEN", rating: 4.8, distance: "0.9 mi", next: "Tomorrow \xB7 4 pm", price: "$$", spots: "2 left" },
    { name: "Westport Dojo", cat: "Martial Arts", city: "Westport", img: PHOTOS[3], status: "OPEN", rating: 4.6, distance: "1.4 mi", next: "Wed \xB7 5:30 pm", price: "$", spots: "Open" },
    { name: "Slope Studio Yoga", cat: "Yoga", city: "Brookside", img: PHOTOS[0], status: "CLOSES_SOON", rating: 4.9, distance: "0.3 mi", next: "In 30 min", price: "$$$", spots: "Last 1" }
  ];
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: PHONE_W,
    height: PHONE_H,
    background: t.paper,
    position: "relative",
    fontFamily: t.ui,
    color: t.ink,
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement(TopBar, { t, location: "Kansas City", centerLocation: true }), /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 16px 6px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    height: 50,
    padding: "0 8px 0 16px",
    borderRadius: 999,
    background: t.paper,
    border: `1px solid ${t.hairline}`,
    display: "flex",
    alignItems: "center",
    gap: 10,
    boxShadow: "0 1px 0 rgba(14,22,35,.04)"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "search", size: 18, color: t.ink3 }), /* @__PURE__ */ React.createElement("div", { style: {
    flex: 1,
    minWidth: 0,
    color: t.ink3,
    fontSize: 14,
    fontFamily: t.display,
    fontStyle: "italic",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, "Search studios near home"), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    borderRadius: 999,
    background: t.paper2,
    padding: 3,
    gap: 2
  } }, /* @__PURE__ */ React.createElement("button", { style: {
    padding: "6px 12px",
    borderRadius: 999,
    background: t.ink,
    color: t.paper,
    fontFamily: t.ui,
    fontSize: 11.5,
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    border: 0,
    cursor: "pointer"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "list", size: 12, color: t.paper }), " List"), /* @__PURE__ */ React.createElement("button", { style: {
    padding: "6px 12px",
    borderRadius: 999,
    background: "transparent",
    color: t.ink3,
    fontFamily: t.ui,
    fontSize: 11.5,
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    border: 0,
    cursor: "pointer"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "map", size: 12, color: t.ink3 }), " Map")))), /* @__PURE__ */ React.createElement("div", { style: {
    height: 40,
    padding: "4px 16px",
    display: "flex",
    gap: 6,
    overflow: "hidden"
  } }, ["All", "Music", "Dance", "Art", "Martial Arts", "Yoga"].map((c, i) => {
    const sel = i === 0;
    return /* @__PURE__ */ React.createElement("span", { key: c, style: {
      padding: "6px 11px",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: sel ? t.ink : "transparent",
      color: sel ? t.paper : t.ink2,
      border: sel ? "none" : `1px solid ${t.hairline}`,
      borderRadius: 999,
      fontFamily: t.ui,
      fontSize: 12,
      fontWeight: 600,
      whiteSpace: "nowrap"
    } }, /* @__PURE__ */ React.createElement(
      Icon,
      {
        name: CAT_ICONS[c],
        size: 12,
        color: sel ? t.paper : t.ink3,
        stroke: 1.7
      }
    ), c);
  })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "auto", maxHeight: PHONE_H - 200 - 70 } }, /* @__PURE__ */ React.createElement("div", { style: {
    padding: "14px 16px 8px",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between"
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.mono,
    fontSize: 10,
    color: t.ink3,
    letterSpacing: ".16em",
    textTransform: "uppercase"
  } }, "Picked for Eziz"), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 3,
    fontFamily: t.display,
    fontWeight: t.titleStyle.weight,
    fontSize: 22,
    letterSpacing: "-.018em"
  } }, "Studio of the week")), /* @__PURE__ */ React.createElement("button", { style: {
    fontFamily: t.ui,
    fontSize: 12,
    fontWeight: 600,
    color: t.ink2,
    padding: 0,
    background: "none",
    border: 0,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 4
  } }, "See all ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow-right", size: 11, color: t.ink2 }))), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 16px 14px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "relative",
    height: 320,
    borderRadius: 18,
    overflow: "hidden",
    background: "#111"
  } }, /* @__PURE__ */ React.createElement("img", { src: HERO.img, alt: "", style: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block"
  } }), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,.05) 30%, rgba(0,0,0,.55) 70%, rgba(0,0,0,.78) 100%)"
  } }), /* @__PURE__ */ React.createElement("button", { style: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 36,
    height: 36,
    borderRadius: 999,
    background: "rgba(255,255,255,.18)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    border: "1px solid rgba(255,255,255,.30)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "heart-fill", size: 16, color: t.accent })), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    bottom: 12,
    left: 12,
    display: "flex",
    gap: 6
  } }, /* @__PURE__ */ React.createElement(StatusPill, { status: HERO.status, t, blur: true }), /* @__PURE__ */ React.createElement("span", { style: {
    padding: "3px 9px",
    borderRadius: 6,
    background: "rgba(255,255,255,.88)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    color: t.ink,
    fontFamily: t.ui,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: ".04em",
    display: "inline-flex",
    alignItems: "center",
    gap: 4
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "pin", size: 10, color: t.ink }), " ", HERO.distance)), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 18,
    right: 18,
    bottom: 36,
    color: "#fff"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.mono,
    fontSize: 10.5,
    letterSpacing: ".14em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,.75)",
    marginBottom: 6
  } }, HERO.cat, " \xB7 ", HERO.city), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.display,
    fontWeight: t.titleStyle.weight,
    fontSize: 26,
    letterSpacing: "-.022em",
    lineHeight: 1.05,
    color: "#fff"
  } }, HERO.name), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 8,
    fontFamily: t.display,
    fontStyle: "italic",
    fontSize: 13.5,
    lineHeight: 1.35,
    color: "rgba(255,255,255,.92)",
    maxWidth: 280
  } }, HERO.quote), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 8,
    fontFamily: t.mono,
    fontSize: 10,
    letterSpacing: ".08em",
    color: "rgba(255,255,255,.6)"
  } }, HERO.by)), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: "8px 16px",
    background: "rgba(0,0,0,.65)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    color: "#fff"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontFamily: t.ui,
    fontSize: 12,
    fontWeight: 500,
    whiteSpace: "nowrap",
    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "clock", size: 12, color: "rgba(255,255,255,.8)" }), /* @__PURE__ */ React.createElement("span", null, "Next opening"), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 700, whiteSpace: "nowrap" } }, HERO.next)), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.ui,
    fontSize: 11,
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    whiteSpace: "nowrap",
    flex: "0 0 auto"
  } }, "View ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow-right", size: 11, color: "#fff" }))))), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "10px 16px 8px",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.display,
    fontWeight: t.titleStyle.weight,
    fontSize: 18,
    letterSpacing: "-.014em"
  } }, "Featured this week"), /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: t.mono,
    fontSize: 10,
    color: t.ink3,
    letterSpacing: ".12em",
    textTransform: "uppercase"
  } }, "3 new")), /* @__PURE__ */ React.createElement("div", { style: {
    height: 184,
    display: "flex",
    gap: 10,
    overflow: "hidden",
    padding: "0 16px"
  } }, FEATURED.map((s, i) => /* @__PURE__ */ React.createElement(EditorialFeaturedCard, { key: i, t, s }))), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "18px 16px 8px",
    display: "flex",
    alignItems: "center",
    gap: 6
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "heart-fill", size: 14, color: t.accent }), /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: t.display,
    fontWeight: t.titleStyle.weight,
    fontSize: 18,
    letterSpacing: "-.014em"
  } }, "Saved")), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 16px 4px", display: "flex", gap: 8 } }, SAVED.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    flex: 1,
    minWidth: 0,
    padding: 12,
    background: t.paper,
    border: `1px solid ${t.hairline}`,
    borderRadius: 14
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.display,
    fontWeight: t.titleStyle.weight,
    fontSize: 13.5,
    letterSpacing: "-.01em",
    lineHeight: 1.2,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: t.ink
  } }, s.name), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 8,
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontFamily: t.mono,
    fontSize: 10.5,
    color: s.tint,
    letterSpacing: ".06em"
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 6,
    height: 6,
    borderRadius: 999,
    background: s.tint
  } }), "Next \xB7 ", s.next)))), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "18px 16px 8px",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.display,
    fontWeight: t.titleStyle.weight,
    fontSize: 18,
    letterSpacing: "-.014em"
  } }, "Nearby"), /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: t.mono,
    fontSize: 10,
    color: t.ink3,
    letterSpacing: ".12em",
    textTransform: "uppercase"
  } }, "27 places")), RESULTS.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { padding: "0 16px 10px" } }, /* @__PURE__ */ React.createElement(EditorialResultRow, { t, s }))), /* @__PURE__ */ React.createElement("div", { style: { height: 16 } })), /* @__PURE__ */ React.createElement(BottomNav, { t, active: "explore" }));
}
function EditorialFeaturedCard({ t, s }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: 188,
    flex: "0 0 auto",
    position: "relative",
    borderRadius: 14,
    overflow: "hidden",
    background: t.paper,
    border: `1px solid ${t.hairline}`
  } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", height: 116 } }, /* @__PURE__ */ React.createElement("img", { src: s.img, alt: "", style: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block"
  } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: 6, right: 6 } }, /* @__PURE__ */ React.createElement(StatusPill, { status: s.status, t, blur: true }))), /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 10px 10px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.display,
    fontWeight: t.titleStyle.weight,
    fontSize: 13,
    letterSpacing: "-.01em",
    color: t.ink,
    lineHeight: 1.2,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, s.name), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 3,
    fontSize: 11,
    color: t.ink3,
    fontFamily: t.ui,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, s.cat, " \xB7 ", s.distance), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 6,
    fontFamily: t.mono,
    fontSize: 10,
    color: t.accent,
    letterSpacing: ".06em"
  } }, s.spots)));
}
function EditorialResultRow({ t, s }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    padding: 12,
    borderRadius: 16,
    background: t.paper,
    border: `1px solid ${t.hairline}`,
    display: "flex",
    gap: 12,
    alignItems: "stretch"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 72,
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
    flex: "0 0 auto"
  } }, /* @__PURE__ */ React.createElement("img", { src: s.img, alt: "", style: {
    width: 72,
    height: "100%",
    objectFit: "cover",
    display: "block"
  } })), /* @__PURE__ */ React.createElement("div", { style: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    justifyContent: "space-between"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.display,
    fontWeight: t.titleStyle.weight,
    fontSize: 15,
    letterSpacing: "-.012em",
    color: t.ink,
    lineHeight: 1.2,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    minWidth: 0
  } }, s.name), /* @__PURE__ */ React.createElement(StatusPill, { status: s.status, t })), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 3,
    fontSize: 11.5,
    color: t.ink3,
    fontFamily: t.ui,
    display: "inline-flex",
    alignItems: "center",
    gap: 5
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "pin", size: 11, color: t.ink3 }), s.distance, " \xB7 ", s.cat, " \xB7 ", s.city)), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    fontFamily: t.mono,
    fontSize: 10.5,
    color: t.success,
    letterSpacing: ".06em"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "clock", size: 10, color: t.success }), "Next \xB7 ", s.next), /* @__PURE__ */ React.createElement("div", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontFamily: t.ui,
    fontSize: 11,
    fontWeight: 600,
    color: t.ink2
  } }, /* @__PURE__ */ React.createElement("span", null, s.price), /* @__PURE__ */ React.createElement("span", { style: { color: t.ink4 } }, "\xB7"), /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 3,
    color: t.accent2
  } }, s.spots)))));
}
function P({ children }) {
  return /* @__PURE__ */ React.createElement(IOSDevice, { width: PHONE_W, height: PHONE_H }, children);
}
function Annotation({ n, title, body, color }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    padding: "14px 0",
    borderBottom: "1px solid rgba(245,241,231,.08)"
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    flex: "0 0 auto",
    width: 26,
    height: 26,
    borderRadius: "50%",
    background: `${color}24`,
    color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: 'Outfit, monospace',
    fontSize: 11,
    fontWeight: 700
  } }, String(n).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: '"Newsreader", Georgia, serif',
    fontWeight: 500,
    fontSize: 15,
    color: "#F5F1E7",
    letterSpacing: "-.012em"
  } }, title), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 1.45,
    color: "rgba(245,241,231,.62)"
  } }, body)));
}
function Gallery({ view, palette, backdrop, annotate }) {
  const t = useT(palette);
  const isDark = backdrop === "dark";
  const bg = isDark ? "#0E1623" : t.paper;
  const fg = isDark ? "#F5F1E7" : t.ink;
  const fgMute = isDark ? "rgba(245,241,231,.55)" : t.ink3;
  const fgDim = isDark ? "rgba(245,241,231,.45)" : t.ink4;
  const divider = isDark ? "rgba(245,241,231,.10)" : t.hairline;
  const showCurrent = view !== "editorial";
  const showProposed = view !== "current";
  return /* @__PURE__ */ React.createElement("div", { style: {
    minHeight: "100vh",
    background: bg,
    color: fg,
    paddingTop: 56,
    paddingBottom: 160,
    fontFamily: t.ui
  } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1480, margin: "0 auto", padding: "0 40px 24px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 16 } }, /* @__PURE__ */ React.createElement(IGNIFYLogo, { height: 20 }), /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: t.mono,
    fontSize: 10.5,
    letterSpacing: ".18em",
    textTransform: "uppercase",
    color: fgDim,
    marginLeft: 6
  } }, "Design review")), /* @__PURE__ */ React.createElement("h1", { style: {
    fontFamily: t.display,
    fontWeight: t.titleStyle.weight,
    fontSize: 44,
    letterSpacing: t.titleStyle.letterSpacing,
    margin: 0,
    color: fg,
    lineHeight: 1.04
  } }, "Explore page", /* @__PURE__ */ React.createElement("span", { style: { color: t.accent } }, ".")), /* @__PURE__ */ React.createElement("p", { style: {
    marginTop: 14,
    maxWidth: 760,
    color: fgMute,
    fontSize: 15,
    lineHeight: 1.55
  } }, "Left frame: a faithful reproduction of ", /* @__PURE__ */ React.createElement("span", { style: { fontFamily: t.mono, fontSize: 13 } }, "explore_page.dart"), " as it ships today. Right frame: an editorial pass \u2014 magazine hero, differentiated Saved, richer list rows, list/map toggle, personalised header, evocative search copy.")), /* @__PURE__ */ React.createElement("div", { style: {
    maxWidth: 1480,
    margin: "0 auto",
    padding: "24px 40px 0",
    display: "flex",
    gap: 56,
    alignItems: "flex-start",
    flexWrap: "wrap"
  } }, showCurrent && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: t.mono,
    fontSize: 11,
    color: fgMute,
    letterSpacing: ".08em"
  } }, "CURRENT \xB7 explore_page.dart"), /* @__PURE__ */ React.createElement("span", { style: {
    padding: "2px 8px",
    borderRadius: 999,
    background: "rgba(245,241,231,.10)",
    color: fgMute,
    fontFamily: t.mono,
    fontSize: 10,
    letterSpacing: ".08em"
  } }, "SHIPPED")), /* @__PURE__ */ React.createElement(P, null, /* @__PURE__ */ React.createElement(ExploreCurrent, { t }))), showProposed && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: t.mono,
    fontSize: 11,
    color: t.accent,
    letterSpacing: ".08em"
  } }, "PROPOSED \xB7 editorial"), /* @__PURE__ */ React.createElement("span", { style: {
    padding: "2px 8px",
    borderRadius: 999,
    background: `color-mix(in oklab, ${t.accent} 22%, transparent)`,
    color: t.accent,
    fontFamily: t.mono,
    fontSize: 10,
    letterSpacing: ".08em",
    border: `1px solid color-mix(in oklab, ${t.accent} 35%, transparent)`
  } }, "NEW")), /* @__PURE__ */ React.createElement(P, null, /* @__PURE__ */ React.createElement(ExploreEditorial, { t }))), annotate && view === "compare" && /* @__PURE__ */ React.createElement("div", { style: {
    flex: "1 1 360px",
    minWidth: 320,
    paddingTop: 36
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.mono,
    fontSize: 11,
    color: fgMute,
    letterSpacing: ".18em",
    textTransform: "uppercase",
    marginBottom: 12
  } }, "What changed"), /* @__PURE__ */ React.createElement(
    Annotation,
    {
      n: 1,
      title: "Magazine hero replaces equal cards",
      body: "The first studio gets a 320-tall full-bleed editorial card with cat, name, instructor quote, distance + open status with blur backplate, and a next-opening bar pinned to the bottom edge.",
      color: t.accent
    }
  ), /* @__PURE__ */ React.createElement(
    Annotation,
    {
      n: 2,
      title: "Saved differentiated",
      body: "Was identical to Featured (same 220\xD7130 card). Now two-up compact tiles with the name and the next class time in tint-coded mono \u2014 clearly \u201Cyours,\u201D not \u201Cours.\u201D",
      color: t.accent
    }
  ), /* @__PURE__ */ React.createElement(
    Annotation,
    {
      n: 3,
      title: "Richer list rows",
      body: "64\xD764 thumb stays, but the row gains distance, next opening, price band, and spots-left \u2014 the two signals families actually care about for \u201Cshould I tap.\u201D Chevron dropped.",
      color: t.accent
    }
  ), /* @__PURE__ */ React.createElement(
    Annotation,
    {
      n: 4,
      title: "Editorial search copy",
      body: "\u201CSearch studios\u201D \u2192 \u201CSearch violin, ballet, near home\u2026\u201D in display italic. Sets tone and reduces blank-input anxiety.",
      color: t.accent
    }
  ), /* @__PURE__ */ React.createElement(
    Annotation,
    {
      n: 5,
      title: "List / Map toggle",
      body: "A local-discovery product without a map metaphor is missing half its value. Toggle lives inside the search pill, no extra row.",
      color: t.accent
    }
  ), /* @__PURE__ */ React.createElement(
    Annotation,
    {
      n: 6,
      title: "Categories carry icons",
      body: "Eight equal-weight text chips become an iconographic rail. Selected uses ink (not primary blue) so the brand accent is reserved for action, not decoration.",
      color: t.accent
    }
  ), /* @__PURE__ */ React.createElement(
    Annotation,
    {
      n: 7,
      title: "Personalised eyebrow",
      body: "\u201CPicked for Eziz \xB7 Studio of the week\u201D over the hero. Once a child's age and interests exist on the account, Explore should look like it knows them.",
      color: t.accent
    }
  ), /* @__PURE__ */ React.createElement(
    Annotation,
    {
      n: 8,
      title: "Status pill bottom-right + blur",
      body: "Top-left pill was getting lost on busy photos. Moved to bottom-right with a frosted backplate \u2014 readable everywhere, less imposing.",
      color: t.accent
    }
  ), /* @__PURE__ */ React.createElement(
    Annotation,
    {
      n: 9,
      title: "Section heads in display serif",
      body: "\u201CSaved / Featured / All places\u201D were 16px 700 sans. Now 18 display serif at -.014em \u2014 the editorial voice the brand wants.",
      color: t.accent
    }
  ), /* @__PURE__ */ React.createElement(
    Annotation,
    {
      n: 10,
      title: "Temporal hook",
      body: "\u201CFeatured this week \xB7 3 new\u201D + \u201CNearby \xB7 27 places\u201D quantify freshness and density without adding a tab.",
      color: t.accent
    }
  ))));
}
window.IgExplore = ExploreEditorial;

})();
