// src/App.jsx

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import SellPage from "./pages/SellPage/SellPage.jsx";
import ThumbnailsPage from "./pages/ThumbnailsPage/ThumbnailsPage.jsx";
import Header from "./components/Header/Header"; // Import Header
import Footer from "./components/Footer/Footer"; // Import Footer
import "./styles/variables.css";
import "./styles/App.css";

const theme = createTheme();

// Placeholder components for the new routes
const PrivacyPage = () => <div><h1>隱私權政策</h1><p>這是隱私權政策頁面。</p></div>;
const SitemapPage = () => <div><h1>網站地圖</h1><p>這是網站地圖頁面。</p></div>;
const ContactPage = () => <div><h1>聯絡我們</h1><p>這是聯絡我們頁面。</p></div>;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <div className="app-content-wrapper">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/sell" element={<SellPage />} />
            <Route path="/thumbnails" element={<ThumbnailsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
