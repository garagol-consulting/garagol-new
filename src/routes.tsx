import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";
import Home from "./site/pages/Home";
import Work from "./site/pages/Work";
import CaseIgnify from "./site/pages/CaseIgnify";
import Services from "./site/pages/Services";
import About from "./site/pages/About";
import Pricing from "./site/pages/Pricing";
import Contact from "./site/pages/Contact";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "work", element: <Work /> },
      { path: "work/ignify", element: <CaseIgnify /> },
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
      { path: "pricing", element: <Pricing /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Home /> },
    ],
  },
];
