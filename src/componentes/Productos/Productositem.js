import { React } from "react";
import IMG from "../../imagenes/imgdat/compugamer.jpg";

export const Productositem = ({
  id,
  title,
  price,
  image,
  category,
  cantidad,
}) => {
  return (
    <>
        <div className="producto">
          <a href="#">
            <div className="producto_img">
              <img src={image} alt={title} />
            </div>
          </a>
          <div className="producto_footer">
            <h1>{title}</h1>
            <p>{category}</p>
            <p className="price">${price}</p>
          </div>
          <div className="buttom">
            <button type="" className="btn">
              Añadir al carrito
            </button>
            <div>
              <a href="" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>
    </>
  );
};
