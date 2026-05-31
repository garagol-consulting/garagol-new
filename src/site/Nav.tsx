import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import BrandMark from "./BrandMark";

const LINKS = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/pricing", label: "Pricing" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu on route change
  useEffect(() => setOpen(false), [location.pathname]);

  // lock body scroll while the full-screen menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const Brand = (
    <Link to="/" className="brand" aria-label="Garagol home">
      <BrandMark />
      <span className="brand__word">Garagol<span className="brand__sub">Consulting</span></span>
    </Link>
  );

  return (
    <>
      <header className={"nav" + (scrolled ? " is-scrolled" : "")}>
        <div className="wrap nav__inner">
          {Brand}
          <nav className="nav__links" aria-label="Primary">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => "nav__link" + (isActive ? " is-active" : "")}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="nav__right">
            <Link to="/work" className="btn btn--ghost">See our work</Link>
            <Link to="/contact" className="btn btn--primary">Start a project</Link>
            <button
              className="nav__burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <div className={"mobile-menu" + (open ? " is-open" : "")} id="mobileMenu">
        {LINKS.map((l) => (
          <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</NavLink>
        ))}
        <Link to="/contact" className="btn btn--primary btn--lg btn--block" onClick={() => setOpen(false)}>
          Start a project
        </Link>
      </div>
    </>
  );
}
