import React, { useContext } from "react";
import PizzaLine from "../components/PizzaLine/PizzaLine";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderContext } from "../OrderProvider";
import LogoImage from "../assets/images/logo.png";
import "./AdminOrderView.css";

function AdminOrderView() {
  const location = useLocation();
  const orderToEdit = location.state?.order;
  const acceptOrderLabel = "Accept Order";
  const { acceptOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  const handleAcceptOrder = () => {
    acceptOrder(orderToEdit);
    navigate("/aorder");
  }

  return (
    <div>
      <img src={LogoImage} alt="Logo" className="logo" />
      <div className="page-title">
        <h1>{orderToEdit.name}'s order :</h1>
      </div>
      <div className="list-container">
        {orderToEdit.pizzaList.map((pizza) => (
          <PizzaLine
            key={pizza.id}
            pizza={pizza}
            editEnabled={false}
          ></PizzaLine>
        ))}
      </div>
      <button
        className="accept-order-button"
        onClick={handleAcceptOrder}
      >
        {acceptOrderLabel}
      </button>
      <div className="gradient-circle"></div>
    </div>
  );
}

export default AdminOrderView;
