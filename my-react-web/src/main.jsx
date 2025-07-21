import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from 'react-router-dom'; // 1. 從這裡改變
import "./styles/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter> {/* 2. 從這裡改變 */}
      <App />
    </HashRouter>
  </StrictMode>
);
