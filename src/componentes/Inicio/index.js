import React from "react";
import { Link } from "react-router-dom";
/*import IMG from "../../imagenes/fondo/Fondobanner.jpg";*/

export default function Inicio() {
  return (
    <div className="inicio">
      <Link to="/productos">
        <div className="bane">
          <h1>Productos</h1>
        </div>
      </Link>
    </div>
  );
}
