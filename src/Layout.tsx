import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./site/Nav";
import Footer from "./site/Footer";
import CustomCursor from "./site/CustomCursor";
import RouteMeta from "./site/lib/RouteMeta";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// Shared chrome wrapping every route. vite-react-ssg provides the router,
// so this renders inside it (no BrowserRouter here). <Outlet/> is the page.
export default function Layout() {
  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <RouteMeta />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
