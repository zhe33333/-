// src/App.jsx

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import { Screen as LoginPage } from "./pages/LoginPage/LoginPage.jsx";
import PurchasePage from "./pages/PurchasePage/PurchasePage.jsx";
import SellPage from "./pages/SellPage/SellPage.jsx";
import ThumbnailsPage from "./pages/ThumbnailsPage/ThumbnailsPage.jsx";
import Header from "./components/Header/Header"; // Import Header
import Footer from "./components/Footer/Footer"; // Import Footer
import "./styles/variables.css";
import "./styles/App.css";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <div className="app-content-wrapper">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/purchase" element={<PurchasePage />} />
            <Route path="/sell" element={<SellPage />} />
            <Route path="/thumbnails" element={<ThumbnailsPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
