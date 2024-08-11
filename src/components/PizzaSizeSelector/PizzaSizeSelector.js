import React from "react";
import "./PizzaSizeSelector.css";

function PizzaSizeSelector({ sizeList, selectedSize, onSizeChange }) {
  const label = "Choose Size : ";

  return (
    <div className="size-container">
      <h2>{label}</h2>
      <div className="size-choice">
        <select value={selectedSize} onChange={onSizeChange}>
          {sizeList.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default PizzaSizeSelector;
