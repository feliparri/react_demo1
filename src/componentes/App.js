import React, { Component } from "react";
import {
  Grid,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Inicio } from "./Inicio";
import { Saludo } from "./Saludo";
import { Pelicula } from "./Pelicula";
import { Menu } from "./Menu";
import { PaginaNoExiste } from "./PaginaNoExiste";
import Moment from "react-moment";

export class App extends Component {
  state = {
    nombre: this.props.nombre
  };

  alOprimirBoton = e => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    if (typeof nombre === "string" && nombre.length > 0) {
      this.setState({
        nombre: nombre
      });
      e.target.nombre.value = "";
    }
  };

  render() {
    const { nombre } = this.state;
    const { mensaje } = this.props;
    const dateToFormat = new Date();
    return (
      <Grid>
        <h1>Hola {nombre}!</h1>
        <h6>{mensaje}!</h6>
        <Moment interval={0} format="YYYY/MM/DD">
          {dateToFormat}
        </Moment>
        <form onSubmit={this.alOprimirBoton}>
          <FormGroup>
            <ControlLabel>NOMBRE:</ControlLabel>
            <FormControl type="text" id="nombre" placeholder="ingrese nombre" />
            <hr />
            <Button type="submit">Enviar</Button>
          </FormGroup>
        </form>
      </Grid>
    );
  }
}

App.defaultProps = {
  nombre: "Default",
  mensaje: "mensaje pasado por parametro por default"
};

export default App;
