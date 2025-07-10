import React from "react";
import "./BrandCard.css";

const BrandCard = ({ brandName }) => {
  return (
    <div className="brand-card">
      <div className="brand-card-background">
        <div className="brand-card-content">
          <span className="brand-name-text">{brandName}</span>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
