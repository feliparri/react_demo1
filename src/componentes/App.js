import React, { Component } from "react";
import { Grid } from "react-bootstrap";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Inicio } from "./Inicio";
import { Saludo } from "./Saludo";
import { Pelicula } from "./Pelicula";
import { Menu } from "./Menu";
import { PaginaNoExiste } from "./PaginaNoExiste";
import Moment from "react-moment";

export class App extends Component {
  render() {
    const { nombre } = this.props;
    const { mensaje } = this.props;
    const dateToFormat = new Date();
    return (
      <Grid>
        <h1>Hola {nombre}!</h1>
        <h6>{mensaje}!</h6>
        <Moment interval={0} format="YYYY/MM/DD">
          {dateToFormat}
        </Moment>
      </Grid>
    );
  }
}

App.defaultProps = {
  nombre: "Default",
  mensaje: "mensaje pasado por parametro por default"
};

export default App;
