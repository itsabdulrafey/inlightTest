import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom"; // Import HashRouter

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
