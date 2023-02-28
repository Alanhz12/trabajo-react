import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <a className="nav-link" href="#">
      <FaShoppingCart />
    </a>
  );
};

export default CartWidget;
