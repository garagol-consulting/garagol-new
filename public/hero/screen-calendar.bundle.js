(function(){
const PHONE_W = 402;
const PHONE_H = 874;
const LOGO_URL = "assets/images/Ignify_Logo_Color_transparent.png";
const PHOTOS = [
  "assets/images/featured.png",
  "assets/images/featured_1.png",
  "assets/images/featured_2.png",
  "assets/images/featured_3.png",
  "assets/images/featured_4.png"
];
const AVATARS = [
  "assets/images/avatars/avatar_03.png",
  "assets/images/avatars/avatar_07.png",
  "assets/images/avatars/avatar_12.png"
];
const t = {
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
  display: '"Plus Jakarta Sans","Helvetica Neue", sans-serif',
  ui: '"Outfit","Helvetica Neue", sans-serif',
  mono: 'Outfit, ui-monospace, monospace',
  titleWeight: 700
};
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
    case "arrow-right":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 12h14" }), /* @__PURE__ */ React.createElement("path", { d: "m13 6 6 6-6 6" }));
    case "arrow-left":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M19 12H5" }), /* @__PURE__ */ React.createElement("path", { d: "m11 6-6 6 6 6" }));
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
    case "plus-bold":
      return /* @__PURE__ */ React.createElement("svg", { ...p, strokeWidth: 2.4 }, /* @__PURE__ */ React.createElement("path", { d: "M12 5v14M5 12h14" }));
    case "chevron-right":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m9 6 6 6-6 6" }));
    case "chevron-left":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m15 6-6 6 6 6" }));
    case "chevron-down":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m6 9 6 6 6-6" }));
    case "search":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "11", cy: "11", r: "6.5" }), /* @__PURE__ */ React.createElement("path", { d: "m21 21-4.5-4.5" }));
    case "filter":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M4 5h16l-6 8v6l-4-2v-4Z" }));
    case "copy":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "9", y: "9", width: "11", height: "11", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M5 15V6a2 2 0 0 1 2-2h8" }));
    case "repeat":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M17 2.5l3 3-3 3" }), /* @__PURE__ */ React.createElement("path", { d: "M3 13v-2a4 4 0 0 1 4-4h13" }), /* @__PURE__ */ React.createElement("path", { d: "M7 21.5l-3-3 3-3" }), /* @__PURE__ */ React.createElement("path", { d: "M21 11v2a4 4 0 0 1-4 4H4" }));
    case "music":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M9 18V5l10-2v13" }), /* @__PURE__ */ React.createElement("circle", { cx: "6", cy: "18", r: "3" }), /* @__PURE__ */ React.createElement("circle", { cx: "16", cy: "16", r: "3" }));
    case "flame":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 3s5 4 5 9a5 5 0 0 1-10 0c0-2 1-3 2-4 0 1 .5 2 1.5 2 0-3-1-5 1.5-7Z" }));
    case "palette":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 3a9 9 0 0 0 0 18c1.5 0 2-1 1.5-2-.6-1.4.6-2.5 2-2.5H17a4 4 0 0 0 4-4A9 9 0 0 0 12 3Z" }), /* @__PURE__ */ React.createElement("circle", { cx: "7.5", cy: "11", r: "1", fill: color, stroke: "none" }), /* @__PURE__ */ React.createElement("circle", { cx: "10", cy: "7", r: "1", fill: color, stroke: "none" }), /* @__PURE__ */ React.createElement("circle", { cx: "15", cy: "7", r: "1", fill: color, stroke: "none" }), /* @__PURE__ */ React.createElement("circle", { cx: "17.5", cy: "11", r: "1", fill: color, stroke: "none" }));
    case "star":
      return /* @__PURE__ */ React.createElement("svg", { ...p, fill: color, stroke: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M12 3l2.5 5.5L20 9.5l-4.5 4 1.2 6L12 16.8 6 19.6l1.2-6L3 9.5l5.5-1L12 3Z" }));
    case "list":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M4 6h16M4 12h16M4 18h10" }));
    case "grid":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "4", y: "4", width: "7", height: "7", rx: "1" }), /* @__PURE__ */ React.createElement("rect", { x: "13", y: "4", width: "7", height: "7", rx: "1" }), /* @__PURE__ */ React.createElement("rect", { x: "4", y: "13", width: "7", height: "7", rx: "1" }), /* @__PURE__ */ React.createElement("rect", { x: "13", y: "13", width: "7", height: "7", rx: "1" }));
    case "today":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "3.5", y: "5", width: "17", height: "15", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M8 3v4M16 3v4M3.5 10h17" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "15", r: "2", fill: color, stroke: "none" }));
    case "ellipsis":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "6", cy: "12", r: "1.5", fill: color, stroke: "none" }), /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "1.5", fill: color, stroke: "none" }), /* @__PURE__ */ React.createElement("circle", { cx: "18", cy: "12", r: "1.5", fill: color, stroke: "none" }));
    case "x":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M6 6l12 12M18 6 6 18" }));
    case "doc":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" }), /* @__PURE__ */ React.createElement("path", { d: "M14 3v5h5" }));
    default:
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }));
  }
}
function IGNIFYLogo({ height = 24 }) {
  return /* @__PURE__ */ React.createElement("img", { src: LOGO_URL, alt: "ignify", style: { height, width: "auto", display: "block" }, draggable: false });
}
function TopBar({ title = null }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    background: t.paper,
    paddingTop: 50,
    paddingLeft: 16,
    paddingRight: 8,
    paddingBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  } }, title ? /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.ui,
    fontWeight: 800,
    fontSize: 17,
    color: t.ink,
    letterSpacing: "-.012em"
  } }, title) : /* @__PURE__ */ React.createElement(IGNIFYLogo, { height: 24 }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 2 } }, ["chat", "bell"].map((n, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
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
function BottomNav({ active = "calendar" }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    background: t.paper,
    borderTop: `1px solid ${t.hairline}`,
    display: "flex",
    alignItems: "flex-start",
    paddingTop: 8,
    paddingBottom: 14,
    fontFamily: t.ui
  } }, NAV_ITEMS.map((it) => {
    const a = active === it.key;
    const c = a ? t.ink : t.ink3;
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
const MONTH_DAYS = (() => {
  const out = [];
  for (let d = 27; d <= 30; d++) out.push({ d, muted: true });
  for (let d = 1; d <= 31; d++) out.push({ d });
  for (let d = 1; d <= 6; d++) out.push({ d, muted: true });
  return out;
})();
const LESSON_DOTS = {
  4: 2,
  5: 3,
  6: 2,
  7: 3,
  8: 2,
  11: 2,
  12: 3,
  13: 2,
  14: 4,
  15: 3,
  16: 1,
  17: 1,
  18: 2,
  19: 3,
  20: 3,
  21: 4,
  22: 2,
  25: 3,
  26: 4,
  27: 2,
  28: 3,
  29: 2
};
function CurrentMonth() {
  const today = 14;
  const selected = 16;
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: PHONE_W,
    height: PHONE_H,
    background: t.paper,
    position: "relative",
    fontFamily: t.ui,
    color: t.ink,
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement(TopBar, null), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "8px 16px 14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: "Plus Jakarta Sans, sans-serif",
    fontSize: 22,
    fontWeight: 800,
    color: t.ink,
    letterSpacing: "-.02em"
  } }, "May 2026"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement("button", { style: btnIcon }, /* @__PURE__ */ React.createElement(Icon, { name: "chevron-left", size: 18, color: t.ink2 })), /* @__PURE__ */ React.createElement("button", { style: btnIcon }, /* @__PURE__ */ React.createElement(Icon, { name: "chevron-right", size: 18, color: t.ink2 })), /* @__PURE__ */ React.createElement("button", { style: {
    ...btnIcon,
    width: "auto",
    padding: "0 12px",
    gap: 4,
    fontFamily: t.ui,
    fontSize: 12.5,
    fontWeight: 700,
    color: t.ink2
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "plus", size: 14, color: t.ink2, stroke: 2 }), " New"))), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "0 16px",
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    fontFamily: t.mono,
    fontSize: 10,
    color: t.ink3,
    letterSpacing: ".14em",
    textTransform: "uppercase",
    textAlign: "center",
    paddingBottom: 8
  } }, ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => /* @__PURE__ */ React.createElement("div", { key: d }, d))), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "0 12px",
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    rowGap: 2
  } }, MONTH_DAYS.map((c, i) => {
    const isToday = !c.muted && c.d === today;
    const isSel = !c.muted && c.d === selected;
    const dots = c.muted ? 0 : LESSON_DOTS[c.d] || 0;
    return /* @__PURE__ */ React.createElement("div", { key: i, style: {
      height: 50,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
      position: "relative"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 30,
      height: 30,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: isSel ? t.ink : isToday ? t.accentSoft : "transparent",
      color: isSel ? t.paper : isToday ? t.accent : c.muted ? t.ink4 : t.ink,
      fontFamily: t.ui,
      fontSize: 14,
      fontWeight: isToday ? 800 : 500,
      fontVariantNumeric: "tabular-nums"
    } }, c.d), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 2, height: 4 } }, Array.from({ length: Math.min(dots, 3) }).map((_, j) => /* @__PURE__ */ React.createElement("span", { key: j, style: {
      width: 4,
      height: 4,
      borderRadius: "50%",
      background: isSel ? t.accent : t.ink3,
      opacity: isSel ? 1 : 0.6
    } }))));
  })), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 6,
    padding: "12px 16px 0",
    borderTop: `1px solid ${t.hairline}`
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 10
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: "Plus Jakarta Sans, sans-serif",
    fontSize: 16,
    fontWeight: 800,
    color: t.ink,
    letterSpacing: "-.012em"
  } }, "Saturday, May 16"), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.ui,
    fontSize: 12,
    color: t.ink3,
    fontWeight: 600
  } }, "1 lesson")), /* @__PURE__ */ React.createElement(BareLessonRow, { time: "2:00 PM", title: "Piano lesson", sub: "Studio B \xB7 1 student" })), /* @__PURE__ */ React.createElement(BottomNav, { active: "calendar" }));
}
const btnIcon = {
  width: 32,
  height: 32,
  borderRadius: 8,
  border: `1px solid ${t.hairline}`,
  background: t.paper,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer"
};
function BareLessonRow({ time, title, sub }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    padding: "10px 0",
    display: "flex",
    alignItems: "center",
    gap: 12,
    borderBottom: `1px solid ${t.hairline}`
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 60,
    fontFamily: t.mono,
    fontSize: 11.5,
    color: t.ink2,
    fontWeight: 600,
    fontVariantNumeric: "tabular-nums"
  } }, time), /* @__PURE__ */ React.createElement("div", { style: { width: 3, height: 28, background: t.accent, borderRadius: 2 } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.ui,
    fontSize: 14,
    fontWeight: 700,
    color: t.ink,
    letterSpacing: "-.005em"
  } }, title), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 2,
    fontFamily: t.ui,
    fontSize: 11.5,
    color: t.ink3
  } }, sub)));
}
function CurrentNewLesson() {
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: PHONE_W,
    height: PHONE_H,
    background: t.paper,
    position: "relative",
    fontFamily: t.ui,
    color: t.ink,
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement(TopBar, { title: "New lesson" }), /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 16px 16px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: "Plus Jakarta Sans, sans-serif",
    fontSize: 13,
    fontWeight: 600,
    color: t.ink3,
    letterSpacing: "-.005em"
  } }, "Fill in the details below.")), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 16px", display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement(FormRow, { label: "Class", placeholder: "e.g. Ballet \xB7 Beginner" }), /* @__PURE__ */ React.createElement(FormRow, { label: "Date", placeholder: "Select date", icon: "calendar" }), /* @__PURE__ */ React.createElement(FormRow, { label: "Start time", placeholder: "Select time", icon: "clock" }), /* @__PURE__ */ React.createElement(FormRow, { label: "Duration", placeholder: "60 minutes" }), /* @__PURE__ */ React.createElement(FormRow, { label: "Room", placeholder: "Pick a studio", icon: "pin" }), /* @__PURE__ */ React.createElement(FormRow, { label: "Instructor", placeholder: "Assign teacher", icon: "profile" }), /* @__PURE__ */ React.createElement(FormRow, { label: "Students", placeholder: "Add students", icon: "users" }), /* @__PURE__ */ React.createElement(FormRow, { label: "Description", placeholder: "Optional notes", tall: true })), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 70,
    padding: "12px 16px",
    background: `linear-gradient(180deg, rgba(250,247,241,0) 0%, ${t.paper} 30%)`,
    display: "flex",
    gap: 10
  } }, /* @__PURE__ */ React.createElement("button", { style: {
    flex: 1,
    padding: "12px 14px",
    borderRadius: 12,
    background: t.paper2,
    border: `1px solid ${t.hairline}`,
    fontFamily: t.ui,
    fontWeight: 700,
    fontSize: 14,
    color: t.ink2,
    cursor: "pointer"
  } }, "Cancel"), /* @__PURE__ */ React.createElement("button", { style: {
    flex: 1.4,
    padding: "12px 14px",
    borderRadius: 12,
    background: t.ink4,
    color: t.paper,
    border: 0,
    // disabled-looking
    fontFamily: t.ui,
    fontWeight: 700,
    fontSize: 14,
    cursor: "not-allowed"
  } }, "Create lesson")), /* @__PURE__ */ React.createElement(BottomNav, { active: "calendar" }));
}
function FormRow({ label, placeholder, icon, tall }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.mono,
    fontSize: 10,
    color: t.ink3,
    letterSpacing: ".14em",
    textTransform: "uppercase",
    marginBottom: 5
  } }, label), /* @__PURE__ */ React.createElement("div", { style: {
    height: tall ? 64 : 44,
    padding: "0 12px",
    background: "#fff",
    borderRadius: 10,
    border: `1px solid ${t.hairline}`,
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontFamily: t.ui,
    fontSize: 14,
    color: t.ink4
  } }, icon && /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 16, color: t.ink4, stroke: 1.6 }), /* @__PURE__ */ React.createElement("span", null, placeholder), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), !tall && /* @__PURE__ */ React.createElement(Icon, { name: "chevron-right", size: 16, color: t.ink4 })));
}
const WEEK = [
  { d: "Mo", n: 11, count: 2 },
  { d: "Tu", n: 12, count: 3 },
  { d: "We", n: 13, count: 2 },
  { d: "Th", n: 14, count: 4, today: true },
  { d: "Fr", n: 15, count: 3 },
  { d: "Sa", n: 16, count: 1, selected: true },
  { d: "Su", n: 17, count: 1 }
];
function ProposedWeek({ showCreated = false }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: PHONE_W,
    height: PHONE_H,
    background: t.paper,
    position: "relative",
    fontFamily: t.ui,
    color: t.ink,
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement(TopBar, null), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "4px 20px 12px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between"
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.mono,
    fontSize: 10.5,
    color: t.ink3,
    letterSpacing: ".14em",
    textTransform: "uppercase"
  } }, "Week of May 11"), /* @__PURE__ */ React.createElement("h1", { style: {
    margin: "4px 0 0",
    fontFamily: t.display,
    fontWeight: t.titleWeight,
    fontSize: 30,
    letterSpacing: "-.022em",
    color: t.ink,
    lineHeight: 1
  } }, "May ", /* @__PURE__ */ React.createElement("span", { style: { fontStyle: "italic" } }, "2026"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement("button", { style: btnIconLite }, /* @__PURE__ */ React.createElement(Icon, { name: "search", size: 17, color: t.ink2 })), /* @__PURE__ */ React.createElement("button", { style: btnIconLite }, /* @__PURE__ */ React.createElement(Icon, { name: "today", size: 17, color: t.ink2 })))), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "0 16px 10px",
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: 6
  } }, WEEK.map((w, i) => {
    const sel = w.selected;
    const today = w.today;
    return /* @__PURE__ */ React.createElement("div", { key: i, style: {
      padding: "8px 0 8px",
      borderRadius: 14,
      background: sel ? t.ink : "transparent",
      border: sel ? 0 : today ? `1px solid ${t.accent}` : `1px solid ${t.hairline}`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 2,
      cursor: "pointer"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: t.mono,
      fontSize: 9.5,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: sel ? "rgba(255,255,255,.62)" : today ? t.accent : t.ink3
    } }, w.d), /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: t.display,
      fontSize: 18,
      fontWeight: t.titleWeight,
      letterSpacing: "-.018em",
      color: sel ? t.paper : today ? t.accent : t.ink,
      fontVariantNumeric: "tabular-nums"
    } }, w.n), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 3, height: 4, marginTop: 1 } }, Array.from({ length: Math.min(w.count, 4) }).map((_, j) => /* @__PURE__ */ React.createElement("span", { key: j, style: {
      width: 3,
      height: 3,
      borderRadius: "50%",
      background: sel ? t.paper : today ? t.accent : t.ink3,
      opacity: sel ? 0.9 : today ? 1 : 0.55
    } }))));
  })), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "0 20px 10px",
    display: "flex",
    alignItems: "center",
    gap: 8
  } }, /* @__PURE__ */ React.createElement(FilterChip, { label: "Mine", count: 3, active: true }), /* @__PURE__ */ React.createElement(FilterChip, { label: "Studio", count: 9 }), /* @__PURE__ */ React.createElement(FilterChip, { label: "Available", count: 2 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    padding: 2,
    background: t.paper2,
    borderRadius: 999,
    border: `1px solid ${t.hairline}`
  } }, /* @__PURE__ */ React.createElement(SegBtn, { icon: "list", active: true }), /* @__PURE__ */ React.createElement(SegBtn, { icon: "grid" }))), /* @__PURE__ */ React.createElement("div", { style: {
    overflow: "auto",
    maxHeight: PHONE_H - 56 - 100 - 60 - 50 - 70,
    padding: "2px 20px 92px"
  } }, /* @__PURE__ */ React.createElement(DayHeader, { label: "Sat, May 16", count: "1 lesson \xB7 60m teaching" }), /* @__PURE__ */ React.createElement(
    AgendaCard,
    {
      time: "2:00\u20133:00 pm",
      status: "Up next",
      statusTone: "warn",
      title: "Piano \xB7 Beginner",
      students: [AVATARS[2]],
      studentsLabel: "Kate Harvey",
      room: "Studio B \xB7 Piano Explorers",
      template: "From template \xB7 Piano Beginner Vol. 1",
      image: PHOTOS[2],
      highlight: showCreated
    }
  ), /* @__PURE__ */ React.createElement(DayHeader, { label: "Sun, May 17", count: "1 lesson" }), /* @__PURE__ */ React.createElement(
    AgendaCard,
    {
      time: "11:00\u201311:45 am",
      title: "Piano \xB7 Trial",
      students: [AVATARS[0]],
      studentsLabel: "J. Park \xB7 trial",
      room: "Studio B",
      template: null,
      image: PHOTOS[3]
    }
  ), /* @__PURE__ */ React.createElement(DayHeader, { label: "Mon, May 18", count: "2 lessons \xB7 105m teaching" }), /* @__PURE__ */ React.createElement(
    AgendaCard,
    {
      time: "4:00\u20134:45 pm",
      title: "Piano \xB7 Group A",
      students: [AVATARS[2], AVATARS[0], AVATARS[1]],
      studentsLabel: "4 students",
      room: "Studio C",
      template: "From template \xB7 Group Recital Prep",
      image: PHOTOS[2]
    }
  ), /* @__PURE__ */ React.createElement(
    AgendaCard,
    {
      time: "5:00\u20136:00 pm",
      title: "Piano \xB7 Beginner",
      students: [AVATARS[1], AVATARS[0]],
      studentsLabel: "2 students",
      room: "Studio B",
      template: "From template \xB7 Piano Beginner Vol. 1",
      image: PHOTOS[2]
    }
  )), showCreated && /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 92,
    padding: "12px 14px",
    borderRadius: 14,
    background: t.ink,
    color: t.paper,
    display: "flex",
    alignItems: "center",
    gap: 12,
    boxShadow: "0 20px 36px -16px rgba(14,22,35,.45)"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 28,
    height: 28,
    borderRadius: 8,
    background: t.success,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 16, color: t.paper, stroke: 2.4 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: t.ui, fontWeight: 700, fontSize: 13.5 } }, "Lesson added to Saturday"), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 2,
    fontFamily: t.ui,
    fontSize: 11.5,
    color: "rgba(255,255,255,.62)"
  } }, "Kate notified \xB7 4 hrs from now")), /* @__PURE__ */ React.createElement("button", { style: {
    padding: "6px 10px",
    borderRadius: 8,
    background: "rgba(255,255,255,.10)",
    color: t.paper,
    border: 0,
    fontFamily: t.ui,
    fontSize: 11.5,
    fontWeight: 700,
    cursor: "pointer"
  } }, "Undo")), /* @__PURE__ */ React.createElement("button", { style: {
    position: "absolute",
    right: 16,
    bottom: 82,
    height: 52,
    padding: "0 18px 0 16px",
    borderRadius: 999,
    background: t.ink,
    color: t.paper,
    border: 0,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontFamily: t.ui,
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: "-.005em",
    boxShadow: "0 14px 28px -10px rgba(14,22,35,.55)"
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 24,
    height: 24,
    borderRadius: "50%",
    background: t.accent,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "plus-bold", size: 14, color: t.paper })), "New lesson"), /* @__PURE__ */ React.createElement(BottomNav, { active: "calendar" }));
}
const btnIconLite = {
  width: 36,
  height: 36,
  borderRadius: 999,
  border: `1px solid ${t.hairline}`,
  background: t.paper,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer"
};
function FilterChip({ label, count, active }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    padding: "6px 10px",
    borderRadius: 999,
    background: active ? t.ink : t.paper,
    border: active ? 0 : `1px solid ${t.hairline}`,
    color: active ? t.paper : t.ink2,
    fontFamily: t.ui,
    fontSize: 12,
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    cursor: "pointer",
    letterSpacing: "-.005em"
  } }, label, /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: t.mono,
    fontSize: 10,
    color: active ? "rgba(255,255,255,.6)" : t.ink3,
    fontVariantNumeric: "tabular-nums"
  } }, count));
}
function SegBtn({ icon, active }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: 32,
    height: 28,
    borderRadius: 999,
    background: active ? t.paper : "transparent",
    boxShadow: active ? "0 1px 2px rgba(14,22,35,.10)" : "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 14, color: active ? t.ink : t.ink3, stroke: 1.8 }));
}
function DayHeader({ label, count }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    padding: "14px 0 8px",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.display,
    fontSize: 16,
    fontWeight: t.titleWeight,
    letterSpacing: "-.014em",
    color: t.ink
  } }, label), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.mono,
    fontSize: 10,
    color: t.ink3,
    letterSpacing: ".14em",
    textTransform: "uppercase"
  } }, count));
}
function AgendaCard({ time, status, statusTone, title, students, studentsLabel, room, template, image, highlight }) {
  const statusColors = {
    warn: { fg: t.amberInk, bg: t.amberSoft },
    live: { fg: t.danger, bg: t.dangerSoft },
    ok: { fg: t.success, bg: t.successSoft }
  }[statusTone] || null;
  return /* @__PURE__ */ React.createElement("div", { style: {
    marginBottom: 10,
    padding: 14,
    background: "#fff",
    borderRadius: 18,
    border: highlight ? `2px solid ${t.accent}` : `1px solid ${t.hairline}`,
    boxShadow: highlight ? `0 0 0 4px ${t.accentSoft}, 0 16px 32px -16px rgba(218,79,27,.30)` : "0 1px 0 rgba(14,22,35,.02)",
    position: "relative"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 8
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: t.mono,
    fontSize: 11.5,
    color: t.ink,
    fontWeight: 600,
    fontVariantNumeric: "tabular-nums"
  } }, time), status && statusColors && /* @__PURE__ */ React.createElement("span", { style: {
    padding: "2px 8px",
    borderRadius: 999,
    background: statusColors.bg,
    color: statusColors.fg,
    fontFamily: t.ui,
    fontSize: 10.5,
    fontWeight: 800,
    letterSpacing: ".06em",
    textTransform: "uppercase"
  } }, status), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Icon, { name: "ellipsis", size: 16, color: t.ink3 })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12 } }, /* @__PURE__ */ React.createElement("img", { src: image, alt: "", style: {
    width: 60,
    height: 60,
    borderRadius: 12,
    objectFit: "cover",
    background: t.paper3
  } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.display,
    fontSize: 17,
    fontWeight: t.titleWeight,
    letterSpacing: "-.014em",
    color: t.ink,
    lineHeight: 1.15
  } }, title), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 4,
    fontFamily: t.ui,
    fontSize: 12,
    color: t.ink3,
    display: "flex",
    alignItems: "center",
    gap: 5
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "pin", size: 11, color: t.ink3, stroke: 1.6 }), room), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 6,
    display: "flex",
    alignItems: "center",
    gap: 8
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex" } }, students.map((s, i) => /* @__PURE__ */ React.createElement("img", { key: i, src: s, alt: "", style: {
    width: 22,
    height: 22,
    borderRadius: "50%",
    objectFit: "cover",
    border: `2px solid #fff`,
    marginLeft: i === 0 ? 0 : -8
  } }))), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.ui,
    fontSize: 12,
    color: t.ink2,
    fontWeight: 600
  } }, studentsLabel)))), template && /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 12,
    paddingTop: 10,
    borderTop: `1px dashed ${t.hairline}`,
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontFamily: t.mono,
    fontSize: 10,
    color: t.ink3,
    letterSpacing: ".12em",
    textTransform: "uppercase"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "copy", size: 11, color: t.accent, stroke: 1.8 }), /* @__PURE__ */ React.createElement("span", { style: { color: t.accent } }, "Template"), /* @__PURE__ */ React.createElement("span", null, "\xB7"), /* @__PURE__ */ React.createElement("span", { style: {
    textTransform: "none",
    letterSpacing: "-.005em",
    fontFamily: t.ui,
    fontSize: 11,
    fontWeight: 600,
    color: t.ink2
  } }, template.replace("From template \xB7 ", ""))));
}
const TEMPLATES = [
  {
    id: "piano-beg",
    icon: "music",
    tone: t.accent,
    title: "Piano Beginner Vol. 1",
    sub: "1:1 \xB7 60 min \xB7 Studio B",
    meta: "Used 14\xD7 \xB7 last on May 9",
    favorite: true
  },
  {
    id: "group-recital",
    icon: "star",
    tone: t.amberInk,
    toneBg: t.amberSoft,
    title: "Group Recital Prep",
    sub: "Group \xB7 45 min \xB7 Studio C",
    meta: "Used 6\xD7"
  },
  {
    id: "trial",
    icon: "sparkles",
    tone: t.info,
    toneBg: t.infoSoft,
    title: "Trial lesson",
    sub: "1:1 \xB7 30 min \xB7 any room",
    meta: "Used 3\xD7"
  },
  {
    id: "theory",
    icon: "doc",
    tone: t.success,
    toneBg: t.successSoft,
    title: "Theory & ear training",
    sub: "1:1 \xB7 45 min \xB7 Studio B",
    meta: "Used 2\xD7"
  }
];
function ProposedTemplatePicker() {
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: PHONE_W,
    height: PHONE_H,
    background: t.paper,
    position: "relative",
    fontFamily: t.ui,
    color: t.ink,
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { style: { filter: "brightness(.62) saturate(.85)", pointerEvents: "none" } }, /* @__PURE__ */ React.createElement(ProposedWeek, null)), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(14,22,35,.18) 0%, rgba(14,22,35,.55) 100%)"
  } }), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    background: t.paper,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    boxShadow: "0 -24px 60px -8px rgba(14,22,35,.40)",
    paddingTop: 8,
    paddingBottom: 18,
    maxHeight: 620,
    display: "flex",
    flexDirection: "column"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 38,
    height: 4,
    borderRadius: 999,
    background: t.paper4,
    margin: "0 auto 12px"
  } }), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "0 20px 8px",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between"
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.mono,
    fontSize: 10,
    color: t.ink3,
    letterSpacing: ".14em",
    textTransform: "uppercase"
  } }, "Start from"), /* @__PURE__ */ React.createElement("h2", { style: {
    margin: "4px 0 0",
    fontFamily: t.display,
    fontWeight: t.titleWeight,
    fontSize: 24,
    letterSpacing: "-.02em",
    color: t.ink,
    lineHeight: 1.05
  } }, "Pick a ", /* @__PURE__ */ React.createElement("span", { style: { fontStyle: "italic" } }, "template"))), /* @__PURE__ */ React.createElement("button", { style: {
    ...btnIconLite,
    width: 32,
    height: 32,
    background: t.paper2
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "x", size: 15, color: t.ink2 }))), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "0 20px 14px",
    fontFamily: t.ui,
    fontSize: 12.5,
    color: t.ink3
  } }, "Or ", /* @__PURE__ */ React.createElement("span", { style: { color: t.ink, fontWeight: 600, textDecoration: "underline" } }, "start blank"), " if this lesson is one-off."), /* @__PURE__ */ React.createElement("div", { style: {
    flex: 1,
    overflow: "auto",
    padding: "0 16px 4px",
    display: "flex",
    flexDirection: "column",
    gap: 8
  } }, TEMPLATES.map((tp) => /* @__PURE__ */ React.createElement(TemplateRow, { key: tp.id, tp, selected: tp.id === "piano-beg" })), /* @__PURE__ */ React.createElement("button", { style: {
    marginTop: 4,
    padding: "12px 14px",
    border: `1px dashed ${t.hairlineStrong}`,
    borderRadius: 14,
    background: "transparent",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontFamily: t.ui,
    fontSize: 13.5,
    fontWeight: 600,
    color: t.ink2
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "plus", size: 16, color: t.ink2, stroke: 2 }), "Save current schedule as template")), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "12px 16px 0",
    display: "flex",
    gap: 10
  } }, /* @__PURE__ */ React.createElement("button", { style: {
    flex: 1,
    padding: "13px 16px",
    borderRadius: 14,
    background: t.ink,
    color: t.paper,
    border: 0,
    cursor: "pointer",
    fontFamily: t.ui,
    fontWeight: 700,
    fontSize: 14.5,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8
  } }, "Use Piano Beginner Vol. 1", /* @__PURE__ */ React.createElement(Icon, { name: "arrow-right", size: 16, color: t.paper })))));
}
function TemplateRow({ tp, selected }) {
  const bg = tp.toneBg || t.accentSoft;
  return /* @__PURE__ */ React.createElement("div", { style: {
    padding: 12,
    borderRadius: 14,
    background: "#fff",
    border: selected ? `2px solid ${t.ink}` : `1px solid ${t.hairline}`,
    display: "flex",
    alignItems: "center",
    gap: 12,
    cursor: "pointer",
    position: "relative"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 44,
    height: 44,
    borderRadius: 12,
    background: bg,
    color: tp.tone,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 auto"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: tp.icon, size: 20, color: tp.tone, stroke: 1.7 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 6
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.ui,
    fontSize: 14.5,
    fontWeight: 700,
    color: t.ink,
    letterSpacing: "-.008em"
  } }, tp.title), tp.favorite && /* @__PURE__ */ React.createElement(Icon, { name: "star", size: 12, color: t.amber })), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 2,
    fontFamily: t.ui,
    fontSize: 12,
    color: t.ink2
  } }, tp.sub), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 4,
    fontFamily: t.mono,
    fontSize: 10,
    color: t.ink3,
    letterSpacing: ".10em",
    textTransform: "uppercase"
  } }, tp.meta)), selected ? /* @__PURE__ */ React.createElement("div", { style: {
    width: 22,
    height: 22,
    borderRadius: "50%",
    background: t.ink,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 13, color: t.paper, stroke: 2.4 })) : /* @__PURE__ */ React.createElement(Icon, { name: "chevron-right", size: 16, color: t.ink3 }));
}
function ProposedConfigure() {
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: PHONE_W,
    height: PHONE_H,
    background: t.paper,
    position: "relative",
    fontFamily: t.ui,
    color: t.ink,
    overflow: "hidden"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    paddingTop: 52,
    paddingLeft: 6,
    paddingRight: 14,
    paddingBottom: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  } }, /* @__PURE__ */ React.createElement("button", { style: {
    width: 44,
    height: 44,
    border: 0,
    background: "transparent",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "arrow-left", size: 20, color: t.ink })), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.ui,
    fontWeight: 800,
    fontSize: 16,
    color: t.ink,
    letterSpacing: "-.012em"
  } }, "New lesson"), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.mono,
    fontSize: 10.5,
    color: t.ink3,
    letterSpacing: ".14em",
    textTransform: "uppercase"
  } }, "Step 2 / 2")), /* @__PURE__ */ React.createElement("div", { style: {
    overflow: "auto",
    maxHeight: PHONE_H - 70 - 70 - 16,
    paddingBottom: 110
  } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 20px 14px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    padding: 12,
    borderRadius: 14,
    background: "#fff",
    border: `1px solid ${t.hairline}`,
    display: "flex",
    alignItems: "center",
    gap: 10
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 36,
    height: 36,
    borderRadius: 10,
    background: t.accentSoft,
    color: t.accent,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "music", size: 18, color: t.accent })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.mono,
    fontSize: 9.5,
    color: t.ink3,
    letterSpacing: ".14em",
    textTransform: "uppercase"
  } }, "Template"), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.ui,
    fontSize: 13.5,
    fontWeight: 700,
    color: t.ink,
    letterSpacing: "-.005em",
    marginTop: 1
  } }, "Piano Beginner Vol. 1")), /* @__PURE__ */ React.createElement("button", { style: {
    padding: "6px 10px",
    borderRadius: 999,
    background: t.paper2,
    border: `1px solid ${t.hairline}`,
    fontFamily: t.ui,
    fontSize: 11.5,
    fontWeight: 700,
    color: t.ink2,
    cursor: "pointer"
  } }, "Change"))), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px", display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement(FilledRow, { label: "Date", value: "Saturday, May 16", icon: "calendar", edited: true }), /* @__PURE__ */ React.createElement(FilledRow, { label: "Time", value: "2:00 \u2013 3:00 pm", sub: "60 minutes", icon: "clock" }), /* @__PURE__ */ React.createElement(FilledRow, { label: "Room", value: "Studio B", sub: "Piano Explorers", icon: "pin" }), /* @__PURE__ */ React.createElement(FilledRow, { label: "Student", value: "Kate Harvey", sub: "Age 9 \xB7 12 lessons together", icon: "profile", avatar: AVATARS[2] }), /* @__PURE__ */ React.createElement("div", { style: {
    padding: "12px 14px",
    borderRadius: 14,
    background: "#fff",
    border: `1px solid ${t.hairline}`,
    display: "flex",
    alignItems: "center",
    gap: 12
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 36,
    height: 36,
    borderRadius: 10,
    background: t.paper2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "repeat", size: 16, color: t.ink2 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.ui,
    fontSize: 13.5,
    fontWeight: 700,
    color: t.ink,
    letterSpacing: "-.005em"
  } }, "Repeat weekly"), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 2,
    fontFamily: t.ui,
    fontSize: 11.5,
    color: t.ink3
  } }, "Every Saturday at 2 pm \xB7 ends after 8 lessons")), /* @__PURE__ */ React.createElement(Toggle, { on: true })), /* @__PURE__ */ React.createElement("div", { style: {
    padding: 14,
    borderRadius: 14,
    background: "#fff",
    border: `1px solid ${t.hairline}`
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginBottom: 8
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "sparkles", size: 13, color: t.accent }), /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: t.mono,
    fontSize: 10,
    color: t.accent,
    letterSpacing: ".14em",
    textTransform: "uppercase"
  } }, "Plan from template")), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.display,
    fontSize: 15.5,
    fontWeight: t.titleWeight,
    letterSpacing: "-.01em",
    color: t.ink,
    lineHeight: 1.25
  } }, "Warm-up \xB7 Hanon No. 1 \xB7 Twinkle variations \xB7 review last week's piece"), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 10,
    paddingTop: 10,
    borderTop: `1px dashed ${t.hairline}`,
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontFamily: t.ui,
    fontSize: 11.5,
    color: t.ink3
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "doc", size: 12, color: t.ink3 }), "Today's focus carried over: ", /* @__PURE__ */ React.createElement("span", { style: { color: t.ink, fontWeight: 700, marginLeft: 4 } }, "Dynamics, 2nd half"))))), /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 70,
    padding: "10px 16px 12px",
    background: `linear-gradient(180deg, rgba(250,247,241,0) 0%, ${t.paper} 28%)`,
    display: "flex",
    gap: 10
  } }, /* @__PURE__ */ React.createElement("button", { style: {
    padding: "12px 14px",
    borderRadius: 14,
    background: t.paper,
    border: `1px solid ${t.hairline}`,
    fontFamily: t.ui,
    fontWeight: 700,
    fontSize: 14,
    color: t.ink2,
    cursor: "pointer"
  } }, "Save draft"), /* @__PURE__ */ React.createElement("button", { style: {
    flex: 1,
    padding: "12px 14px",
    borderRadius: 14,
    background: t.ink,
    color: t.paper,
    border: 0,
    cursor: "pointer",
    fontFamily: t.ui,
    fontWeight: 700,
    fontSize: 14,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8
  } }, "Add to calendar", /* @__PURE__ */ React.createElement(Icon, { name: "arrow-right", size: 15, color: t.paper }))), /* @__PURE__ */ React.createElement(BottomNav, { active: "calendar" }));
}
function FilledRow({ label, value, sub, icon, avatar, edited }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    padding: "10px 14px",
    borderRadius: 14,
    background: "#fff",
    border: `1px solid ${t.hairline}`,
    display: "flex",
    alignItems: "center",
    gap: 12
  } }, avatar ? /* @__PURE__ */ React.createElement("img", { src: avatar, alt: "", style: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    objectFit: "cover"
  } }) : /* @__PURE__ */ React.createElement("div", { style: {
    width: 36,
    height: 36,
    borderRadius: 10,
    background: t.paper2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 16, color: t.ink2 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.mono,
    fontSize: 9.5,
    color: t.ink3,
    letterSpacing: ".14em",
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    gap: 6
  } }, label, edited && /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: t.ui,
    fontSize: 9,
    color: t.accent,
    fontWeight: 800,
    letterSpacing: ".06em",
    padding: "1px 5px",
    borderRadius: 999,
    background: t.accentSoft
  } }, "EDITED")), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 2,
    fontFamily: t.ui,
    fontSize: 14,
    fontWeight: 700,
    color: t.ink,
    letterSpacing: "-.005em"
  } }, value), sub && /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 1,
    fontFamily: t.ui,
    fontSize: 11.5,
    color: t.ink3
  } }, sub)), /* @__PURE__ */ React.createElement(Icon, { name: "chevron-right", size: 16, color: t.ink3 }));
}
function Toggle({ on }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: 40,
    height: 24,
    borderRadius: 999,
    background: on ? t.ink : t.paper3,
    position: "relative",
    cursor: "pointer",
    transition: "background .15s"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    position: "absolute",
    top: 2,
    left: on ? 18 : 2,
    width: 20,
    height: 20,
    borderRadius: "50%",
    background: "#fff",
    boxShadow: "0 1px 3px rgba(14,22,35,.18)",
    transition: "left .15s"
  } }));
}
function Frame({ children }) {
  return /* @__PURE__ */ React.createElement(IOSDevice, { screenWidth: PHONE_W, screenHeight: PHONE_H }, children);
}
function Note({ n, title, body }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: 260,
    padding: "14px 16px",
    background: "#fef4a8",
    borderRadius: 4,
    boxShadow: "0 6px 14px rgba(0,0,0,.10), 0 1px 2px rgba(0,0,0,.06)",
    fontFamily: t.ui
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    marginBottom: 6
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    width: 18,
    height: 18,
    borderRadius: "50%",
    background: "#5a4a2a",
    color: "#fef4a8",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: t.mono,
    fontSize: 10,
    fontWeight: 700
  } }, n), /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: t.ui,
    fontSize: 12.5,
    fontWeight: 800,
    color: "#5a4a2a",
    letterSpacing: "-.005em"
  } }, title)), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: t.ui,
    fontSize: 11.5,
    lineHeight: 1.45,
    color: "#5a4a2a"
  } }, body));
}
window.IgCalendar = ProposedWeek;

})();
