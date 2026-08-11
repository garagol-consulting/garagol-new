import { Link } from "react-router-dom";

export default function FooterV3() {
  const year = new Date().getFullYear();
  return (
    <footer className="g3-footer">
      <div className="g3-footer__grid">
        <div>
          <div className="g3-footer__brand">
            <img src="/logo-white.svg" alt="" width={24} height={24} />
            <strong>Garagol</strong>
            <span>Consulting &amp; Solutions</span>
          </div>
          <p>We design and build the software businesses run on.</p>
          <div className="g3-footer__lake">garagol · Turkmen for "a curious kid who finds trouble"</div>
        </div>
        <div className="g3-footer__col">
          <span className="g3-label">Site</span>
          <nav>
            <Link to="/work">Work</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <div className="g3-footer__col">
          <span className="g3-label">Elsewhere</span>
          <nav>
            <a href="https://www.linkedin.com/company/garagol/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://ignify.us" target="_blank" rel="noreferrer">IGNIFY ↗</a>
            <a href="https://www.instagram.com/garagol_css/" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="https://www.facebook.com/profile.php?id=61574918726921" target="_blank" rel="noreferrer">Facebook ↗</a>
          </nav>
        </div>
        <div className="g3-footer__col">
          <span className="g3-label">Get in touch</span>
          <nav>
            <a className="g3-mail" href="mailto:hello@garagol.com">hello@garagol.com</a>
            <a href="https://calendly.com/allamyrat/30min" target="_blank" rel="noreferrer">Book a 30-min call ↗</a>
            <span>Dallas / Fort Worth, Texas</span>
          </nav>
        </div>
      </div>
      <div className="g3-footer__bar">
        <span>© {year} Garagol Consulting &amp; Solutions · Dallas / Fort Worth, Texas</span>
        <span>Built by Garagol</span>
      </div>
    </footer>
  );
}
