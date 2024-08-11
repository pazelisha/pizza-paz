import React from "react";
import "./ToppingList.css";
import tomatoes from "../../assets/images/toppings/tomatoes.png";
import red_onion from "../../assets/images/toppings/red onion.png";
import green_olives from "../../assets/images/toppings/green_olives.png";
import mushrooms from "../../assets/images/toppings/mushrooms.png";
import bell_pepper from "../../assets/images/toppings/bell_pepper.png";
import spinach from "../../assets/images/toppings/spinach.png";
import corn from "../../assets/images/toppings/corn.png";
import eggplant from "../../assets/images/toppings/eggplant.png";
import garlic from "../../assets/images/toppings/garlic.png";

const toppings = [
  { id: 1, name: "Olives", image: green_olives },
  { id: 2, name: "Mushroom", image: mushrooms },
  { id: 3, name: "Bell Pepper", image: bell_pepper },
  { id: 4, name: "Red Onion", image: red_onion },
  { id: 5, name: "Tomatoes", image: tomatoes },
  { id: 6, name: "Spinach", image: spinach },
  { id: 7, name: "Corn", image: corn },
  { id: 8, name: "Eggplant", image: eggplant },
  { id: 9, name: "Garlic", image: garlic },
];

function ToppingList({ onToppingClick, selectedToppings }) {
  return (
    <div className="topping-list">
      {toppings.map((topping) => (
        <div
          className={`topping-card ${
            selectedToppings.some((item) => item.id === topping.id)
              ? "selected"
              : ""
          }`}
          key={topping.id}
          onClick={() => onToppingClick(topping)}
        >
          <img
            src={topping.image}
            alt={topping.name}
            className="topping-image"
          />
          <h3>{topping.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default ToppingList;
