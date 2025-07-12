// src/App.jsx

import React from "react";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header"; // Import Header
import Footer from "./components/Footer/Footer"; // Import Footer
import CustomCursor from "./components/CustomCursor/CustomCursor"; // Import CustomCursor
import "./styles/variables.css";
import "./styles/App.css";

function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <div className="app-content-wrapper"> {/* Main content wrapper */}
        <Homepage />
      </div>
      <Footer />
    </>
  );
}

export default App;
