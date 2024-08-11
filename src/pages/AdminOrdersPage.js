import React, { useContext } from "react";
import LogoImage from "../assets/images/logo.png";
import "./AdminOrdersPage.css";
import { OrderContext } from "../OrderProvider";
import OrderLine from "../components/OrderLine/OrderLine";
import { useNavigate } from "react-router-dom";

function AdminOrdersPage() {
  const navigate = useNavigate();
  const { waitingOrders } = useContext(OrderContext);
  const waitingOrdersLabel = "List of waiting orders";

  const navigateToAdminOrder = (order) => {
    navigate("/avieworder", { state: { order } });
  };

  return (
    <div>
      <img src={LogoImage} alt="Logo" className="logo" />
      <div className="admin-page-title">
        <h2>{waitingOrdersLabel}</h2>
      </div>
      <div className="admin-order-list">
        {waitingOrders.map((order) => (
          <div
            className="admin-order-details"
            key={order.id}
            onClick={() => navigateToAdminOrder(order)}
          >
            <OrderLine key={order.id} order={order} />
          </div>
        ))}
      </div>
      <div className="gradient-circle"></div>
    </div>
  );
}

export default AdminOrdersPage;
