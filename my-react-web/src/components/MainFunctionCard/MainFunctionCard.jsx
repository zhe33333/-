import React from 'react';
import './MainFunctionCard.css';

const MainFunctionCard = ({ icon, title, description }) => {
  return (
    <div className="main-function-card">
      <div className="main-function-icon">{icon}</div>
      <h3 className="main-function-title">{title}</h3>
      <p className="main-function-description">{description}</p>
    </div>
  );
};

export default MainFunctionCard;
