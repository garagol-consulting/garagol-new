import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./index.css";

// vite-react-ssg entry: prerenders each route to static HTML at build,
// then hydrates on the client.
export const createRoot = ViteReactSSG({ routes });
