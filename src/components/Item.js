import React, { useState } from "react";

function Item({ name, category }) {
  const [ cart, setCart ] = useState(false);
  const cartLiClass = cart ? "in-cart" : "";
  const buttonClass = cart ? "remove" : "add";

  function handleClick () {
    const newCart = cart ? false : true;
    setCart(newCart)
  }

  return (
    <li className={cartLiClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={buttonClass}>{cart?"Remove From":"Add to"} Cart</button>
    </li>
  );
}

export default Item;
