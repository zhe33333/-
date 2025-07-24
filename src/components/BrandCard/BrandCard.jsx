import React from "react";
import "./BrandCard.css";

const BrandCard = ({ brandName }) => {
  const [line1, line2] = brandName.split('\n');

  return (
    <div className="brand-card">
      <h3>{line1}</h3>
      {line2 && <p>{line2}</p>}
    </div>
  );
};

export default BrandCard;
