import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home";
import Header from "./Header";
import Ver from "./ver";
import Nuevo from "./nuevo";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/usuarios/nuevo" component={Nuevo} />
            <Route exact path="/usuarios/:id" component={Ver} />
            <Route exact path="/usuarios/editar/:id" component={Nuevo} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
