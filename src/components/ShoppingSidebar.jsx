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


  function purchaseButton() {
    alert("This is a demo website, items cannot be purchased")
  }

  return (
    <div className={`shopping-sidebar-container ${sidebarVisible ? "active" : ""}`}>
      <h1>Shopping Cart</h1>
      <div className="price-and-buy">
      <h5>Total price: £{totalPrice}</h5>
      <button onClick={purchaseButton} className="purchase-button">Purchase Items</button>
      </div>

      <div className="basket-entry">
            {basketArray.map((product, index) => (
                <BasketEntry key={index} index={index} product={product} removeFromBasket={removeFromBasket}/>
            ))}
        </div>

      
    </div>
  );
}