import React, { useState, useContext } from "react";

import AppContext from "@context/AppContext";
import MyOrder from "@containers/MyOrder";
import Menu from "@components/Menu";

import iconMenu from "@icons/icon_menu.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import logo from "@logos/logo_yard_sale.svg";

import "@styles/Header.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  /* Previamente usabamos toggleOrder solo para cerrar y abrir el panel de ordenes
  desde el carrito de compra, ahora lo podemos hacer tambien desde la flecha
  dentro del mismo menu */
  //const [toggleOrders, setToggleOrders] = useState(false);
  const { state, setToggleOrders } = useContext(AppContext);

  /* window.addEventListener("scroll", () => {
    setToggle(false);
    setToggleOrders(false);
  }); */

  const handleToggle = () => {
    // setToggleOrders(false);
    setToggle(!toggle);
    setToggleOrders(false);
  };

  const handleToggleOrders = () => {
    setToggle(false);
    // setToggleOrders(!toggleOrders);
    setToggleOrders(!state.toggleOrders);
  };

  return (
    <nav>
      <img src={iconMenu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart" onClick={handleToggleOrders}>
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {state.toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
