import "./OrderLine.css";
import React from "react";

function OrderLine({ order, onClick }) {
  const orderDetails = `${order.name} - ${order.pizzaList.length} Pizzas`;
  return (
    <div className="order-line" onClick={onClick}>
      <h1>{orderDetails}</h1>
    </div>
  );
}

export default OrderLine;
