import React, { useContext } from "react";

import { DataContext } from "../../context/Dataprovider";
import { Productositem } from "./Productositem";

export const ProductosLista = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;

  console.log(productos);

  return (
    <>
      <h1 className="title">PRODUCTOS</h1>
      <div className="productos">
        {productos.map((producto) => (
          <Productositem
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            image={producto.image}
            category={producto.category}
            cantidad={producto.cantidad}
          />
        ))}
      </div>
    </>
  );
};
