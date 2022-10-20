import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import "./assets/fonts/font.css";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RecoilRoot>
);
