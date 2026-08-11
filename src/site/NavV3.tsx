import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function NavV3() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <nav className="g3-nav" aria-label="Main">
        <Link to="/" className="g3-nav__brand" onClick={() => setOpen(false)}>
          <img src="/logo-white.svg" alt="" width={26} height={26} />
          <span className="g3-nav__word">Garagol</span>
          <span className="g3-nav__sub">Consulting &amp; Solutions</span>
        </Link>
        <div className="g3-nav__right">
          <div className="g3-nav__links">
            {LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? "is-active" : "")}>
                {l.label}
              </NavLink>
            ))}
          </div>
          <div className="g3-nav__cta">
            <a className="g3-nav__call" href="https://calendly.com/allamyrat/30min" target="_blank" rel="noreferrer">
              Book a 30-min call
            </a>
            <Link to="/contact" className="g3-btn g3-btn--sm" data-magnet>
              Start a project
            </Link>
          </div>
        </div>
        <button
          className="g3-nav__burger g3-label"
          style={{ padding: "9px 14px" }}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <div className="g3-menu" id="site-menu" role="dialog" aria-modal="true" aria-label="Site menu">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={"g3-menu__link" + (pathname.startsWith(l.to) ? " is-active" : "")}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="g3-menu__ctas">
            <a className="g3-btn g3-btn--ghost" href="https://calendly.com/allamyrat/30min" target="_blank" rel="noreferrer">
              Book a 30-min call
            </a>
            <Link to="/contact" className="g3-btn" onClick={() => setOpen(false)}>
              Start a project
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
