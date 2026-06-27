const PHONE_W = 402;
const PHONE_H = 874;
const LOGO_URL = "assets/images/Ignify_Logo_Color_transparent.png";
const PHOTOS = [
  "assets/images/featured.png",
  // art
  "assets/images/featured_1.png",
  // ballet, Twinkle Toes
  "assets/images/featured_2.png",
  // piano, Piano Explorers
  "assets/images/featured_3.png",
  "assets/images/featured_4.png"
];
const AVATARS = [
  "assets/images/avatars/avatar_03.png",
  "assets/images/avatars/avatar_07.png",
  "assets/images/avatars/avatar_12.png"
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
function Icon({ name, size = 18, color = "currentColor", stroke = 1.5, fill }) {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill || "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  switch (name) {
    case "chat":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 5h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-4 3V6a1 1 0 0 1 0-1Z" }));
    case "bell":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" }), /* @__PURE__ */ React.createElement("path", { d: "M10 19a2 2 0 0 0 4 0" }));
    case "calendar":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "3.5", y: "5", width: "17", height: "15", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M8 3v4M16 3v4M3.5 10h17" }));
    case "clock":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "8.5" }), /* @__PURE__ */ React.createElement("path", { d: "M12 7.5V12l3 2" }));
    case "check":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m5 12 4 4 10-10" }));
    case "check-circle":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }), /* @__PURE__ */ React.createElement("path", { d: "m7.5 12 3 3 6-6" }));
    case "arrow-right":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 12h14" }), /* @__PURE__ */ React.createElement("path", { d: "m13 6 6 6-6 6" }));
    case "arrow-up":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 19V5" }), /* @__PURE__ */ React.createElement("path", { d: "m6 11 6-6 6 6" }));
    case "sparkles":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 4v3M12 17v3M4 12h3M17 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2" }));
    case "pin":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12Z" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "10", r: "2.6" }));
    case "home":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-9Z" }));
    case "profile":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "8", r: "4" }), /* @__PURE__ */ React.createElement("path", { d: "M4 21a8 8 0 0 1 16 0" }));
    case "users":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "9", r: "3.2" }), /* @__PURE__ */ React.createElement("path", { d: "M3 20a6 6 0 0 1 12 0" }), /* @__PURE__ */ React.createElement("circle", { cx: "17", cy: "8", r: "2.6" }), /* @__PURE__ */ React.createElement("path", { d: "M21 18a4.5 4.5 0 0 0-5-4.4" }));
    case "map":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6Z" }), /* @__PURE__ */ React.createElement("path", { d: "M9 4v16M15 6v16" }));
    case "plus":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 5v14M5 12h14" }));
    case "doc":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" }), /* @__PURE__ */ React.createElement("path", { d: "M14 3v5h5" }));
    case "briefcase":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "7", width: "18", height: "13", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" }));
    case "flame":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 3s5 4 5 9a5 5 0 0 1-10 0c0-2 1-3 2-4 0 1 .5 2 1.5 2 0-3-1-5 1.5-7Z" }));
    case "flag":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 21V4M5 4h11l-2 5 2 5H5" }));
    case "sliders":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M4 7h11M4 12h6M4 17h13" }), /* @__PURE__ */ React.createElement("circle", { cx: "18", cy: "7", r: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "13", cy: "12", r: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "17", cy: "17", r: "2" }));
    case "image":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "3.5", y: "4", width: "17", height: "16", rx: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "10", r: "1.6" }), /* @__PURE__ */ React.createElement("path", { d: "m4 18 5-5 4 4 3-3 4 4" }));
    case "chevron-right":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m9 6 6 6-6 6" }));
    case "qr":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "4", y: "4", width: "6", height: "6", rx: "1" }), /* @__PURE__ */ React.createElement("rect", { x: "14", y: "4", width: "6", height: "6", rx: "1" }), /* @__PURE__ */ React.createElement("rect", { x: "4", y: "14", width: "6", height: "6", rx: "1" }), /* @__PURE__ */ React.createElement("path", { d: "M14 14h2v2M18 14v6M14 18h2v2" }));
    case "graph":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M4 19V6" }), /* @__PURE__ */ React.createElement("path", { d: "M4 19h16" }), /* @__PURE__ */ React.createElement("path", { d: "M7 16l4-5 4 3 5-7" }));
    default:
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }));
  }
}
function IgnifyLogo({ height = 24 }) {
  return /* @__PURE__ */ React.createElement("img", { src: LOGO_URL, alt: "ignify", style: { height, width: "auto", display: "block" }, draggable: false });
}
function TopBar({ t }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    background: t.paper,
    paddingTop: 50,
    paddingLeft: 16,
    paddingRight: 8,
    paddingBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  } }, /* @__PURE__ */ React.createElement(IgnifyLogo, { height: 24 }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 2 } }, ["chat", "bell"].map((n, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    width: 36,
    height: 36,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: n, size: 22, color: t.ink2 })))));
}
const NAV_ITEMS = [
  { key: "explore", label: "Explore", icon: "map" },
  { key: "community", label: "Community", icon: "users" },
  { key: "home", label: "Home", icon: "home" },
  { key: "calendar", label: "Calendar", icon: "calendar" },
  { key: "account", label: "Account", icon: "profile" }
];
function BottomNav({ t, active = "home", appLook = false, onTab }) {
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
    fontFamily: t.ui
  } }, NAV_ITEMS.map((it) => {
    const a = active === it.key;
    const c = a ? sel : unsel;
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: it.key,
        onClick: () => onTab && onTab(it.key),
        style: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          cursor: "pointer",
          WebkitTapHighlightColor: "transparent",
          transform: a ? "translateY(-1px)" : "none",
          transition: "transform .2s ease"
        }
      },
      /* @__PURE__ */ React.createElement(Icon, { name: it.icon, size: 22, color: c, stroke: a ? 2 : 1.6 }),
      /* @__PURE__ */ React.createElement("span", { style: {
        fontSize: 11,
        fontWeight: a ? 700 : 500,
        color: c,
        letterSpacing: "-.005em"
      } }, it.label)
    );
  }));
}
function HomeCurrent({ t }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: PHONE_W,
    height: PHONE_H,
    background: "#fff",
    position: "relative",
    fontFamily: t.ui,
    color: t.ink,
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement(TopBar, { t }), /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 16px 18px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: "Plus Jakarta Sans, sans-serif",
    fontSize: 22,
    fontWeight: 800,
    color: "#000",
    letterSpacing: "-.02em"
  } }, "Good morning, Marina")), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 16px 16px", display: "flex", gap: 12 } }, [
    { icon: "calendar", title: "Schedule", sub: "See what's happening" },
    { icon: "profile", title: "Check In", sub: "Check in to your family members" }
  ].map((c, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    flex: 1,
    padding: 16,
    minHeight: 130,
    background: "#F5F7FF",
    borderRadius: 18,
    display: "flex",
    flexDirection: "column",
    gap: 8
  } }, /* @__PURE__ */ React.createElement(Icon, { name: c.icon, size: 22, color: "#6366F1" }), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: "Plus Jakarta Sans, sans-serif",
    fontSize: 16,
    fontWeight: 700,
    color: "#000"
  } }, c.title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "#9CA3AF", lineHeight: 1.35 } }, c.sub)))), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "0 16px 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: "Plus Jakarta Sans, sans-serif",
    fontSize: 18,
    fontWeight: 800,
    color: "#000"
  } }, "Upcoming activities"), /* @__PURE__ */ React.createElement("div", { style: {
    width: 40,
    height: 40,
    borderRadius: 999,
    border: "1px solid #E5E7EB",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "sliders", size: 18, color: "#374151" }))), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 16px 22px", display: "flex", gap: 10, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("span", { style: {
    padding: "8px 14px",
    background: "#E3F2FD",
    color: "#1E88E5",
    borderRadius: 16,
    border: "2px solid #1E88E5",
    fontFamily: "Plus Jakarta Sans, sans-serif",
    fontSize: 13,
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    gap: 6
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "users", size: 14, color: "#1E88E5" }), " All"), /* @__PURE__ */ React.createElement("span", { style: {
    padding: "8px 14px",
    background: "#FCE4EC18",
    color: "#E91E63",
    borderRadius: 16,
    fontFamily: "Plus Jakarta Sans, sans-serif",
    fontSize: 13,
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    gap: 6
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "profile", size: 14, color: "#E91E63" }), " Mira"), /* @__PURE__ */ React.createElement("span", { style: {
    padding: "8px 14px",
    background: "#E8F5E918",
    color: "#4CAF50",
    borderRadius: 16,
    fontFamily: "Plus Jakarta Sans, sans-serif",
    fontSize: 13,
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    gap: 6
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "profile", size: 14, color: "#4CAF50" }), " Theo")), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "0 16px 16px",
    fontFamily: "Plus Jakarta Sans, sans-serif",
    fontSize: 14,
    fontWeight: 600,
    color: "#4B5563"
  } }, "Today / Tuesday"), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 16px 20px", display: "flex", gap: 16 } }, /* @__PURE__ */ React.createElement("img", { src: PHOTOS[1], alt: "", style: {
    width: 90,
    height: 90,
    borderRadius: 16,
    objectFit: "cover"
  } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    border: "2px solid #E91E63"
  } }), /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: "Plus Jakarta Sans, sans-serif",
    fontSize: 16,
    fontWeight: 700,
    color: "#1F2937",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, "Ballet \xB7 Beginner")), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: 6,
    fontSize: 13,
    color: "#9CA3AF"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "graph", size: 14, color: "#9CA3AF", stroke: 1.6 }), "Twinkle Toes Ballet"), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: 6,
    fontSize: 13,
    color: "#9CA3AF"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "clock", size: 14, color: "#9CA3AF" }), "4:30 \u2013 5:15 pm"), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: 6,
    fontSize: 13,
    color: "#9CA3AF"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "profile", size: 14, color: "#9CA3AF" }), "Mira"))), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 16px 20px", display: "flex", gap: 16 } }, /* @__PURE__ */ React.createElement("img", { src: PHOTOS[2], alt: "", style: {
    width: 90,
    height: 90,
    borderRadius: 16,
    objectFit: "cover"
  } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    border: "2px solid #4CAF50"
  } }), /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: "Plus Jakarta Sans, sans-serif",
    fontSize: 16,
    fontWeight: 700,
    color: "#1F2937",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, "Piano \xB7 Group lesson")), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: 6,
    fontSize: 13,
    color: "#9CA3AF"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "graph", size: 14, color: "#9CA3AF", stroke: 1.6 }), "Piano Explorers"), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: 6,
    fontSize: 13,
    color: "#9CA3AF"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "clock", size: 14, color: "#9CA3AF" }), "6:00 \u2013 7:00 pm"), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: 6,
    fontSize: 13,
    color: "#9CA3AF"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "profile", size: 14, color: "#9CA3AF" }), "Theo"))), /* @__PURE__ */ React.createElement(BottomNav, { t, active: "home", appLook: true }));
}
function GreetingHeader({ t, eyebrow, name, sub }) {
  return /* @__PURE__ */ React.createElement("div", { style: { padding: "2px 20px 14px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.mono,
    fontSize: 10.5,
    color: t.ink3,
    letterSpacing: ".16em",
    textTransform: "uppercase"
  } }, eyebrow), /* @__PURE__ */ React.createElement("h1", { style: {
    margin: "4px 0 0",
    fontFamily: t.display,
    fontWeight: t.titleStyle.weight,
    fontSize: 30,
    lineHeight: 1.04,
    letterSpacing: t.titleStyle.letterSpacing,
    color: t.ink
  } }, name, /* @__PURE__ */ React.createElement("span", { style: { color: t.accent } }, ".")), sub && /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 6,
    fontFamily: t.ui,
    fontSize: 13.5,
    color: t.ink2,
    lineHeight: 1.4,
    textWrap: "pretty",
    maxWidth: 320
  } }, sub));
}
function SectionHead({ t, label, meta, action }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    padding: "18px 20px 10px",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: 10
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 10, minWidth: 0 } }, /* @__PURE__ */ React.createElement("h3", { style: {
    margin: 0,
    fontFamily: t.display,
    fontWeight: t.titleStyle.weight,
    fontSize: 18,
    letterSpacing: "-.014em",
    color: t.ink,
    whiteSpace: "nowrap"
  } }, label), meta && /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: t.mono,
    fontSize: 10,
    color: t.ink3,
    letterSpacing: ".12em",
    textTransform: "uppercase",
    whiteSpace: "nowrap"
  } }, meta)), action && /* @__PURE__ */ React.createElement("button", { style: {
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
    gap: 4,
    whiteSpace: "nowrap"
  } }, action, " ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow-right", size: 11, color: t.ink2 })));
}
function LessonRow({ t, image, time, title, who, status, statusTone = "default" }) {
  const tone = statusTone === "live" ? "#FF5252" : statusTone === "ok" ? t.success : statusTone === "warn" ? t.amber : t.ink3;
  return /* @__PURE__ */ React.createElement("div", { style: {
    background: t.paper,
    border: `1px solid ${t.hairline}`,
    borderRadius: 14,
    padding: 12,
    display: "flex",
    alignItems: "flex-start",
    gap: 12
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 64,
    height: 64,
    borderRadius: 12,
    overflow: "hidden",
    flex: "0 0 auto",
    background: t.paper3
  } }, /* @__PURE__ */ React.createElement("img", { src: image, alt: "", style: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block"
  } })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, paddingTop: 2 } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontFamily: t.mono,
    fontSize: 11.5,
    color: t.ink2,
    letterSpacing: ".02em"
  } }, /* @__PURE__ */ React.createElement("span", { style: { fontVariantNumeric: "tabular-nums" } }, time), status && /* @__PURE__ */ React.createElement("span", { style: {
    padding: "2px 7px",
    borderRadius: 4,
    background: tone,
    color: "#fff",
    fontFamily: t.ui,
    fontSize: 9.5,
    fontWeight: 700,
    letterSpacing: ".06em",
    textTransform: "uppercase",
    whiteSpace: "nowrap"
  } }, status)), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 6,
    fontFamily: t.display,
    fontSize: 15,
    fontWeight: t.titleStyle.weight,
    letterSpacing: "-.01em",
    color: t.ink,
    lineHeight: 1.2,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, title), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 4,
    fontSize: 12,
    color: t.ink3,
    fontFamily: t.ui,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, who)));
}
function StatTile({ t, label, value, delta, deltaTone = "success", sparkline }) {
  const deltaColor = deltaTone === "success" ? t.success : t.danger;
  return /* @__PURE__ */ React.createElement("div", { style: {
    flex: 1,
    padding: 14,
    background: t.paper,
    border: `1px solid ${t.hairline}`,
    borderRadius: 16,
    display: "flex",
    flexDirection: "column",
    gap: 6,
    minHeight: 102
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.mono,
    fontSize: 10,
    color: t.ink3,
    letterSpacing: ".14em",
    textTransform: "uppercase"
  } }, label), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.display,
    fontWeight: t.titleStyle.weight,
    fontSize: 24,
    letterSpacing: "-.022em",
    fontVariantNumeric: "tabular-nums",
    color: t.ink,
    lineHeight: 1
  } }, value), delta && /* @__PURE__ */ React.createElement("div", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    fontFamily: t.ui,
    fontSize: 11,
    fontWeight: 600,
    color: deltaColor
  } }, /* @__PURE__ */ React.createElement("svg", { width: "8", height: "8", viewBox: "0 0 8 8" }, /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M1.5 6 L4 2 L6.5 6",
      stroke: deltaColor,
      strokeWidth: "1.6",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none"
    }
  )), delta), sparkline && /* @__PURE__ */ React.createElement("svg", { width: "100%", height: "22", viewBox: "0 0 100 22", preserveAspectRatio: "none", style: { marginTop: "auto" } }, /* @__PURE__ */ React.createElement(
    "path",
    {
      d: sparkline,
      stroke: t.success,
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none"
    }
  )));
}
function MemberChip({ t, name, color, count, active }) {
  return /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "7px 12px",
    borderRadius: 999,
    background: active ? t.ink : `${color}1F`,
    color: active ? t.paper : color,
    border: active ? "none" : `1px solid ${color}38`,
    fontFamily: t.ui,
    fontSize: 12.5,
    fontWeight: 600,
    whiteSpace: "nowrap"
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 8,
    height: 8,
    borderRadius: 999,
    background: active ? t.paper : color
  } }), name, count != null && /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: t.mono,
    fontSize: 10.5,
    opacity: 0.75
  } }, "\xB7 ", count));
}
function HomeFamily({ t, onTab, onOpenReport }) {
  const openReport = onOpenReport || function() {
  };
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: PHONE_W,
    height: PHONE_H,
    background: t.paper,
    position: "relative",
    fontFamily: t.ui,
    color: t.ink,
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement(TopBar, { t }), /* @__PURE__ */ React.createElement("div", { style: { overflow: "auto", maxHeight: PHONE_H - 56 - 70 - 16, paddingBottom: 80 } }, /* @__PURE__ */ React.createElement(
    GreetingHeader,
    {
      t,
      eyebrow: "Tuesday \xB7 May 14",
      name: "Good morning, Marina",
      sub: "Two lessons today. Mira's first, in 2 hours and 12 minutes."
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { padding: "2px 20px 6px" } }, /* @__PURE__ */ React.createElement("div", { onClick: openReport, role: "button", tabIndex: 0, className: "igniDraft", style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    cursor: "pointer",
    padding: "11px 13px",
    borderRadius: 16,
    background: t.ink,
    color: t.paper
  } }, /* @__PURE__ */ React.createElement("div", { style: { width: 40, height: 40, borderRadius: 11, overflow: "hidden", flex: "0 0 auto" } }, /* @__PURE__ */ React.createElement("img", { src: PHOTOS[1], alt: "", style: { width: "100%", height: "100%", objectFit: "cover", display: "block" } })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9.5, letterSpacing: ".14em", textTransform: "uppercase", color: t.amber, display: "flex", alignItems: "center", gap: 5 } }, /* @__PURE__ */ React.createElement(Icon, { name: "sparkles", size: 11, color: t.amber }), " New lesson report \xB7 ready"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 2, fontFamily: t.ui, fontSize: 13.5, fontWeight: 700, color: t.paper, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, "Mira\u2019s ballet \xB7 \u201CShe nailed her grand jet\xE9\u201D")), /* @__PURE__ */ React.createElement(Icon, { name: "chevron-right", size: 18, color: "rgba(255,255,255,.6)" }))), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px 6px", display: "flex", gap: 8, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(MemberChip, { t, name: "All", color: t.ink, active: true, count: 2 }), /* @__PURE__ */ React.createElement(MemberChip, { t, name: "Mira", color: "#E91E63", count: 1 }), /* @__PURE__ */ React.createElement(MemberChip, { t, name: "Theo", color: "#4CAF50", count: 1 })), /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 20px 4px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "relative",
    height: 168,
    borderRadius: 18,
    overflow: "hidden",
    background: "#111"
  } }, /* @__PURE__ */ React.createElement("img", { src: PHOTOS[1], alt: "", style: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block"
  } }), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(0,0,0,.15) 30%, rgba(0,0,0,.7) 100%)"
  } }), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 18,
    right: 18,
    bottom: 14,
    color: "#fff"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.mono,
    fontSize: 10,
    color: "rgba(255,255,255,.75)",
    letterSpacing: ".14em",
    textTransform: "uppercase",
    marginBottom: 6
  } }, "Up next \xB7 in 2h 12m"), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.display,
    fontWeight: t.titleStyle.weight,
    fontSize: 22,
    letterSpacing: "-.018em",
    lineHeight: 1.05
  } }, "Mira \xB7 Ballet beginner"), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 6,
    fontSize: 12.5,
    color: "rgba(255,255,255,.78)",
    fontFamily: t.ui
  } }, "4:30 pm \xB7 Twinkle Toes \xB7 Studio A")), /* @__PURE__ */ React.createElement("button", { style: {
    position: "absolute",
    top: 12,
    right: 12,
    padding: "7px 12px",
    borderRadius: 999,
    background: "rgba(255,255,255,.92)",
    color: t.ink,
    border: 0,
    cursor: "pointer",
    fontFamily: t.ui,
    fontSize: 11.5,
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    gap: 5
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "qr", size: 12, color: t.ink }), " Check in"))), /* @__PURE__ */ React.createElement(SectionHead, { t, label: "Today's schedule", meta: "2 LESSONS", action: "See all" }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px", display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement(
    LessonRow,
    {
      t,
      image: PHOTOS[1],
      time: "4:30 \u2013 5:15 pm",
      status: null,
      title: "Ballet \xB7 Beginner",
      who: "Mira \xB7 Twinkle Toes \xB7 Studio A"
    }
  ), /* @__PURE__ */ React.createElement(
    LessonRow,
    {
      t,
      image: PHOTOS[2],
      time: "6:00 \u2013 7:00 pm",
      status: null,
      title: "Piano \xB7 Group lesson",
      who: "Theo \xB7 Piano Explorers \xB7 Studio B"
    }
  )), /* @__PURE__ */ React.createElement(SectionHead, { t, label: "New reports", meta: "2 UNREAD", action: "All reports" }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px", display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { onClick: openReport, role: "button", tabIndex: 0, style: {
    padding: 14,
    borderRadius: 16,
    cursor: "pointer",
    background: t.paper,
    border: `1px solid ${t.hairline}`
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 12
  } }, /* @__PURE__ */ React.createElement("img", { src: PHOTOS[1], alt: "", style: {
    width: 44,
    height: 44,
    borderRadius: 12,
    objectFit: "cover"
  } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.mono,
    fontSize: 10,
    color: t.accent,
    letterSpacing: ".14em",
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    gap: 5
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "sparkles", size: 10, color: t.accent }), "Mira \xB7 yesterday\u2019s ballet"), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 3,
    fontFamily: t.display,
    fontSize: 14.5,
    fontWeight: t.titleStyle.weight,
    letterSpacing: "-.01em",
    color: t.ink,
    lineHeight: 1.2,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, "Mira nailed her grand jet\xE9")), /* @__PURE__ */ React.createElement(Icon, { name: "chevron-right", size: 18, color: t.ink3 })), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 10,
    padding: "9px 12px",
    background: t.paper2,
    borderRadius: 10,
    border: `1px dashed ${t.hairlineStrong}`,
    fontFamily: t.ui,
    fontSize: 12.5,
    lineHeight: 1.45,
    color: t.ink2
  } }, /* @__PURE__ */ React.createElement("span", { style: { color: t.ink } }, "\u201CTimings on the second leg finally clicked\u2026\u201D"), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 6,
    fontFamily: t.mono,
    fontSize: 9.5,
    color: t.ink3,
    letterSpacing: ".12em",
    textTransform: "uppercase"
  } }, "From Aida \xB7 reviewed by teacher")))), /* @__PURE__ */ React.createElement(SectionHead, { t, label: "This week" }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px", display: "flex", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: {
    flex: 1,
    padding: 14,
    background: t.paper,
    border: `1px solid ${t.hairline}`,
    borderRadius: 16,
    display: "flex",
    flexDirection: "column",
    gap: 6
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.mono,
    fontSize: 10,
    color: t.ink3,
    letterSpacing: ".14em",
    textTransform: "uppercase",
    display: "inline-flex",
    alignItems: "center",
    gap: 5
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "briefcase", size: 10, color: t.ink3, stroke: 1.6 }), "Account balance"), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.display,
    fontWeight: t.titleStyle.weight,
    fontSize: 22,
    letterSpacing: "-.022em",
    fontVariantNumeric: "tabular-nums",
    color: t.ink,
    lineHeight: 1
  } }, "$180.00"), /* @__PURE__ */ React.createElement("div", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    fontFamily: t.ui,
    fontSize: 11,
    fontWeight: 600,
    color: t.amber
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "clock", size: 11, color: t.amber }), "Due Friday \xB7 May 17"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement("button", { style: {
    padding: "6px 10px",
    borderRadius: 999,
    background: t.ink,
    color: t.paper,
    border: 0,
    cursor: "pointer",
    fontFamily: t.ui,
    fontSize: 11.5,
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    alignSelf: "flex-start"
  } }, "Pay invoice ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow-right", size: 11, color: t.paper }))), /* @__PURE__ */ React.createElement("div", { style: {
    flex: 1,
    padding: 14,
    background: t.paper,
    border: `1px solid ${t.hairline}`,
    borderRadius: 16,
    display: "flex",
    flexDirection: "column",
    gap: 6
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.mono,
    fontSize: 10,
    color: t.accent,
    letterSpacing: ".14em",
    textTransform: "uppercase"
  } }, "From Twinkle Toes"), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.display,
    fontSize: 14,
    fontWeight: t.titleStyle.weight,
    letterSpacing: "-.01em",
    color: t.ink,
    lineHeight: 1.22
  } }, "Spring recital ticket sale opens Friday"), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: "auto",
    fontFamily: t.ui,
    fontSize: 11,
    color: t.ink3,
    display: "inline-flex",
    alignItems: "center",
    gap: 5
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "calendar", size: 11, color: t.ink3, stroke: 1.6 }), "Sat June 8 \xB7 7 pm")))), /* @__PURE__ */ React.createElement(BottomNav, { t, active: "home", onTab }));
}
function HomeTeacher({ t, onReview, sent, onTab }) {
  var ss = React.useState(false);
  var seen = ss[0], setSeen = ss[1];
  React.useEffect(function() {
    if (!sent) {
      setSeen(false);
      return;
    }
    var id = setInterval(function() {
      setSeen(function(x) {
        return !x;
      });
    }, 2600);
    return function() {
      clearInterval(id);
    };
  }, [sent]);
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: PHONE_W,
    height: PHONE_H,
    background: t.paper,
    position: "relative",
    fontFamily: t.ui,
    color: t.ink,
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement(TopBar, { t }), /* @__PURE__ */ React.createElement("div", { style: { overflow: "auto", maxHeight: PHONE_H - 56 - 70 - 16, paddingBottom: 80 } }, /* @__PURE__ */ React.createElement(
    GreetingHeader,
    {
      t,
      eyebrow: "Tuesday \xB7 June 6",
      name: "Good morning, Theo",
      sub: "5 lessons today. Eziz's violin class is in the studio in 32 minutes."
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 20px 4px", display: "flex", gap: 10 } }, /* @__PURE__ */ React.createElement(StatTile, { t, label: "Today", value: "5 lessons" }), /* @__PURE__ */ React.createElement(StatTile, { t, label: "Students", value: "14 today", delta: "2 vs Mon", deltaTone: "success" })), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 20px 0" } }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: sent ? void 0 : "igniDraft",
      onClick: sent ? void 0 : onReview,
      role: "button",
      tabIndex: sent ? -1 : 0,
      "aria-label": sent ? "Reports sent to families" : "Review the reports drafted by IGNI",
      onKeyDown: (e) => {
        if (!sent && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onReview && onReview();
        }
      },
      style: {
        padding: "12px 14px",
        borderRadius: 16,
        background: sent ? t.successSoft : t.ink,
        color: sent ? t.ink : t.paper,
        display: "flex",
        alignItems: "center",
        gap: 12,
        boxShadow: sent ? "none" : "0 16px 28px -16px rgba(14,22,35,.30)",
        border: `1px solid ${sent ? t.success : "transparent"}`,
        cursor: sent ? "default" : "pointer",
        WebkitTapHighlightColor: "transparent",
        transition: "background .45s ease, color .45s ease, box-shadow .45s ease"
      }
    },
    /* @__PURE__ */ React.createElement("div", { style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      flex: "0 0 auto",
      background: sent ? t.success : "rgba(255,255,255,.10)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    } }, /* @__PURE__ */ React.createElement(Icon, { name: sent ? seen ? "check-circle" : "check" : "sparkles", size: 18, color: sent ? "#fff" : t.amber, stroke: sent ? 2.4 : 1.5 })),
    /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: t.ui,
      fontWeight: 700,
      fontSize: 13.5
    } }, sent ? seen ? "Seen by the Lin family" : "Report sent, family notified" : "Eziz Lin's report is ready"), /* @__PURE__ */ React.createElement("div", { style: {
      marginTop: 2,
      fontSize: 11.5,
      color: sent ? t.ink3 : "rgba(255,255,255,.65)"
    } }, sent ? seen ? "Just now \xB7 opened on their phone" : "The Lin family can read it now" : "Violin \xB7 Junior \xB7 drafted by IGNI, review & send")),
    /* @__PURE__ */ React.createElement("span", { style: {
      fontFamily: t.mono,
      fontSize: 11,
      fontWeight: 700,
      color: sent ? t.success : t.amber,
      letterSpacing: ".08em"
    } }, sent ? seen ? "SEEN" : "SENT" : "NEW")
  )), /* @__PURE__ */ React.createElement(SectionHead, { t, label: "Today's lessons", meta: "5 SCHEDULED", action: "Calendar" }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px", display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement(
    LessonRow,
    {
      t,
      image: PHOTOS[2],
      time: "4:30 \xB7 in 32m",
      status: "Up next",
      statusTone: "warn",
      title: "Violin \xB7 Junior",
      who: "Eziz Lin \xB7 Studio B"
    }
  ), /* @__PURE__ */ React.createElement(
    LessonRow,
    {
      t,
      image: PHOTOS[2],
      time: "5:30 \u2013 6:15 pm",
      status: null,
      title: "Violin \xB7 Beginner",
      who: "Noa Reyes +3 \xB7 Studio B"
    }
  ), /* @__PURE__ */ React.createElement(
    LessonRow,
    {
      t,
      image: PHOTOS[0],
      time: "6:30 \u2013 7:15 pm",
      status: null,
      title: "Strings ensemble",
      who: "6 students \xB7 Studio A"
    }
  )), /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 20px 0" } }, /* @__PURE__ */ React.createElement("div", { style: {
    padding: "14px",
    borderRadius: 16,
    background: t.paper,
    border: `1px solid ${t.hairline}`
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.display,
    fontWeight: t.titleStyle.weight,
    fontSize: 15,
    letterSpacing: "-.012em"
  } }, "Yesterday's attendance"), /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: t.mono,
    fontSize: 11,
    color: t.success,
    fontVariantNumeric: "tabular-nums",
    fontWeight: 700
  } }, "17 / 18")), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 10,
    height: 6,
    borderRadius: 999,
    background: t.paper3,
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { style: { width: "94%", height: "100%", background: t.success } })), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 8,
    fontFamily: t.ui,
    fontSize: 12,
    color: t.ink3,
    display: "flex",
    alignItems: "center",
    gap: 6
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "check-circle", size: 12, color: t.success }), "Ava P. checked out \xB7 Sofia R. absent (notified)")))), /* @__PURE__ */ React.createElement(BottomNav, { t, active: "home", onTab }));
}
const Device = window.IOSDevice;
const BRAND = {
  paper: "#FAF6EC",
  paper2: "#F2ECDC",
  paper3: "#E8E1CD",
  paper4: "#DBD2BA",
  ink: "#1B2440",
  ink2: "#3C455F",
  ink3: "#6E7589",
  ink4: "#9DA3B4",
  accent: "#FBD13E",
  accent2: "#EAB81F",
  accentSoft: "#FDF1C2",
  amber: "#FBD13E",
  amberSoft: "#FDF1C2",
  amberInk: "#8A6A00",
  success: "#059669",
  successSoft: "#D6F1E4",
  danger: "#DC2626",
  dangerSoft: "#FBE0E0",
  info: "#2563EB",
  infoSoft: "#DBEAFE",
  hairline: "rgba(27,36,64,.10)",
  hairlineStrong: "rgba(27,36,64,.18)",
  display: '"Plus Jakarta Sans","Helvetica Neue",sans-serif',
  ui: '"Outfit","Helvetica Neue",sans-serif',
  mono: 'Outfit,ui-monospace,monospace',
  titleStyle: { letterSpacing: "-.018em", weight: 700, italicEnd: false }
};
function XMark({ c = "#fff", s = 14 }) {
  return /* @__PURE__ */ React.createElement("svg", { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: c, strokeWidth: "2.4", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M6 6l12 12M18 6 6 18" }));
}
function PaperPlane({ c = "#fff", s = 16 }) {
  return /* @__PURE__ */ React.createElement("svg", { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: c, strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "m4 12 16-8-7 16-2-7-7-1Z" }));
}
function RSection({ t, kicker, children }) {
  return /* @__PURE__ */ React.createElement("div", { style: { padding: "15px 20px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9.5, color: t.ink3, letterSpacing: ".16em", textTransform: "uppercase" } }, kicker), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 7, fontFamily: t.ui, fontSize: 13.5, lineHeight: 1.55, color: t.ink2, textWrap: "pretty" } }, children));
}
function Typer({ t, text }) {
  var reduce = false;
  try {
    reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
  } catch (e) {
  }
  var st = React.useState(reduce ? text.length : 0);
  var n = st[0], setN = st[1];
  React.useEffect(function() {
    if (reduce) return;
    var i = 0, phase = 0, hold = 0;
    var id = setInterval(function() {
      if (phase === 0) {
        i += 2;
        if (i >= text.length) {
          i = text.length;
          phase = 1;
          hold = 0;
        }
        setN(i);
      } else if (phase === 1) {
        hold++;
        if (hold > 52) phase = 2;
      } else {
        i = 0;
        phase = 0;
        setN(0);
      }
    }, 28);
    return function() {
      clearInterval(id);
    };
  }, []);
  var typing = n < text.length;
  return /* @__PURE__ */ React.createElement("span", null, text.slice(0, n), typing ? /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", width: 2, height: "0.95em", background: t.accent2, marginLeft: 2, verticalAlign: "-1px", borderRadius: 1 } }) : null);
}
function ReportSheet({ t, open, sending, onClose, onSend }) {
  return /* @__PURE__ */ React.createElement("div", { "aria-hidden": !open, style: { position: "absolute", inset: 0, zIndex: 40, pointerEvents: open ? "auto" : "none" } }, /* @__PURE__ */ React.createElement("div", { onClick: onClose, style: { position: "absolute", inset: 0, background: "rgba(15,20,35,.34)", opacity: open ? 1 : 0, transition: "opacity .5s cubic-bezier(.32,.72,0,1)" } }), /* @__PURE__ */ React.createElement("div", { role: "dialog", "aria-label": "Lesson report", style: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 54,
    background: t.paper,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    boxShadow: "0 -18px 50px -22px rgba(15,20,35,.55)",
    transform: open ? "translateY(0)" : "translateY(102%)",
    transition: "transform .52s cubic-bezier(.32,.72,0,1)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", height: 30, flex: "0 0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 38, height: 5, borderRadius: 999, background: t.hairlineStrong, position: "absolute", left: "50%", top: 9, transform: "translateX(-50%)" } }), /* @__PURE__ */ React.createElement("div", { onClick: onClose, role: "button", "aria-label": "Close report", style: { position: "absolute", right: 14, top: 1, width: 30, height: 30, borderRadius: 999, background: t.ink, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" } }, /* @__PURE__ */ React.createElement(XMark, { c: t.paper, s: 13 }))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "auto", WebkitOverflowScrolling: "touch" } }, /* @__PURE__ */ React.createElement("div", { style: { height: 6, background: `linear-gradient(90deg, ${t.accent} 0%, ${t.accent2} 100%)` } }), /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 20px 12px", display: "flex", alignItems: "center", gap: 11, borderBottom: `1px solid ${t.hairline}` } }, /* @__PURE__ */ React.createElement("div", { style: { width: 34, height: 34, borderRadius: "50%", background: t.ink, display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" } }, /* @__PURE__ */ React.createElement(Icon, { name: "sparkles", size: 16, color: t.amber })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9, color: t.ink3, letterSpacing: ".16em", textTransform: "uppercase" } }, "Lesson report \xB7 drafted by IGNI"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 2, fontFamily: t.ui, fontWeight: 700, fontSize: 13.5, color: t.ink } }, "Ready for Theo's review"))), /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 20px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontFamily: t.mono, fontSize: 9, color: t.ink3, letterSpacing: ".16em", textTransform: "uppercase", paddingBottom: 10, borderBottom: `1px solid ${t.hairline}` } }, /* @__PURE__ */ React.createElement("span", null, "Lesson 14 \xB7 For Eziz Lin"), /* @__PURE__ */ React.createElement("span", null, "Tue \xB7 June 5")), /* @__PURE__ */ React.createElement("h3", { style: { margin: "12px 0 0", fontFamily: t.display, fontWeight: 800, fontSize: 24, letterSpacing: "-.02em", color: t.ink, lineHeight: 1.05 } }, "Violin \xB7 Junior", /* @__PURE__ */ React.createElement("span", { style: { color: t.accent2 } }, "."))), /* @__PURE__ */ React.createElement(RSection, { t, kicker: "How it went" }, /* @__PURE__ */ React.createElement(Typer, { t, text: "Eziz had a focused lesson today. We worked on his bow hold and the D-major scale, and by the end he was keeping a steady, even tone across all four strings, a real step up in control. His listening is starting to lead the playing." })), /* @__PURE__ */ React.createElement(RSection, { t, kicker: "Practice this week" }, /* @__PURE__ */ React.createElement("ul", { style: { margin: "2px 0 0", paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 } }, /* @__PURE__ */ React.createElement("li", null, "Slow D-major scale, two octaves, five minutes a day, listening for even tone."), /* @__PURE__ */ React.createElement("li", null, "Long open-string bows: smooth strokes, elbow leading, shoulder relaxed."), /* @__PURE__ */ React.createElement("li", null, "Play through \u201CLightly Row\u201D once before Thursday so the phrasing feels familiar."))), /* @__PURE__ */ React.createElement(RSection, { t, kicker: "Looking ahead" }, "Next week we will add the G-major scale and start shaping the first phrase of \u201CLightly Row\u201D with some simple dynamics."), /* @__PURE__ */ React.createElement("div", { style: { height: 18 } })), /* @__PURE__ */ React.createElement("div", { style: { flex: "0 0 auto", padding: "12px 16px 18px", borderTop: `1px solid ${t.hairline}`, background: t.paper } }, /* @__PURE__ */ React.createElement("button", { onClick: sending ? void 0 : onSend, disabled: sending, className: "rsSend", style: {
    width: "100%",
    height: 50,
    borderRadius: 15,
    border: 0,
    cursor: sending ? "default" : "pointer",
    background: t.ink,
    color: t.paper,
    fontFamily: t.ui,
    fontWeight: 800,
    fontSize: 15,
    letterSpacing: "-.01em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    opacity: sending ? 0.94 : 1
  } }, sending ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "rsSpin", style: { width: 15, height: 15, border: `2.4px solid ${t.amber}`, borderTopColor: "transparent", borderRadius: 999, display: "inline-block" } }), " Sending\u2026") : /* @__PURE__ */ React.createElement(React.Fragment, null, "Send to family ", /* @__PURE__ */ React.createElement(PaperPlane, { c: t.amber, s: 16 }))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 9, textAlign: "center", fontFamily: t.mono, fontSize: 9, color: t.ink3, letterSpacing: ".12em", textTransform: "uppercase" } }, "End-to-end encrypted \xB7 Lin family"))));
}
function FamilyReportSheet({ t, open, onClose }) {
  return /* @__PURE__ */ React.createElement("div", { "aria-hidden": !open, style: { position: "absolute", inset: 0, zIndex: 40, pointerEvents: open ? "auto" : "none" } }, /* @__PURE__ */ React.createElement("div", { onClick: onClose, style: { position: "absolute", inset: 0, background: "rgba(15,20,35,.34)", opacity: open ? 1 : 0, transition: "opacity .5s cubic-bezier(.32,.72,0,1)" } }), /* @__PURE__ */ React.createElement("div", { role: "dialog", "aria-label": "Lesson report", style: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 40,
    background: t.paper,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    boxShadow: "0 -18px 50px -22px rgba(15,20,35,.55)",
    transform: open ? "translateY(0)" : "translateY(102%)",
    transition: "transform .52s cubic-bezier(.32,.72,0,1)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "auto", WebkitOverflowScrolling: "touch" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", height: 190, flex: "0 0 auto" } }, /* @__PURE__ */ React.createElement("img", { src: PHOTOS[1], alt: "", style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,12,22,.04) 28%, rgba(8,12,22,.72) 100%)" } }), /* @__PURE__ */ React.createElement("div", { style: { width: 38, height: 5, borderRadius: 999, background: "rgba(255,255,255,.75)", position: "absolute", left: "50%", top: 9, transform: "translateX(-50%)" } }), /* @__PURE__ */ React.createElement("div", { onClick: onClose, role: "button", "aria-label": "Close report", style: { position: "absolute", right: 14, top: 14, width: 30, height: 30, borderRadius: 999, background: "rgba(8,12,22,.46)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" } }, /* @__PURE__ */ React.createElement(XMark, { c: "#fff", s: 13 })), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 20, right: 20, bottom: 15, color: "#fff" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9.5, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(255,255,255,.82)", display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement(Icon, { name: "sparkles", size: 11, color: t.amber }), " Lesson report \xB7 for Mira"), /* @__PURE__ */ React.createElement("h3", { style: { margin: "7px 0 0", fontFamily: t.display, fontWeight: 800, fontSize: 25, letterSpacing: "-.02em", lineHeight: 1.04 } }, "Ballet \xB7 Beginner", /* @__PURE__ */ React.createElement("span", { style: { color: t.amber } }, ".")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 5, fontFamily: t.ui, fontSize: 12, color: "rgba(255,255,255,.84)" } }, "Mon \xB7 May 13 \xB7 Twinkle Toes \xB7 with Aida"))), /* @__PURE__ */ React.createElement(RSection, { t, kicker: "How it went" }, "Mira had a wonderful lesson today. We worked on her grand jet\xE9, and the timing on the second leg finally clicked, she is leaping with real confidence now. Her focus from the first pli\xE9 to the last was lovely to watch."), /* @__PURE__ */ React.createElement(RSection, { t, kicker: "Practice this week" }, /* @__PURE__ */ React.createElement("ul", { style: { margin: "2px 0 0", paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 } }, /* @__PURE__ */ React.createElement("li", null, "Pli\xE9s at the barre, five minutes, slow and controlled, knees over toes."), /* @__PURE__ */ React.createElement("li", null, "The grand jet\xE9 approach: three steps, then the leap, landing soft and quiet."), /* @__PURE__ */ React.createElement("li", null, "Point and flex at home to keep building those strong little feet."))), /* @__PURE__ */ React.createElement(RSection, { t, kicker: "Looking ahead" }, "Next week we begin linking steps into a short combination for the spring recital, Mira is more than ready for it."), /* @__PURE__ */ React.createElement("div", { style: { height: 16 } })), /* @__PURE__ */ React.createElement("div", { style: { flex: "0 0 auto", padding: "12px 16px 18px", borderTop: `1px solid ${t.hairline}`, background: t.paper, display: "flex", gap: 10 } }, /* @__PURE__ */ React.createElement("button", { onClick: onClose, style: { flex: 1, height: 48, borderRadius: 14, border: 0, cursor: "pointer", background: t.ink, color: t.paper, fontFamily: t.ui, fontWeight: 800, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 7 } }, "Reply to Aida ", /* @__PURE__ */ React.createElement(PaperPlane, { c: t.amber, s: 15 })), /* @__PURE__ */ React.createElement("button", { onClick: onClose, style: { flex: "0 0 auto", height: 48, padding: "0 15px", borderRadius: 14, border: `1px solid ${t.hairlineStrong}`, cursor: "pointer", background: t.paper, color: t.ink, fontFamily: t.ui, fontWeight: 700, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 } }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 15, color: t.ink }), " Saved"))));
}
const FAM_WEEK = [["Sun", 11], ["Mon", 12], ["Tue", 13], ["Wed", 14], ["Thu", 15], ["Fri", 16], ["Sat", 17]];
const KID = { mira: { name: "Mira", color: "#E0457B" }, theo: { name: "Theo", color: "#3F8E4F" } };
function FamilyEvent({ t, kid, time, title, studio, room }) {
  const k = KID[kid];
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12, padding: "11px 12px", borderRadius: 14, background: t.paper, border: `1px solid ${t.hairline}`, alignItems: "stretch" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 4, borderRadius: 999, background: k.color, flex: "0 0 auto" } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 7 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: t.mono, fontSize: 11, color: t.ink2, fontVariantNumeric: "tabular-nums" } }, time), /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 5, padding: "2px 8px", borderRadius: 999, background: `${k.color}1A`, color: k.color, fontFamily: t.ui, fontSize: 10, fontWeight: 700 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 7, height: 7, borderRadius: 999, background: k.color } }), k.name)), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 5, fontFamily: t.display, fontSize: 14.5, fontWeight: t.titleStyle.weight, letterSpacing: "-.01em", color: t.ink, lineHeight: 1.2 } }, title), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 3, fontFamily: t.ui, fontSize: 11.5, color: t.ink3, display: "flex", alignItems: "center", gap: 5 } }, /* @__PURE__ */ React.createElement(Icon, { name: "pin", size: 11, color: t.ink3, stroke: 1.6 }), studio, " \xB7 ", room)));
}
function FamilyCalendar({ t, onTab }) {
  return /* @__PURE__ */ React.createElement("div", { style: { width: PHONE_W, height: PHONE_H, background: t.paper, position: "relative", fontFamily: t.ui, color: t.ink, overflow: "hidden" } }, /* @__PURE__ */ React.createElement(TopBar, { t }), /* @__PURE__ */ React.createElement("div", { style: { overflow: "auto", maxHeight: PHONE_H - 56 - 70 - 16, paddingBottom: 80 } }, /* @__PURE__ */ React.createElement(GreetingHeader, { t, eyebrow: "This week \xB7 May", name: "Family calendar", sub: "Mira and Theo, two studios, one schedule. Five lessons this week." }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px 4px", display: "flex", gap: 8, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(MemberChip, { t, name: "All", color: t.ink, active: true, count: 5 }), /* @__PURE__ */ React.createElement(MemberChip, { t, name: "Mira", color: KID.mira.color, count: 3 }), /* @__PURE__ */ React.createElement(MemberChip, { t, name: "Theo", color: KID.theo.color, count: 2 })), /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 16px 6px", display: "flex", gap: 6 } }, FAM_WEEK.map(function(d) {
    var today = d[1] === 13;
    var has = [12, 13, 15, 16].indexOf(d[1]) >= 0;
    return /* @__PURE__ */ React.createElement("div", { key: d[0], style: { flex: 1, borderRadius: 14, padding: "8px 0", textAlign: "center", background: today ? t.ink : t.paper2, color: today ? t.paper : t.ink2, border: `1px solid ${today ? t.ink : t.hairline}` } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9, letterSpacing: ".06em", opacity: 0.72 } }, d[0].toUpperCase()), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 3, fontFamily: t.display, fontWeight: 700, fontSize: 15 } }, d[1]), /* @__PURE__ */ React.createElement("div", { style: { width: 5, height: 5, borderRadius: 999, background: today ? t.amber : has ? t.ink3 : "transparent", margin: "4px auto 0" } }));
  })), /* @__PURE__ */ React.createElement(SectionHead, { t, label: "Today \xB7 Tue 13", meta: "2 LESSONS" }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px", display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement(FamilyEvent, { t, kid: "mira", time: "4:30 pm", title: "Ballet \xB7 Beginner", studio: "Twinkle Toes", room: "Studio A" }), /* @__PURE__ */ React.createElement(FamilyEvent, { t, kid: "theo", time: "6:00 pm", title: "Piano \xB7 Group lesson", studio: "Piano Explorers", room: "Studio B" })), /* @__PURE__ */ React.createElement(SectionHead, { t, label: "Thursday \xB7 May 15", meta: "2 LESSONS" }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px", display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement(FamilyEvent, { t, kid: "theo", time: "5:00 pm", title: "Piano \xB7 Private", studio: "Piano Explorers", room: "Studio B" }), /* @__PURE__ */ React.createElement(FamilyEvent, { t, kid: "mira", time: "6:30 pm", title: "Ballet \xB7 Recital prep", studio: "Twinkle Toes", room: "Studio A" })), /* @__PURE__ */ React.createElement(SectionHead, { t, label: "Friday \xB7 May 16", meta: "1 LESSON" }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px 12px", display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement(FamilyEvent, { t, kid: "mira", time: "4:30 pm", title: "Ballet \xB7 Beginner", studio: "Twinkle Toes", room: "Studio A" })), /* @__PURE__ */ React.createElement("div", { style: { padding: "2px 20px 16px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 11, alignItems: "flex-start", padding: "13px 14px", borderRadius: 16, background: t.paper2, border: `1px dashed ${t.hairlineStrong}` } }, /* @__PURE__ */ React.createElement(Icon, { name: "briefcase", size: 16, color: t.ink2, stroke: 1.6 }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.ui, fontSize: 12, lineHeight: 1.5, color: t.ink2 } }, "Both studios live in one calendar. Switch studios and your family\u2019s history comes with you, the record is yours to keep.")))), /* @__PURE__ */ React.createElement(BottomNav, { t, active: "calendar", onTab }));
}
const WEEK = [["Sun", 11], ["Mon", 12], ["Tue", 13], ["Wed", 14], ["Thu", 15], ["Fri", 16], ["Sat", 17]];
function CalendarScreen({ t, sent, onTab }) {
  return /* @__PURE__ */ React.createElement("div", { style: { width: PHONE_W, height: PHONE_H, background: t.paper, position: "relative", fontFamily: t.ui, color: t.ink, overflow: "hidden" } }, /* @__PURE__ */ React.createElement(TopBar, { t }), /* @__PURE__ */ React.createElement("div", { style: { overflow: "auto", maxHeight: PHONE_H - 56 - 70 - 16, paddingBottom: 80 } }, /* @__PURE__ */ React.createElement(GreetingHeader, { t, eyebrow: "This week \xB7 May", name: "Calendar", sub: "16 lessons across the studio this week. Four are yours today." }), /* @__PURE__ */ React.createElement("div", { style: { padding: "2px 16px 8px", display: "flex", gap: 6 } }, WEEK.map(function(d) {
    var today = d[1] === 13;
    return /* @__PURE__ */ React.createElement("div", { key: d[0], style: { flex: 1, borderRadius: 14, padding: "8px 0", textAlign: "center", background: today ? t.ink : t.paper2, color: today ? t.paper : t.ink2, border: `1px solid ${today ? t.ink : t.hairline}` } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9, letterSpacing: ".06em", opacity: 0.72 } }, d[0].toUpperCase()), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 3, fontFamily: t.display, fontWeight: 700, fontSize: 15 } }, d[1]), today && /* @__PURE__ */ React.createElement("div", { style: { width: 5, height: 5, borderRadius: 999, background: t.amber, margin: "4px auto 0" } }));
  })), /* @__PURE__ */ React.createElement(SectionHead, { t, label: "Tuesday \xB7 today", meta: "5 LESSONS" }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px", display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement(LessonRow, { t, image: PHOTOS[2], time: "9:00 \u2013 9:45 am", status: sent ? "Report sent" : "Report due", statusTone: sent ? "ok" : "warn", title: "Violin \xB7 Junior", who: "Eziz Lin \xB7 Studio B" }), /* @__PURE__ */ React.createElement(LessonRow, { t, image: PHOTOS[2], time: "4:30 \xB7 in 32m", status: "Up next", statusTone: "warn", title: "Violin \xB7 Beginner", who: "Noa Reyes +3 \xB7 Studio B" }), /* @__PURE__ */ React.createElement(LessonRow, { t, image: PHOTOS[0], time: "5:30 \u2013 6:15 pm", status: null, title: "Strings ensemble", who: "6 students \xB7 Studio A" }), /* @__PURE__ */ React.createElement(LessonRow, { t, image: PHOTOS[2], time: "6:30 \u2013 7:15 pm", status: null, title: "Voice \xB7 Foundations", who: "Ava Park \xB7 Studio C" }))), /* @__PURE__ */ React.createElement(BottomNav, { t, active: "calendar", onTab }));
}
function ExploreScreen({ t, onTab }) {
  return /* @__PURE__ */ React.createElement("div", { style: { width: PHONE_W, height: PHONE_H, background: t.paper, position: "relative", fontFamily: t.ui, color: t.ink, overflow: "hidden" } }, /* @__PURE__ */ React.createElement(TopBar, { t }), /* @__PURE__ */ React.createElement("div", { style: { overflow: "auto", maxHeight: PHONE_H - 56 - 70 - 16, paddingBottom: 80 } }, /* @__PURE__ */ React.createElement(GreetingHeader, { t, eyebrow: "Discover \xB7 Kansas City", name: "Explore", sub: "Studios and classes near you." }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, height: 42, padding: "0 14px", borderRadius: 12, background: t.paper2, border: `1px solid ${t.hairline}`, color: t.ink3, fontFamily: t.ui, fontSize: 14 } }, /* @__PURE__ */ React.createElement(Icon, { name: "pin", size: 16, color: t.ink3 }), " Search studios, subjects, teachers")), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 20px 2px", display: "flex", gap: 8, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(MemberChip, { t, name: "All", color: t.ink2, active: true }), /* @__PURE__ */ React.createElement(MemberChip, { t, name: "Violin", color: t.accent2 }), /* @__PURE__ */ React.createElement(MemberChip, { t, name: "Piano", color: t.info }), /* @__PURE__ */ React.createElement(MemberChip, { t, name: "Voice", color: t.success })), /* @__PURE__ */ React.createElement(SectionHead, { t, label: "Featured studios", meta: "NEAR YOU" }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px", display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement(LessonRow, { t, image: PHOTOS[2], time: "STRINGS \xB7 4.9 \u2605", status: "Open", statusTone: "ok", title: "City Strings Collective", who: "Brookside \xB7 6 classes this week" }), /* @__PURE__ */ React.createElement(LessonRow, { t, image: PHOTOS[2], time: "PIANO \xB7 4.8 \u2605", status: null, title: "Piano Explorers", who: "Westport \xB7 enrolling beginners" }), /* @__PURE__ */ React.createElement(LessonRow, { t, image: PHOTOS[0], time: "ART \xB7 5.0 \u2605", status: null, title: "Open Studio Collective", who: "Crossroads \xB7 weekend workshops" }))), /* @__PURE__ */ React.createElement(BottomNav, { t, active: "explore", onTab }));
}
function Post({ t, who, role, when, body, image }) {
  return /* @__PURE__ */ React.createElement("div", { style: { background: t.paper, border: `1px solid ${t.hairline}`, borderRadius: 16, padding: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 36, height: 36, borderRadius: "50%", background: t.ink, color: t.paper, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: t.display, fontWeight: 700, fontSize: 14, flex: "0 0 auto" } }, who.split(" ").map(function(w) {
    return w[0];
  }).slice(0, 2).join("")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.display, fontWeight: 700, fontSize: 14, color: t.ink } }, who), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9.5, color: t.ink3, letterSpacing: ".08em", textTransform: "uppercase" } }, role, " \xB7 ", when)), /* @__PURE__ */ React.createElement(Icon, { name: "flame", size: 18, color: t.accent2 })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10, fontFamily: t.ui, fontSize: 13.5, lineHeight: 1.5, color: t.ink2 } }, body), image && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10, height: 130, borderRadius: 12, overflow: "hidden", background: t.paper3 } }, /* @__PURE__ */ React.createElement("img", { src: image, alt: "", style: { width: "100%", height: "100%", objectFit: "cover", display: "block" } })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10, display: "flex", gap: 16, fontFamily: t.ui, fontSize: 12, color: t.ink3 } }, /* @__PURE__ */ React.createElement("span", null, "\u2665 24"), /* @__PURE__ */ React.createElement("span", null, "\u{1F4AC} 6"), /* @__PURE__ */ React.createElement("span", null, "\u2197 Share")));
}
function CommunityScreen({ t, onTab }) {
  return /* @__PURE__ */ React.createElement("div", { style: { width: PHONE_W, height: PHONE_H, background: t.paper, position: "relative", fontFamily: t.ui, color: t.ink, overflow: "hidden" } }, /* @__PURE__ */ React.createElement(TopBar, { t }), /* @__PURE__ */ React.createElement("div", { style: { overflow: "auto", maxHeight: PHONE_H - 56 - 70 - 16, paddingBottom: 80 } }, /* @__PURE__ */ React.createElement(GreetingHeader, { t, eyebrow: "Music Academy \xB7 Community", name: "Community", sub: "Wins and moments from your studio." }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px", display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement(Post, { t, who: "Theo Walsh", role: "Teacher", when: "2h", body: "Recital pieces are locked in \u{1F389} The beginner strings group played \u201CLightly Row\u201D in unison today, so proud of them.", image: PHOTOS[2] }), /* @__PURE__ */ React.createElement(Post, { t, who: "Alex", role: "Studio owner", when: "Yesterday", body: "Spring term enrollment is officially full across all three rooms. Thank you, families!" }))), /* @__PURE__ */ React.createElement(BottomNav, { t, active: "community", onTab }));
}
function AcctRow({ t, icon, label, detail, last }) {
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, padding: "13px 16px", borderBottom: last ? "none" : `1px solid ${t.hairline}`, cursor: "pointer", WebkitTapHighlightColor: "transparent" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 30, height: 30, borderRadius: 8, background: t.paper2, display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" } }, /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 16, color: t.ink2 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, fontFamily: t.ui, fontSize: 14.5, color: t.ink } }, label), detail && /* @__PURE__ */ React.createElement("span", { style: { fontFamily: t.ui, fontSize: 12.5, color: t.ink3 } }, detail), /* @__PURE__ */ React.createElement(Icon, { name: "chevron-right", size: 16, color: t.ink4 }));
}
function AccountScreen({ t, onTab }) {
  return /* @__PURE__ */ React.createElement("div", { style: { width: PHONE_W, height: PHONE_H, background: t.paper, position: "relative", fontFamily: t.ui, color: t.ink, overflow: "hidden" } }, /* @__PURE__ */ React.createElement(TopBar, { t }), /* @__PURE__ */ React.createElement("div", { style: { overflow: "auto", maxHeight: PHONE_H - 56 - 70 - 16, paddingBottom: 80 } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 20px 16px", display: "flex", alignItems: "center", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 60, height: 60, borderRadius: "50%", overflow: "hidden", background: t.paper3, flex: "0 0 auto", border: `2px solid ${t.accent}` } }, /* @__PURE__ */ React.createElement("img", { src: AVATARS[1], alt: "", style: { width: "100%", height: "100%", objectFit: "cover", display: "block" } })), /* @__PURE__ */ React.createElement("div", { style: { minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.display, fontWeight: 800, fontSize: 21, letterSpacing: "-.02em", color: t.ink } }, "Theo Walsh"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 2, fontFamily: t.ui, fontSize: 13, color: t.ink3 } }, "Teacher \xB7 Music Academy of KC"))), /* @__PURE__ */ React.createElement("div", { style: { margin: "0 16px", background: t.paper, border: `1px solid ${t.hairline}`, borderRadius: 18, overflow: "hidden" } }, /* @__PURE__ */ React.createElement(AcctRow, { t, icon: "profile", label: "Profile & availability" }), /* @__PURE__ */ React.createElement(AcctRow, { t, icon: "bell", label: "Notifications", detail: "On" }), /* @__PURE__ */ React.createElement(AcctRow, { t, icon: "briefcase", label: "Payments & payouts" }), /* @__PURE__ */ React.createElement(AcctRow, { t, icon: "doc", label: "Reports & history" }), /* @__PURE__ */ React.createElement(AcctRow, { t, icon: "users", label: "Help & support", last: true })), /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 20px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { height: 46, borderRadius: 13, border: `1px solid ${t.hairlineStrong}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: t.ui, fontWeight: 700, fontSize: 14, color: t.ink2, cursor: "pointer" } }, "Sign out"))), /* @__PURE__ */ React.createElement(BottomNav, { t, active: "account", onTab }));
}
const FRAG_W = 402, FRAG_H = 350;
function FragWrap({ t, children }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: FRAG_W,
    height: FRAG_H,
    overflow: "hidden",
    background: "transparent",
    fontFamily: t.ui,
    color: t.ink,
    padding: "20px 22px 24px",
    boxSizing: "border-box"
  } }, children);
}
function FragPill({ t, children, accent }) {
  return /* @__PURE__ */ React.createElement("span", { style: {
    padding: "3px 9px",
    borderRadius: 999,
    fontFamily: t.ui,
    fontSize: 10.5,
    fontWeight: 700,
    letterSpacing: ".02em",
    whiteSpace: "nowrap",
    background: accent ? t.amberSoft : t.paper2,
    color: accent ? t.accent2 : t.ink3,
    boxShadow: accent ? "none" : `inset 0 0 0 1px ${t.hairline}`
  } }, children);
}
function FragConnected({ t, icon, label }) {
  return /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "4px 10px 4px 6px",
    borderRadius: 999,
    background: t.paper,
    boxShadow: `inset 0 0 0 1px ${t.hairline}`,
    whiteSpace: "nowrap"
  } }, /* @__PURE__ */ React.createElement("img", { src: icon, alt: "", style: { width: 15, height: 15, objectFit: "contain", display: "block" } }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: t.ui, fontSize: 10.5, fontWeight: 600, color: t.ink2 } }, label), /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, borderRadius: 999, background: t.success, marginLeft: 1, boxShadow: `0 0 0 2px ${t.successSoft}` } }));
}
function FragmentReport({ t }) {
  return /* @__PURE__ */ React.createElement(FragWrap, { t }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", height: "100%" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 11 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 34, height: 34, borderRadius: "50%", background: t.ink, display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" } }, /* @__PURE__ */ React.createElement(Icon, { name: "sparkles", size: 16, color: t.amber })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9, color: t.ink3, letterSpacing: ".15em", textTransform: "uppercase" } }, "Drafted by IGNI \xB7 ready to review"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 2, fontFamily: t.display, fontWeight: t.titleStyle.weight, fontSize: 16, letterSpacing: "-.01em" } }, "Eziz \xB7 Violin, Junior")), /* @__PURE__ */ React.createElement(FragPill, { t, accent: true }, "Draft")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12, paddingTop: 12, borderTop: `1px solid ${t.hairline}` } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9, letterSpacing: ".15em", textTransform: "uppercase", color: t.accent2 } }, "How it went"), /* @__PURE__ */ React.createElement("p", { style: { margin: "6px 0 0", fontSize: 12.5, lineHeight: 1.5, color: t.ink2 } }, "Eziz kept a steady, even tone across all four strings today, a real step up in bow control. His listening is starting to lead the playing.")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 11 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9, letterSpacing: ".15em", textTransform: "uppercase", color: t.accent2 } }, "Practice this week"), /* @__PURE__ */ React.createElement("p", { style: { margin: "6px 0 0", fontSize: 12.5, lineHeight: 1.5, color: t.ink2 } }, "Slow D-major scale, five minutes a day, listening for an even tone across the change.")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 11 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9, letterSpacing: ".15em", textTransform: "uppercase", color: t.accent2 } }, "Looking ahead"), /* @__PURE__ */ React.createElement("p", { style: { margin: "6px 0 0", fontSize: 12.5, lineHeight: 1.5, color: t.ink2 } }, "Next week we add the G-major scale and start shaping the first phrase of \u201CLightly Row.\u201D")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "auto", paddingTop: 14, borderTop: `1px solid ${t.hairline}`, display: "flex", gap: 8, alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 7, padding: "0 15px", height: 38, borderRadius: 12, background: t.ink, color: t.paper, fontFamily: t.ui, fontWeight: 700, fontSize: 13 } }, "Approve & send ", /* @__PURE__ */ React.createElement(PaperPlane, { c: t.amber, s: 14 })), /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0 15px", height: 38, borderRadius: 12, background: t.paper, color: t.ink, fontFamily: t.ui, fontWeight: 700, fontSize: 13, boxShadow: `inset 0 0 0 1px ${t.hairlineStrong}` } }, "Edit"), /* @__PURE__ */ React.createElement("span", { style: { marginLeft: "auto", fontFamily: t.mono, fontSize: 10.5, color: t.ink3 } }, "92% kept"))));
}
function FragRow({ t, time, title, who, tone }) {
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 11, alignItems: "center", padding: "9px 11px", borderRadius: 12, background: t.paper, border: `1px solid ${t.hairline}` } }, /* @__PURE__ */ React.createElement("div", { style: { width: 3, alignSelf: "stretch", borderRadius: 999, background: tone || t.ink3 } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 10.5, color: t.ink2, fontVariantNumeric: "tabular-nums" } }, time), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 2, fontFamily: t.display, fontSize: 13.5, fontWeight: t.titleStyle.weight, letterSpacing: "-.01em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, title)), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.ui, fontSize: 10.5, color: t.ink3, whiteSpace: "nowrap" } }, who));
}
function FragStudioChip({ t, name, color, active }) {
  return /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "5px 11px",
    borderRadius: 999,
    background: active ? t.ink : t.paper,
    color: active ? t.paper : t.ink2,
    boxShadow: active ? "none" : `inset 0 0 0 1px ${t.hairline}`,
    fontFamily: t.ui,
    fontSize: 11,
    fontWeight: 600,
    whiteSpace: "nowrap"
  } }, /* @__PURE__ */ React.createElement("span", { style: { width: 7, height: 7, borderRadius: 999, background: active ? t.paper : color } }), name);
}
function FragmentSchedule({ t }) {
  return /* @__PURE__ */ React.createElement(FragWrap, { t }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.display, fontWeight: t.titleStyle.weight, fontSize: 17, letterSpacing: "-.01em" } }, "This week"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9.5, color: t.ink3, letterSpacing: ".08em", marginTop: 2 } }, "2 STUDIOS \xB7 5 LESSONS")), /* @__PURE__ */ React.createElement(FragConnected, { t, icon: "assets/images/google_calendar.png", label: "Google Calendar" })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 7, marginBottom: 11, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(FragStudioChip, { t, name: "All", color: t.ink3, active: true }), /* @__PURE__ */ React.createElement(FragStudioChip, { t, name: "Harmony Music", color: t.accent }), /* @__PURE__ */ React.createElement(FragStudioChip, { t, name: "Apex Martial Arts", color: t.info })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 5, marginBottom: 12 } }, WEEK.map(function(d) {
    var today = d[1] === 13;
    return /* @__PURE__ */ React.createElement("div", { key: d[0], style: { flex: 1, borderRadius: 11, padding: "7px 0", textAlign: "center", background: today ? t.ink : t.paper2, color: today ? t.paper : t.ink2, border: `1px solid ${today ? t.ink : t.hairline}` } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 8.5, letterSpacing: ".04em", opacity: 0.72 } }, d[0][0]), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 2, fontFamily: t.display, fontWeight: 700, fontSize: 13 } }, d[1]));
  })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, /* @__PURE__ */ React.createElement(FragRow, { t, time: "4:30 pm", title: "Violin \xB7 Junior", who: "Harmony Music", tone: t.accent }), /* @__PURE__ */ React.createElement(FragRow, { t, time: "6:00 pm", title: "Taekwondo \xB7 Yellow belt", who: "Apex Martial Arts", tone: t.info })));
}
function FragmentBilling({ t }) {
  var rows = [["Park family", "$320", true], ["Okafor family", "$240", true], ["Bianchi family", "$480", false]];
  return /* @__PURE__ */ React.createElement(FragWrap, { t }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 11, gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9, letterSpacing: ".15em", textTransform: "uppercase", color: t.ink3 } }, "Collected \xB7 June"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 3, display: "flex", alignItems: "baseline", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.display, fontWeight: t.titleStyle.weight, fontSize: 27, letterSpacing: "-.024em", fontVariantNumeric: "tabular-nums", lineHeight: 1 } }, "$18,420"), /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 3, color: t.success, fontFamily: t.ui, fontSize: 11, fontWeight: 700 } }, /* @__PURE__ */ React.createElement("svg", { width: "9", height: "9", viewBox: "0 0 8 8" }, /* @__PURE__ */ React.createElement("path", { d: "M1.5 6 L4 2 L6.5 6", stroke: t.success, strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })), "+9%"))), /* @__PURE__ */ React.createElement(FragConnected, { t, icon: "assets/images/quickbooks.png", label: "QuickBooks" })), /* @__PURE__ */ React.createElement("div", { style: { height: 7, borderRadius: 99, background: t.paper2, overflow: "hidden", marginBottom: 13 } }, /* @__PURE__ */ React.createElement("div", { style: { width: "94%", height: "100%", background: t.amber } })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column" } }, rows.map(function(r, i) {
    return /* @__PURE__ */ React.createElement("div", { key: r[0], style: { display: "flex", alignItems: "center", gap: 12, padding: "8px 0", fontSize: 12.5, borderTop: i === 0 ? "none" : `1px solid ${t.hairline}` } }, /* @__PURE__ */ React.createElement("span", { style: { flex: 1, color: t.ink2 } }, r[0]), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: t.mono, fontSize: 11.5, color: t.ink3, fontVariantNumeric: "tabular-nums" } }, r[1]), r[2] ? /* @__PURE__ */ React.createElement(FragPill, { t }, "Paid") : /* @__PURE__ */ React.createElement(FragPill, { t, accent: true }, "Reminder sent"));
  })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12, paddingTop: 13, borderTop: `1px solid ${t.hairline}`, display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 7, padding: "0 15px", height: 38, borderRadius: 12, background: t.ink, color: t.paper, fontFamily: t.ui, fontWeight: 700, fontSize: 12.5 } }, /* @__PURE__ */ React.createElement(Icon, { name: "bell", size: 13, color: t.amber }), " Send reminders"), /* @__PURE__ */ React.createElement("span", { style: { marginLeft: "auto", textAlign: "right" } }, /* @__PURE__ */ React.createElement("span", { style: { display: "block", fontFamily: t.display, fontWeight: t.titleStyle.weight, fontSize: 15, color: t.ink, fontVariantNumeric: "tabular-nums" } }, "13", /* @__PURE__ */ React.createElement("span", { style: { color: t.ink3, fontSize: 12 } }, " / 14")), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: t.mono, fontSize: 9, letterSpacing: ".1em", textTransform: "uppercase", color: t.ink3 } }, "invoices paid"))));
}
function FragmentMessages({ t }) {
  return /* @__PURE__ */ React.createElement(FragWrap, { t }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 9, marginBottom: 13 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 32, height: 32, borderRadius: "50%", background: t.paper2, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: t.display, fontWeight: 600, fontSize: 12, color: t.ink2, boxShadow: `inset 0 0 0 1px ${t.hairline}`, flex: "0 0 auto" } }, "L"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.display, fontWeight: t.titleStyle.weight, fontSize: 14, letterSpacing: "-.01em" } }, "Lin family \xB7 Eziz"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.ui, fontSize: 11, color: t.ink3 } }, "Violin, Junior \xB7 2 new")), /* @__PURE__ */ React.createElement("button", { "aria-label": "Call", style: { width: 36, height: 36, borderRadius: 999, background: t.paper, boxShadow: `inset 0 0 0 1px ${t.hairlineStrong}`, display: "flex", alignItems: "center", justifyContent: "center", color: t.ink, flex: "0 0 auto" } }, /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M5 4h3l1.6 4.6L7.5 10a11 11 0 0 0 5 5l1.4-2.1L18 14.5V18a2 2 0 0 1-2 2A14 14 0 0 1 4 6a2 2 0 0 1 1-2Z" }))), /* @__PURE__ */ React.createElement("button", { "aria-label": "Video call", style: { width: 36, height: 36, borderRadius: 999, background: t.amber, display: "flex", alignItems: "center", justifyContent: "center", color: t.ink, flex: "0 0 auto" } }, /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "6", width: "13", height: "12", rx: "2.5" }), /* @__PURE__ */ React.createElement("path", { d: "M16 10.5 21 7.5v9L16 13.5" })))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 9 } }, /* @__PURE__ */ React.createElement("div", { style: { alignSelf: "flex-start", maxWidth: "86%" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9, color: t.ink3, marginBottom: 3 } }, "Teacher \xB7 4:42 pm"), /* @__PURE__ */ React.createElement("div", { style: { background: t.paper2, padding: "9px 12px", borderRadius: "12px 12px 12px 3px", fontSize: 12.5, lineHeight: 1.4, color: t.ink2 } }, "Lovely lesson, the bow hold finally clicked. Slurs across strings for practice.")), /* @__PURE__ */ React.createElement("div", { style: { alignSelf: "flex-end", maxWidth: "86%" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9, color: t.ink3, marginBottom: 3, textAlign: "right" } }, "Parent \xB7 6:01 pm"), /* @__PURE__ */ React.createElement("div", { style: { background: t.amberSoft, color: t.accent2, padding: "9px 12px", borderRadius: "12px 12px 3px 12px", fontSize: 12.5, lineHeight: 1.4 } }, "He practiced 3\xD7 this week, did the slurs twice today!")), /* @__PURE__ */ React.createElement("div", { style: { alignSelf: "flex-start", maxWidth: "86%" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9, color: t.ink3, marginBottom: 3 } }, "Teacher \xB7 6:03 pm"), /* @__PURE__ */ React.createElement("div", { style: { background: t.paper2, padding: "9px 12px", borderRadius: "12px 12px 12px 3px", fontSize: 12.5, lineHeight: 1.4, color: t.ink2 } }, "Wonderful. Let's add the G-major scale on Thursday.")), /* @__PURE__ */ React.createElement("div", { style: { alignSelf: "flex-end" }, "aria-label": "Parent is typing" }, /* @__PURE__ */ React.createElement("div", { style: { background: t.amberSoft, padding: "11px 14px", borderRadius: "12px 12px 3px 12px", display: "inline-flex", gap: 4, alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { className: "igTyDot", style: { width: 6, height: 6, borderRadius: 999, background: t.accent2, display: "inline-block" } }), /* @__PURE__ */ React.createElement("span", { className: "igTyDot", style: { width: 6, height: 6, borderRadius: 999, background: t.accent2, display: "inline-block", animationDelay: ".16s" } }), /* @__PURE__ */ React.createElement("span", { className: "igTyDot", style: { width: 6, height: 6, borderRadius: 999, background: t.accent2, display: "inline-block", animationDelay: ".32s" } })))));
}
function FragNotif({ t, bg, title, sub, icon }) {
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 11, alignItems: "center", padding: "11px 13px", borderRadius: 14, background: t.paper, boxShadow: `inset 0 0 0 1px ${t.hairline}, 0 10px 24px -17px rgba(16,26,56,.45)` } }, /* @__PURE__ */ React.createElement("div", { style: { width: 34, height: 34, borderRadius: 10, background: bg, display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" } }, icon), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.display, fontWeight: t.titleStyle.weight, fontSize: 13.5, letterSpacing: "-.01em" } }, title), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.ui, fontSize: 11.5, color: t.ink3, marginTop: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, sub)), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9.5, color: t.ink3, whiteSpace: "nowrap" } }, "now"));
}
function FragmentConfirm({ t }) {
  const check = /* @__PURE__ */ React.createElement("svg", { width: "17", height: "17", viewBox: "0 0 24 24", fill: "none", stroke: t.success, strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M20 6 9 17l-5-5" }));
  const dollar = /* @__PURE__ */ React.createElement("svg", { width: "17", height: "17", viewBox: "0 0 24 24", fill: "none", stroke: t.accent2, strokeWidth: "2.1", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M12 2v20M17 6.5c-.7-1.6-2.6-2.5-5-2.5-3 0-5 1.4-5 3.6 0 4.8 10 2.4 10 7.2 0 2.3-2.2 3.7-5 3.7-2.6 0-4.5-1-5.2-2.6" }));
  const cal = /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: t.info, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "4.5", width: "18", height: "16", rx: "2.5" }), /* @__PURE__ */ React.createElement("path", { d: "M3 9h18M8 2.5v4M16 2.5v4" }));
  return /* @__PURE__ */ React.createElement(FragWrap, { t }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", height: "100%" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9, letterSpacing: ".15em", textTransform: "uppercase", color: t.ink3, marginBottom: 12 } }, "Just now \xB7 Harmony Music"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement(FragNotif, { t, bg: t.successSoft, icon: check, title: "Booking confirmed", sub: "Violin \xB7 Junior \u2014 Tue 4:30 pm" }), /* @__PURE__ */ React.createElement(FragNotif, { t, bg: t.amberSoft, icon: dollar, title: "Payment received \xB7 $80", sub: "Tuition for Eziz \u2014 paid in full" }), /* @__PURE__ */ React.createElement(FragNotif, { t, bg: "#E8F0FE", icon: cal, title: "Added to Google Calendar", sub: "Two-way sync \xB7 teachers updated" })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "auto", paddingTop: 14, display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(FragConnected, { t, icon: "assets/images/google_calendar.png", label: "Google Calendar" }), /* @__PURE__ */ React.createElement("span", { style: { marginLeft: "auto", fontFamily: t.mono, fontSize: 10, color: t.ink3 } }, "nothing to chase"))));
}
function FragmentLesson({ t }) {
  return /* @__PURE__ */ React.createElement(FragWrap, { t }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", height: "100%" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 11 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 3, alignSelf: "stretch", borderRadius: 999, background: t.accent } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9.5, color: t.ink3, letterSpacing: ".08em" } }, "TUE 4:30 PM \xB7 HARMONY MUSIC"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 2, fontFamily: t.display, fontWeight: t.titleStyle.weight, fontSize: 18, letterSpacing: "-.01em" } }, "Violin \xB7 Junior")), /* @__PURE__ */ React.createElement(FragPill, { t, accent: true }, "Ready")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 13, paddingTop: 13, borderTop: `1px solid ${t.hairline}` } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9, letterSpacing: ".15em", textTransform: "uppercase", color: t.ink3, marginBottom: 8 } }, "Roster \xB7 1 present"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "8px 11px", borderRadius: 12, background: t.paper, boxShadow: `inset 0 0 0 1px ${t.hairline}` } }, /* @__PURE__ */ React.createElement("div", { style: { width: 30, height: 30, borderRadius: 999, background: t.amberSoft, color: t.accent2, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: t.display, fontWeight: 700, fontSize: 12 } }, "E"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, fontFamily: t.ui, fontSize: 13, fontWeight: 600, color: t.ink2 } }, "Eziz"), /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 5, fontFamily: t.ui, fontSize: 11, fontWeight: 700, color: t.success } }, /* @__PURE__ */ React.createElement("span", { style: { width: 7, height: 7, borderRadius: 999, background: t.success } }), "Present"))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 11, display: "flex", gap: 8 } }, ["Tone", "Bowing", "Listening"].map(function(f) {
    return /* @__PURE__ */ React.createElement("span", { key: f, style: { flex: 1, textAlign: "center", padding: "7px 0", borderRadius: 10, background: t.paper2, fontFamily: t.ui, fontSize: 11, fontWeight: 600, color: t.ink3 } }, f);
  })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "auto", paddingTop: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { height: 48, borderRadius: 14, background: t.ink, color: t.paper, display: "flex", alignItems: "center", justifyContent: "center", gap: 9, fontFamily: t.ui, fontWeight: 700, fontSize: 15 } }, /* @__PURE__ */ React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: t.amber }, /* @__PURE__ */ React.createElement("path", { d: "M8 5v14l11-7z" })), "Start lesson"))));
}
function FragmentApp({ kind }) {
  const t = BRAND;
  let body;
  if (kind === "schedule") body = /* @__PURE__ */ React.createElement(FragmentSchedule, { t });
  else if (kind === "billing") body = /* @__PURE__ */ React.createElement(FragmentBilling, { t });
  else if (kind === "messages") body = /* @__PURE__ */ React.createElement(FragmentMessages, { t });
  else if (kind === "confirm") body = /* @__PURE__ */ React.createElement(FragmentConfirm, { t });
  else if (kind === "lesson") body = /* @__PURE__ */ React.createElement(FragmentLesson, { t });
  else body = /* @__PURE__ */ React.createElement(FragmentReport, { t });
  React.useEffect(function() {
    try {
      parent.postMessage({ type: "ig-mobile-ready" }, "*");
    } catch (e) {
    }
  }, []);
  return body;
}
function BeatShell({ t, children }) {
  return /* @__PURE__ */ React.createElement("div", { style: { width: PHONE_W, height: PHONE_H, background: t.paper, position: "relative", fontFamily: t.ui, color: t.ink, overflow: "hidden" } }, children);
}
function BeatBody({ children }) {
  return /* @__PURE__ */ React.createElement("div", { style: { overflow: "hidden", maxHeight: PHONE_H - 56 - 70, paddingBottom: 84 } }, children);
}
function ConfirmScreen({ t }) {
  const check = /* @__PURE__ */ React.createElement("svg", { width: "17", height: "17", viewBox: "0 0 24 24", fill: "none", stroke: t.success, strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M20 6 9 17l-5-5" }));
  const dollar = /* @__PURE__ */ React.createElement("svg", { width: "17", height: "17", viewBox: "0 0 24 24", fill: "none", stroke: t.accent2, strokeWidth: "2.1", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M12 2v20M17 6.5c-.7-1.6-2.6-2.5-5-2.5-3 0-5 1.4-5 3.6 0 4.8 10 2.4 10 7.2 0 2.3-2.2 3.7-5 3.7-2.6 0-4.5-1-5.2-2.6" }));
  const cal = /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: t.info, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "4.5", width: "18", height: "16", rx: "2.5" }), /* @__PURE__ */ React.createElement("path", { d: "M3 9h18M8 2.5v4M16 2.5v4" }));
  return /* @__PURE__ */ React.createElement(BeatShell, { t }, /* @__PURE__ */ React.createElement(TopBar, { t }), /* @__PURE__ */ React.createElement(BeatBody, null, /* @__PURE__ */ React.createElement("div", { style: { padding: "6px 20px 2px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: t.ink3 } }, "Activity \xB7 Harmony Music"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 5, fontFamily: t.display, fontWeight: t.titleStyle.weight, fontSize: 25, letterSpacing: "-.02em" } }, "All caught up"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 3, fontSize: 13.5, color: t.ink3 } }, "Eziz's Tuesday class, confirmed and paid.")), /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 20px 0", display: "flex", flexDirection: "column", gap: 11 } }, /* @__PURE__ */ React.createElement("div", { className: "igPop", style: { animationDelay: "0s" } }, /* @__PURE__ */ React.createElement(FragNotif, { t, bg: t.successSoft, icon: check, title: "Booking confirmed", sub: "Violin \xB7 Junior \u2014 Tue 4:30 pm" })), /* @__PURE__ */ React.createElement("div", { className: "igPop", style: { animationDelay: "1.1s" } }, /* @__PURE__ */ React.createElement(FragNotif, { t, bg: t.amberSoft, icon: dollar, title: "Payment received \xB7 $80", sub: "Tuition for Eziz \u2014 paid in full" })), /* @__PURE__ */ React.createElement("div", { className: "igPop", style: { animationDelay: "2.2s" } }, /* @__PURE__ */ React.createElement(FragNotif, { t, bg: t.infoSoft, icon: cal, title: "Added to Google Calendar", sub: "Two-way sync \xB7 teachers updated" }))), /* @__PURE__ */ React.createElement("div", { style: { padding: "18px 20px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "15px 16px", borderRadius: 18, background: t.ink, color: t.paper, display: "flex", alignItems: "center", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9.5, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.55)" } }, "This week"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 4, fontFamily: t.display, fontWeight: 700, fontSize: 17 } }, "5 lessons \xB7 2 studios")), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.display, fontWeight: 700, fontSize: 22, color: t.amber, fontVariantNumeric: "tabular-nums" } }, "$640"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.55)" } }, "collected"))))));
}
function LessonScreen({ t }) {
  return /* @__PURE__ */ React.createElement(BeatShell, { t }, /* @__PURE__ */ React.createElement(TopBar, { t }), /* @__PURE__ */ React.createElement(BeatBody, null, /* @__PURE__ */ React.createElement("div", { style: { padding: "6px 20px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 10, color: t.ink3, letterSpacing: ".1em" } }, "TUE 4:30 PM \xB7 HARMONY MUSIC"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 5, fontFamily: t.display, fontWeight: t.titleStyle.weight, fontSize: 26, letterSpacing: "-.02em" } }, "Violin \xB7 Junior"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 3, fontSize: 13.5, color: t.ink3 } }, "In the studio in 32 minutes")), /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 20px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9.5, letterSpacing: ".15em", textTransform: "uppercase", color: t.ink3, marginBottom: 9 } }, "Roster \xB7 1 present"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 11, padding: "11px 13px", borderRadius: 14, background: t.paper, boxShadow: `inset 0 0 0 1px ${t.hairline}` } }, /* @__PURE__ */ React.createElement("div", { style: { width: 34, height: 34, borderRadius: 999, background: t.amberSoft, color: t.accent2, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: t.display, fontWeight: 700, fontSize: 13 } }, "E"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.ui, fontSize: 14, fontWeight: 600, color: t.ink } }, "Eziz Lin"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11.5, color: t.ink3 } }, "Violin \xB7 Junior \xB7 14th lesson")), /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 5, fontFamily: t.ui, fontSize: 11.5, fontWeight: 700, color: t.success } }, /* @__PURE__ */ React.createElement("span", { style: { width: 7, height: 7, borderRadius: 999, background: t.success } }), "Present"))), /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 20px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9.5, letterSpacing: ".15em", textTransform: "uppercase", color: t.ink3, marginBottom: 9 } }, "Focus today"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 9 } }, ["Tone", "Bowing", "Listening"].map(function(f) {
    return /* @__PURE__ */ React.createElement("span", { key: f, style: { flex: 1, textAlign: "center", padding: "10px 0", borderRadius: 12, background: t.paper2, fontFamily: t.ui, fontSize: 12.5, fontWeight: 600, color: t.ink2 } }, f);
  }))), /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 20px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "13px 15px", borderRadius: 14, background: t.amberSoft } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9, letterSpacing: ".14em", textTransform: "uppercase", color: t.amberInk } }, "From last week"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 5, fontSize: 12.5, lineHeight: 1.5, color: t.ink2 } }, "Bow hold finally clicked. Picking up the D-major scale and the first phrase of \u201CLightly Row.\u201D")))), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 0, right: 0, bottom: 70, padding: "12px 20px 14px", background: `linear-gradient(${t.paper}00, ${t.paper} 32%)` } }, /* @__PURE__ */ React.createElement("div", { className: "igGlow", style: { borderRadius: 15 } }, /* @__PURE__ */ React.createElement("div", { style: { height: 52, borderRadius: 15, background: t.ink, color: t.paper, display: "flex", alignItems: "center", justifyContent: "center", gap: 10, fontFamily: t.ui, fontWeight: 700, fontSize: 16, position: "relative" } }, /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: t.amber }, /* @__PURE__ */ React.createElement("path", { d: "M8 5v14l11-7z" })), "Start lesson"))));
}
function ChatScreen({ t }) {
  var reduce = false;
  try {
    reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
  } catch (e) {
  }
  var st = React.useState(reduce ? 5 : 0);
  var shown = st[0], setShown = st[1];
  React.useEffect(function() {
    if (reduce) return;
    var i = 0;
    var id = setInterval(function() {
      i = (i + 1) % 6;
      setShown(i);
    }, 1250);
    return function() {
      clearInterval(id);
    };
  }, []);
  function Bubble(props) {
    var me = props.me, vis = shown > props.i;
    return /* @__PURE__ */ React.createElement("div", { style: { alignSelf: me ? "flex-end" : "flex-start", maxWidth: "84%", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(10px)", transition: "opacity .45s ease, transform .45s ease" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 9, color: t.ink3, marginBottom: 3, textAlign: me ? "right" : "left" } }, props.who, " \xB7 ", props.time), /* @__PURE__ */ React.createElement("div", { style: { background: me ? t.amberSoft : t.paper2, color: me ? t.amberInk : t.ink2, padding: "10px 13px", borderRadius: me ? "14px 14px 4px 14px" : "14px 14px 14px 4px", fontSize: 13, lineHeight: 1.45 } }, props.text));
  }
  return /* @__PURE__ */ React.createElement(BeatShell, { t }, /* @__PURE__ */ React.createElement(TopBar, { t }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 11, padding: "4px 18px 12px", borderBottom: `1px solid ${t.hairline}` } }, /* @__PURE__ */ React.createElement("div", { style: { width: 38, height: 38, borderRadius: "50%", background: t.paper2, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: t.display, fontWeight: 600, fontSize: 14, color: t.ink2, boxShadow: `inset 0 0 0 1px ${t.hairline}` } }, "L"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.display, fontWeight: t.titleStyle.weight, fontSize: 15.5, letterSpacing: "-.01em" } }, "Lin family \xB7 Eziz"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.ui, fontSize: 11.5, color: t.success } }, "\u25CF Report delivered")), /* @__PURE__ */ React.createElement("button", { "aria-label": "Call", style: { width: 38, height: 38, borderRadius: 999, background: t.paper, boxShadow: `inset 0 0 0 1px ${t.hairlineStrong}`, display: "flex", alignItems: "center", justifyContent: "center", color: t.ink } }, /* @__PURE__ */ React.createElement("svg", { width: "17", height: "17", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M5 4h3l1.6 4.6L7.5 10a11 11 0 0 0 5 5l1.4-2.1L18 14.5V18a2 2 0 0 1-2 2A14 14 0 0 1 4 6a2 2 0 0 1 1-2Z" }))), /* @__PURE__ */ React.createElement("button", { "aria-label": "Video call", style: { width: 38, height: 38, borderRadius: 999, background: t.amber, display: "flex", alignItems: "center", justifyContent: "center", color: t.ink } }, /* @__PURE__ */ React.createElement("svg", { width: "17", height: "17", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "6", width: "13", height: "12", rx: "2.5" }), /* @__PURE__ */ React.createElement("path", { d: "M16 10.5 21 7.5v9L16 13.5" })))), /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 18px 0", display: "flex", flexDirection: "column", gap: 11, overflow: "hidden", maxHeight: PHONE_H - 56 - 66 - 70 - 64 } }, /* @__PURE__ */ React.createElement("div", { style: { alignSelf: "center", background: t.paper2, color: t.ink3, fontFamily: t.mono, fontSize: 9.5, letterSpacing: ".06em", padding: "5px 12px", borderRadius: 999 } }, "IGNI report \xB7 Violin, Junior \xB7 sent 4:41 pm"), /* @__PURE__ */ React.createElement(Bubble, { who: "Teacher", time: "4:42 pm", text: "Lovely lesson \u2014 the bow hold finally clicked. Slurs across strings for practice this week.", i: 0 }), /* @__PURE__ */ React.createElement(Bubble, { who: "Parent", time: "6:01 pm", text: "He practiced 3\xD7 this week and did the slurs twice today!", me: true, i: 1 }), /* @__PURE__ */ React.createElement(Bubble, { who: "Teacher", time: "6:03 pm", text: "Wonderful. Let's add the G-major scale on Thursday.", i: 2 }), /* @__PURE__ */ React.createElement("div", { style: { alignSelf: "flex-end", opacity: shown >= 4 ? 1 : 0, transition: "opacity .3s" } }, /* @__PURE__ */ React.createElement("div", { style: { background: t.amberSoft, padding: "12px 15px", borderRadius: "14px 14px 4px 14px", display: "inline-flex", gap: 4, alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { className: "igTyDot", style: { width: 6, height: 6, borderRadius: 999, background: t.accent2, display: "inline-block" } }), /* @__PURE__ */ React.createElement("span", { className: "igTyDot", style: { width: 6, height: 6, borderRadius: 999, background: t.accent2, display: "inline-block", animationDelay: ".16s" } }), /* @__PURE__ */ React.createElement("span", { className: "igTyDot", style: { width: 6, height: 6, borderRadius: 999, background: t.accent2, display: "inline-block", animationDelay: ".32s" } })))), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 0, right: 0, bottom: 70, padding: "10px 18px", display: "flex", alignItems: "center", gap: 10, background: t.paper, borderTop: `1px solid ${t.hairline}` } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: 40, borderRadius: 999, background: t.paper2, display: "flex", alignItems: "center", padding: "0 16px", fontSize: 13, color: t.ink3 } }, "Message the Lin family\u2026"), /* @__PURE__ */ React.createElement("div", { style: { width: 40, height: 40, borderRadius: 999, background: t.ink, display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(PaperPlane, { c: t.amber, s: 16 }))));
}
function DashboardScreen({ t }) {
  var reduce = false;
  try {
    reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
  } catch (e2) {
  }
  var st = React.useState(reduce ? 1 : 0);
  var p = st[0], setP = st[1];
  React.useEffect(function() {
    if (reduce) return;
    var v = 0, phase = 0, hold = 0;
    var id = setInterval(function() {
      if (phase === 0) {
        v += 0.045;
        if (v >= 1) {
          v = 1;
          phase = 1;
          hold = 0;
        }
        setP(v);
      } else if (phase === 1) {
        hold++;
        if (hold > 64) phase = 2;
      } else {
        v = 0;
        phase = 0;
        setP(0);
      }
    }, 50);
    return function() {
      clearInterval(id);
    };
  }, []);
  var e = p >= 1 ? 1 : 1 - Math.pow(1 - p, 3);
  var bars = [52, 61, 58, 70, 76, 88], max = 88;
  var att = [88, 92, 90, 95, 91, 96, 94, 97];
  var stats = [["Attendance", Math.round(94 * e) + "%", "+3", t.success], ["Retention", Math.round(91 * e) + "%", "+5", t.success], ["Revenue", "$" + (18.4 * e).toFixed(1) + "k", "+9%", t.accent2]];
  return /* @__PURE__ */ React.createElement(BeatShell, { t }, /* @__PURE__ */ React.createElement(TopBar, { t }), /* @__PURE__ */ React.createElement(BeatBody, null, /* @__PURE__ */ React.createElement("div", { style: { padding: "6px 20px 0", display: "flex", alignItems: "flex-end", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: t.ink3 } }, "Business"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 4, fontFamily: t.display, fontWeight: t.titleStyle.weight, fontSize: 25, letterSpacing: "-.02em" } }, "Studio dashboard")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4, background: t.paper2, borderRadius: 999, padding: 3 } }, ["7d", "30d", "90d"].map(function(q) {
    var on = q === "30d";
    return /* @__PURE__ */ React.createElement("span", { key: q, style: { padding: "5px 11px", borderRadius: 999, fontFamily: t.ui, fontSize: 11.5, fontWeight: 700, background: on ? t.ink : "transparent", color: on ? t.paper : t.ink3 } }, q);
  }))), /* @__PURE__ */ React.createElement("div", { style: { padding: "15px 20px 0", display: "flex", gap: 9 } }, stats.map(function(s) {
    return /* @__PURE__ */ React.createElement("div", { key: s[0], style: { flex: 1, padding: "12px 11px", borderRadius: 14, background: t.paper, boxShadow: `inset 0 0 0 1px ${t.hairline}` } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 8.5, letterSpacing: ".1em", textTransform: "uppercase", color: t.ink3 } }, s[0]), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 5, fontFamily: t.display, fontWeight: 700, fontSize: 19, letterSpacing: "-.02em", fontVariantNumeric: "tabular-nums" } }, s[1]), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 2, fontFamily: t.ui, fontSize: 10.5, fontWeight: 700, color: s[3] } }, s[2]));
  })), /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 20px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 16px 12px", borderRadius: 16, background: t.paper, boxShadow: `inset 0 0 0 1px ${t.hairline}` } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.display, fontWeight: 700, fontSize: 14.5, letterSpacing: "-.01em" } }, "Revenue"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 10, color: t.ink3, letterSpacing: ".06em" } }, "LAST 6 WEEKS")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12, height: 84, display: "flex", alignItems: "flex-end", gap: 10 } }, bars.map(function(b, i) {
    var on = i === bars.length - 1;
    return /* @__PURE__ */ React.createElement("div", { key: i, style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: b / max * 84 * e + "px", borderRadius: 7, background: on ? t.accent : t.paper3, transition: "height .12s linear" } }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: t.mono, fontSize: 8.5, color: on ? t.ink2 : t.ink4 } }, "W", i + 1));
  })))), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 20px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "13px 16px 11px", borderRadius: 16, background: t.paper, boxShadow: `inset 0 0 0 1px ${t.hairline}` } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.display, fontWeight: 700, fontSize: 14.5, letterSpacing: "-.01em" } }, "Attendance"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.mono, fontSize: 10, color: t.success, letterSpacing: ".06em" } }, "\u25CF 94% AVG")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 11, height: 44, display: "flex", alignItems: "flex-end", gap: 5 } }, att.map(function(a, i) {
    return /* @__PURE__ */ React.createElement("div", { key: i, style: { flex: 1, height: a / 100 * 44 * e + "px", borderRadius: 4, background: t.successSoft, borderTop: `2px solid ${t.success}`, transition: "height .12s linear" } });
  })))), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 20px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "13px 16px", borderRadius: 16, background: t.ink, color: t.paper, display: "flex", alignItems: "center", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.display, fontWeight: 800, fontSize: 28, color: t.amber, letterSpacing: "-.02em", lineHeight: 1, fontVariantNumeric: "tabular-nums" } }, Math.round(92 * e), "%"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, fontFamily: t.ui, fontSize: 12.5, lineHeight: 1.45, color: "rgba(255,255,255,.82)" } }, "of families who read their reports re-enrolled this term.")))));
}
function FamilyMultiScreen({ t }) {
  function Avatar({ initial, color }) {
    return /* @__PURE__ */ React.createElement("div", { style: { width: 64, height: 64, borderRadius: 12, flex: "0 0 auto", background: color, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: t.display, fontWeight: t.titleStyle.weight, fontSize: 25, color: "#fff" } }, initial);
  }
  function FamRow({ initial, color, day, status, statusTone, title, who }) {
    var tone = statusTone === "ok" ? t.success : statusTone === "warn" ? t.amber : t.ink3;
    return /* @__PURE__ */ React.createElement("div", { style: { background: t.paper, border: `1px solid ${t.hairline}`, borderRadius: 14, padding: 12, display: "flex", alignItems: "flex-start", gap: 12 } }, /* @__PURE__ */ React.createElement(Avatar, { initial, color }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, paddingTop: 2 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, fontFamily: t.mono, fontSize: 11.5, color: t.ink2, letterSpacing: ".02em" } }, /* @__PURE__ */ React.createElement("span", { style: { fontVariantNumeric: "tabular-nums" } }, day), status && /* @__PURE__ */ React.createElement("span", { style: { padding: "2px 7px", borderRadius: 4, background: tone, color: "#fff", fontFamily: t.ui, fontSize: 9.5, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", whiteSpace: "nowrap" } }, status)), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 6, fontFamily: t.display, fontSize: 15, fontWeight: t.titleStyle.weight, letterSpacing: "-.01em", color: t.ink, lineHeight: 1.2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, title), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 2, fontFamily: t.ui, fontSize: 12.5, color: t.ink3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, who)));
  }
  return /* @__PURE__ */ React.createElement("div", { style: { width: PHONE_W, height: PHONE_H, background: t.paper, position: "relative", fontFamily: t.ui, color: t.ink, overflow: "hidden" } }, /* @__PURE__ */ React.createElement(TopBar, { t }), /* @__PURE__ */ React.createElement("div", { style: { overflow: "auto", maxHeight: PHONE_H - 56 - 70 - 16, paddingBottom: 80 } }, /* @__PURE__ */ React.createElement(
    GreetingHeader,
    {
      t,
      eyebrow: "Eziz's family \xB7 one login",
      name: "Good morning, the Lins",
      sub: "Five studios this week. Eziz's violin is up next, in 32 minutes."
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 20px 4px", display: "flex", gap: 10 } }, /* @__PURE__ */ React.createElement(StatTile, { t, label: "Studios", value: "5 active" }), /* @__PURE__ */ React.createElement(StatTile, { t, label: "This week", value: "9 lessons" })), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 20px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "igniDraft", style: { padding: "12px 14px", borderRadius: 16, background: t.ink, color: t.paper, display: "flex", alignItems: "center", gap: 12, boxShadow: "0 16px 28px -16px rgba(14,22,35,.30)" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 36, height: 36, borderRadius: 10, flex: "0 0 auto", background: "rgba(255,255,255,.10)", display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(Icon, { name: "sparkles", size: 18, color: t.amber, stroke: 1.5 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.ui, fontWeight: 700, fontSize: 13.5 } }, "Eziz's violin report is ready"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 2, fontSize: 11.5, color: "rgba(255,255,255,.65)" } }, "Drafted by IGNI \xB7 read & keep, it's yours")), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: t.mono, fontSize: 11, fontWeight: 700, color: t.amber, letterSpacing: ".08em" } }, "NEW"))), /* @__PURE__ */ React.createElement(SectionHead, { t, label: "This week", meta: "5 STUDIOS", action: "Calendar" }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px", display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement(FamRow, { initial: "E", color: "#D89A33", day: "Tue", status: "Report \u2713", statusTone: "ok", title: "Violin \xB7 Junior", who: "Eziz \xB7 Harmony Music" }), /* @__PURE__ */ React.createElement(FamRow, { initial: "M", color: "#E0457B", day: "Mon", status: "Up next", statusTone: "warn", title: "Ballet \xB7 pre-primary", who: "Mira \xB7 Pirouette Dance" }), /* @__PURE__ */ React.createElement(FamRow, { initial: "S", color: "#3B82C4", day: "Sat", status: "Present", statusTone: "ok", title: "Taekwondo \xB7 yellow belt", who: "Sami \xB7 Apex Martial Arts" }), /* @__PURE__ */ React.createElement(FamRow, { initial: "M", color: "#2E9E8F", day: "Wed", status: "Booked", title: "Vinyasa flow", who: "Mom \xB7 Stillwater Yoga" }), /* @__PURE__ */ React.createElement(FamRow, { initial: "D", color: "#6E59C7", day: "Thu", status: "Paid \u2713", statusTone: "ok", title: "Strength circuit", who: "Dad \xB7 Pulse Gym" })), /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 20px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { height: 46, borderRadius: 13, border: `1px dashed ${t.hairlineStrong}`, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: t.ui, fontSize: 13, fontWeight: 600, color: t.ink3 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18, lineHeight: 0, marginTop: -2 } }, "+"), " Add a studio"))), /* @__PURE__ */ React.createElement(BottomNav, { t, active: "home", onTab: function() {
  } }));
}
function PhoneApp() {
  const t = BRAND;
  var startTab = "home", startRole = "teacher", startAct = null;
  try {
    var sp = new URLSearchParams(location.search);
    var q = sp.get("screen");
    startAct = sp.get("act");
    if (q === "family") {
      startRole = "family";
      startTab = "home";
    } else if (q === "family-calendar") {
      startRole = "family";
      startTab = "calendar";
    } else if (q) {
      startTab = q;
    }
  } catch (e) {
  }
  const [role] = React.useState(startRole);
  const [tab, setTab] = React.useState(startTab);
  const [report, setReport] = React.useState(startAct === "draft");
  const [famReport, setFamReport] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState(startAct === "sent");
  React.useEffect(function() {
    try {
      parent.postMessage({ type: "ig-mobile-ready" }, "*");
    } catch (e) {
    }
  }, []);
  React.useEffect(function() {
    function onMsg(e) {
      var d = e && e.data;
      if (!d) return;
      if (d.type === "ig-reset") {
        setSent(false);
        setReport(false);
        setFamReport(false);
        setSending(false);
        setTab("home");
      }
      if (d.type === "ig-tab") {
        setReport(false);
        setFamReport(false);
        setTab(d.tab);
      }
      if (d.type === "ig-open-report") {
        if (role === "family") setFamReport(true);
        else setReport(true);
      }
    }
    window.addEventListener("message", onMsg);
    return function() {
      window.removeEventListener("message", onMsg);
    };
  }, [role]);
  function onReview() {
    if (!sent) setReport(true);
  }
  function doSend() {
    if (sending || sent) return;
    setSending(true);
    setTimeout(function() {
      setSending(false);
      setReport(false);
      setSent(true);
      setTab("home");
      try {
        parent.postMessage({ type: "ig-sent" }, "*");
      } catch (e) {
      }
    }, 920);
  }
  function goTab(k) {
    setReport(false);
    setFamReport(false);
    setTab(k);
  }
  let screen;
  if (role === "family" && tab === "home") screen = /* @__PURE__ */ React.createElement(HomeFamily, { t, onTab: goTab, onOpenReport: function() {
    setFamReport(true);
  } });
  else if (role === "family" && tab === "calendar") screen = /* @__PURE__ */ React.createElement(FamilyCalendar, { t, onTab: goTab });
  else if (tab === "calendar") screen = window.IgCalendar ? React.createElement(window.IgCalendar, {}) : /* @__PURE__ */ React.createElement(CalendarScreen, { t, sent, onTab: setTab });
  else if (tab === "explore") screen = window.IgExplore ? React.createElement(window.IgExplore, { t }) : /* @__PURE__ */ React.createElement(ExploreScreen, { t, onTab: setTab });
  else if (tab === "community") screen = window.IgCommunity ? React.createElement(window.IgCommunity, { t }) : /* @__PURE__ */ React.createElement(CommunityScreen, { t, onTab: setTab });
  else if (tab === "account") screen = window.IgAccount ? React.createElement(window.IgAccount, {}) : /* @__PURE__ */ React.createElement(AccountScreen, { t, onTab: setTab });
  else if (tab === "confirm") screen = /* @__PURE__ */ React.createElement(ConfirmScreen, { t });
  else if (tab === "lesson") screen = /* @__PURE__ */ React.createElement(LessonScreen, { t });
  else if (tab === "chat") screen = /* @__PURE__ */ React.createElement(ChatScreen, { t });
  else if (tab === "dashboard") screen = /* @__PURE__ */ React.createElement(DashboardScreen, { t });
  else if (tab === "family-multi") screen = /* @__PURE__ */ React.createElement(FamilyMultiScreen, { t });
  else screen = /* @__PURE__ */ React.createElement(HomeTeacher, { t, onReview, sent, onTab: setTab });
  return /* @__PURE__ */ React.createElement(Device, { width: PHONE_W, height: PHONE_H, dark: false }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", width: PHONE_W, height: PHONE_H, overflow: "hidden" } }, screen, /* @__PURE__ */ React.createElement(BottomNav, { t, active: { confirm: "home", lesson: "calendar", chat: "home", dashboard: "home", "family-multi": "home" }[tab] || tab, onTab: goTab }), role !== "family" && tab === "home" && /* @__PURE__ */ React.createElement(ReportSheet, { t, open: report, sending, onClose: function() {
    setReport(false);
  }, onSend: doSend }), role === "family" && /* @__PURE__ */ React.createElement(FamilyReportSheet, { t, open: famReport, onClose: function() {
    setFamReport(false);
  } })));
}
var __frag = null;
try {
  __frag = new URLSearchParams(location.search).get("fragment");
} catch (e) {
}
ReactDOM.createRoot(document.getElementById("root")).render(__frag ? /* @__PURE__ */ React.createElement(FragmentApp, { kind: __frag }) : /* @__PURE__ */ React.createElement(PhoneApp, null));
