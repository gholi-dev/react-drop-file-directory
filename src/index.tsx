import React from "react";
import ReactDOM from "react-dom/client";
import Droper from "./components/droper.component";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Droper />
  </React.StrictMode>
);
