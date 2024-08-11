import React, { useState, useContext } from "react";
import "./CreatePizzaPage.css";
import ToppingList from "../components/ToppingList/ToppingList";
import PizzaImage from "../components/PizzaImage/PizzaImage";
import PizzaSizeSelector from "../components/PizzaSizeSelector/PizzaSizeSelector";
import LogoImage from "../assets/images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderContext } from "../OrderProvider";

function CreatePizzaPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const pizzaToEdit = location.state.pizza;
  const { addPizzaToOrder, editPizzaInOrder, pizzaId } =
    useContext(OrderContext);
  const [selectedSize, setSelectedSize] = useState(
    pizzaToEdit?.selectedSize || "Large"
  );
  const [selectedToppings, setSelectedToppings] = useState(
    pizzaToEdit?.toppings || []
  );
  const sizeList = ["Small", "Medium", "Large"];
  const title = "CREATE YOUR PIZZA";
  const cancelLabel = "Cancel";
  const savePizzaLabel = "Save Pizza";

  const navigateBack = () => {
    navigate(-1);
  };

  const handleToppingClick = (topping) => {
    setSelectedToppings((prevToppings) =>
      prevToppings.some((item) => item.id === topping.id)
        ? prevToppings.filter((item) => item.id !== topping.id)
        : [...prevToppings, topping]
    );
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleSavePizza = () => {
    const newPizza = {
      id: pizzaToEdit ? pizzaToEdit.id : pizzaId,
      selectedSize,
      toppings: selectedToppings,
    };

    if (pizzaToEdit) {
      editPizzaInOrder(newPizza);
    } else {
      addPizzaToOrder(newPizza);
    }

    navigate(-1);
  };

  return (
    <div className="CreatePizzaPage">
      <img src={LogoImage} alt="Logo" className="logo" />
      <div className="header">
        <h1>{title}</h1>
      </div>
      <div className="text-container">
        <div className="size-container">
          <PizzaSizeSelector
            sizeList={sizeList}
            selectedSize={selectedSize}
            onSizeChange={handleSizeChange}
          />
        </div>
        <ToppingList
          onToppingClick={handleToppingClick}
          selectedToppings={selectedToppings}
        />
      </div>
      <div className="pizza-image">
        <PizzaImage toppings={selectedToppings} selectedSize={selectedSize} />
      </div>
      <div className="save-buttons">
        <button className="cancel-pizza-button" onClick={navigateBack}>
          {cancelLabel}
        </button>
        <button className="save-pizza-button" onClick={handleSavePizza}>
          {savePizzaLabel}
        </button>
      </div>
      <div className="gradient-circle"></div>
    </div>
  );
}

export default CreatePizzaPage;
