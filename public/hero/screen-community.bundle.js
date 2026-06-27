(function(){
const PHONE_W = 402;
const PHONE_H = 874;
const LOGO_URL = "assets/images/Ignify_Logo_Color_transparent.png";
const PHOTOS = [
  "assets/images/featured.png",
  // art
  "assets/images/featured_1.png",
  // ballet — Twinkle Toes
  "assets/images/featured_2.png",
  // piano — Piano Explorers
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
    case "message":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M21 12a8 8 0 1 1-3.5-6.6L21 4l-1.4 3.5A7.95 7.95 0 0 1 21 12Z" }));
    case "bell":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" }), /* @__PURE__ */ React.createElement("path", { d: "M10 19a2 2 0 0 0 4 0" }));
    case "search":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "11", cy: "11", r: "7" }), /* @__PURE__ */ React.createElement("path", { d: "m20 20-3.5-3.5" }));
    case "plus":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 5v14M5 12h14" }));
    case "heart":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" }));
    case "heart-fill":
      return /* @__PURE__ */ React.createElement("svg", { ...{ ...p, fill: color, stroke: "none" } }, /* @__PURE__ */ React.createElement("path", { d: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" }));
    case "chat":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 5h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-4 3V6a1 1 0 0 1 0-1Z" }));
    case "share":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m17 8-5-5-5 5" }), /* @__PURE__ */ React.createElement("path", { d: "M12 3v13" }), /* @__PURE__ */ React.createElement("path", { d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" }));
    case "repeat":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m17 2 4 4-4 4" }), /* @__PURE__ */ React.createElement("path", { d: "M3 11v-1a4 4 0 0 1 4-4h14" }), /* @__PURE__ */ React.createElement("path", { d: "m7 22-4-4 4-4" }), /* @__PURE__ */ React.createElement("path", { d: "M21 13v1a4 4 0 0 1-4 4H3" }));
    case "more":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "6", cy: "12", r: "1.5", fill: color }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "1.5", fill: color }), /* @__PURE__ */ React.createElement("circle", { cx: "18", cy: "12", r: "1.5", fill: color }));
    case "flag":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 21V4M5 4h11l-2 5 2 5H5" }));
    case "doc":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" }), /* @__PURE__ */ React.createElement("path", { d: "M14 3v5h5" }));
    case "image":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "3.5", y: "4", width: "17", height: "16", rx: "2" }), /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "10", r: "1.6" }), /* @__PURE__ */ React.createElement("path", { d: "m4 18 5-5 4 4 3-3 4 4" }));
    case "check":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m5 12 4 4 10-10" }));
    case "arrow-right":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 12h14" }), /* @__PURE__ */ React.createElement("path", { d: "m13 6 6 6-6 6" }));
    case "sparkles":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 4v3M12 17v3M4 12h3M17 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2" }));
    case "star":
      return /* @__PURE__ */ React.createElement("svg", { ...p, fill: color, stroke: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M12 3l2.5 5.5L20 9.5l-4.5 4 1.2 6L12 16.8 7.3 19.5l1.2-6L4 9.5l5.5-1L12 3Z" }));
    case "pin":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12Z" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "10", r: "2.6" }));
    case "chevron-right":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m9 6 6 6-6 6" }));
    case "home":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-9Z" }));
    case "profile":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "8", r: "4" }), /* @__PURE__ */ React.createElement("path", { d: "M4 21a8 8 0 0 1 16 0" }));
    case "users":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "9", r: "3.2" }), /* @__PURE__ */ React.createElement("path", { d: "M3 20a6 6 0 0 1 12 0" }), /* @__PURE__ */ React.createElement("circle", { cx: "17", cy: "8", r: "2.6" }), /* @__PURE__ */ React.createElement("path", { d: "M21 18a4.5 4.5 0 0 0-5-4.4" }));
    case "map":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6Z" }), /* @__PURE__ */ React.createElement("path", { d: "M9 4v16M15 6v16" }));
    case "calendar":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "3.5", y: "5", width: "17", height: "15", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M8 3v4M16 3v4M3.5 10h17" }));
    default:
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }));
  }
}
function IGNIFYLogo({ height = 24 }) {
  return /* @__PURE__ */ React.createElement("img", { src: LOGO_URL, alt: "ignify", style: { height, width: "auto", display: "block" }, draggable: false });
}
function TopBar({ t }) {
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
  } }, /* @__PURE__ */ React.createElement(IGNIFYLogo, { height: 24 }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 2 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(Icon, { name: "chat", size: 22, color: t.ink2 })), /* @__PURE__ */ React.createElement("div", { style: { width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(Icon, { name: "bell", size: 22, color: t.ink2 }))));
}
const NAV_ITEMS = [
  { key: "explore", label: "Explore", icon: "map" },
  { key: "community", label: "Community", icon: "users" },
  { key: "home", label: "Home", icon: "home" },
  { key: "calendar", label: "Calendar", icon: "calendar" },
  { key: "account", label: "Account", icon: "profile" }
];
function BottomNav({ t, active = "community", appLook = false }) {
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
const POSTS = [
  {
    id: "p1",
    type: "showcase",
    typeLabel: "Showcase",
    author: { name: "Music Academy of KC", sub: "Studio \xB7 Kansas City", avatar: PHOTOS[2], verified: true },
    time: "2h",
    text: "Spring recital was pure magic \u2728 First time on stage for half our beginners \u2014 and every one of them shone.",
    likes: 142,
    comments: 18,
    shares: 9,
    likedBy: { who: "Priya and 141 others", avatars: AVATARS.slice(0, 3) },
    viewerLiked: true
  },
  {
    id: "p2",
    type: "milestone",
    typeLabel: "Milestone",
    author: { name: "Theo Walsh", sub: "Teacher \xB7 Music Academy of KC", avatar: AVATARS[0], verified: false },
    time: "4h",
    text: "Beginner strings played \u201CLightly Row\u201D in unison for the first time today \u{1F3BB} Two months of small wins, one big moment.",
    likes: 96,
    comments: 11,
    shares: 3,
    likedBy: { who: "Alex and 95 others", avatars: AVATARS.slice(0, 3) },
    viewerLiked: false
  },
  {
    id: "p3",
    type: "family",
    typeLabel: "Family share",
    author: { name: "Priya Lin", sub: "Parent \xB7 Lin family", avatar: AVATARS[2], verified: false },
    time: "6h",
    text: "Sharing a little win \u2014 Eziz finally got his D-major scale clean and even at home tonight \u{1F3BB} Thank you @Theo for the patience \u2764\uFE0F",
    likes: 64,
    comments: 9,
    shares: 1,
    likedBy: { who: "Theo and 63 others", avatars: AVATARS.slice(0, 3) },
    viewerLiked: true
  },
  {
    id: "p4",
    type: "announcement",
    typeLabel: "Announcement",
    author: { name: "Music Academy of KC", sub: "Studio \xB7 Kansas City", avatar: PHOTOS[2], verified: true },
    time: "Yesterday",
    text: "New beginner strings cohort opens June 16 \u2014 eight weeks, two classes a week, small group of six. Ages 6\u20139.",
    artifact: { type: "class", label: "New strings cohort", sub: "June 16 \xB7 ages 6\u20139 \xB7 8 weeks", cta: "View" },
    likes: 41,
    comments: 5,
    shares: 2,
    likedBy: { who: "You and 40 others", avatars: AVATARS.slice(0, 3) },
    viewerLiked: false
  },
  {
    id: "p5",
    type: "milestone",
    typeLabel: "Milestone",
    author: { name: "Daniel Okafor", sub: "Parent \xB7 Okafor family", avatar: AVATARS[1], verified: false },
    time: "Yesterday",
    text: "So proud \u2014 Ava earned her first voice recital solo. Two years of practice, one big moment. Thank you to the whole studio \u2728",
    likes: 73,
    comments: 8,
    shares: 1,
    likedBy: { who: "Aida and 72 others", avatars: AVATARS.slice(0, 3) },
    viewerLiked: false
  },
  {
    id: "p6",
    type: "event",
    typeLabel: "Open house",
    author: { name: "City Strings Collective", sub: "Studio \xB7 Brookside", avatar: PHOTOS[0], verified: true },
    time: "Yesterday",
    text: "We're opening the doors this Saturday \u2014 bring the kids, try a 20-minute taster on any string instrument. Coffee's on us.",
    artifact: { type: "event", label: "Open house \xB7 Saturday June 14", sub: "10 am \u2013 2 pm \xB7 free, drop in", cta: "RSVP" },
    likes: 28,
    comments: 3,
    shares: 5,
    likedBy: null,
    viewerLiked: false
  }
];
function CommunityCurrent({ t }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: PHONE_W,
    height: PHONE_H,
    background: "#fff",
    position: "relative",
    fontFamily: t.ui,
    color: t.ink,
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement(TopBar, { t }), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "10px 16px 12px",
    display: "flex",
    gap: 10,
    alignItems: "center"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    flex: 1,
    height: 44,
    padding: "0 12px",
    borderRadius: 12,
    background: "#F3F4F6",
    display: "flex",
    alignItems: "center",
    gap: 10
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "search", size: 20, color: "#6B7280" }), /* @__PURE__ */ React.createElement("span", { style: { color: "#9CA3AF", fontSize: 14 } }, "Search announcements, studios, families")), /* @__PURE__ */ React.createElement("button", { style: {
    height: 44,
    padding: "0 16px",
    borderRadius: 12,
    background: "#6366F1",
    color: "#fff",
    fontFamily: "Plus Jakarta Sans, sans-serif",
    fontSize: 13,
    fontWeight: 700,
    border: 0,
    cursor: "pointer"
  } }, "Create")), /* @__PURE__ */ React.createElement("div", { style: {
    overflow: "auto",
    maxHeight: PHONE_H - 56 - 56 - 70,
    padding: "4px 16px 24px",
    display: "flex",
    flexDirection: "column",
    gap: 14
  } }, POSTS.slice(0, 3).map((p) => /* @__PURE__ */ React.createElement(CurrentPostCard, { key: p.id, p }))), /* @__PURE__ */ React.createElement(BottomNav, { t, active: "community", appLook: true }));
}
function CurrentPostCard({ p }) {
  const ink = "#000", ink2 = "rgba(0,0,0,.87)", mute = "#6B7280", border = "#E5E7EB";
  return /* @__PURE__ */ React.createElement("div", { style: {
    padding: 14,
    borderRadius: 16,
    background: "#fff",
    border: `1px solid ${border}`
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("img", { src: p.author.avatar, alt: "", style: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    objectFit: "cover",
    display: "block"
  } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontSize: 14,
    fontWeight: 700,
    color: ink,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, p.author.name), /* @__PURE__ */ React.createElement("div", { style: {
    fontSize: 12,
    color: mute,
    marginTop: 1,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, p.author.sub)), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: mute } }, p.time)), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10, fontSize: 14, lineHeight: 1.45, color: ink2 } }, p.text), p.image && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10, borderRadius: 12, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("img", { src: p.image, alt: "", style: { width: "100%", display: "block" } })), p.artifact && /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 10,
    padding: 10,
    borderRadius: 12,
    background: "rgba(99,102,241,.06)",
    border: "1px solid rgba(99,102,241,.18)",
    display: "flex",
    alignItems: "center",
    gap: 10
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 40,
    height: 40,
    borderRadius: 8,
    background: "rgba(99,102,241,.10)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "calendar", size: 20, color: "#6366F1" })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontSize: 13,
    fontWeight: 700,
    color: ink,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, p.artifact.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#374151", marginTop: 1 } }, p.artifact.sub)), /* @__PURE__ */ React.createElement(Icon, { name: "chevron-right", size: 18, color: "#6366F1", stroke: 2 })), p.document && /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 10,
    padding: 12,
    borderRadius: 12,
    background: "#FEF2F2",
    display: "flex",
    alignItems: "center",
    gap: 10
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 40,
    height: 40,
    borderRadius: 8,
    background: "#FEE2E2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#B91C1C",
    fontWeight: 700,
    fontSize: 11
  } }, "PDF"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontSize: 13,
    fontWeight: 700,
    color: ink,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, p.document.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: mute, marginTop: 1 } }, p.document.size))), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 12,
    display: "flex",
    alignItems: "center",
    gap: 14
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 5 } }, /* @__PURE__ */ React.createElement(
    Icon,
    {
      name: p.viewerLiked ? "heart-fill" : "heart",
      size: 18,
      color: p.viewerLiked ? "#EF4444" : "#374151"
    }
  ), /* @__PURE__ */ React.createElement("span", { style: {
    fontSize: 12,
    fontWeight: 700,
    color: p.viewerLiked ? "#EF4444" : "#374151"
  } }, p.likes)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 5 } }, /* @__PURE__ */ React.createElement(Icon, { name: "chat", size: 18, color: "#374151" }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 700, color: "#374151" } }, p.comments)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 5 } }, /* @__PURE__ */ React.createElement(Icon, { name: "share", size: 18, color: "#374151" }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 700, color: "#374151" } }, p.shares)), /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 5 } }, /* @__PURE__ */ React.createElement(Icon, { name: "flag", size: 16, color: "#6B7280" }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 700, color: "#6B7280" } }, "Report"))));
}
function CommunityEditorial({ t }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: PHONE_W,
    height: PHONE_H,
    background: t.paper,
    position: "relative",
    fontFamily: t.ui,
    color: t.ink,
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement(TopBar, { t }), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "6px 16px 4px",
    display: "flex",
    gap: 10,
    overflow: "hidden",
    alignItems: "center"
  } }, /* @__PURE__ */ React.createElement(StudioChip, { t, active: true, label: "All", badge: 3 }), /* @__PURE__ */ React.createElement(StudioChip, { t, img: PHOTOS[2], label: "Music Academy" }), /* @__PURE__ */ React.createElement(StudioChip, { t, img: PHOTOS[1], label: "Piano Explorers" }), /* @__PURE__ */ React.createElement(StudioChip, { t, img: PHOTOS[0], label: "City Strings" }), /* @__PURE__ */ React.createElement("div", { style: {
    width: 44,
    height: 44,
    borderRadius: 999,
    border: `1.5px dashed ${t.hairlineStrong}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: t.ink3,
    flex: "0 0 auto"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "plus", size: 16, color: t.ink3, stroke: 1.8 }))), /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 16px 6px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    height: 44,
    padding: "0 14px",
    borderRadius: 999,
    background: t.paper,
    border: `1px solid ${t.hairline}`,
    display: "flex",
    alignItems: "center",
    gap: 10
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "search", size: 16, color: t.ink3 }), /* @__PURE__ */ React.createElement("span", { style: {
    color: t.ink3,
    fontSize: 14,
    fontFamily: t.display,
    fontStyle: "italic"
  } }, "Search announcements, studios, families"))), /* @__PURE__ */ React.createElement("div", { style: {
    overflow: "auto",
    maxHeight: PHONE_H - 56 - 56 - 60 - 70,
    padding: "4px 0 80px"
  } }, /* @__PURE__ */ React.createElement(DayHeader, { t, label: "Today", count: 3 }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 16px", display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement(EditorialPostCard, { t, p: POSTS[0] }), /* @__PURE__ */ React.createElement(EditorialPostCard, { t, p: POSTS[1] }), /* @__PURE__ */ React.createElement(EditorialPostCard, { t, p: POSTS[2] })), /* @__PURE__ */ React.createElement(DayHeader, { t, label: "Yesterday", count: 3 }), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 16px", display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement(EditorialPostCard, { t, p: POSTS[3] }), /* @__PURE__ */ React.createElement(EditorialPostCard, { t, p: POSTS[4] }), /* @__PURE__ */ React.createElement(EditorialPostCard, { t, p: POSTS[5] }))), /* @__PURE__ */ React.createElement("button", { style: {
    position: "absolute",
    right: 18,
    bottom: 88,
    width: 56,
    height: 56,
    borderRadius: 999,
    background: t.ink,
    color: t.paper,
    border: 0,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 14px 28px -10px rgba(14,22,35,.45)",
    zIndex: 5,
    opacity: 1
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "plus", size: 22, color: t.paper, stroke: 2 })), /* @__PURE__ */ React.createElement(BottomNav, { t, active: "community" }));
}
function StudioChip({ t, label, img, active, badge }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    flex: "0 0 auto",
    maxWidth: 64,
    opacity: 1
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "relative",
    width: 44,
    height: 44,
    borderRadius: 999,
    background: active ? t.ink : t.paper,
    border: active ? `2px solid ${t.ink}` : `1px solid ${t.hairline}`,
    padding: active ? 0 : 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  } }, img ? /* @__PURE__ */ React.createElement("img", { src: img, alt: "", style: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
    display: "block"
  } }) : /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: t.display,
    fontWeight: t.titleStyle.weight,
    fontSize: 16,
    color: active ? t.paper : t.ink,
    letterSpacing: "-.02em"
  } }, label[0]), badge != null && /* @__PURE__ */ React.createElement("span", { style: {
    position: "absolute",
    top: -2,
    right: -2,
    minWidth: 16,
    height: 16,
    padding: "0 4px",
    borderRadius: 999,
    background: t.accent,
    color: t.paper,
    fontFamily: t.ui,
    fontSize: 9.5,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `2px solid ${t.paper}`,
    opacity: 1
  } }, badge)), /* @__PURE__ */ React.createElement("span", { style: {
    fontSize: 10,
    color: active ? t.ink : t.ink3,
    fontFamily: t.ui,
    fontWeight: active ? 700 : 500,
    letterSpacing: "-.005em",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: 64
  } }, label));
}
function DayHeader({ t, label, count }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    padding: "18px 20px 10px",
    display: "flex",
    alignItems: "baseline",
    gap: 10
  } }, /* @__PURE__ */ React.createElement("h3", { style: {
    margin: 0,
    fontFamily: t.display,
    fontWeight: t.titleStyle.weight,
    fontSize: 20,
    letterSpacing: "-.018em",
    color: t.ink
  } }, label), /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: t.mono,
    fontSize: 10,
    color: t.ink3,
    letterSpacing: ".12em",
    textTransform: "uppercase"
  } }, count, " ", count === 1 ? "post" : "posts"), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, height: 1, background: t.hairline, alignSelf: "center", marginLeft: 4 } }));
}
function typeTone(t, type) {
  switch (type) {
    case "showcase":
      return { fg: t.accent, bg: t.accentSoft, label: "Showcase", icon: "sparkles" };
    case "announcement":
      return { fg: t.info, bg: t.infoSoft, label: "Announcement", icon: "pin" };
    case "milestone":
      return { fg: "#8A5A00", bg: t.amberSoft, label: "Milestone", icon: "star" };
    case "event":
      return { fg: t.success, bg: t.successSoft, label: "Open house", icon: "calendar" };
    default:
      return { fg: t.ink2, bg: t.paper3, label: "Post", icon: "chat" };
  }
}
function EditorialPostCard({ t, p }) {
  const tone = typeTone(t, p.type);
  return /* @__PURE__ */ React.createElement("div", { style: {
    background: t.paper,
    border: `1px solid ${t.hairline}`,
    borderRadius: 18,
    padding: 14,
    display: "flex",
    flexDirection: "column",
    gap: 12
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    padding: "3px 9px",
    borderRadius: 999,
    background: tone.bg,
    color: tone.fg,
    fontFamily: t.ui,
    fontSize: 10.5,
    fontWeight: 700,
    letterSpacing: ".04em"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: tone.icon, size: 11, color: tone.fg, stroke: 1.8 }), p.typeLabel), /* @__PURE__ */ React.createElement(Icon, { name: "more", size: 18, color: t.ink3 })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("img", { src: p.author.avatar, alt: "", style: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    objectFit: "cover",
    display: "block"
  } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.display,
    fontWeight: t.titleStyle.weight,
    fontSize: 14.5,
    letterSpacing: "-.012em",
    color: t.ink,
    lineHeight: 1.2,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, p.author.name), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 2,
    fontSize: 11.5,
    color: t.ink3,
    fontFamily: t.ui,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, p.author.sub)), /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: t.mono,
    fontSize: 10.5,
    color: t.ink3,
    letterSpacing: ".04em"
  } }, p.time)), p.text && /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.ui,
    fontSize: 14,
    lineHeight: 1.5,
    color: t.ink2,
    textWrap: "pretty"
  } }, p.text), p.image && /* @__PURE__ */ React.createElement("div", { style: { borderRadius: 12, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("img", { src: p.image, alt: "", style: { width: "100%", display: "block" } })), p.artifact && /* @__PURE__ */ React.createElement("div", { style: {
    padding: 12,
    borderRadius: 14,
    background: t.paper2,
    border: `1px solid ${t.hairline}`,
    display: "flex",
    alignItems: "center",
    gap: 12
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 40,
    height: 40,
    borderRadius: 10,
    background: t.paper,
    border: `1px solid ${t.hairline}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "calendar", size: 18, color: t.ink2, stroke: 1.6 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.display,
    fontSize: 13.5,
    fontWeight: t.titleStyle.weight,
    letterSpacing: "-.01em",
    color: t.ink,
    lineHeight: 1.2,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, p.artifact.label), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 2,
    fontSize: 11.5,
    color: t.ink3,
    fontFamily: t.ui
  } }, p.artifact.sub)), /* @__PURE__ */ React.createElement("button", { style: {
    padding: "5px 11px",
    borderRadius: 999,
    background: t.ink,
    color: t.paper,
    border: 0,
    cursor: "pointer",
    fontFamily: t.ui,
    fontSize: 11.5,
    fontWeight: 600
  } }, p.artifact.cta || "View")), p.document && /* @__PURE__ */ React.createElement("div", { style: {
    padding: 12,
    borderRadius: 14,
    background: t.paper2,
    border: `1px solid ${t.hairline}`,
    display: "flex",
    alignItems: "center",
    gap: 12
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 42,
    height: 50,
    borderRadius: 6,
    background: t.paper,
    border: `1px solid ${t.hairlineStrong}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: t.mono,
    fontSize: 9,
    fontWeight: 700,
    color: t.accent,
    letterSpacing: ".06em"
  } }, "PDF"), /* @__PURE__ */ React.createElement("span", { style: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 10,
    height: 10,
    background: t.paper2,
    borderLeft: `1px solid ${t.hairlineStrong}`,
    borderBottom: `1px solid ${t.hairlineStrong}`
  } })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.display,
    fontSize: 13.5,
    fontWeight: t.titleStyle.weight,
    letterSpacing: "-.01em",
    color: t.ink,
    lineHeight: 1.2,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, p.document.name), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 2,
    fontFamily: t.mono,
    fontSize: 10.5,
    color: t.ink3,
    letterSpacing: ".04em",
    textTransform: "uppercase"
  } }, p.document.size, " \xB7 TAP TO OPEN"))), p.likedBy && /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontFamily: t.ui,
    fontSize: 12,
    color: t.ink2
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center" } }, p.likedBy.avatars.slice(0, 3).map(
    (a, i) => /* @__PURE__ */ React.createElement("img", { key: i, src: a, alt: "", style: {
      width: 18,
      height: 18,
      borderRadius: "50%",
      objectFit: "cover",
      border: `1.5px solid ${t.paper}`,
      marginLeft: i === 0 ? 0 : -6
    } })
  )), /* @__PURE__ */ React.createElement("span", null, "Liked by ", /* @__PURE__ */ React.createElement("span", { style: { color: t.ink, fontWeight: 600 } }, p.likedBy.who))), /* @__PURE__ */ React.createElement("div", { style: {
    borderTop: `1px solid ${t.hairline}`,
    paddingTop: 10,
    marginTop: 2,
    display: "flex",
    alignItems: "center",
    gap: 4
  } }, /* @__PURE__ */ React.createElement(
    ActionPill,
    {
      t,
      icon: p.viewerLiked ? "heart-fill" : "heart",
      label: p.likes,
      active: p.viewerLiked,
      tint: t.accent
    }
  ), /* @__PURE__ */ React.createElement(ActionPill, { t, icon: "chat", label: p.comments }), /* @__PURE__ */ React.createElement(ActionPill, { t, icon: "share", label: p.shares })));
}
function ActionPill({ t, icon, label, active, tint }) {
  const c = active ? tint : t.ink2;
  return /* @__PURE__ */ React.createElement("button", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 12px",
    borderRadius: 999,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: c,
    fontFamily: t.ui,
    fontSize: 12.5,
    fontWeight: 600
  } }, /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 16, color: c, stroke: active ? 1.8 : 1.6 }), /* @__PURE__ */ React.createElement("span", { style: { fontVariantNumeric: "tabular-nums" } }, label));
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
  } }, "Community feed", /* @__PURE__ */ React.createElement("span", { style: { color: t.accent } }, ".")), /* @__PURE__ */ React.createElement("p", { style: {
    marginTop: 14,
    maxWidth: 760,
    color: fgMute,
    fontSize: 15,
    lineHeight: 1.55
  } }, "Left frame: ", /* @__PURE__ */ React.createElement("span", { style: { fontFamily: t.mono, fontSize: 13 } }, "community_feed_page.dart"), " +", /* @__PURE__ */ React.createElement("span", { style: { fontFamily: t.mono, fontSize: 13 } }, " post_card.dart"), ' as they ship today. Right frame: an editorial pass \u2014 type-tagged cards, studio filter rail, day grouping, simplified action row, a "liked by" social signal, and a floating compose FAB so the search field can breathe.')), /* @__PURE__ */ React.createElement("div", { style: {
    maxWidth: 1480,
    margin: "0 auto",
    padding: "24px 40px 0",
    display: "flex",
    gap: 56,
    alignItems: "flex-start",
    flexWrap: "wrap"
  } }, showCurrent && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "inline-flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: t.mono,
    fontSize: 11,
    color: fgMute,
    letterSpacing: ".08em"
  } }, "CURRENT \xB7 community_feed_page.dart"), /* @__PURE__ */ React.createElement("span", { style: {
    padding: "2px 8px",
    borderRadius: 999,
    background: "rgba(245,241,231,.10)",
    color: fgMute,
    fontFamily: t.mono,
    fontSize: 10,
    letterSpacing: ".08em"
  } }, "SHIPPED")), /* @__PURE__ */ React.createElement(P, null, /* @__PURE__ */ React.createElement(CommunityCurrent, { t }))), showProposed && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "inline-flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { style: {
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
  } }, "NEW")), /* @__PURE__ */ React.createElement(P, null, /* @__PURE__ */ React.createElement(CommunityEditorial, { t }))), annotate && view === "compare" && /* @__PURE__ */ React.createElement("div", { style: { flex: "1 1 360px", minWidth: 320, paddingTop: 36 } }, /* @__PURE__ */ React.createElement("div", { style: {
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
      title: "Studio filter rail",
      body: "A horizontal row of studio avatars at the top \u2014 All (with unread badge), then each studio the family follows, then a dashed + tile to add another. Replaces the flat firehose with a Facebook-Pages-style switcher.",
      color: t.accent
    }
  ), /* @__PURE__ */ React.createElement(
    Annotation,
    {
      n: 2,
      title: "Type-tagged posts (public taxonomy)",
      body: "Every card opens with a small coloured tag matching the public-feed shape: Showcase (orange) for studio spotlights, Announcement (blue) for new cohorts and hiring, Milestone (amber) for student wins, Open house (green) for events. Lesson recaps and practice sheets stay private \u2014 they don't belong here.",
      color: t.accent
    }
  ), /* @__PURE__ */ React.createElement(
    Annotation,
    {
      n: 3,
      title: "Day grouping",
      body: "Posts cluster under display-serif day headers (\u201CToday\u201D, \u201CYesterday\u201D). The hairline + \u201C2 posts\u201D mono caption gives the feed a magazine rhythm instead of an endless scroll.",
      color: t.accent
    }
  ), /* @__PURE__ */ React.createElement(
    Annotation,
    {
      n: 4,
      title: "Editorial author block",
      body: "Author name moves from 14px sans-bold into 14.5px display serif \u2014 same shift as Explore's section heads. Sub-role and timestamp use mono for steady alignment.",
      color: t.accent
    }
  ), /* @__PURE__ */ React.createElement(
    Annotation,
    {
      n: 5,
      title: "\u201CLiked by\u201D social signal",
      body: "\u201C142 likes\u201D \u2192 \u201CLiked by Marina and 141 others\u201D with a stacked avatar trio. Same data, much warmer; gives community posts the public-reach feel of LinkedIn.",
      color: t.accent
    }
  ), /* @__PURE__ */ React.createElement(
    Annotation,
    {
      n: 6,
      title: "Simplified action row",
      body: "Like / Comment / Share live in a hairline-divided row. Report moves into the top-right dot-dot-dot overflow alongside Save / Mute \u2014 it's a rare action and was taking up equal weight with the primary trio.",
      color: t.accent
    }
  ), /* @__PURE__ */ React.createElement(
    Annotation,
    {
      n: 7,
      title: "Booking artifact gets a CTA",
      body: "The artifact card now has a real \u201CBook\u201D pill instead of just a chevron. When a studio posts new slots, the action is one tap away.",
      color: t.accent
    }
  ), /* @__PURE__ */ React.createElement(
    Annotation,
    {
      n: 8,
      title: "Document card calmed down",
      body: "The red-tinted PDF block (used for private practice sheets) is gone from the public feed. If a document does show up in a future public post, the editorial dog-eared paper tile is ready in the Type system without the alert-state vibe.",
      color: t.accent
    }
  ), /* @__PURE__ */ React.createElement(
    Annotation,
    {
      n: 9,
      title: "Floating compose FAB",
      body: "The inline Create button next to the search bar was fighting with the search visually. A bottom-right FAB above the nav lets the search field breathe and matches the iOS pattern most families already know.",
      color: t.accent
    }
  ), /* @__PURE__ */ React.createElement(
    Annotation,
    {
      n: 10,
      title: "Editorial search copy",
      body: "\u201CSearch community\u201D \u2192 \u201CSearch posts and families\u201D in display italic. Same shift as Explore \u2014 sets the tone and explains what the search actually covers.",
      color: t.accent
    }
  ))));
}
window.IgCommunity = CommunityEditorial;

})();
