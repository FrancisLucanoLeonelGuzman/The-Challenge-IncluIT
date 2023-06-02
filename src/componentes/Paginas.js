import React from "react";
import { Switch, Route } from "react-router-dom";
import Inicio from "./../componentes/Inicio";
import { ProductosList } from "../componentes/Productos";
import { ProductosDetalles } from "../componentes/Productos/ProductosDetalles";

export default function Page() {
  return (
    <section>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/productos" exact component={ProductosList} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
      </Switch>
    </section>
  );
}
