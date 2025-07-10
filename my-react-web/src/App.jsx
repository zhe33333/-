// src/App.jsx

import React from "react";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header"; // Import Header
import Footer from "./components/Footer/Footer"; // Import Footer
import "./styles/variables.css";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container"> {/* Global Flexbox container */}
      <Header />
      <div className="content-wrapper"> {/* Main content wrapper */}
        <Homepage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
