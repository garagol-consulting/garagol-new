import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./site/Nav";
import Footer from "./site/Footer";
import CustomCursor from "./site/CustomCursor";
import RouteMeta from "./site/lib/RouteMeta";
import Home from "./site/pages/Home";
import Work from "./site/pages/Work";
import CaseIgnify from "./site/pages/CaseIgnify";
import Services from "./site/pages/Services";
import About from "./site/pages/About";
import Pricing from "./site/pages/Pricing";
import Contact from "./site/pages/Contact";

// Temporary stub until each route is built out (tasks #4–#8).
function Stub({ title }: { title: string }) {
  return (
    <main className="section">
      <div className="wrap">
        <span className="kicker"><span className="num">—</span> {title}</span>
        <h1 className="h1" style={{ marginTop: 16 }}>{title}</h1>
        <p className="lead" style={{ marginTop: 12 }}>Section coming together…</p>
      </div>
    </main>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/ignify" element={<CaseIgnify />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Stub title="Page not found" />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <ScrollToTop />
      <RouteMeta />
      <Nav />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}
