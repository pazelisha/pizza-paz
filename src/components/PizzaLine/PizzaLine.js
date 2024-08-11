import React from "react";
import "./PizzaLine.css";

function PizzaLine({ pizza, onEdit, editEnabled }) {
  const pizzaDesc = `${pizza.selectedSize} pizza with ${
    pizza.toppings.length > 0
      ? `${pizza.toppings.map((topping) => topping.name).join(", ")}`
      : "no toppings"
  }`;
  const editLabel = "Edit";

  return (
    <div className="pizza-line">
      <h2>{pizzaDesc}</h2>
      {editEnabled ? (
        <button className="edit-button" onClick={onEdit}>
          {editLabel}
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PizzaLine;
