import React, { createContext, useState, useEffect } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderId, setOrderId] = useState(() => {
    const orderId = localStorage.getItem("orderId");
    return orderId ? parseInt(orderId, 10) : 0;
  });

  const [currentOrder, setCurrentOrder] = useState(() => {
    const savedOrder = localStorage.getItem("currentOrder");
    return savedOrder
      ? JSON.parse(savedOrder)
      : { id: orderId, pizzaList: [], name: "" };
  });

  const [waitingOrders, setWaitingOrders] = useState(() => {
    const waitingOrders = localStorage.getItem("waitingOrders");
    return waitingOrders ? JSON.parse(waitingOrders) : [];
  });

  const [pizzaId, setPizzaId] = useState(() => {
    const savedId = localStorage.getItem("pizzaId");
    return savedId ? parseInt(savedId, 10) : 0;
  });

  const setName = (name) => {
    setCurrentOrder((prevOrder) => ({
      ...prevOrder,
      name,
    }));
  };

  useEffect(() => {
    localStorage.setItem("orderId", orderId);
  }, [orderId]);

  useEffect(() => {
    localStorage.setItem("currentOrder", JSON.stringify(currentOrder));
  }, [currentOrder]);

  useEffect(() => {
    localStorage.setItem("pizzaId", pizzaId);
  }, [pizzaId]);

  useEffect(() => {
    localStorage.setItem("waitingOrders", JSON.stringify(waitingOrders));
  }, [waitingOrders]);

  const submitOrder = () => {
    setWaitingOrders((prevWaitingOrders) => [
      ...prevWaitingOrders,
      currentOrder,
    ]);
    setOrderId((prevId) => {
      const newId = prevId + 1;
      setCurrentOrder({ id: newId, pizzaList: [], name: "" });
      return newId;
    });
  };

  const acceptOrder = (orderToRemove) => {
    setWaitingOrders((prevWaitingOrders) =>
      prevWaitingOrders.filter((order) => order.id !== orderToRemove.id)
    );
  };

  const addPizzaToOrder = (newPizza) => {
    setCurrentOrder((prevOrder) => ({
      ...prevOrder,
      pizzaList: [...prevOrder.pizzaList, newPizza],
    }));
    setPizzaId((prevId) => prevId + 1);
  };

  const editPizzaInOrder = (updatedPizza) => {
    setCurrentOrder((prevOrder) => ({
      ...prevOrder,
      pizzaList: prevOrder.pizzaList.map((pizza) =>
        pizza.id === updatedPizza.id ? updatedPizza : pizza
      ),
    }));
  };

  return (
    <OrderContext.Provider
      value={{
        pizzaId,
        setPizzaId,
        currentOrder,
        addPizzaToOrder,
        editPizzaInOrder,
        submitOrder,
        setName,
        waitingOrders,
        acceptOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
