(function(){
const PHONE_W = 402;
const PHONE_H = 874;
const LOGO_URL = "assets/images/Ignify_Logo_Color_transparent.png";
const PHOTOS = [
  "assets/images/featured.png",
  "assets/images/featured_1.png",
  "assets/images/featured_2.png"
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
    "backdrop": "dark"
  }
);
const T = {
  paper: "#FAF6EC",
  paper2: "#FFFFFF",
  paper3: "#E8E1CD",
  ink: "#1B2440",
  ink2: "#3C455F",
  ink3: "#6E7589",
  ink4: "#9DA3B4",
  accent: "#EAB81F",
  accentSoft: "#FDF1C2",
  amber: "#FBD13E",
  amberSoft: "#FDF1C2",
  success: "#059669",
  successSoft: "#D6F1E4",
  danger: "#EF4444",
  dangerSoft: "#FEE2E2",
  info: "#2563EB",
  infoSoft: "#DBEAFE",
  rose: "#E91E63",
  roseSoft: "#FCE4EC",
  teal: "#14B8A6",
  tealSoft: "#CCFBF1",
  hairline: "rgba(27,36,64,.08)",
  hairlineStrong: "rgba(27,36,64,.16)",
  ui: '"Plus Jakarta Sans","Helvetica Neue", Arial, sans-serif',
  mono: 'Outfit, ui-monospace, monospace'
};
function IGNIFYLogo({ height = 22 }) {
  return /* @__PURE__ */ React.createElement(
    "img",
    {
      src: LOGO_URL,
      alt: "ignify",
      style: { height, width: "auto", display: "block" },
      draggable: false
    }
  );
}
function Icon({ name, size = 18, color = "currentColor", stroke = 1.6, fill }) {
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
    case "back":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M19 12H5" }), /* @__PURE__ */ React.createElement("path", { d: "m11 6-6 6 6 6" }));
    case "arrow-right":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M5 12h14" }), /* @__PURE__ */ React.createElement("path", { d: "m13 6 6 6-6 6" }));
    case "arrow-up":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 19V5" }), /* @__PURE__ */ React.createElement("path", { d: "m6 11 6-6 6 6" }));
    case "chevron-right":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m9 6 6 6-6 6" }));
    case "chevron-down":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "m6 9 6 6 6-6" }));
    case "profile":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "8", r: "4" }), /* @__PURE__ */ React.createElement("path", { d: "M4 21a8 8 0 0 1 16 0" }));
    case "users":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "9", cy: "9", r: "3.2" }), /* @__PURE__ */ React.createElement("path", { d: "M3 20a6 6 0 0 1 12 0" }), /* @__PURE__ */ React.createElement("circle", { cx: "17", cy: "8", r: "2.6" }), /* @__PURE__ */ React.createElement("path", { d: "M21 18a4.5 4.5 0 0 0-5-4.4" }));
    case "calendar":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "3.5", y: "5", width: "17", height: "15", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M8 3v4M16 3v4M3.5 10h17" }));
    case "card":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M3 10h18" }));
    case "lock":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "5", y: "11", width: "14", height: "9", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M8 11V7a4 4 0 0 1 8 0v4" }));
    case "bell":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" }), /* @__PURE__ */ React.createElement("path", { d: "M10 19a2 2 0 0 0 4 0" }));
    case "shield":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" }));
    case "help":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }), /* @__PURE__ */ React.createElement("path", { d: "M9.5 9a2.5 2.5 0 1 1 4 2c-1 .8-1.5 1-1.5 2.5" }), /* @__PURE__ */ React.createElement("path", { d: "M12 17h.01", strokeWidth: "2" }));
    case "bug":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "7", y: "8", width: "10", height: "11", rx: "5" }), /* @__PURE__ */ React.createElement("path", { d: "M9 8V6a3 3 0 0 1 6 0v2M3 13h4M17 13h4M4 19l3-2M20 19l-3-2M4 7l3 2M20 7l-3 2" }));
    case "doc":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" }), /* @__PURE__ */ React.createElement("path", { d: "M14 3v5h5" }));
    case "heart":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" }));
    case "globe":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }), /* @__PURE__ */ React.createElement("path", { d: "M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" }));
    case "logout":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" }));
    case "business":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "3.5", y: "6", width: "17", height: "14", rx: "1" }), /* @__PURE__ */ React.createElement("path", { d: "M9 6V4h6v2M3.5 12h17" }));
    case "graph":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M4 19V6" }), /* @__PURE__ */ React.createElement("path", { d: "M4 19h16" }), /* @__PURE__ */ React.createElement("path", { d: "M7 16l4-5 4 3 5-7" }));
    case "sparkles":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 4v3M12 17v3M4 12h3M17 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2" }));
    case "school":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M3 9l9-5 9 5-9 5-9-5Z" }), /* @__PURE__ */ React.createElement("path", { d: "M7 11v5a5 5 0 0 0 10 0v-5" }));
    case "star":
      return /* @__PURE__ */ React.createElement("svg", { ...p, fill: color, stroke: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M12 3l2.5 5.5L20 9.5l-4.5 4 1.2 6L12 16.8 6 19.6l1.2-6L3 9.5l5.5-1L12 3Z" }));
    case "flame":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M12 3s5 4 5 9a5 5 0 0 1-10 0c0-2 1-3 2-4 0 1 .5 2 1.5 2 0-3-1-5 1.5-7Z" }));
    case "briefcase":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "7", width: "18", height: "13", rx: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" }));
    case "plug":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("path", { d: "M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0V8ZM12 14v6" }));
    case "cog":
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "3" }), /* @__PURE__ */ React.createElement("path", { d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3 1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8 1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" }));
    default:
      return /* @__PURE__ */ React.createElement("svg", { ...p }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "9" }));
  }
}
function AccountHeader() {
  return /* @__PURE__ */ React.createElement("div", { style: {
    paddingTop: 52,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#FAF6EC"
  } }, /* @__PURE__ */ React.createElement("button", { style: {
    width: 44,
    height: 44,
    border: 0,
    background: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "back", size: 20, color: T.ink })), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 800, fontSize: 18, color: T.ink, letterSpacing: "-.014em" } }, "Account"), /* @__PURE__ */ React.createElement("button", { style: {
    width: 44,
    height: 44,
    border: 0,
    background: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "cog", size: 20, color: T.ink2 })));
}
function IdentityCard({ avatar, name, role, accent }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    padding: "14px 20px 16px",
    display: "flex",
    alignItems: "center",
    gap: 14
  } }, /* @__PURE__ */ React.createElement("img", { src: avatar, alt: "", style: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    objectFit: "cover",
    flex: "0 0 auto"
  } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontWeight: 800,
    fontSize: 22,
    color: T.ink,
    letterSpacing: "-.018em",
    lineHeight: 1.1
  } }, name), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 6,
    display: "flex",
    alignItems: "center",
    gap: 6,
    flexWrap: "wrap"
  } }, /* @__PURE__ */ React.createElement("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    padding: "3px 9px",
    borderRadius: 999,
    background: accent + "1F",
    color: accent,
    fontFamily: T.mono,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: ".10em",
    textTransform: "uppercase"
  } }, role)), /* @__PURE__ */ React.createElement("button", { style: {
    marginTop: 8,
    padding: 0,
    background: "transparent",
    border: 0,
    cursor: "pointer",
    fontFamily: T.ui,
    fontSize: 12,
    fontWeight: 700,
    color: T.info,
    display: "inline-flex",
    alignItems: "center",
    gap: 4
  } }, "Edit profile ", /* @__PURE__ */ React.createElement(Icon, { name: "arrow-right", size: 11, color: T.info }))));
}
function PersonaSwitcher({ personas, active }) {
  return /* @__PURE__ */ React.createElement("div", { style: { padding: "0 20px 18px" } }, /* @__PURE__ */ React.createElement("div", { style: {
    background: T.paper2,
    border: `1px solid ${T.hairline}`,
    borderRadius: 18,
    padding: 8
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    padding: "6px 10px 8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: T.ui,
    fontSize: 11,
    fontWeight: 700,
    color: T.ink3,
    letterSpacing: ".06em",
    textTransform: "uppercase",
    display: "inline-flex",
    alignItems: "center",
    gap: 6
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "users", size: 11, color: T.ink3, stroke: 1.7 }), "Your workspaces"), /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: T.mono,
    fontSize: 10.5,
    color: T.ink4,
    letterSpacing: ".04em"
  } }, "tap to switch")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } }, personas.map((p, i) => {
    const on = p.k === active;
    return /* @__PURE__ */ React.createElement("button", { key: i, style: {
      width: "100%",
      textAlign: "left",
      padding: "12px 12px",
      borderRadius: 12,
      background: on ? "#fff" : "transparent",
      border: on ? `1.5px solid ${p.tint}` : `1px solid transparent`,
      boxShadow: on ? `0 1px 2px rgba(24,24,27,.06)` : "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 12
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 36,
      height: 36,
      borderRadius: 11,
      background: p.tint + (on ? "24" : "14"),
      color: p.tint,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 auto"
    } }, /* @__PURE__ */ React.createElement(Icon, { name: p.icon, size: 18, color: p.tint })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
      fontFamily: T.ui,
      fontSize: 14,
      fontWeight: 700,
      color: T.ink,
      letterSpacing: "-.005em",
      display: "flex",
      alignItems: "center",
      gap: 6
    } }, p.role, on && /* @__PURE__ */ React.createElement("span", { style: {
      padding: "1px 7px",
      borderRadius: 999,
      background: p.tint,
      color: "#fff",
      fontFamily: T.ui,
      fontSize: 9,
      fontWeight: 800,
      letterSpacing: ".10em",
      textTransform: "uppercase"
    } }, "Active")), /* @__PURE__ */ React.createElement("div", { style: {
      marginTop: 2,
      fontFamily: T.ui,
      fontSize: 12,
      color: T.ink3,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    } }, p.studio)), !on && /* @__PURE__ */ React.createElement(Icon, { name: "chevron-right", size: 16, color: T.ink4 }));
  }))));
}
function StatCard({ stats }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    margin: "0 20px 16px",
    padding: "4px 4px",
    background: "transparent",
    borderRadius: 16,
    display: "grid",
    gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
    gap: 8
  } }, stats.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    padding: "12px 12px",
    background: "#fff",
    border: `1px solid ${T.hairline}`,
    borderRadius: 14,
    display: "flex",
    flexDirection: "column",
    gap: 4
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: T.ui,
    fontSize: 10.5,
    color: T.ink3,
    fontWeight: 700,
    letterSpacing: ".04em",
    textTransform: "uppercase"
  } }, s.k), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 2,
    fontFamily: T.ui,
    fontWeight: 800,
    fontSize: 18,
    letterSpacing: "-.014em",
    color: s.tint || T.ink,
    display: "inline-flex",
    alignItems: "baseline",
    gap: 4
  } }, s.v), s.sub && /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: T.ui,
    fontSize: 11,
    color: T.ink3
  } }, s.sub))));
}
function SectionLabel({ label }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    padding: "14px 24px 6px",
    fontFamily: T.mono,
    fontSize: 10,
    color: T.ink3,
    letterSpacing: ".18em",
    textTransform: "uppercase",
    fontWeight: 700
  } }, label);
}
function Row({ icon, tint, label, sub, value, last }) {
  return /* @__PURE__ */ React.createElement("div", { style: {
    padding: "12px 20px",
    borderBottom: last ? "none" : `1px solid ${T.hairline}`,
    display: "flex",
    alignItems: "center",
    gap: 14,
    background: "#fff"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    width: 32,
    height: 32,
    borderRadius: 10,
    background: (tint || T.ink2) + "14",
    color: tint || T.ink2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 auto"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 16, color: tint || T.ink2 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontWeight: 600,
    fontSize: 14,
    color: T.ink,
    letterSpacing: "-.005em"
  } }, label), sub && /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 2,
    fontSize: 11.5,
    color: T.ink3,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  } }, sub)), value && /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: T.mono,
    fontSize: 11,
    color: T.ink3,
    letterSpacing: ".04em",
    whiteSpace: "nowrap"
  } }, value), /* @__PURE__ */ React.createElement(Icon, { name: "chevron-right", size: 16, color: T.ink4 }));
}
function FooterBlock() {
  return /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 24px 28px" } }, /* @__PURE__ */ React.createElement("button", { style: {
    width: "100%",
    height: 46,
    borderRadius: 999,
    background: "transparent",
    color: T.ink2,
    border: `1px solid ${T.hairlineStrong}`,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: T.ui,
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "-.005em"
  } }, /* @__PURE__ */ React.createElement(Icon, { name: "logout", size: 15, color: T.ink2 }), "Sign out"), /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: T.mono,
    fontSize: 9.5,
    color: T.ink4,
    letterSpacing: ".16em",
    textTransform: "uppercase"
  } }, /* @__PURE__ */ React.createElement("span", null, "Beta \xB7 v0.9"), /* @__PURE__ */ React.createElement("span", { style: { color: T.hairlineStrong } }, "\xB7"), /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 } }, "shake to report a bug ", /* @__PURE__ */ React.createElement(Icon, { name: "star", size: 9, color: T.accent }))));
}
function AccountFamily() {
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: PHONE_W,
    height: PHONE_H,
    background: "#FAF6EC",
    fontFamily: T.ui,
    color: T.ink,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column"
  } }, /* @__PURE__ */ React.createElement(AccountHeader, null), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "auto", paddingBottom: 84 } }, /* @__PURE__ */ React.createElement(
    IdentityCard,
    {
      avatar: AVATARS[2],
      name: "Marina Reyes",
      role: "Parent",
      accent: T.accent
    }
  ), /* @__PURE__ */ React.createElement(
    PersonaSwitcher,
    {
      active: "family",
      personas: [
        { k: "family", role: "Parent", studio: "Walsh family", icon: "users", tint: T.accent },
        { k: "teach", role: "Teacher", studio: "Music Academy of KC", icon: "school", tint: T.info }
      ]
    }
  ), /* @__PURE__ */ React.createElement(StatCard, { stats: [
    { k: "Mira", v: /* @__PURE__ */ React.createElement(React.Fragment, null, "14 ", /* @__PURE__ */ React.createElement(Icon, { name: "cal-check", size: 14, color: T.success })), sub: "lessons attended" },
    { k: "Streak", v: /* @__PURE__ */ React.createElement(React.Fragment, null, "12 ", /* @__PURE__ */ React.createElement(Icon, { name: "flame", size: 14, color: T.amber })), sub: "days practising" },
    { k: "Due Fri", v: "$180", sub: "May invoice", tint: T.amber }
  ] }), /* @__PURE__ */ React.createElement(SectionLabel, { label: "Your family" }), /* @__PURE__ */ React.createElement(Row, { icon: "users", tint: T.rose, label: "Family members", sub: "Mira (9), Theo (12) \xB7 co-guardian: Mike" }), /* @__PURE__ */ React.createElement(Row, { icon: "card", tint: T.rose, label: "Family payment method", sub: "Visa ending 4242" }), /* @__PURE__ */ React.createElement(Row, { icon: "profile", tint: T.rose, label: "Roles & permissions", sub: "3 guardians \xB7 2 children", last: true }), /* @__PURE__ */ React.createElement(SectionLabel, { label: "Bookings & schedule" }), /* @__PURE__ */ React.createElement(Row, { icon: "calendar", tint: T.info, label: "My bookings", sub: "4 upcoming \xB7 12 past" }), /* @__PURE__ */ React.createElement(Row, { icon: "heart", tint: T.info, label: "Favorite studios", sub: "2 saved" }), /* @__PURE__ */ React.createElement(Row, { icon: "globe", tint: T.info, label: "Calendar sync", value: "Google", last: true }), /* @__PURE__ */ React.createElement(SectionLabel, { label: "Payments" }), /* @__PURE__ */ React.createElement(Row, { icon: "card", tint: T.amber, label: "Invoices", sub: "1 due \xB7 3 paid" }), /* @__PURE__ */ React.createElement(Row, { icon: "business", tint: T.amber, label: "Payment methods", sub: "2 cards on file", last: true }), /* @__PURE__ */ React.createElement(SectionLabel, { label: "Account" }), /* @__PURE__ */ React.createElement(Row, { icon: "bell", tint: T.ink2, label: "Notifications", sub: "Lessons, reports, billing" }), /* @__PURE__ */ React.createElement(Row, { icon: "lock", tint: T.ink2, label: "Security", sub: "Face ID \xB7 2-step on" }), /* @__PURE__ */ React.createElement(Row, { icon: "shield", tint: T.ink2, label: "Privacy & permissions" }), /* @__PURE__ */ React.createElement(Row, { icon: "globe", tint: T.ink2, label: "Language", value: "English", last: true }), /* @__PURE__ */ React.createElement(SectionLabel, { label: "Help" }), /* @__PURE__ */ React.createElement(Row, { icon: "bug", tint: T.accent, label: "Report a bug", sub: "One tap \xB7 or shake your phone" }), /* @__PURE__ */ React.createElement(Row, { icon: "help", tint: T.ink2, label: "Help & support" }), /* @__PURE__ */ React.createElement(Row, { icon: "doc", tint: T.ink2, label: "Terms & privacy", last: true }), /* @__PURE__ */ React.createElement(FooterBlock, null)));
}
function AccountTeacher() {
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: PHONE_W,
    height: PHONE_H,
    background: "#FAF6EC",
    fontFamily: T.ui,
    color: T.ink,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column"
  } }, /* @__PURE__ */ React.createElement(AccountHeader, null), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "auto", paddingBottom: 84 } }, /* @__PURE__ */ React.createElement(
    IdentityCard,
    {
      avatar: AVATARS[1],
      name: "Theo Walsh",
      role: "Teacher",
      accent: T.info
    }
  ), /* @__PURE__ */ React.createElement(
    PersonaSwitcher,
    {
      active: "teach",
      personas: [
        { k: "teach", role: "Teacher", studio: "Music Academy of KC", icon: "school", tint: T.info },
        { k: "teach2", role: "Teacher", studio: "City Strings Collective", icon: "school", tint: T.success },
        { k: "family", role: "Parent", studio: "Walsh family", icon: "users", tint: T.accent }
      ]
    }
  ), /* @__PURE__ */ React.createElement(StatCard, { stats: [
    { k: "Taught", v: "47", sub: "lessons total" },
    { k: "This wk", v: /* @__PURE__ */ React.createElement(React.Fragment, null, "18 ", /* @__PURE__ */ React.createElement(Icon, { name: "users", size: 13, color: T.teal })), sub: "students" },
    { k: "Drafts", v: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { style: { color: T.accent } }, "3"), " ", /* @__PURE__ */ React.createElement(Icon, { name: "sparkles", size: 13, color: T.accent })), sub: "awaiting you" }
  ] }), /* @__PURE__ */ React.createElement(SectionLabel, { label: "Teaching" }), /* @__PURE__ */ React.createElement(Row, { icon: "users", tint: T.info, label: "My students", sub: "18 active across 4 cohorts" }), /* @__PURE__ */ React.createElement(Row, { icon: "calendar", tint: T.info, label: "Today's lessons", sub: "4 scheduled \xB7 next in 32 min" }), /* @__PURE__ */ React.createElement(Row, { icon: "doc", tint: T.accent, label: "Reports drafted", sub: "3 ready to review", value: "3" }), /* @__PURE__ */ React.createElement(Row, { icon: "graph", tint: T.info, label: "Past reports", sub: "32 sent \xB7 28 read", last: true }), /* @__PURE__ */ React.createElement(SectionLabel, { label: "Availability" }), /* @__PURE__ */ React.createElement(Row, { icon: "calendar", tint: T.success, label: "Weekly schedule", sub: "Mon\u2013Fri \xB7 2\u20137 pm" }), /* @__PURE__ */ React.createElement(Row, { icon: "bell", tint: T.success, label: "Time off", sub: "2 days requested in May" }), /* @__PURE__ */ React.createElement(Row, { icon: "globe", tint: T.success, label: "Calendar sync", value: "Google", last: true }), /* @__PURE__ */ React.createElement(SectionLabel, { label: "Studios" }), /* @__PURE__ */ React.createElement(Row, { icon: "school", tint: T.rose, label: "Music Academy of KC", sub: "Active \xB7 Violin beginner + intermediate" }), /* @__PURE__ */ React.createElement(Row, { icon: "business", tint: T.info, label: "Studios you teach at", sub: "2 studios" }), /* @__PURE__ */ React.createElement(Row, { icon: "briefcase", tint: T.ink2, label: "Invitations", sub: "0 pending", last: true }), /* @__PURE__ */ React.createElement(SectionLabel, { label: "Account" }), /* @__PURE__ */ React.createElement(Row, { icon: "bell", tint: T.ink2, label: "Notifications", sub: "Lessons, reports, messages" }), /* @__PURE__ */ React.createElement(Row, { icon: "lock", tint: T.ink2, label: "Security", sub: "Face ID \xB7 2-step on" }), /* @__PURE__ */ React.createElement(Row, { icon: "shield", tint: T.ink2, label: "Privacy & permissions" }), /* @__PURE__ */ React.createElement(Row, { icon: "globe", tint: T.ink2, label: "Language", value: "English", last: true }), /* @__PURE__ */ React.createElement(SectionLabel, { label: "Help" }), /* @__PURE__ */ React.createElement(Row, { icon: "bug", tint: T.accent, label: "Report a bug", sub: "One tap \xB7 or shake your phone" }), /* @__PURE__ */ React.createElement(Row, { icon: "help", tint: T.ink2, label: "Help & support" }), /* @__PURE__ */ React.createElement(Row, { icon: "doc", tint: T.ink2, label: "Terms & privacy", last: true }), /* @__PURE__ */ React.createElement(FooterBlock, null)));
}
function AccountOwner() {
  return /* @__PURE__ */ React.createElement("div", { style: {
    width: PHONE_W,
    height: PHONE_H,
    background: "#FAF6EC",
    fontFamily: T.ui,
    color: T.ink,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column"
  } }, /* @__PURE__ */ React.createElement(AccountHeader, null), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "auto", paddingBottom: 84 } }, /* @__PURE__ */ React.createElement(
    IdentityCard,
    {
      avatar: AVATARS[0],
      name: "Theo Rivera",
      role: "Owner",
      accent: T.rose
    }
  ), /* @__PURE__ */ React.createElement(
    PersonaSwitcher,
    {
      active: "own",
      personas: [
        { k: "own", role: "Owner", studio: "Piano Explorers \xB7 Park Slope", icon: "business", tint: T.rose },
        { k: "own2", role: "Owner", studio: "Piano Explorers \xB7 Greenpoint", icon: "business", tint: T.info },
        { k: "teach", role: "Teacher", studio: "Piano Explorers", icon: "school", tint: T.success }
      ]
    }
  ), /* @__PURE__ */ React.createElement(StatCard, { stats: [
    { k: "May", v: "$4,820", sub: "+12% vs Apr", tint: T.success },
    { k: "Occupancy", v: "84%", sub: "32 of 38 rooms" },
    { k: "Enrolled", v: "12", sub: "new this month" }
  ] }), /* @__PURE__ */ React.createElement(SectionLabel, { label: "Your studio" }), /* @__PURE__ */ React.createElement(Row, { icon: "school", tint: T.rose, label: "Studio profile", sub: "Piano Explorers \xB7 Park Slope" }), /* @__PURE__ */ React.createElement(Row, { icon: "users", tint: T.rose, label: "Staff", sub: "4 teachers \xB7 2 admins" }), /* @__PURE__ */ React.createElement(Row, { icon: "business", tint: T.rose, label: "Rooms", sub: "3 rooms \xB7 A, B, C" }), /* @__PURE__ */ React.createElement(Row, { icon: "calendar", tint: T.rose, label: "Classes & pricing", sub: "8 active classes" }), /* @__PURE__ */ React.createElement(Row, { icon: "sparkles", tint: T.rose, label: "Branding", sub: "Logo, colors, voice", last: true }), /* @__PURE__ */ React.createElement(SectionLabel, { label: "Business" }), /* @__PURE__ */ React.createElement(Row, { icon: "cal-check", tint: T.info, label: "Bookings inbox", sub: "3 pending requests", value: "3" }), /* @__PURE__ */ React.createElement(Row, { icon: "card", tint: T.amber, label: "Invoices & payouts", sub: "$4,820 this month" }), /* @__PURE__ */ React.createElement(Row, { icon: "plug", tint: T.info, label: "Integrations", sub: "Stripe \xB7 Wave \xB7 GCal", last: true }), /* @__PURE__ */ React.createElement(SectionLabel, { label: "Reporting" }), /* @__PURE__ */ React.createElement(Row, { icon: "graph", tint: T.success, label: "Billing dashboard", sub: "May trending up 12%" }), /* @__PURE__ */ React.createElement(Row, { icon: "cal-check", tint: T.success, label: "Attendance", sub: "94% yesterday" }), /* @__PURE__ */ React.createElement(Row, { icon: "users", tint: T.success, label: "Retention", sub: "3-month + 6-month cohorts", last: true }), /* @__PURE__ */ React.createElement(SectionLabel, { label: "Account" }), /* @__PURE__ */ React.createElement(Row, { icon: "bell", tint: T.ink2, label: "Notifications", sub: "Bookings, payouts, messages" }), /* @__PURE__ */ React.createElement(Row, { icon: "lock", tint: T.ink2, label: "Security", sub: "Face ID \xB7 2-step on" }), /* @__PURE__ */ React.createElement(Row, { icon: "shield", tint: T.ink2, label: "Privacy & permissions", last: true }), /* @__PURE__ */ React.createElement(SectionLabel, { label: "Help" }), /* @__PURE__ */ React.createElement(Row, { icon: "bug", tint: T.accent, label: "Report a bug", sub: "One tap \xB7 or shake your phone" }), /* @__PURE__ */ React.createElement(Row, { icon: "help", tint: T.ink2, label: "Help & support" }), /* @__PURE__ */ React.createElement(Row, { icon: "doc", tint: T.ink2, label: "Terms & privacy", last: true }), /* @__PURE__ */ React.createElement(FooterBlock, null)));
}
function P({ children }) {
  return /* @__PURE__ */ React.createElement(IOSDevice, { width: PHONE_W, height: PHONE_H }, children);
}
function FrameWrap({ label, sub, accent, children }) {
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "inline-flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: T.mono,
    fontSize: 11,
    color: accent || "rgba(245,241,231,.55)",
    letterSpacing: ".08em"
  } }, label), sub && /* @__PURE__ */ React.createElement("span", { style: {
    padding: "2px 8px",
    borderRadius: 999,
    background: accent ? `color-mix(in oklab, ${accent} 22%, transparent)` : "rgba(245,241,231,.10)",
    color: accent || "rgba(245,241,231,.55)",
    fontFamily: T.mono,
    fontSize: 10,
    letterSpacing: ".08em",
    border: accent ? `1px solid color-mix(in oklab, ${accent} 35%, transparent)` : "none"
  } }, sub)), children);
}
function Gallery({ view, backdrop }) {
  const isDark = backdrop === "dark";
  const bg = isDark ? "#0E1623" : "#F4F4EF";
  const fg = isDark ? "#F5F1E7" : T.ink;
  const fgMute = isDark ? "rgba(245,241,231,.55)" : T.ink3;
  const fgDim = isDark ? "rgba(245,241,231,.45)" : "rgba(24,24,27,.45)";
  const showFamily = view === "compare" || view === "family";
  const showTeacher = view === "compare" || view === "teacher";
  const showOwner = view === "compare" || view === "owner";
  return /* @__PURE__ */ React.createElement("div", { style: {
    minHeight: "100vh",
    background: bg,
    color: fg,
    paddingTop: 56,
    paddingBottom: 160,
    fontFamily: T.ui
  } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1620, margin: "0 auto", padding: "0 40px 24px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 16 } }, /* @__PURE__ */ React.createElement(IGNIFYLogo, { height: 20 }), /* @__PURE__ */ React.createElement("span", { style: {
    fontFamily: T.mono,
    fontSize: 10.5,
    letterSpacing: ".18em",
    textTransform: "uppercase",
    color: fgDim,
    marginLeft: 6
  } }, "Design proposal")), /* @__PURE__ */ React.createElement("h1", { style: {
    fontWeight: 800,
    fontSize: 44,
    letterSpacing: "-.022em",
    margin: 0,
    color: fg,
    lineHeight: 1.04
  } }, "Account", /* @__PURE__ */ React.createElement("span", { style: { color: T.accent } }, ".")), /* @__PURE__ */ React.createElement("p", { style: {
    marginTop: 14,
    maxWidth: 820,
    color: fgMute,
    fontSize: 15,
    lineHeight: 1.55
  } }, "Three role-aware variants of the same scaffold: identity card on top (avatar, name, role chip, optional persona switcher), a dark stat card with role-specific KPIs, role-filtered sections for what that role actually manages, and a common footer block (Sign out + Beta \xB7 shake-to-report). Plus Jakarta Sans throughout.")), /* @__PURE__ */ React.createElement("div", { style: {
    maxWidth: 1620,
    margin: "0 auto",
    padding: "24px 40px 0",
    display: "flex",
    gap: 40,
    alignItems: "flex-start",
    flexWrap: "wrap"
  } }, showFamily && /* @__PURE__ */ React.createElement(FrameWrap, { label: "01 \xB7 Family", sub: "PARENT / STUDENT", accent: T.accent }, /* @__PURE__ */ React.createElement(P, null, /* @__PURE__ */ React.createElement(AccountFamily, null))), showTeacher && /* @__PURE__ */ React.createElement(FrameWrap, { label: "02 \xB7 Teacher", sub: "INSTRUCTOR", accent: T.info }, /* @__PURE__ */ React.createElement(P, null, /* @__PURE__ */ React.createElement(AccountTeacher, null))), showOwner && /* @__PURE__ */ React.createElement(FrameWrap, { label: "03 \xB7 Owner", sub: "STUDIO / ADMIN", accent: T.rose }, /* @__PURE__ */ React.createElement(P, null, /* @__PURE__ */ React.createElement(AccountOwner, null)))));
}
window.IgAccount = AccountTeacher;

})();
