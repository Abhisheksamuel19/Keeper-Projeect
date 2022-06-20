import react from "react";
import { createRoot } from "react-dom/client";
import App1 from "./App1";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App1></App1>);
