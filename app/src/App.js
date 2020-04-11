import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Login from "./pages/login/login-page";
import Inscription from "./pages/inscription/inscription-page";
import Scan from "./pages/scan/scan-page";
import Ajouter from "./pages/ajouter/ajouter-page";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const email = target.email;
    const password = target.password;
    this.setState({
      [email]: target.value,
      [password]: target.value,
    });
  };

  render() {
    return (
      <Router>
        <Login path="/" />
        <Inscription path="/inscription" />
        <Scan path="/scan" />
        <Ajouter path="/ajouter" />
      </Router>
    );
  }
}

export default App;
