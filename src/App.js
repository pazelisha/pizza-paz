import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderPage from "./pages/OrderPage";
import CreatePizzaPage from "./pages/CreatePizzaPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import AdminOrderView from "./pages/AdminOrderView";
import { OrderProvider } from "./OrderProvider";

function App() {
  return (
    <OrderProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<OrderPage />}></Route>
          <Route path="/corder" element={<OrderPage />}></Route>
          <Route path="/cpizza" element={<CreatePizzaPage />}></Route>
          <Route path="/aorder" element={<AdminOrdersPage />}></Route>
          <Route path="/avieworder" element={<AdminOrderView />}></Route>
        </Routes>
      </BrowserRouter>
    </OrderProvider>
  );
}

export default App;
