import React, { useContext } from "react";
import "./OrderPage.css";
import LogoImage from "../assets/images/logo.png";
import PizzaLine from "../components/PizzaLine/PizzaLine";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../OrderProvider";

function OrderPage() {
  const navigate = useNavigate();

  const { currentOrder, submitOrder, setName } = useContext(OrderContext);
  const titleLabel = "Create your order, ";
  const newPizzaLabel = "Create New Pizza";
  const sendOrderLabel = "Send Order";

  const navigateToPizzaCreate = (pizza = null) => {
    navigate("/cpizza", { state: { pizza } });
  };

  const handleSendOrder = () => {
    currentOrder.name === ""
      ? alert("Name cannot be empty")
      : currentOrder.pizzaList.length === 0
      ? alert("Order cannot be empty")
      : submitOrder();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <img src={LogoImage} alt="Logo" className="logo" />
      <div className="page-title">
        <h1>{titleLabel}</h1>
        <form>
          <input
            type="text"
            placeholder="Enter Name"
            value={currentOrder.name}
            onChange={handleNameChange}
          ></input>
        </form>
      </div>
      <div className="list-container">
        {currentOrder.pizzaList.map((pizza) => (
          <PizzaLine
            key={pizza.id}
            pizza={pizza}
            onEdit={() => navigateToPizzaCreate(pizza)}
            editEnabled={true}
          ></PizzaLine>
        ))}
        <div
          className="new-pizza-button"
          onClick={() => navigateToPizzaCreate()}
        >
          <div className="plus-circle">
            <h2>+</h2>
          </div>
          <div className="new-pizza-text">
            <h2>{newPizzaLabel}</h2>
          </div>
        </div>
        <button className="send-order-button" onClick={handleSendOrder}>
          {sendOrderLabel}
        </button>
        <div className="gradient-circle"></div>
      </div>
    </div>
  );
}

export default OrderPage;
