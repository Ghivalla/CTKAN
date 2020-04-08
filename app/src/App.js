import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./Login.js";
import Inscriptions from "./Inscriptions";

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
      <section className="App">
        <Inscriptions />
      </section>
    );
  }
}

export default App;
