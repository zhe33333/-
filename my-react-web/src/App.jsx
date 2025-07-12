// src/App.jsx

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import { Screen as LoginPage } from "./pages/LoginPage/LoginPage.jsx";
import Header from "./components/Header/Header"; // Import Header
import Footer from "./components/Footer/Footer"; // Import Footer
import "./styles/variables.css";
import "./styles/App.css";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className="app-content-wrapper">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
