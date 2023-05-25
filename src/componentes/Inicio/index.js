import { React } from "react";
/*import Portada from "../../imagenes/illustrations/hero-desktop.png"; <img src={Portada} alt="Inicio"/> (este codigo va abajo edicion)*/
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="Inicio">
      <Link to="/">
        <h1 className="">Inicio</h1>
      </Link>
      <Link to="/Productos">
        <h1 className="">Productos</h1>
      </Link>
    </div>
  );
};
