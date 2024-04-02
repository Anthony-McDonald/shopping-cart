import React, { useEffect, useState } from "react";
import "../css/ShoppingSidebar.css";
import BasketEntry from "./BasketEntry";

export default function ShoppingSidebar({ sidebarVisible, basketArray, removeFromBasket}) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let totalPrice = 0;
    basketArray.forEach(product => {
      totalPrice += product.price;
    });
    setTotalPrice(totalPrice);
  }, [basketArray])

  return (
    <div className={`shopping-sidebar-container ${sidebarVisible ? "active" : ""}`}>
      <h1>Shopping Cart</h1>
      <h5>Total price: £{totalPrice}</h5>
      <div className="basket-entry">
            {basketArray.map((product, index) => (
                <BasketEntry key={index} index={index} product={product} removeFromBasket={removeFromBasket}/>
            ))}
        </div>

      
    </div>
  );
}