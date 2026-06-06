import { Link } from "react-router-dom";
import BrandMark from "./BrandMark";
import { LinkedInIcon, InstagramIcon, FacebookIcon, UpworkIcon } from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__glyph" aria-hidden="true">G</div>
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="brand">
              <BrandMark />
              <span className="brand__word">Garagol<span className="brand__sub">Consulting</span></span>
            </Link>
            <p className="footer__tagline">
              Digital consultancy and studio. We advise and we build across strategy, brand, marketing, and engineering.
            </p>
            <div className="footer__social">
              <a href="https://www.linkedin.com/company/garagol/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
              <a href="https://www.instagram.com/garagol_css/" aria-label="Instagram" target="_blank" rel="noreferrer"><InstagramIcon /></a>
              <a href="https://www.facebook.com/profile.php?id=61574918726921" aria-label="Facebook" target="_blank" rel="noreferrer"><FacebookIcon /></a>
              <a href="https://www.upwork.com/agencies/1791289820464082944/" aria-label="Upwork" target="_blank" rel="noreferrer"><UpworkIcon /></a>
            </div>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <Link to="/work">Work</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/pricing">Pricing</Link>
          </div>
          <div className="footer__col">
            <h4>Services</h4>
            <Link to="/services#strategy">Strategy &amp; Consulting</Link>
            <Link to="/services#brand">Brand &amp; Design</Link>
            <Link to="/services#marketing">Marketing &amp; Growth</Link>
            <Link to="/services#build">Build &amp; Engineering</Link>
          </div>
          <div className="footer__col">
            <h4>Get in touch</h4>
            <Link to="/contact">Start a project</Link>
            <Link to="/contact#estimate">Get an estimate</Link>
            <a href="mailto:hello@garagol.com">hello@garagol.com</a>
          </div>
        </div>
        <div className="footer__bar">
          <span>© {year} Garagol. All rights reserved.</span>
          <span className="mono">Built by Garagol</span>
        </div>
      </div>
    </footer>
  );
}
