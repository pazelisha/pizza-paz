import React from "react";
import pizzaImage from "../../assets/images/pizza.png";
import tomatoe_slice from "../../assets/images/toppings/toppings_slices/tomato_slice.png";
import olive_slice from "../../assets/images/toppings/toppings_slices/olive_slice.png";
import mushroom_slice from "../../assets/images/toppings/toppings_slices/mushroom_slice.png";
import bellpepper_slice from "../../assets/images/toppings/toppings_slices/bellpepper_slice.png";
import redonion_slice from "../../assets/images/toppings/toppings_slices/redonion_slice.png";
import spinach_slice from "../../assets/images/toppings/toppings_slices/spinach_slice.png";
import corn_slice from "../../assets/images/toppings/toppings_slices/corn_slice.png";
import eggplant_slice from "../../assets/images/toppings/toppings_slices/eggplant_slice.png";
import garlic_slice from "../../assets/images/toppings/toppings_slices/garlic_slice.png";

import "./PizzaImage.css";

function PizzaImage({ toppings, selectedSize }) {
  const sizeDict = {
    Small: "300px",
    Medium: "400px",
    Large: "500px",
  };
  const imageSize = sizeDict[selectedSize];
  const imageSizeValue = parseInt(imageSize, 10);
  const toppingImages = {
    "Tomatoes": tomatoe_slice,
    "Olives": olive_slice,
    "Mushroom": mushroom_slice,
    "Bell Pepper": bellpepper_slice,
    "Red Onion": redonion_slice,
    "Spinach": spinach_slice,
    "Corn": corn_slice,
    "Eggplant": eggplant_slice,
    "Garlic": garlic_slice,
  };

  return (
    <div className="pizza-image-container">
      <div className="pizza-image">
        <img
          src={pizzaImage}
          alt="Pizza"
          className="pizza"
          style={{ width: imageSize, height: imageSize }}
        />
      </div>
      <div className="topping-overlay">
        {toppings.map((topping, index) => (
          <img
            key={index}
            src={toppingImages[topping.name]}
            alt={topping.name}
            className="topping"
            style={{
              width: imageSizeValue * 0.8,
              height: imageSizeValue * 0.8,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default PizzaImage;
