import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from 'react-ga';
import { App } from "./App";

ReactGA.initialize(import.meta.env.TRACKING_ID)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
