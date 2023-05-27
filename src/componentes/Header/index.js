import React, { useContext } from "react";
import { DataContext } from "../../context/Dataprovider";
import { Link } from "react-router-dom";
import AERO from "../../imagenes/icons/aerolab-logo-1.svg";

export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;

  const toogleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header>
      <div className="menu">
        <box-icon name="menu"></box-icon>
      </div>
      <Link to="/">
        <div className="logo">
          <img src={AERO} alt="Nike" width={250} />
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/productos">PRODUCTOS</Link>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>
    </header>
  );
};
