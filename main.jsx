import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ReactGA from "react-ga4";
ReactGA.initialize("G-ZPJ104WBBG");
ReactGA.send("pageview");
createRoot(document.getElementById("root")).render(<App />);
