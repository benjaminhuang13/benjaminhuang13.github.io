import { StrictMode } from "react";
import "./index.css";
import Frontpage from "./js/frontpage.js";
import { BrowserRouter as Router } from "react-router-dom";

import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Frontpage />
    </Router>
    ,
  </StrictMode>
);
